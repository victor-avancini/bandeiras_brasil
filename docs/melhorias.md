# Oportunidades de melhoria

## Robustez dos dados
- Corrigir a propriedade `coatOfAmrs` para `coatOfArms` na interface `State` e em todo o código, evitando inconsistências e facilitando a compreensão do modelo.【F:src/interfaces/state.interface.ts†L4-L15】【F:src/sections/CoatOfArmsSection/CoatOfArmsSection.tsx†L1-L18】
- Completar os valores de `coatOfAmrs` que hoje estão vazios para grande parte dos estados ou tratar o caso ausente com um placeholder no componente que exibe o brasão, evitando imagens quebradas.【F:src/data/FlagsData.ts†L11-L94】【F:src/sections/CoatOfArmsSection/CoatOfArmsSection.tsx†L9-L16】

## Experiência de navegação
- Substituir rotas baseadas no nome completo do estado por slugs (por exemplo, `/:acronym`), garantindo URLs mais previsíveis e compatíveis com acentos ou espaços.【F:src/routes/RoutesMain.tsx†L8-L16】【F:src/components/Pagination/Pagination.tsx†L9-L18】
- Adicionar breadcrumbs ou um link direto de volta à página inicial nas páginas de estado, reduzindo o número de cliques para navegar entre as seções principais.【F:src/pages/StatePage/StatePage.tsx†L1-L24】

## Conteúdo e acessibilidade
- Incluir textos descritivos na seção de brasões (o bloco está comentado) para oferecer contexto aos usuários e melhorar SEO.【F:src/sections/CoatOfArmsSection/CoatOfArmsSection.tsx†L8-L12】
- Ajustar o texto alternativo da imagem do brasão para algo como `Brasão do {state.name}` e garantir contraste adequado nas cores exibidas em `ColorCard` para leitura confortável.【F:src/sections/CoatOfArmsSection/CoatOfArmsSection.tsx†L13-L16】【F:src/components/ColorCard/ColorCard.tsx†L1-L40】

## Qualidade do código
- Padronizar o formato dos arquivos (por exemplo, adicionando ponto e vírgula, espaçamento consistente e newline no final do arquivo) e configurar o Prettier ou ESLint com regras de formatação automática para evitar diffs ruidosos.【F:src/App.tsx†L1-L24】【F:src/main.tsx†L1-L12】
- Acrescentar testes automatizados (por exemplo, com Vitest + Testing Library) para validar que a navegação e renderização das seções principais continuam funcionando conforme o esperado durante futuras mudanças.
