# FASE 4 — Construção (a IA constrói; a pessoa valida nos checkpoints)

| | |
|---|---|
| **Objetivo** | Transformar a `ESPECIFICACAO.md` aprovada em `site/` completo, documentado e pronto para o QA, sem tomar nenhuma decisão de design ou negócio. |
| **Entrada** | `ESPECIFICACAO.md` (Status: aprovado), `assets-brutos/`, `conteudo/`, `kit-sites/base/`. |
| **Saída** | `site/` (HTML, `styles.css`, `main.js`, assets otimizados, `README.md` do site) com um commit por checkpoint. |
| **Modelo** | Opus em esforço médio; Sonnet funciona bem se a especificação estiver completa. |
| **Leia também** | `GUIA-FRONTEND.md §3` agora (o starter); `§4` só o snippet da seção que estiver construindo; `§5-§8` na passagem final. Nada do `GUIA-DESIGN.md` (as decisões já estão na especificação). |

## 1. Antes de começar (2 minutos)

1. Leia a `ESPECIFICACAO.md` inteira uma vez. Liste tudo que impede construir alguma seção: `[PLACEHOLDER]` sem texto
   provisório definido, imagem sem arquivo, número de WhatsApp ausente, e-mail do formulário ausente.
2. Se a lista não estiver vazia, pergunte **tudo de uma vez**, em uma mensagem. Não comece com lacunas.
3. Sem especificação aprovada, não construa: volte à Fase 3.
4. Diga o modo (arquivo/chat). Em modo chat, avise que cada checkpoint entrega arquivos para salvar (máx. 2 por mensagem).

## 2. Setup (commit: `chore: base do site`)

1. Copie `kit-sites/base/` inteira para `site/` (inclui `.nojekyll`, `assets/`, `README.md`). Se `site/` já existir, pare e pergunte.
2. **Tokens:** em `site/styles.css`, bloco 1, troque os valores pela tabela da `ESPECIFICACAO §3`. Não renomeie tokens,
   não apague tokens não usados.
3. **Fontes:** troque o `<link>` do Google Fonts no `<head>` de `index.html`, `privacidade.html` e `obrigado.html` pelo
   link da especificação; ajuste `--font-heading` e `--font-body`.
4. **Head do `index.html`:** `title`, `description`, `canonical`, `og:*`, `theme-color` (= `--color-primary`), JSON-LD com
   os dados reais. URL final: a do domínio, se já definido; senão `https://USUARIO.github.io/REPO/` (confirme usuário e
   nome do repositório com a pessoa agora, em 1 linha, se não estiverem na especificação).
5. **Imagens:** para cada linha de assets da `ESPECIFICACAO §5` (origem → destino), coloque o arquivo em
   `site/assets/img/` com o nome definido (sem acento, sem espaço). A pessoa deve ter entregue WebP já otimizados na
   Fase 2. Se não: tente `cwebp -q 82 -resize 1600 0 origem.jpg -o destino.webp` ou
   `magick origem.jpg -resize 1600x -quality 82 destino.webp`; se nenhum existir, peça à pessoa para converter em
   https://squoosh.app (WebP, qualidade ~80, largura 1600) e seguir.
6. **Logo e ícones:** `assets/logo.svg` (ou `.png`) com a proporção real; ajuste `width`/`height` do `<img>` para altura
   36px. `assets/favicon.svg`: use o da pessoa ou edite a letra e a cor do placeholder. `assets/apple-touch-icon.png`
   (180x180) e `assets/og.jpg` (1200x630): se a pessoa não entregou, remova as tags correspondentes do `<head>` e anote
   em Pendências da especificação.
7. **`site/README.md`:** preencha agora as seções 1 (Projeto), 2 (Estrutura), 4 (Design) e 5 (Convenções, já vem pronta).
   O Mapa de seções (3) cresce a cada seção construída; Integrações (6) ao configurar formulário/WhatsApp/analytics.
8. **git:** `cd site && git init -b main && git add -A && git commit -m "chore: base do site"`. O repositório é a pasta
   `site/` (só ela vai ao GitHub); os artefatos de planejamento ficam fora.

## 3. Ordem de construção e checkpoints

| Lote | O que construir | Checkpoint |
|---|---|---|
| 1 | `header-nav` (links reais, CTA), hero (variante da especificação), `footer` (colunas e textos legais), `whatsapp-float` (ou remover se não houver WhatsApp) | **Checkpoint 1**: a pessoa valida a "cara" do site antes do resto |
| 2…n | As demais seções da página inicial, **2 a 3 por lote**, na ordem da especificação | um checkpoint por lote |
| n+1 | Páginas internas (sites multi-página): copie `index.html`, mantenha header/footer idênticos, `aria-current="page"` no link da página atual, `title`/`description` próprios, conteúdo | checkpoint |
| n+2 | `privacidade.html` (dados legais, serviço de formulário, bloco de analytics sim/não: escolha a alternativa certa dos trechos `{{SE USAR ANALYTICS…}}`), `obrigado.html`, `404.html`, `sitemap.xml`, `robots.txt` | sem checkpoint (revisão no QA) |
| final | Passagem responsiva (320, 375, 768, 1024, 1280px), acessibilidade (`GUIA-FRONTEND §6`), performance (`§8`), Mapa de seções completo no README | commit `feat: site completo para QA` → Fase 5 |

Regra de ritmo visual: alterne `section` e `section--alt` entre seções consecutivas (a `cta-band` não conta).
Commit após cada checkpoint aprovado: `git add -A && git commit -m "feat: <seções do lote>"`.

## 4. Como construir uma seção (procedimento fixo)

1. Abra `GUIA-FRONTEND §4` e localize o snippet pelo ID (ex.: `testimonials-grid`). Copie-o inteiro, **com os dois
   marcadores** `<!-- ===== [id] Nome ===== -->` e `<!-- ===== /[id] ===== -->`.
2. Cole dentro de `<main>` na posição da especificação. Ajuste o `id` HTML e o `aria-labelledby` para os nomes da
   especificação; os links do menu e do rodapé apontam para esses `id`s.
3. Preencha com a copy **final** da especificação. Nada de texto provisório; nada de `{{ }}` sobrando.
4. Imagens: `src` relativo (`assets/img/…`), `alt` descritivo (ou `alt=""` se decorativa), `width`/`height` reais,
   `loading="lazy"` (exceto a imagem do hero, que leva `fetchpriority="high"`).
5. Ícones: SVG inline da mini-biblioteca em `GUIA-FRONTEND §4` (Lucide, 24×24). Não invente paths; não use icon fonts.
6. Variações só com classes do starter: `grid--2/3/4`, `section--alt`, `split--reverse`, `hero--centered`,
   `card--hover`, `btn--lg`. Quantidade de itens compatível com as colunas (3 itens → `grid--3`; 4 → `grid--4` ou `grid--2`).
7. CSS novo só se o snippet não cobrir o que a especificação pede, **sempre** no bloco `Z` de `styles.css`, com o
   comentário `[id-do-catalogo] #id-html: o que faz` e usando tokens (nunca cores ou tamanhos soltos).
8. `.reveal` nos cards e itens repetidos (com `data-delay="1"`, `"2"` para escalonar); não no texto do hero. Se a
   especificação diz movimento "nenhum", não use `.reveal`.
9. Acrescente a linha da seção no Mapa de seções de `site/README.md`.

## 5. Checkpoint (mensagem padrão, até 10 linhas)

```
Checkpoint N — construí: [seções].
Como ver: abra site/index.html no navegador (duplo clique). Estreite a janela ou abra no celular para ver a versão mobile.
Olhe principalmente: 1) [item]  2) [item]  3) [item]
Algum ajuste? Responda "ok" ou liste no formato "seção — problema — desejo"
(ex.: "hero — título grande demais no celular — reduzir um nível").
```

Modo arquivo: não cole código. Modo chat: entregue os arquivos alterados (nome na primeira linha + bloco de código), no
máximo 2 por mensagem, e diga onde salvar.

## 6. Como processar o feedback

Agrupe todos os pedidos do checkpoint, aplique de uma vez, responda com 1 linha por item ("hero — título reduzido para
o tamanho médio"). Não proponha mudanças não pedidas. Se um pedido for ambíguo, pergunte em 1 linha **antes** de
aplicar os demais? Não: aplique os claros, pergunte o ambíguo na mesma mensagem.

Dicionário de tradução (linguagem de design → ajuste técnico):

| A pessoa diz | Você faz |
|---|---|
| "mais respiro", "apertado" | aumentar um passo o `padding` da seção (`--section-padding`) ou o `gap` do grid, no bloco Z |
| "muito espaço vazio" | reduzir um passo o `padding`/`gap`; `section--tight` |
| "título grande/pequeno demais" | trocar a classe: `hero__title` ↔ `hero__title--md`; para `h2`, regra no bloco Z usando `--text-2xl`/`--text-4xl` |
| "texto difícil de ler", "pouco contraste" | escurecer `--color-text-muted` (ou usar `--color-text`); conferir AA 4,5:1 |
| "cor forte demais", "chapado" | usar `--color-primary-soft` em fundos; manter a primária só em botões e detalhes |
| "muito pesado/escuro" | trocar `section--alt` por `section`; `--shadow-md` → `--shadow-sm`; menos bordas |
| "parece template", "genérico" | fotos reais em vez de placeholders, textos específicos da matéria-prima, remover seções vazias; **não** mudar a direção visual |
| "botão não chama atenção" | `btn--lg`, só 1 botão primário por tela, posição logo abaixo do subtítulo |
| "muito texto" | cortar para os limites da especificação (`GUIA-DESIGN §6`); transformar parágrafos em lista ou cards |
| "imagem esticada/cortada errado" | trocar a proporção da `.media` (`--4x3` ↔ `--16x9` ↔ `--1x1`) ou `object-position` no bloco Z |
| "não gostei da fonte", "mudar a cor" | decisão da pessoa: peça o par de fontes (ou a referência) / o hex exato; atualize os tokens; confira contraste |
| "mais moderno", "mais elegante" | peça uma referência (print) em vez de inferir; ofereça 2 ajustes concretos (mais espaço, raio maior/menor, menos bordas) |
| "centralizar" | `section__header--center`, `hero--centered`, `cluster--center` |
| "menu confuso" | máximo 5 links + 1 CTA; nomes de 1-2 palavras |
| "rodapé grande demais" | remover colunas vazias; `site-footer--simple` em páginas internas |
| "animação demais/de menos" | remover/adicionar `.reveal`; ajustar `--duration` |
| "no celular ficou ruim" | perguntar qual seção e pedir um print; verificar grid, tamanhos de texto, botões (`btn--block` em telas pequenas via bloco Z) |

## 7. Regras de código durante o build

- Só HTML, CSS e JS puros. Sem bibliotecas, sem Tailwind, sem build. O `main.js` do starter já cobre menu, animação,
  formulário e cookies; só edite se a especificação exigir comportamento novo (e documente no cabeçalho dele).
- Um `styles.css`; nada de `<style>` ou `style=""`; sem `!important`; sem seletores por `id` no CSS.
- Classes do starter (BEM leve: `bloco__elemento--modificador`). Classes novas só no bloco Z, prefixadas pela seção
  (ex.: `.servicos__badge`).
- Caminhos relativos sempre (o GitHub Pages publica em `/repo/`). Única exceção: `404.html`, que usa a URL final absoluta.
- 1 `h1` por página; headings em ordem (h2 para seções, h3 para itens); todo `section` com `aria-labelledby`.
- Toda imagem: `alt`, `width`, `height`; WebP; `loading="lazy"` fora do hero.
- Formulário: `method="POST"` para o serviço padrão (`GUIA-FRONTEND §9`), campo-armadilha, consentimento LGPD
  desmarcado, `redirect` para `obrigado.html` com URL absoluta.
- Marcadores de seção em **toda** seção; `site/README.md` atualizado a cada lote; mensagens de commit curtas em pt-BR.

## 8. Economia de tokens nesta fase

- Não releia a especificação a cada lote: ela está no contexto; releia só a seção do lote se precisar.
- Edite trechos (ferramenta de edição), nunca reescreva `index.html` ou `styles.css` inteiros.
- Não cole código na conversa em modo arquivo; descreva em 1 linha por item o que mudou.
- Não faça screenshots nem rode navegador a cada ajuste; a pessoa valida no navegador dela. Use navegador headless
  (se existir) apenas na passagem final e no QA.
- Não gere alternativas ("fiz duas versões do hero"). Uma versão, conforme a especificação.
- Agrupe feedback; um commit por checkpoint.

## 9. Quando parar e perguntar

- A especificação não cobre algo (texto, imagem, decisão visual, dado de contato).
- Um asset falta ou é inviável (logo JPG com fundo branco em site escuro; foto de 200 px para o hero).
- O feedback muda algo global (paleta, fontes, direção, estrutura de páginas).
- Feedback e especificação se contradizem.
- Dois ajustes seguidos não resolveram um problema visual: peça um print do que a pessoa está vendo.

## 10. Problemas comuns e solução

| Sintoma | Causa provável | Solução |
|---|---|---|
| Imagem não aparece | caminho errado, nome com acento/espaço, extensão diferente | conferir `ls site/assets/img`; caminho relativo exato; renomear |
| Fonte não carregou (fallback do sistema) | `<link>` do Google Fonts ausente nessa página, nome da família diferente nos tokens | copiar o `<link>` do `index.html`; `--font-heading` com o nome exato entre aspas |
| Menu não abre no celular | `aria-controls` ≠ `id` do `nav`; `main.js` não carregou | conferir `id="menu"` e `aria-controls="menu"`; `<script src="main.js" defer>` antes de `</body>` |
| Seções animadas não aparecem | `.reveal` sem `main.js` | garantir o script; ou remover `.reveal` |
| Layout quebrado no celular | largura fixa em px, imagem sem `max-width`, grid com `minmax` grande | usar classes do starter; remover larguras fixas |
| Texto "estourando" a caixa | palavra muito longa, container estreito | `overflow-wrap: anywhere` no bloco Z só naquele elemento |
| Ícone gigante | SVG inline sem `width`/`height` e fora de `.feature__icon`/`.icon` | envolver em `.feature__icon` ou usar `class="icon"` |
| Âncora do menu para no lugar errado | header fixo cobrindo o título | já tratado por `scroll-padding-top`; conferir se o `id` está no `<section>` |
| Formulário não envia | `action` sem o endereço real, campo `name` faltando | configurar conforme `GUIA-FRONTEND §9`; testar na Fase 5 |
| Página interna sem estilo | `styles.css` com caminho errado | mesma pasta: `href="styles.css"` |

## 11. Transição para a Fase 5

Quando todos os lotes estiverem com "ok", a passagem final estiver feita e o Mapa de seções do `site/README.md`
estiver completo: `git add -A && git commit -m "feat: site completo para QA"` e envie:

> Construção concluída e versionada. Próximo passo: QA e publicação (vou ler `kit-sites/FASE-5-QA-E-PUBLICACAO.md`).
> Posso seguir?
