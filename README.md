# Bandeiras do Brasil

Aplicação web em React para explorar as bandeiras dos estados brasileiros, com páginas individuais por estado e seções de descrição, composição, cores e fontes.

## Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- React Helmet Async
- Sass (SCSS Modules)

## Como rodar localmente

Pré-requisitos:

- Node.js 18+ (recomendado)
- npm

Comandos:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Scripts

- `npm run dev`: servidor local com recarga rápida
- `npm run build`: checagem TypeScript + build de produção
- `npm run preview`: serve o build localmente
- `npm run lint`: executa ESLint

## Estrutura do projeto

```text
src/
  assets/        # imagens de bandeiras e brasões
  components/    # componentes reutilizáveis (Header, Footer, Nav, etc.)
  data/          # base principal de conteúdo (FlagsData.ts)
  interfaces/    # tipagens (State e props)
  pages/         # páginas de rota (Home, Sobre, Brasil, Estado)
  routes/        # definição das rotas
  sections/      # blocos de conteúdo da página de estado
  styles/        # estilos globais
```

## Rotas atuais

- `/` - Página inicial com lista de estados
- `/sobre` - Página sobre o projeto
- `/br` - Página da bandeira do Brasil
- `/${state.name}` - Página dinâmica de cada estado, criada a partir de `src/data/FlagsData.ts`

## Fluxo de dados

1. `src/data/FlagsData.ts` define o array `states`.
2. `src/routes/RoutesMain.tsx` cria as rotas por estado com `states.map`.
3. `src/components/FlagList/FlagList.tsx` renderiza os cards da home.
4. `src/pages/StatePage/StatePage.tsx` consome o estado e monta as seções.

## Como adicionar um estado

1. Adicione a imagem da bandeira em `src/assets/bandeiras/`.
2. Importe/exporte a imagem em `src/assets/index.ts`.
3. Adicione um novo objeto no array `states` em `src/data/FlagsData.ts`.
4. Garanta `id` único e preencha os campos do tipo `State`.

## Melhorias recomendadas (roadmap)

### Alta prioridade

- Padronizar URLs dos estados com `slug` (ex.: `mato-grosso-do-sul`) para evitar problemas com acentos/espaços.
- Corrigir encoding dos textos para UTF-8 (há caracteres quebrados em vários conteúdos).
- Preencher dados faltantes em `FlagsData.ts` (descrições, fontes, composição e cores vazias).
- Ajustar segurança de links externos com `rel="noopener noreferrer"` quando usar `target="_blank"`.

### Média prioridade

- Trocar chaves por `id` em listas React (evitar uso de `index` como key).
- Corrigir nomenclatura `coatOfAmrs` para `coatOfArms` (tipagem + dados).
- Criar página `404` para rotas inexistentes.
- Adicionar testes básicos de componentes e rotas.

### Baixa prioridade

- Evoluir SEO (metadados por estado mais completos).
- Melhorar acessibilidade (audit com Lighthouse/axe).
- Adicionar CI para lint/build em pull requests.

## Observações

- O arquivo de dados é grande e concentra muito conteúdo manual.
- O projeto hoje não depende de backend.
