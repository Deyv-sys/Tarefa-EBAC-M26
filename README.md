Aplicação simples de lista de tarefas feita com Next.js 15, App Router e TypeScript.

## Executar a aplicação

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). As tarefas iniciais são carregadas no Server Component a partir de uma função local assíncrona; novas tarefas são mantidas no estado do cliente.

## Testes

Jest e Testing Library cobrem o formulário, o hook de contagem e a renderização da página.

```bash
npm test
npm run test:watch
npm run lint
npm run build
```

O comando `npm test` coleta cobertura e exige pelo menos 80% em linhas, funções e statements, e 70% em branches.
