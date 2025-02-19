import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'http://localhost:3333',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})

// o Orval, cria o typescript necessário para saber quais tipos de parâmetros que o backend espera
// Ele também cria as funções das requisições, ou seja, será apenas usar o que já está pronto de acordo com a documentação do backend
// Após realizar a instalação e criar (esse) arquivo de configuração, é necessário rodar o código npx orval para ele criar a tipagem e rotas
