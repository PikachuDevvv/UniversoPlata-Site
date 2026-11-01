@echo off
setlocal
title Universo Plata - Teste local

cd /d "%~dp0"

echo ==========================================
echo       UNIVERSO PLATA - TESTE LOCAL
echo ==========================================
echo.

where py >nul 2>nul
if %errorlevel%==0 (
    echo Iniciando servidor local com Python...
    start "" http://localhost:8000
    py -m http.server 8000
    goto :fim
)

where python >nul 2>nul
if %errorlevel%==0 (
    echo Iniciando servidor local com Python...
    start "" http://localhost:8000
    python -m http.server 8000
    goto :fim
)

echo Python nao foi encontrado.
echo Abrindo o site diretamente no navegador...
if exist "index.html" (
    start "" "index.html"
) else (
    echo ERRO: index.html nao encontrado nesta pasta.
    pause
)

:fim
endlocal
