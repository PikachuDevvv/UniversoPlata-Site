const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin: process.env.ALLOWED_ORIGIN || '*'}));
app.use(express.json({limit:'5mb'}));

const PORT = process.env.PORT || 10000;
const ADMIN_CODE = process.env.ADMIN_CODE;
const GH_TOKEN = process.env.GITHUB_TOKEN;
const GH_OWNER = process.env.GITHUB_OWNER;
const GH_REPO = process.env.GITHUB_REPO;
const GH_BRANCH = process.env.GITHUB_BRANCH || 'main';
const DATA_PATH = process.env.GITHUB_DATA_PATH || 'plata-data/notices.json';
const GH_API = 'https://api.github.com';

function requireAdmin(req,res,next){
  const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');
  if(!ADMIN_CODE || token !== ADMIN_CODE) return res.status(401).json({error:'Não autorizado.'});
  next();
}
async function github(path, options={}){
  if(!GH_TOKEN || !GH_OWNER || !GH_REPO) throw new Error('Configure GITHUB_TOKEN, GITHUB_OWNER e GITHUB_REPO no Render.');
  const response=await fetch(`${GH_API}${path}`,{...options,headers:{
    'Authorization':`Bearer ${GH_TOKEN}`,'Accept':'application/vnd.github+json',
    'X-GitHub-Api-Version':'2022-11-28','Content-Type':'application/json',...(options.headers||{})
  }});
  const data=await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.message||`GitHub API ${response.status}`);
  return data;
}
async function readData(){
  try{
    const file=await github(`/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}?ref=${GH_BRANCH}`);
    const decoded=Buffer.from(file.content.replace(/\n/g,''),'base64').toString('utf8');
    return {notices:JSON.parse(decoded).notices||[],sha:file.sha};
  }catch(e){
    if(String(e.message).includes('Not Found')) return {notices:[],sha:null};
    throw e;
  }
}
async function writeData(notices,sha){
  const content=Buffer.from(JSON.stringify({notices},null,2),'utf8').toString('base64');
  return github(`/repos/${GH_OWNER}/${GH_REPO}/contents/${DATA_PATH}`,{method:'PUT',body:JSON.stringify({
    message:'Atualiza comunicados do Universo Plata',content,branch:GH_BRANCH,...(sha?{sha}:{})
  })});
}
app.get('/health',(req,res)=>res.json({ok:true,service:'Universo Plata announcements API'}));
app.post('/api/admin/login',(req,res)=>{
  if(!ADMIN_CODE || String(req.body.code||'')!==ADMIN_CODE) return res.status(401).json({error:'Código incorreto.'});
  res.json({token:ADMIN_CODE});
});
app.get('/api/notices',async(req,res)=>{
  try{const {notices}=await readData(); const now=Date.now();
    res.json({notices:notices.filter(n=>!n.cancelled && new Date(n.publishAt).getTime()<=now).sort((a,b)=>a.publishAt.localeCompare(b.publishAt))});
  }catch(e){res.status(500).json({error:e.message});}
});
app.get('/api/admin/notices',requireAdmin,async(req,res)=>{
  try{const {notices}=await readData();res.json({notices:notices.filter(n=>!n.cancelled).sort((a,b)=>b.createdAt.localeCompare(a.createdAt))});}
  catch(e){res.status(500).json({error:e.message});}
});
app.post('/api/admin/notices',requireAdmin,async(req,res)=>{
  try{
    const {title,message,banner='',publishAt}=req.body||{};
    if(!title||!message||!publishAt||!Number.isFinite(new Date(publishAt).getTime())) return res.status(400).json({error:'Preencha título, mensagem e data válida.'});
    if(String(banner).length>4*1024*1024) return res.status(413).json({error:'Banner muito grande. Limite de 3 MB.'});
    if(banner && !/^data:image\/(png|jpeg|webp);base64,/.test(banner)) return res.status(400).json({error:'Formato de banner inválido.'});
    const data=await readData();
    const notice={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,title:String(title).slice(0,90),message:String(message).slice(0,1800),banner,publishAt:new Date(publishAt).toISOString(),createdAt:new Date().toISOString(),cancelled:false};
    data.notices.push(notice);await writeData(data.notices,data.sha);res.json({ok:true,notice});
  }catch(e){res.status(500).json({error:e.message});}
});
app.delete('/api/admin/notices/:id',requireAdmin,async(req,res)=>{
  try{const data=await readData();const n=data.notices.find(x=>x.id===req.params.id);
    if(!n)return res.status(404).json({error:'Comunicado não encontrado.'});
    n.cancelled=true;await writeData(data.notices,data.sha);res.json({ok:true});
  }catch(e){res.status(500).json({error:e.message});}
});
app.listen(PORT,()=>console.log(`Plata API rodando na porta ${PORT}`));
