# furia-chat-server

## Estrutura do Projeto

```
root/
│
├── client/          # Frontend em React
└── server/          # Backend em Node.js Express
```

O client se encontra [neste repositório](https://github.com/mattvie/furia-chat/).

Para utilizar a aplicação na web, acesse [aqui](https://furia-chat-tawny.vercel.app/).

## Rotas Disponíveis

- `GET /ping` : Teste de status de servidor.
- `POST /api/chat` : Rota de chat com a API do DeepSeek

## Executando Localmente

### Instalação de pacotes

```
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` (ou renomeie o arquivo example.env) no diretório do servidor e insira a variável necessária:

```
DEEPSEEK_API_KEY=sk-...
```

A chave da API de IA que você utilizar **nunca** deve ficar exposta. Neste projeto foi utilizado uma API key do DeepSeek V3, mas você pode utilizar a IA que você quiser/tiver. 

Para criar uma API key de graça, se cadastre no site da [Open Router](https://openrouter.ai/), e você poderá selecionar de uma lista de IAs de graça e pagas. Para utilizar a mesma IA que eu, clique em Create API Key [aqui.](https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free/api)


### Executando em modo de desenvolvimento

```
nodemon index.js
```