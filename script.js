const content = document.getElementById('content');
const navLinks = [...document.querySelectorAll('.nav-link')];
const searchInput = document.getElementById('search');
const sidebar = document.getElementById('sidebar');

const pages = {
inicio: () => `
  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Arquivo de exploração · Edição expandida</div>
      <h1>Bem-vindo<br>ao Universo Plata.</h1>
      <p>Um universo de realidades, anomalias, ciência e mistérios. Explore Hectayumu, conheça Plata, descubra a PDAC e investigue os acontecimentos que conectam tudo.</p>
      <a class="primary-btn" href="#resumo">▤ Conhecer o universo</a>
    </div>
    <div class="hero-art"><img src="assets/plata.png" alt="Ilustração do personagem Plata"></div>
  </section>
  <div class="section-head"><div><h2>Explore os arquivos</h2><p>Todos os registros reunidos em um só lugar.</p></div></div>
  <section class="cards">
    ${card('▤','Resumo do universo','Entenda o que é Hectayumu e como suas realidades se conectam.','#resumo')}
    ${card('♙','Personagens','Conheça Plata e PDAC-209_ACTIVE.','#personagens')}
    ${card('⬡','PDAC','A organização que protege e controla anomalias.','#organizacoes')}
    ${card('◈','Anomalias','Categorias, riscos e fenômenos que ameaçam realidades.','#anomalias')}
    ${card('⚡','Acontecimentos','Experimentos, transformações e incidentes importantes.','#acontecimentos')}
    ${card('✦','Mistérios','O criador, o servidor e as linhas do tempo apagadas.','#misterios')}
  </section>
  <div class="info-strip"><span>✧</span><div><strong>Sobre os registros</strong><br>As páginas desta edição foram montadas a partir do material de lore fornecido pelo criador. Teorias e informações não comprovadas dentro da história estão identificadas como tais.</div></div>`,
resumo: () => `
  ${heading('Visão geral','O que é Hectayumu?','A estrutura central por trás do Universo Plata.')}
  <div class="article">
    <p><b>Hectayumu</b> é o nome de todo um universo ficcional que, na verdade, funciona como um servidor digital de 64 bits. Ele não é apenas um mundo hospedado em um servidor: o próprio universo inteiro é o servidor, contendo diversos outros universos, mundos, realidades e linhas do tempo.</p>
    <p>Dentro desse sistema existem realidades como Berry Landy, Mundo Torajo, O Incrível Mundo de Gumball, universos pertencentes a outras empresas e até mesmo o nosso próprio universo.</p>
    <h2>A hipótese do servidor</h2>
    <p>Alguns cientistas da PDAC chegaram à teoria de que toda a realidade seria um servidor digital executado em um computador de 64 bits. A teoria aparentemente está correta, mas nunca foi comprovada oficialmente pelos habitantes de Hectayumu.</p>
    <h2>O criador</h2>
    <p>Apenas o criador, que existe fora da ficção, conhece toda a verdade sobre a natureza do universo. Vestígios dessa presença aparecem em arquivos e mensagens encontrados dentro da história.</p>
    <h2>Uma ameaça ao sistema inteiro</h2>
    <p>Existe a possibilidade teórica de um código capaz de destruir todo o servidor. Ele teria <b>18.446.744.073.709.551.615 caracteres</b>, o valor máximo de um inteiro sem sinal de 64 bits. Sua existência é uma ameaça extrema à estrutura de Hectayumu.</p>
    <div class="notice"><b>Importante:</b> a natureza de servidor digital é conhecida pelo criador fora da ficção. Para os habitantes, ela continua sendo uma teoria não comprovada oficialmente.</div>
  </div>`,
personagens: () => `
  ${heading('Habitantes e entidades','Personagens','Seres importantes para a história de Hectayumu.')}
  <div class="cards">
    ${card('♙','Plata','Protagonista de 12 anos. Antes de seu corpo humanoide, existia como o organismo líquido Hectayumose.','#plata')}
    ${card('◈','PDAC-209_ACTIVE','Entidade que criou os universos existentes na história e foi sacrificada há muito tempo.','#pdac209')}
  </div>`,
plata: () => `
  ${heading('Personagem · Protagonista','Plata','O garoto no centro dos acontecimentos de Hectayumu.')}
  <div class="detail-layout">
    <article class="article">
      <h2>Origem</h2>
      <p>Plata tem <b>12 anos</b>. Antes de possuir um corpo humanoide, era conhecido como <b>Hectayumose</b>: um organismo líquido vivo, de coloração aproximada <code>#380400</code>, que já possuía consciência e personalidade semelhantes às humanas desde o nascimento.</p>
      <p>Mesmo sem corpo humano, Hectayumose conseguia se contorcer e adaptar sua forma para realizar atividades, como jogar videogame. Quando alguém o tocava, podia transportar essa pessoa para um lugar em que estivesse pensando. Seu corpo funcionava como um portal.</p>
      <h2>Transformação</h2>
      <p>Antes do experimento AC-FG009, os cientistas estimavam que Hectayumose tivesse aproximadamente entre 12 e 14 anos. Por meio do murânio, recebeu um corpo físico humanoide, e a substância transferiu energia para as células sanguíneas desse novo corpo. Depois do experimento, sua aparência correspondia à de alguém com aproximadamente 12 anos.</p>
      <h2>Aparência e gostos</h2>
      <ul><li>Cabelo naturalmente vermelho.</li><li>Camiseta preta com uma caveira.</li><li>Gosta de rock, mas nega ser emo.</li><li>Sua cor favorita é <code>#CF5A4F</code> e ele se irrita quando alteram qualquer dígito desse código.</li></ul>
      <h2>Habilidade com cores</h2>
      <p>Plata reconhece códigos hexadecimais de cores apenas olhando para elas, com aproximadamente <b>99,87% de precisão</b>. Porém, sua visão não é das melhores e ele usa óculos para ajudá-lo. A precisão depende da qualidade da própria visão.</p>
      <h2>Guitarra</h2>
      <p>Sua guitarra era velha e quebrada, encontrada no laboratório. Ao pensar nela, o murânio concedeu a Plata um poder relacionado ao instrumento. No início, a habilidade durava apenas meio segundo e era fraca demais para uso eficaz. A guitarra recebe energia externa fornecida pelo laboratório e permite habilidades como criar portais e escudos.</p>
      <p>Esses poderes parecem relacionados à antiga capacidade de Hectayumose de funcionar como um portal.</p>
      <h2>Incidente elétrico</h2>
      <p>Durante uma partida de videogame, um raio atingiu uma região próxima à casa onde Plata estava. A descarga afetou o videogame e transferiu energia para ele. O murânio não conseguiu conter toda a energia, que foi descarregada no roteador Wi-Fi, queimando-o e danificando aparelhos conectados. A reação afetou o circuito elétrico e causou uma interrupção de energia na cidade e em cidades próximas por duas horas.</p>
      <p>A família não soube o que realmente aconteceu. Os cientistas identificaram Plata como responsável e o localizaram. Por causa das regras de proteção da PDAC, passaram a monitorá-lo em vez de simplesmente capturá-lo.</p>
    </article>
    <aside class="infobox"><img src="assets/plata.png" alt="Plata"><h3>Plata</h3><small>Protagonista</small><div class="fact"><b>Idade</b><span>12 anos</span></div><div class="fact"><b>Forma anterior</b><span>Hectayumose</span></div><div class="fact"><b>Cor favorita</b><span>#CF5A4F</span></div><div class="fact"><b>Experimento</b><span>AC-FG009</span></div></aside>
  </div>`,
pdac209: () => `
  ${heading('Entidade · Categoria 209','PDAC-209_ACTIVE','A entidade associada à criação dos universos.')}
  <div class="article">
    <p>PDAC-209_ACTIVE foi responsável pela criação de todos os universos existentes dentro da história de Hectayumu, incluindo Berry Landy, Mundo Torajo, O Incrível Mundo de Gumball, universos de outras empresas e até mesmo o nosso próprio universo.</p>
    <p>Essa entidade possuía a capacidade de criar e apagar todos esses universos.</p>
    <h2>Consciência e murânio</h2>
    <p>Originalmente, PDAC-209_ACTIVE não possuía consciência própria. Foi o murânio que lhe concedeu consciência do zero. Quando compreendeu o que havia feito e percebeu as consequências de suas ações, a entidade não desejava ter causado sofrimento.</p>
    <h2>O sacrifício</h2>
    <p>Por isso, aceitou a própria morte e seu sacrifício em benefício de todos os outros seres. PDAC-209_ACTIVE foi sacrificada há muito, muito tempo.</p>
    <div class="notice">A entidade está ligada à categoria 209, considerada a pior categoria de anomalias conhecida.</div>
  </div>`,
organizacoes: () => `
  ${heading('Organizações','PDAC','Protetora e Defensora da Anomalia Controlada.')}
  <div class="article">
    <h2>Objetivo</h2><p>A PDAC foi criada para monitorar, proteger e controlar anomalias, mantendo a segurança delas, da sociedade e do universo. Apesar de lidar com criaturas e fenômenos perigosos, não é uma organização maligna: suas ações são motivadas pela intenção de proteger a realidade.</p>
    <h2>Regras</h2><p>A organização possui <b>18.446.744.073.709.551.615 linhas de regras</b>. Uma delas, a linha <b>4598</b>, determina que cientistas e laboratórios locais não podem sequestrar ou tomar para si uma anomalia que possua corpo próprio e consciência humana.</p>
    <p>Anomalias sem corpo ou sem consciência própria também recebem proteção, embora de maneira diferente, pois algumas podem representar riscos maiores e não conseguem compreender ou controlar suas ações.</p>
    <h2>Como lida com ameaças extremas</h2><p>Existem anomalias sem consciência, sentimentos ou limites próprios de movimento que podem destruir universos e até multiversos inteiros. Elas podem receber classificação de risco ao universo ou ao multiverso. Segundo as regras, uma anomalia desse tipo deve ser sacrificada imediatamente quando identificada. Porém, não existe um método universal de eliminação, pois cada anomalia é diferente.</p>
  </div>`,
anomalias: () => `
  ${heading('Fenômenos e classificações','Anomalias','Entidades e fenômenos monitorados pela PDAC.')}
  <div class="article">
    <h2>Proteção e controle</h2><p>Anomalias são monitoradas pela PDAC. A organização procura proteger tanto as próprias anomalias quanto a sociedade e a estrutura do universo.</p>
    <h2>Risco ao universo e ao multiverso</h2><p>Algumas anomalias não possuem consciência, sentimentos ou limites próprios de movimento. Mesmo assim, podem destruir universos, multiversos inteiros e realidades conectadas. A PDAC pode classificá-las como riscos ao universo ou ao multiverso.</p>
    <h2>Categoria 209</h2><p>A categoria 209 é considerada a pior categoria conhecida. Uma anomalia dessa categoria pode apagar quase toda a existência de uma linha do tempo de uma só vez: desde a origem do universo até os acontecimentos atuais. Apenas <b>0,46%</b> da linha do tempo permanece; os outros <b>99,54%</b> desaparecem.</p>
    <p>Vestígios encontrados pela PDAC sugerem que o fenômeno já aconteceu mais de <b>10.000 vezes</b>. Isso levanta a possibilidade de que a realidade tenha sido apagada e recriada repetidamente.</p>
    <h2>Registro associado</h2><p><a href="#pdac209">PDAC-209_ACTIVE → consultar ficha da entidade</a></p>
  </div>`,
locais: () => `
  ${heading('Espaços e realidades','Locais e realidades','Mundos que existem dentro do sistema de Hectayumu.')}
  <div class="article">
    <p>Hectayumu contém diversos universos, mundos, realidades e linhas do tempo. O material de referência cita algumas realidades que fazem parte desse sistema:</p>
    <ul><li><b>Berry Landy</b></li><li><b>Mundo Torajo</b></li><li><b>O Incrível Mundo de Gumball</b></li><li>Universos pertencentes a outras empresas.</li><li>O nosso próprio universo.</li></ul>
    <p>Esses universos fazem parte do mesmo sistema gigantesco, mas suas características individuais ainda não estão detalhadas neste arquivo.</p>
    <div class="notice">Não foram fornecidos nomes de cidades, laboratórios específicos ou endereços. Esta página registra apenas as realidades citadas na lore.</div>
  </div>`,
substancias: () => `
  ${heading('Materiais e organismos','Substâncias','Elementos com propriedades incomuns.')}
  <div class="cards">
    <article class="card"><div class="symbol">◉</div><h3>Murânio</h3><p>Substância poderosa capaz de produzir objetos físicos, conceder poderes e criar consciência em coisas que originalmente não a possuíam.</p><a href="#murânio">Ver detalhes →</a></article>
    <article class="card"><div class="symbol">●</div><h3>Hectayumose</h3><p>Organismo líquido vivo, consciente desde o nascimento e forma anterior de Plata.</p><a href="#hectayumose">Ver detalhes →</a></article>
  </div>`,
murânio: () => `${heading('Substância','Murânio','Uma substância de propriedades extraordinárias.')}<div class="article"><p>O murânio é extremamente poderoso dentro de Hectayumu. Segundo os relatos públicos existentes na história, ele pode produzir objetos físicos, conceder poderes e criar consciência em coisas que originalmente não a possuíam.</p><p>Foi o murânio que concedeu consciência a PDAC-209_ACTIVE e também teve papel fundamental na transformação de Plata.</p><p>Ele ainda está ligado aos poderes da guitarra de Plata e ao incidente elétrico, quando não conseguiu conter toda a energia acumulada pelo garoto.</p></div>`,
hectayumose: () => `${heading('Organismo','Hectayumose','A forma líquida que existia antes de Plata.')}<div class="article"><p>Hectayumose era um organismo líquido vivo, de cor aproximada <code>#380400</code>, que possuía consciência e personalidade semelhantes às humanas desde o nascimento.</p><p>Não tinha corpo humanoide, mas podia se contorcer e adaptar sua forma para realizar atividades, como jogar videogame. Ao ser tocado, conseguia transportar alguém para um lugar em que estivesse pensando, funcionando como um portal.</p><p>Antes do experimento AC-FG009, os cientistas estimavam sua idade entre 12 e 14 anos. Após receber um corpo humanoide por meio do murânio, passou a ser conhecido como Plata.</p></div>`,
tecnologia: () => `
  ${heading('Sistemas e arquivos','Tecnologia','Os registros digitais e a estrutura computacional do universo.')}
  <div class="article">
    <h2>O servidor de 64 bits</h2><p>Hectayumu é descrito como um servidor digital de 64 bits que contém os universos e realidades da história. A hipótese é aparentemente correta, mas não foi comprovada oficialmente pelos cientistas que vivem nele.</p>
    <h2>Arquivos .pdacEntity</h2><p>Arquivos <code>.pdacEntity</code> são um formato usado dentro da história. Na prática, um arquivo com essa extensão pode ser apenas um ZIP renomeado e conter outros ZIPs, documentos de texto e diferentes tipos de conteúdo. Algumas extensões internas podem não corresponder ao formato real do conteúdo.</p>
    <p>Na ficção, esses pacotes podem conter representações digitais de pessoas, com informações sobre personalidade, memórias e comportamento. São inteligências artificiais, não cérebros reais nem seres vivos biológicos. Essas entidades digitais podem se tornar reais dentro do servidor de Hectayumu.</p>
    <h2>Arquivos encontrados</h2>
    <ul><li><b>EntitiesData.pdacEntity:</b> contém um arquivo compactado interno com outros conteúdos.</li><li><b>Desculpa.txt:</b> contém a mensagem “Se Você Descobriu... me Desculpe, eu Criei Este Universo Sem Querer..”.</li><li><b>World3D.obj:</b> arquivo de apenas 24 bytes contendo a mensagem “Bro Tu Nao E Inteligente”.</li></ul>
    <h2>Proteção das entidades digitais</h2><p>Existe um mecanismo de contenção relacionado à descoberta da própria natureza das entidades. Se uma entidade descobre que não é real da forma como imaginava, um sinal pode ser enviado ao seu cérebro digital com uma mensagem perturbadora. Na história, a PDAC acredita que isso evita sofrimento ou ameaças à estabilidade do universo.</p>
    <p>O mecanismo levanta questões sobre consciência, identidade, liberdade e o direito de seres artificiais compreenderem a própria existência.</p>
  </div>`,
acontecimentos: () => `
  ${heading('Registros históricos','Acontecimentos','Eventos importantes descritos nos arquivos do universo.')}
  <div class="timeline">
    ${event('Há muito tempo','Sacrifício de PDAC-209_ACTIVE','A entidade que criou os universos compreendeu as consequências de suas ações, aceitou a própria morte e foi sacrificada em benefício dos outros seres.')}
    ${event('Antes da forma humana','Existência de Hectayumose','O organismo líquido já possuía consciência e podia transportar pessoas para lugares em que estivesse pensando.')}
    ${event('Experimento AC-FG009','Transformação de Plata','Por meio do murânio, Hectayumose recebeu um corpo humanoide e passou a ser Plata.')}
    ${event('Em determinado momento','Poder da guitarra','Uma guitarra velha e quebrada do laboratório recebeu uma habilidade ligada a Plata, inicialmente muito fraca e curta.')}
    ${event('Em determinado momento','Incidente elétrico','Um raio próximo transferiu energia para Plata. A descarga queimou o roteador e causou um apagão de duas horas na cidade e em cidades próximas.')}
    ${event('Após o incidente','Monitoramento da PDAC','Os cientistas localizaram Plata, mas as regras de proteção fizeram com que ele fosse monitorado em vez de simplesmente capturado.')}
  </div>`,
cronologia: () => `
  ${heading('Ordem dos registros','Cronologia','Sequência aproximada dos acontecimentos conhecidos.')}
  <div class="article"><p>As fontes não fornecem datas exatas. A ordem abaixo usa apenas relações temporais descritas no material, sem inventar anos ou datas.</p></div>
  <div class="timeline">
    ${event('1 · Passado remoto','PDAC-209_ACTIVE cria os universos','A entidade é responsável pela criação dos universos existentes na história.')}
    ${event('2 · Passado remoto','Murânio concede consciência','PDAC-209_ACTIVE recebe consciência e compreende as consequências de suas ações.')}
    ${event('3 · Passado remoto','Sacrifício da entidade','PDAC-209_ACTIVE aceita a própria morte em benefício dos demais seres.')}
    ${event('4 · Antes de Plata','Hectayumose existe como organismo líquido','Já possui consciência, personalidade e a habilidade de transportar pessoas.')}
    ${event('5 · Experimento AC-FG009','Hectayumose recebe corpo humanoide','O murânio participa da transformação que dá origem a Plata.')}
    ${event('6 · Depois da transformação','Guitarra e poderes','A guitarra do laboratório passa a manifestar habilidades, como portais e escudos.')}
    ${event('7 · Depois da transformação','Incidente elétrico','Plata absorve energia de um raio e provoca o apagão de duas horas.')}
    ${event('8 · Depois do incidente','PDAC localiza Plata','A organização decide monitorá-lo de acordo com suas regras de proteção.')}
  </div>`,
misterios: () => `
  ${heading('Perguntas sem resposta','Mistérios de Hectayumu','Questões que continuam abertas dentro da história.')}
  <div class="cards">
    ${card('❖','Quem criou Hectayumu?','O criador existe fora da ficção e conhece toda a verdade, mas sua identidade não é conhecida pelos habitantes.','')}
    ${card('⌘','A realidade é um servidor?','Cientistas da PDAC suspeitam que o universo seja um servidor de 64 bits, mas não comprovaram oficialmente a teoria.','')}
    ${card('◷','Quantas vezes a realidade foi apagada?','Vestígios apontam mais de 10.000 ocorrências associadas à categoria 209.','')}
    ${card('▣','O código destruidor existe?','Há uma possibilidade teórica de um código com 18.446.744.073.709.551.615 caracteres capaz de destruir o servidor.','')}
    ${card('▤','Quem deixou a mensagem?','A mensagem em Desculpa.txt é atribuída ao criador, mas os habitantes não sabem se seu autor é homem ou mulher.','')}
    ${card('♡','As entidades digitais são livres?','O sistema de proteção da PDAC levanta questões sobre identidade, consciência e liberdade.','')}
  </div>`,
atualizacoes: () => `
  ${heading('Registro de versões','Atualizações da enciclopédia','O que foi acrescentado nesta edição do site.')}
  <div class="timeline">
    ${event('Versão 2.0 · 01/11/2026','Grande expansão da enciclopédia','Adicionadas páginas sobre Hectayumu, PDAC, anomalias, murânio, hectayumose, tecnologia, arquivos .pdacEntity, acontecimentos, cronologia e mistérios.')}
    ${event('Versão 1.0 · Edição inicial','Fundação da enciclopédia','Criada a estrutura do site, navegação, identidade visual e perfil inicial de Plata.')}
  </div>
  <div class="notice">As datas identificam as edições do site, não datas de acontecimentos dentro da história.</div>`,

  biblioteca: () => `
    <div class="page-heading"><div class="eyebrow">Recursos · Downloads</div><h1>Biblioteca de assets</h1><p>Arquivos disponibilizados para a comunidade usar em criações relacionadas ao Universo Plata.</p></div>
    <div class="library-intro"><span class="library-intro-icon">↓</span><div><strong>Assets liberados para download</strong><p>Escolha um arquivo para baixar. Os arquivos são servidos diretamente pelo site, sem links externos.</p></div></div>
    <section class="library-grid">
      <article class="library-card"><div class="library-preview library-preview-bg"><img src="assets/library/fundo-universoplata-novo.png" alt="Prévia do fundo do Universo Plata"></div><div class="library-card-body"><span class="library-type">IMAGEM · PNG</span><h2>Fundo do Universo Plata</h2><p>Imagem de fundo utilizada como cenário visual do site.</p><a class="library-download" href="assets/library/fundo-universoplata-novo.png" download="fundo-universoplata-novo.png">↓ Baixar PNG</a></div></article>
      <article class="library-card"><div class="library-preview library-preview-logo"><img src="assets/library/logo-universo-plata.png" alt="Logo do Universo Plata"></div><div class="library-card-body"><span class="library-type">IMAGEM · PNG</span><h2>Logo Universo Plata</h2><p>Logo colorida do projeto enviada pelo criador.</p><a class="library-download" href="assets/library/logo-universo-plata.png" download="logo-universo-plata.png">↓ Baixar PNG</a></div></article>
      <article class="library-card"><div class="library-preview library-preview-overlay"><img src="assets/library/overlay-universo-plata.png" alt="Prévia da overlay"></div><div class="library-card-body"><span class="library-type">IMAGEM · PNG</span><h2>Overlay do site</h2><p>Camada gráfica transparente utilizada na identidade visual da página.</p><a class="library-download" href="assets/library/overlay-universo-plata.png" download="overlay-universo-plata.png">↓ Baixar PNG</a></div></article>
      <article class="library-card"><div class="library-preview library-preview-plata"><img src="assets/library/plata.png" alt="Ilustração de Plata"></div><div class="library-card-body"><span class="library-type">IMAGEM · PNG</span><h2>Plata — personagem</h2><p>Ilustração do personagem Plata em corpo inteiro.</p><a class="library-download" href="assets/library/plata.png" download="plata.png">↓ Baixar PNG</a></div></article>
    </section>
    <p class="library-note">Respeite os créditos do Universo Plata e não apresente os arquivos como se fossem de sua autoria. Consulte as informações de uso publicadas pelo criador antes de utilizar os assets fora de projetos de fãs.</p>
  `,
};

function heading(kicker,title,desc){return `<div class="page-heading"><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${desc}</p></div>`}
function card(icon,title,desc,href){return `<article class="card"><div class="symbol">${icon}</div><h3>${title}</h3><p>${desc}</p>${href?`<a href="${href}">Abrir registro →</a>`:''}</article>`}
function event(date,title,desc){return `<article class="timeline-item"><div class="timeline-date">${date}</div><div class="timeline-card"><h3>${title}</h3><p>${desc}</p></div></article>`}
function render(){
  const key=(location.hash||'#inicio').slice(1);
  content.innerHTML=(pages[key]||pages.inicio)();
  navLinks.forEach(a=>a.classList.toggle('active',a.dataset.page===key || (['plata','pdac209','murânio','hectayumose'].includes(key)&&a.dataset.page==='personagens')));
  sidebar.classList.remove('open');
  content.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'smooth'});
}
window.addEventListener('hashchange',render);
document.getElementById('menuToggle').addEventListener('click',()=>sidebar.classList.toggle('open'));
searchInput.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  const q=searchInput.value.trim().toLowerCase();
  const terms=[
    ['plata','plata'],['hectayumose','hectayumose'],['murânio','murânio'],['murânio','murânio'],
    ['pdac-209','pdac209'],['209_active','pdac209'],['pdac','organizacoes'],['anomalia','anomalias'],
    ['local','locais'],['realidade','locais'],['objeto','tecnologia'],['arquivo','tecnologia'],
    ['tecnologia','tecnologia'],['guitarra','plata'],['ac-fg009','plata'],['elétrico','acontecimentos'],
    ['raio','acontecimentos'],['cronologia','cronologia'],['mistério','misterios'],['criador','misterios'],
    ['história','acontecimentos'],['atualização','atualizacoes'],['resumo','resumo'],['servidor','resumo']
  ];
  const hit=terms.find(([word])=>q.includes(word));
  if(hit) location.hash=hit[1];
  else content.innerHTML=`<div class="page-heading"><div class="eyebrow">Pesquisa</div><h1>Busca: ${escapeHtml(searchInput.value)}</h1><p>Nenhum registro encontrado com esse termo.</p></div><div class="empty-state">Tente termos como Plata, PDAC, murânio, hectayumose, categoria 209, guitarra ou servidor.</div>`;
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
render();


/* PLAYER MUSICAL — UNIVERSO PLATA
   Player persistente entre páginas/hash routes; inicia somente após interação do usuário. */
(() => {
  const tracks = [
    { title: 'Down with the King', file: '01-down-with-the-king.mp3' },
    { title: 'Everything Everything', file: '02-everything-everything.mp3' },
    { title: 'Slingshot', file: '03-slingshot.mp3' },
    { title: 'Pox', file: '04-pox.mp3' },
    { title: 'Aloe Lite', file: '05-aloe-lite.mp3' },
    { title: 'Drifting', file: '06-drifting.mp3' }
  ];
  const storageKey = 'universoPlataMusicPlayerV1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch (_) {}
  let current = Number.isInteger(saved.track) && saved.track >= 0 && saved.track < tracks.length ? saved.track : 0;
  let shuffle = !!saved.shuffle;
  let repeat = !!saved.repeat;
  let playlistOpen = false;
  let isSeeking = false;

  const player = document.createElement('section');
  player.className = 'music-player';
  player.setAttribute('aria-label', 'Player de músicas do Universo Plata');
  player.innerHTML = `
    <audio id="plataAudio" preload="metadata"></audio>
    <div class="music-main">
      <button class="music-play" id="musicPlay" type="button" aria-label="Reproduzir">▶</button>
      <div class="music-track-info"><span class="music-kicker">TRILHA SONORA</span><strong id="musicTitle">Down with the King</strong><span id="musicStatus">Pronto para tocar</span></div>
      <button class="music-icon-btn" id="musicPlaylistToggle" type="button" aria-label="Mostrar playlist" title="Playlist">☷</button>
      <button class="music-icon-btn" id="musicMinimize" type="button" aria-label="Minimizar player" title="Minimizar">−</button>
    </div>
    <div class="music-controls">
      <button class="music-icon-btn" id="musicPrev" type="button" aria-label="Música anterior" title="Anterior">|◀</button>
      <button class="music-icon-btn" id="musicNext" type="button" aria-label="Próxima música" title="Próxima">▶|</button>
      <button class="music-icon-btn" id="musicShuffle" type="button" aria-label="Aleatório" title="Aleatório">🔀</button>
      <button class="music-icon-btn" id="musicRepeat" type="button" aria-label="Repetir faixa" title="Repetir faixa">↻</button>
      <span class="music-time" id="musicCurrentTime">0:00</span>
      <input class="music-progress" id="musicProgress" type="range" min="0" max="1000" value="0" aria-label="Progresso da música">
      <span class="music-time" id="musicDuration">0:00</span>
      <label class="music-volume" title="Volume">♪ <input id="musicVolume" type="range" min="0" max="1" step="0.01" aria-label="Volume"></label>
    </div>
    <div class="music-playlist" id="musicPlaylist" hidden></div>
    <button class="music-expand" id="musicExpand" type="button" hidden>♫ Música</button>`;
  document.body.appendChild(player);

  const $ = id => player.querySelector('#' + id);
  const audio = $('plataAudio');
  const playBtn = $('musicPlay');
  const title = $('musicTitle');
  const status = $('musicStatus');
  const playlist = $('musicPlaylist');
  const progress = $('musicProgress');
  const volume = $('musicVolume');
  const fmt = seconds => {
    if (!Number.isFinite(seconds)) return '0:00';
    const m = Math.floor(seconds / 60), s = Math.floor(seconds % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  };
  const persist = () => {
    try { localStorage.setItem(storageKey, JSON.stringify({track: current, shuffle, repeat, volume: audio.volume})); } catch (_) {}
  };
  function renderPlaylist() {
    playlist.innerHTML = tracks.map((track, i) => `<button type="button" class="music-track${i === current ? ' active' : ''}" data-track="${i}"><span>${String(i+1).padStart(2,'0')}</span><b>${track.title}</b>${i === current ? '<em>TOCANDO</em>' : ''}</button>`).join('');
  }
  function loadTrack(index, autoplay=false) {
    current = (index + tracks.length) % tracks.length;
    audio.src = `assets/music/${tracks[current].file}`;
    title.textContent = tracks[current].title;
    progress.value = 0;
    $('musicCurrentTime').textContent = '0:00';
    $('musicDuration').textContent = '0:00';
    renderPlaylist();
    persist();
    if (autoplay) play();
  }
  async function play() {
    try {
      await audio.play();
      playBtn.textContent = 'Ⅱ';
      playBtn.setAttribute('aria-label', 'Pausar');
      status.textContent = 'Reproduzindo';
    } catch (err) {
      status.textContent = 'Clique em ▶ para iniciar';
      playBtn.textContent = '▶';
    }
  }
  function pause() {
    audio.pause();
    playBtn.textContent = '▶';
    playBtn.setAttribute('aria-label', 'Reproduzir');
    status.textContent = 'Pausado';
  }
  function next() {
    if (shuffle && tracks.length > 1) {
      let n = current;
      while (n === current) n = Math.floor(Math.random() * tracks.length);
      loadTrack(n, true);
    } else loadTrack(current + 1, true);
  }
  playBtn.addEventListener('click', () => audio.paused ? play() : pause());
  $('musicPrev').addEventListener('click', () => loadTrack(current - 1, true));
  $('musicNext').addEventListener('click', next);
  $('musicShuffle').addEventListener('click', () => {
    shuffle = !shuffle;
    $('musicShuffle').classList.toggle('selected', shuffle);
    status.textContent = shuffle ? 'Ordem aleatória ativada' : (audio.paused ? 'Pronto para tocar' : 'Reproduzindo');
    persist();
  });
  $('musicRepeat').addEventListener('click', () => {
    repeat = !repeat;
    $('musicRepeat').classList.toggle('selected', repeat);
    $('musicRepeat').textContent = repeat ? '↻¹' : '↻';
    $('musicRepeat').title = repeat ? 'Repetir faixa: ativado' : 'Repetir faixa';
    persist();
  });
  $('musicPlaylistToggle').addEventListener('click', () => {
    playlistOpen = !playlistOpen;
    playlist.hidden = !playlistOpen;
  });
  playlist.addEventListener('click', e => {
    const btn = e.target.closest('[data-track]');
    if (btn) loadTrack(Number(btn.dataset.track), true);
  });
  $('musicMinimize').addEventListener('click', () => {
    player.classList.add('minimized');
    $('musicExpand').hidden = false;
  });
  $('musicExpand').addEventListener('click', () => {
    player.classList.remove('minimized');
    $('musicExpand').hidden = true;
  });
  audio.addEventListener('loadedmetadata', () => $('musicDuration').textContent = fmt(audio.duration));
  audio.addEventListener('timeupdate', () => {
    $('musicCurrentTime').textContent = fmt(audio.currentTime);
    if (!isSeeking && Number.isFinite(audio.duration) && audio.duration > 0) progress.value = Math.round(audio.currentTime / audio.duration * 1000);
  });
  progress.addEventListener('input', () => { isSeeking = true; });
  progress.addEventListener('change', () => {
    if (Number.isFinite(audio.duration)) audio.currentTime = Number(progress.value) / 1000 * audio.duration;
    isSeeking = false;
  });
  volume.value = Number.isFinite(saved.volume) ? Math.max(0, Math.min(1, saved.volume)) : 0.55;
  audio.volume = Number(volume.value);
  volume.addEventListener('input', () => { audio.volume = Number(volume.value); persist(); });
  audio.addEventListener('play', () => { playBtn.textContent = 'Ⅱ'; status.textContent = 'Reproduzindo'; });
  audio.addEventListener('pause', () => { playBtn.textContent = '▶'; if (!audio.ended) status.textContent = 'Pausado'; });
  audio.addEventListener('ended', () => repeat ? (audio.currentTime = 0, play()) : next());
  audio.addEventListener('error', () => { status.textContent = 'Não foi possível carregar esta faixa'; });

  $('musicShuffle').classList.toggle('selected', shuffle);
  $('musicRepeat').classList.toggle('selected', repeat);
  $('musicRepeat').textContent = repeat ? '↻¹' : '↻';
  loadTrack(current, false);
})();



/* Comunicados globais + painel administrativo do Universo Plata.
   O código de acesso é validado somente pelo servidor Render. */
(() => {
  const API_BASE = window.PLATA_API_URL || 'https://COLOQUE-A-URL-DO-RENDER.onrender.com';
  const seenPrefix = 'plata_notice_seen_';
  let adminToken = null;
  let typed = '';
  let typingTimer = null;

  const el = (tag, attrs={}, html='') => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v]) => node.setAttribute(k,v));
    node.innerHTML = html;
    return node;
  };
  const api = async (path, options={}) => {
    const headers = Object.assign({'Content-Type':'application/json'}, options.headers || {});
    if (adminToken) headers.Authorization = `Bearer ${adminToken}`;
    const response = await fetch(API_BASE + path, {...options, headers});
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || `Erro HTTP ${response.status}`);
    return data;
  };

  async function loadPublicNotices() {
    if (API_BASE.includes('COLOQUE-A-URL')) return;
    try {
      const {notices=[]} = await api('/api/notices');
      notices.forEach(notice => {
        const key = seenPrefix + notice.id;
        try { if (localStorage.getItem(key)) return; } catch (_) {}
        showPublicNotice(notice, () => {
          try { localStorage.setItem(key, '1'); } catch (_) {}
        });
      });
    } catch (error) {
      console.warn('Não foi possível consultar os comunicados:', error);
    }
  }

  function showPublicNotice(notice, markSeen) {
    if (document.querySelector('.plata-global-notice-backdrop')) return;
    const backdrop = el('div',{class:'plata-global-notice-backdrop'});
    const card = el('section',{class:'plata-global-notice',role:'dialog','aria-modal':'true'},
      `${notice.banner ? `<img class="plata-global-banner" src="${notice.banner}" alt="">` : ''}
       <div class="plata-global-kicker">✦ COMUNICADO · UNIVERSO PLATA</div>
       <h2></h2><div class="plata-global-message"></div>
       <button class="plata-global-ok" type="button">Entendi!</button>`);
    card.querySelector('h2').textContent = notice.title;
    card.querySelector('.plata-global-message').textContent = notice.message;
    backdrop.appendChild(card);
    document.body.appendChild(backdrop);
    document.body.classList.add('plata-global-locked');
    card.querySelector('button').addEventListener('click', () => {
      markSeen();
      backdrop.remove();
      document.body.classList.remove('plata-global-locked');
    });
    card.querySelector('button').focus();
  }

  function adminShell() {
    let root = document.getElementById('plataAdminPanel');
    if (root) return root;
    root = el('div',{id:'plataAdminPanel',class:'plata-admin-backdrop'});
    root.innerHTML = `<section class="plata-admin">
      <header><div><small>UNIVERSO PLATA · ADMINISTRAÇÃO</small><h2>Painel de comunicados</h2></div><button type="button" class="plata-admin-close" aria-label="Fechar">×</button></header>
      <form id="plataNoticeForm">
        <label>Título<input name="title" maxlength="90" required placeholder="Ex.: Novidade na enciclopédia"></label>
        <label>Mensagem<textarea name="message" maxlength="1800" required rows="4" placeholder="Escreva o comunicado..."></textarea></label>
        <label>Banner (opcional)<input name="banner" type="file" accept="image/png,image/jpeg,image/webp"></label>
        <label>Quando publicar<select name="schedule"><option value="now">Publicar agora</option><option value="later">Agendar data e horário</option></select></label>
        <label id="plataScheduleWrap" hidden>Data e horário<input name="publishAt" type="datetime-local"></label>
        <button class="plata-admin-publish" type="submit">Criar comunicado</button>
        <p class="plata-admin-status" aria-live="polite"></p>
      </form>
      <div class="plata-admin-list"><h3>Comunicados existentes</h3><div id="plataNoticeList">Carregando...</div></div>
    </section>`;
    document.body.appendChild(root);
    root.querySelector('.plata-admin-close').onclick = () => root.remove();
    const form = root.querySelector('form');
    form.schedule.addEventListener('change', () => {
      root.querySelector('#plataScheduleWrap').hidden = form.schedule.value !== 'later';
      form.publishAt.required = form.schedule.value === 'later';
    });
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const status = root.querySelector('.plata-admin-status');
      try {
        status.textContent = 'Enviando...';
        let banner = '';
        const file = form.banner.files[0];
        if (file) {
          if (file.size > 3*1024*1024) throw new Error('O banner deve ter no máximo 3 MB.');
          if (!['image/png','image/jpeg','image/webp'].includes(file.type)) throw new Error('Use PNG, JPG ou WEBP.');
          banner = await new Promise((resolve,reject) => {
            const reader = new FileReader(); reader.onload=()=>resolve(reader.result); reader.onerror=reject; reader.readAsDataURL(file);
          });
        }
        const payload = {title:form.title.value.trim(),message:form.message.value.trim(),banner,
          publishAt:form.schedule.value==='now' ? new Date().toISOString() : new Date(form.publishAt.value).toISOString()};
        await api('/api/admin/notices',{method:'POST',body:JSON.stringify(payload)});
        form.reset(); root.querySelector('#plataScheduleWrap').hidden=true;
        status.textContent = 'Comunicado salvo! Visitantes verão ao entrar ou recarregar a página.';
        await refreshAdminList();
      } catch (err) { status.textContent = err.message; }
    });
    refreshAdminList();
    return root;
  }

  async function refreshAdminList() {
    const target = document.getElementById('plataNoticeList');
    if (!target) return;
    try {
      const {notices=[]} = await api('/api/admin/notices');
      target.innerHTML = '';
      notices.forEach(n => {
        const row = el('div',{class:'plata-admin-row'});
        const info = el('div');
        const state = new Date(n.publishAt) > new Date() ? 'Agendado' : 'Publicado';
        info.innerHTML = `<strong></strong><small>${state} · ${new Date(n.publishAt).toLocaleString('pt-BR')}</small>`;
        info.querySelector('strong').textContent = n.title;
        const del = el('button',{type:'button'},'Cancelar');
        del.onclick = async () => { if(confirm('Cancelar este comunicado?')) { await api('/api/admin/notices/'+encodeURIComponent(n.id),{method:'DELETE'}); refreshAdminList(); } };
        row.append(info,del); target.appendChild(row);
      });
      if (!notices.length) target.textContent='Nenhum comunicado criado ainda.';
    } catch (err) { target.textContent=err.message; }
  }

  async function openAdmin() {
    const code = prompt('Código de desenvolvedor:');
    if (code === null) return;
    try {
      const result = await api('/api/admin/login',{method:'POST',body:JSON.stringify({code})});
      adminToken = result.token;
      adminShell();
    } catch (err) { alert('Acesso negado: '+err.message); }
  }

  // Digite 2411 em qualquer lugar da página para abrir o acesso administrativo.
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.key.length !== 1 || !/[0-9]/.test(e.key)) return;
    typed += e.key;
    typed = typed.slice(-4);
    if (typed === '2411') { typed=''; openAdmin(); }
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => typed='', 1600);
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',loadPublicNotices,{once:true});
  else loadPublicNotices();
})();
