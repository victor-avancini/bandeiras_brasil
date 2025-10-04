# Bandeiras do Brasil

Aplicativo em React e TypeScript que apresenta informações sobre as bandeiras dos estados brasileiros, incluindo descrições históricas, composição visual, cores e fontes de referência. O projeto foi criado com Vite e utiliza React Router para gerenciar as páginas da aplicação.

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento do Vite.
- `npm run build`: gera o bundle de produção.
- `npm run lint`: executa a verificação estática de código.
- `npm run preview`: inicia um servidor local para inspecionar o bundle gerado.

## Estrutura do projeto

- `src/main.tsx`: ponto de entrada que monta o React dentro de `BrowserRouter` para habilitar as rotas da aplicação.【F:src/main.tsx†L1-L12】
- `src/App.tsx`: aplica estilos globais, inicializa o `HelmetProvider` e registra o comportamento de rolar para o topo ao trocar de rota.【F:src/App.tsx†L1-L24】
- `src/routes/RoutesMain.tsx`: declara as rotas estáticas e cria uma rota para cada estado listado em `FlagsData`.【F:src/routes/RoutesMain.tsx†L1-L16】
- `src/data/FlagsData.ts`: catálogo tipado com informações de cada estado (descrições, composição, cores e fontes).【F:src/data/FlagsData.ts†L1-L40】
- `src/pages/`: páginas de alto nível (home, sobre, Brasil e estados) construídas a partir de componentes reutilizáveis.
- `src/components/` e `src/sections/`: componentes que formam o layout das páginas, como navegações, cabeçalhos, listas de bandeiras e paginação entre estados.【F:src/components/Pagination/Pagination.tsx†L1-L19】【F:src/sections/CoatOfArmsSection/CoatOfArmsSection.tsx†L1-L18】

## Oportunidades de melhoria

Um levantamento mais detalhado sobre possíveis evoluções encontra-se em [`docs/melhorias.md`](docs/melhorias.md).

## Como começar

1. Instale as dependências com `npm install`.
2. Execute `npm run dev` para iniciar o servidor em modo de desenvolvimento.
3. Acesse o endereço exibido no terminal (por padrão, `http://localhost:5173`).

> Dica: utilize ferramentas como React DevTools para inspecionar as propriedades dos componentes enquanto navega pelo site.
