# Render Keep Alive

Projeto para manter serviços Render ativos utilizando Vercel Cron.

## Configuração

Crie a variável de ambiente:

PING_URLS

Exemplo:

https://app1.onrender.com/health,https://app2.onrender.com

## Deploy

git clone <repo>

npm install

vercel

## Funcionamento

A cada 10 minutos o Vercel executará:

/api/ping

e fará requisições GET para todas as URLs configuradas.
