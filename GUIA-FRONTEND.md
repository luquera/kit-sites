# GUIA-FRONTEND — conhecimento técnico (consulta, não leitura integral)

| | |
|---|---|
| **Para quem** | A IA, nas Fases 4, 5 e 6. A pessoa não precisa ler. |
| **Como usar** | Abra só a seção que a fase mandar (índice abaixo). Fase 4: §3 no setup, §4 por seção, §5-§8 na passagem final. Fase 5: §7, §8, §9. Fase 6: §4 (snippet novo) e §13. |
| **Fonte da verdade do código** | `kit-sites/base/` (starter). Este guia documenta o starter tal como ele é; se houver divergência, vale o arquivo em `base/`. |
| **Regras de design** | Não estão aqui: ver `GUIA-DESIGN.md` (§2 regras quantitativas, §5 catálogo, §6 copy). |

Índice: 1 Stack e regras fixas · 2 Estrutura do projeto e do site/ · 3 O starter base/ · 4 Snippets por seção do catálogo (+ ícones) · 5 Responsivo · 6 Acessibilidade · 7 SEO · 8 Performance · 9 Formulários em site estático · 10 Integrações · 11 Aviso de cookies · 12 Multi-página · 13 Padrão de documentação do site · 14 Anti-padrões e erros frequentes de modelos · 15 Referências

## 1. Stack e regras fixas

Não delibere sobre nada desta lista; não pergunte à pessoa; não "melhore".

- HTML5 semântico + CSS puro + JS mínimo (`main.js` do starter). Sem frameworks, sem Tailwind (nem via CDN), sem bibliotecas, sem build, sem npm, sem `node_modules`.
- Um único `styles.css` para o site inteiro. Nada de `<style>` ou `style=""` (exceção: `404.html`, que é autossuficiente). Sem `!important` (o único existente está no bloco de movimento reduzido do starter). Sem seletor por `id` no CSS. Variações só por classes e tokens.
- Caminhos RELATIVOS sempre (`assets/img/hero.webp`, `sobre.html`, `index.html#contato`). O GitHub Pages serve em `https://usuario.github.io/repo/`; `href="/x"` quebra. Exceção: `404.html` usa a URL final absoluta.
- Fontes: Google Fonts com `display=swap` e os dois `preconnect`; no máximo 2 famílias; pesos limitados (400/500/600/700, ou intervalo em fonte variável).
- Ícones: SVG inline copiados da mini-biblioteca do §4.22 (Lucide, 24×24, stroke 2). Sem icon fonts, sem `<img>` para ícone, sem emoji como ícone.
- Imagens: WebP; largura máxima 1600px (hero) / 800px (cards) / 192px (avatares); ≤ 200-300 KB; `width` e `height` reais sempre; `loading="lazy"` em tudo exceto a imagem do hero (`fetchpriority="high"`); `alt` descritivo ou `alt=""` se decorativa.
- Acessibilidade mínima: 1 `h1` por página; headings em ordem; contraste AA (4,5:1 texto, 3:1 texto grande e botões); foco visível (já no starter); skip link; menu com `aria-expanded`/`aria-controls`; alvos ≥ 44px; `prefers-reduced-motion` respeitado.
- SEO mínimo: `title` 50-60, `description` 150-160, `canonical`, OG + Twitter, favicon, `lang="pt-BR"`, JSON-LD `LocalBusiness` ou `Organization`, `sitemap.xml`, `robots.txt`, `404.html`.
- Formulário: `POST` HTML para o Web3Forms (serviço padrão do kit, §9), 3-4 campos, honeypot, consentimento LGPD desmarcado, redirect para `obrigado.html`.
- Hospedagem: GitHub Pages em repositório público, operado com `git` + `gh`; fallback Netlify Drop. Pages gratuito só publica repositório público; repositório privado exige plano pago (GitHub Pro/Team; verificar).
- Analytics: só se a pessoa pediu (Q40). Com analytics: `cookie-banner` obrigatório e scripts só após "Aceitar" (§10.6, §11).
- git: um commit por checkpoint ou ajuste, mensagem curta em pt-BR com prefixo `feat:` / `fix:` / `chore:` / `docs:`.

## 2. Estrutura do projeto e do site/

```
meu-site/                      raiz do projeto da pessoa (NÃO é o repositório)
├── kit-sites/                 o kit, inalterado
├── BRIEFING.md  REFERENCIAS.md  ESPECIFICACAO.md  PUBLICACAO.md
├── referencias/  conteudo/  assets-brutos/        materiais da pessoa (ficam fora do repositório público)
└── site/                      ← o repositório git; só esta pasta vai para o GitHub Pages
    ├── index.html             página inicial (+ sobre.html, servicos.html… se multi-página)
    ├── privacidade.html  obrigado.html  404.html
    ├── styles.css  main.js
    ├── robots.txt  sitemap.xml  .nojekyll  (CNAME só com domínio próprio)
    ├── assets/
    │   ├── favicon.svg  logo.svg  apple-touch-icon.png (180×180)  og.jpg (1200×630)
    │   └── img/               fotos WebP, nomes sem acento/espaço: hero.webp, servico-01.webp, depo-ana.webp
    └── README.md              MAPA DO SITE (fonte da verdade; §13)
```

- Comandos de git/publicação rodam dentro de `site/`. `cd site && git init -b main` acontece no setup da Fase 4.
- `.nojekyll` desliga o Jekyll do Pages (sem ele, arquivos/pastas iniciados por `_` somem). Não apague.
- Nomes de arquivo: minúsculas, sem acento, sem espaço, hífen como separador (`sobre-nos.html` não: use `sobre.html`; `servico-01.webp`).

## 3. O starter base/

### 3.1 Arquivo por arquivo

| Arquivo | O que é | O que trocar na Fase 4 |
|---|---|---|
| `index.html` | Página inicial com `header-nav`, `hero-split`, `features-grid`, `cta-band`, `contact-split`, `footer`, `whatsapp-float`, `cookie-banner` (oculto) e o `<head>` completo (SEO, OG, fontes, JSON-LD) | todos os `{{ }}`; inserir as demais seções no comentário "Insira aqui"; remover seções que a especificação não tem |
| `styles.css` | Folha única: índice, 14 blocos + bloco Z | bloco 1 (tokens); CSS novo só no bloco Z |
| `main.js` | 7 comportamentos (3.4), sem dependências | nada (só se a especificação exigir comportamento novo; documentar no cabeçalho) |
| `privacidade.html` | Política de privacidade LGPD em `text-prose`, com alternativas `{{SE USAR ANALYTICS… / SE NÃO USAR…}}` | dados legais; escolher UMA alternativa de cada par; header/footer iguais aos do index |
| `obrigado.html` | Destino do formulário (`hero-centered`, `noindex`) | nome, prazo de resposta, link WhatsApp |
| `404.html` | Página de erro autossuficiente (CSS inline, sem `styles.css`) | `{{Nome}}` e a URL final absoluta (Fase 5); cores do bloco `:root` inline = tokens do site |
| `README.md` | Template do MAPA DO SITE (9 seções, §13) | preencher no setup e a cada lote |
| `robots.txt` | Libera tudo, bloqueia `obrigado.html`, aponta o sitemap | URL final |
| `sitemap.xml` | Lista `index.html` e `privacidade.html` | URL final, datas, páginas extras |
| `.nojekyll` | Arquivo vazio | nada |
| `assets/favicon.svg` | Quadrado colorido com a inicial | cor = `--color-primary`; letra; ou substituir pelo SVG da pessoa |
| `assets/logo.svg` | Placeholder 140×36 | substituir pelo logo real; ajustar `width`/`height` do `<img>` para altura 36px |
| `assets/img/placeholder.svg` | Imagem 1200×900 cinza | apagar quando não houver mais referência a ela |

### 3.2 Tokens (bloco 1 de styles.css)

| Token | Padrão | Uso |
|---|---|---|
| `--color-primary` / `-strong` / `-soft` / `--color-on-primary` | `#1d4ed8` / `#1e40af` / `#e8efff` / `#fff` | botões, links, eyebrow, ícones / hover / fundos suaves (ícones, badges, foco) / texto sobre a primária |
| `--color-accent` / `--color-on-accent` | `#f59e0b` / `#1f1300` | estrelas, selos; nunca em texto corrido |
| `--color-bg` / `--color-surface` / `--color-surface-2` | `#fff` / `#f6f8fb` / `#e9eef5` | fundo da página / `section--alt` e formulário / placeholders de mídia |
| `--color-text` / `--color-text-muted` / `--color-border` | `#0f172a` / `#475569` / `#dfe5ee` | texto / secundário / bordas decorativas |
| `--color-border-strong` | `#64748b` | borda dos campos de formulário (≥ 3:1) |
| `--footer-bg` / `--footer-text` / `--footer-muted` | `#0f172a` / `#e2e8f0` / `#94a3b8` | rodapé (escuro por padrão) |
| `--color-whatsapp` | `#25d366` | não alterar |
| `--font-heading` / `--font-body` | Manrope / Inter (+ fallbacks) | nome exato da família entre aspas, igual ao `<link>` |
| `--text-sm … --text-5xl` | `clamp()` fluido | `h1`=4xl, hero=5xl, `h2`=3xl, `h3`=xl, `.lead`=lg |
| `--space-1 … --space-10` | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px (rem) | todo espaçamento; nunca px soltos |
| `--section-padding` | `clamp(64px, 8vw, 96px)` | respiro vertical das seções |
| `--radius-sm` / `-md` / `-lg` / `-pill` | 8 / 12 / 16px / 999px | botões=md, cards e mídia=lg |
| `--shadow-sm` / `-md` / `-lg` | suaves | header rolado / card hover / hero media |
| `--container` / `--container-narrow` | 1160px / 760px | largura do conteúdo / texto longo e FAQ |
| `--duration` / `--ease` | 250ms / cubic-bezier | transições |
| `--header-height` | 4.5rem | header fixo e `scroll-padding-top` |

Direções de estilo: os valores por direção estão em `GUIA-DESIGN §3`; a especificação traz a tabela final. Troque só valores; não renomeie nem apague tokens.

### 3.3 Classes (tabela classe → para quê)

| Classe | Para quê | Observação |
|---|---|---|
| `.container` / `.container--narrow` | limita largura e centraliza | narrow = 760px (texto longo, FAQ) |
| `.section` / `.section--alt` / `.section--tight` | bloco vertical com respiro / fundo `surface` / 60% do respiro | alternar `section` e `section--alt` entre seções |
| `.section__header` / `--center` | eyebrow + h2 + lead de abertura, max 60ch | `--center` centraliza |
| `.grid` + `.grid--2` / `--3` / `--4` | grade: 1 coluna no celular; 2 a partir de 40rem (3/4) ou 48rem (2); 3/4 a partir de 64rem | nº de itens compatível com colunas |
| `.split` / `.split--reverse` | 2 colunas texto/imagem (≥ 48rem) | `--reverse` manda o 1º filho para a direita |
| `.stack` / `--sm` / `--lg` | espaço vertical uniforme entre filhos (16 / 8 / 32px) | substitui margens soltas |
| `.cluster` / `--center` | itens lado a lado que quebram linha (botões, tags) | |
| `.btn` + `--primary` / `--secondary` / `--ghost` / `--inverse` / `--whatsapp` | botão cheio / contornado / só texto / claro sobre fundo colorido / verde WhatsApp | `--inverse` dentro de `.cta-band` |
| `.btn--sm` / `--lg` / `--pill` / `--block` | tamanhos, pílula, largura total | `--sm` no header; `--lg` no hero |
| `.card` / `.card--hover` | caixa com borda e raio / levanta no hover | `.card > .media` encosta a imagem nas bordas de cima |
| `.badge` | etiqueta pílula (ex.: "Mais escolhido") | |
| `.eyebrow` / `.lead` / `.prose` | linha curta em caixa alta / subtítulo cinza 60ch / texto longo 65ch com margens de h2/h3/listas | |
| `.media` + `--16x9` / `--4x3` / `--1x1` / `--3x4` / `--shadow` | caixa de imagem/iframe com proporção fixa e `object-fit: cover` | evita salto de layout |
| `.site-header` / `.site-header__inner` / `.brand` / `.brand__logo` / `--light` | header fixo com blur / flex / logo + nome / logo 36px / logo invertido para o rodapé | `--light` aplica `brightness(0) invert(1)` |
| `.nav` / `.nav__list` / `.nav__toggle` / `.nav__toggle-icon` / `.nav__toggle-bar` | menu (painel no celular, inline ≥ 64rem) / lista / botão hambúrguer / 3 barras que viram X | `.is-open` no `.nav` via JS |
| `.hero` / `--split` / `--centered` / `.hero__inner` / `__content` / `__title` / `__title--md` / `__text` / `__actions` / `__proof` / `__media` | hero / 2 colunas ≥ 48rem / centralizado / … / H1 5xl / H1 4xl (menor) / subtítulo / botões / linha de provas / imagem | |
| `.logos` / `.logos__title` | faixa de logos em cinza (colorem no hover) / título pequeno em caixa alta | logos com `height` 36px |
| `.feature` / `.feature__icon` | card de benefício ou serviço / quadrado 48px com ícone 24px | usar dentro de `.card` |
| `.steps` / `.step` / `.step__number` | grade de passos / passo / círculo numerado | número escrito no HTML |
| `.stats` / `.stat` / `.stat__value` / `.stat__label` | faixa de números centralizada / item / número grande primário / rótulo | |
| `.testimonial` / `__quote` / `__author` / `__avatar` / `__name` / `__role` / `__stars` | depoimento em `.card` / citação com aspas automáticas / linha do autor / foto 48px redonda / nome / cargo / estrelas em `accent` | |
| `.plan` / `--featured` / `__badge` / `__name` / `__price` / `__desc` / `__list` | plano em `.card` / destacado / etiqueta flutuante / nome / preço (`<small>` para "/mês") / descrição / lista com ✓ | |
| `.faq` / `.faq__item` / `.faq__answer` | acordeão 760px / `<details>` com +/− / resposta | sem JS |
| `.cta-band` / `--full` | faixa primária com raio / sem raio (sangrada) | |
| `.portfolio__item` | `<figure>` com `.media` + `figcaption` (`strong` + `span`) | zoom suave no hover |
| `.member` | integrante: `.media` redonda 224px + h3 + p | |
| `.video` | caixa 960px para `.media--16x9` com iframe | |
| `.contact` / `.contact__info` / `.contact__map` | 2 colunas ≥ 48rem (formulário 1.2fr / dados 1fr) / lista com ícones / caixa do mapa | |
| `.form` / `.form--card` / `.field` / `.field--check` / `.field__hint` / `.form__honeypot` / `.form__actions` / `.form__note` / `.form__status` | formulário em grade / em caixa / campo (label + input) / checkbox / ajuda / armadilha fora da tela / linha do botão / nota / mensagem de status | `form__honeypot` nunca com `display:none` |
| `.site-footer` / `__grid` / `__brand` / `__bottom` / `--simple` | rodapé escuro / 4 colunas (2fr 1fr 1fr 1.2fr ≥ 64rem) / coluna da marca / linha legal / só a linha legal | `--simple` em páginas internas simples |
| `.whatsapp-float` / `.cookie-banner` | botão fixo 56px no canto / caixa fixa 448px no rodapé | banner começa `hidden` |
| `.reveal` + `data-delay="1|2|3"` | aparece ao rolar (opacity + 16px) / atraso 80/160/240ms | só anima com `html.js`; não usar no texto do hero |
| `.visually-hidden` / `.skip-link` / `.text-center` / `.text-muted` / `.text-sm` / `.mt-0` / `.icon` | só para leitores de tela / pular para o conteúdo / utilitários / ícone 20px em linha | `.mt-0` perde para `.prose h2` (use `.section__header`) |

Estados controlados pelo JS: `html.js`, `.nav.is-open`, `body.menu-open`, `.site-header.is-scrolled`, `.reveal.is-visible`.

### 3.4 main.js: os 7 comportamentos

| # | Comportamento | Gancho no HTML |
|---|---|---|
| 1 | Marca `<html class="js">`; sem JS, `.reveal` fica visível (CSS só anima com `html.js`) | — |
| 2 | Menu mobile: abre/fecha, `aria-expanded`, rótulo "Abrir/Fechar menu", fecha ao clicar em link, no Esc (devolve foco ao botão) e ao passar para ≥ 64rem | `[data-nav-toggle]` com `aria-controls="menu"` → `<nav id="menu">` |
| 3 | `.is-scrolled` no header após 8px de rolagem (borda + sombra) | `[data-header]` |
| 4 | `.is-visible` em `.reveal` ao entrar na tela (IntersectionObserver, 10%, margem −10%); tudo visível se `prefers-reduced-motion` | `.reveal`, `data-delay` |
| 5 | Ano atual | `[data-year]` |
| 6 | Ao enviar o formulário: desabilita o botão, "Enviando..." no botão e em `[data-form-status]`. O envio é o POST normal do HTML | `<form data-form>`, `[data-form-status]` |
| 7 | Cookies: o banner só aparece se existir `<script type="text/plain" data-consent>`; "Aceitar" converte esses scripts em `<script>` reais (mantém `src`, `async` e conteúdo inline) e grava `localStorage["cookie-consent"]="accepted"`; "Recusar" grava `rejected`; nas visitas seguintes respeita a escolha; sem scripts `data-consent` o banner é removido | `[data-cookie-banner]`, `[data-cookie-accept]`, `[data-cookie-reject]`, `script[type="text/plain"][data-consent]` |

Para redefinir a escolha de cookies em teste: `localStorage.removeItem('cookie-consent')` no console.

### 3.5 Como adaptar, passo a passo

1. `cp -r kit-sites/base site` (inclui `.nojekyll` e `assets/`). Nunca comece do zero.
2. `styles.css` bloco 1: cole os valores da `ESPECIFICACAO §3`. `--font-heading`/`--font-body` com o nome exato das famílias.
3. `<head>` de cada HTML: `<link>` do Google Fonts da especificação (mesmo em `privacidade.html` e `obrigado.html`); `title`, `description`, `canonical`, `og:*`, `theme-color` = `--color-primary`; JSON-LD com dados reais (§7).
4. `assets/`: logo real (ajustar `width`/`height` do `<img>` para altura 36), favicon com a cor da marca, `og.jpg` 1200×630, `apple-touch-icon.png` 180×180 (sem eles: remova as tags do head e anote em Pendências). Fotos em `assets/img/` com os nomes da especificação.
5. `index.html`: preencha header, hero, footer e `whatsapp-float` (ou remova o bloco inteiro, com marcadores, se não houver WhatsApp). Cole as demais seções (§4) no lugar do comentário "Insira aqui", na ordem da especificação. Remova `features-grid`/`cta-band`/`contact-split` do starter se a especificação não os tiver.
6. `privacidade.html`: dados legais; em cada `{{SE USAR ANALYTICS… / SE NÃO USAR…}}` deixe só a alternativa certa.
7. `obrigado.html`, `404.html`, `robots.txt`, `sitemap.xml`: URL final e nome.
8. `site/README.md`: seções 1, 2, 4 e 5 no setup; 3 e 6 conforme constrói.
9. Verifique `grep -rn "{{" site/` vazio antes do QA. Verifique `grep -rn 'href="/\|src="/' site/*.html` vazio (caminhos absolutos).

## 4. Snippets por seção do catálogo

Regras para todos: copie com o par de marcadores; troque `id`/`aria-labelledby` pelos nomes da especificação (o `id` é o mesmo do menu e do README); só classes do §3.3; textos entre `{{ }}` são exemplos a substituir pela copy final; imagens com `src` relativo, `alt`, `width`/`height` reais e `loading="lazy"` (exceto hero); `.reveal` nos itens repetidos, com `data-delay` escalonado (não usar se movimento = nenhum). Todos os snippets abaixo foram renderizados juntos em 375px e 1280px sem rolagem horizontal e sem erros de console. Regras de conteúdo (quantidades, comprimentos) em `GUIA-DESIGN §5`.

### 4.1 `header-nav`

Já está em `index.html`. Regras: 3-6 links de 1-2 palavras + 1 CTA (`btn btn--primary btn--sm`); `aria-controls="menu"` = `id` do `<nav>`; em páginas internas, links `index.html#secao` e `aria-current="page"` no link da página atual (§12). O logo: `<img class="brand__logo" src="assets/logo.svg" alt="{{Nome}}" width="140" height="36">`; sem logo, use texto: `<a class="brand" href="index.html">{{Nome}}</a>`.

### 4.2 `hero-split`

Já está em `index.html` (texto à esquerda, imagem 4:3 à direita a partir de 48rem). Variações: `hero__title--md` para H1 longo (10-12 palavras); `media--3x4` para foto vertical; remover `.hero__proof` se não houver provas; CTA WhatsApp = `btn btn--whatsapp btn--lg` com `target="_blank" rel="noopener"`. A imagem do hero é a única sem `loading="lazy"` e com `fetchpriority="high"`.

### 4.3 `hero-centered`

```html
<!-- ===== [hero-centered] Hero ===== -->
<section class="hero hero--centered" id="inicio" aria-labelledby="inicio-titulo">
  <div class="container hero__inner">
    <div class="hero__content">
      <span class="eyebrow">{{Eyebrow: para quem é / onde atua}}</span>
      <h1 class="hero__title" id="inicio-titulo">{{H1: resultado principal, 6-12 palavras}}</h1>
      <p class="lead hero__text">{{Subtítulo: como entrega esse resultado e para quem, 15-30 palavras.}}</p>
      <div class="cluster hero__actions">
        <a class="btn btn--primary btn--lg" href="#contato">{{CTA primário}}</a>
        <a class="btn btn--ghost btn--lg" href="#como-funciona">{{CTA secundário}}</a>
      </div>
    </div>
    <div class="hero__media"><!-- opcional: remova este bloco se não houver imagem -->
      <div class="media media--16x9 media--shadow">
        <img src="assets/img/hero.webp" alt="{{O que a imagem mostra}}" width="1600" height="900" fetchpriority="high">
      </div>
    </div>
  </div>
</section>
<!-- ===== /[hero-centered] ===== -->
```

### 4.4 `logos-strip`

```html
<!-- ===== [logos-strip] Clientes ===== -->
<section class="section section--tight" id="clientes" aria-labelledby="clientes-titulo">
  <div class="container">
    <h2 class="logos__title" id="clientes-titulo">{{Quem confia na gente}}</h2>
    <div class="logos">
      <img src="assets/img/logo-cliente-1.svg" alt="{{Cliente 1}}" width="140" height="36" loading="lazy">
      <img src="assets/img/logo-cliente-2.svg" alt="{{Cliente 2}}" width="140" height="36" loading="lazy">
      <img src="assets/img/logo-cliente-3.svg" alt="{{Cliente 3}}" width="140" height="36" loading="lazy">
      <img src="assets/img/logo-cliente-4.svg" alt="{{Cliente 4}}" width="140" height="36" loading="lazy">
    </div>
  </div>
</section>
<!-- ===== /[logos-strip] ===== -->
```
Notas: 4-8 logos SVG ou PNG transparente, `height` real de cada um (o CSS iguala a 36px); ficam cinza e colorem no hover. Se no celular ficar 1 logo por linha, bloco Z: `/* [logos-strip] #clientes: logos mais próximos no celular */ @media (max-width: 39.99rem) { .logos { gap: var(--space-4) var(--space-5); } }`.

### 4.5 `features-grid`

Já está em `index.html` (3 cards `card card--hover feature` em `grid--3`, ícone em `.feature__icon`). 4 itens → `grid--4` ou `grid--2`; 6 itens → `grid--3`. Nunca 4 itens em `grid--3` (sobra um órfão). Ícones: §4.22.

### 4.6 `services-cards`

```html
<!-- ===== [services-cards] Serviços ===== -->
<section class="section" id="servicos" aria-labelledby="servicos-titulo">
  <div class="container">
    <div class="section__header">
      <span class="eyebrow">{{Serviços}}</span>
      <h2 id="servicos-titulo">{{Título: o que fazemos, 3-6 palavras}}</h2>
      <p class="lead">{{Uma frase de apoio (opcional).}}</p>
    </div>
    <div class="grid grid--2">
      <article class="card card--hover feature reveal">
        <div class="media media--4x3"><img src="assets/img/servico-01.webp" alt="{{O que a foto mostra}}" width="800" height="600" loading="lazy"></div>
        <h3>{{Serviço 1}}</h3>
        <p>{{1-2 frases: para quem é e o que resolve.}}</p>
        <a class="btn btn--ghost" href="#contato">{{Pedir orçamento}} <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </article>
      <article class="card card--hover feature reveal" data-delay="1">
        <div class="media media--4x3"><img src="assets/img/servico-02.webp" alt="{{O que a foto mostra}}" width="800" height="600" loading="lazy"></div>
        <h3>{{Serviço 2}}</h3>
        <p>{{1-2 frases.}}</p>
        <a class="btn btn--ghost" href="#contato">{{Pedir orçamento}} <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </article>
    </div>
  </div>
</section>
<!-- ===== /[services-cards] ===== -->
```
Notas: sem imagem → troque `.media` por `.feature__icon` com ícone (vira igual ao `features-grid`). 3 serviços → `grid--3`; 4 → `grid--2` com imagem ou `grid--4` só com ícone; 5-8 → `grid--3`/`grid--4` só com ícone. Link do card: `#contato`, WhatsApp ou página do serviço.

### 4.7 `steps`

```html
<!-- ===== [steps] Como funciona ===== -->
<section class="section section--alt" id="como-funciona" aria-labelledby="como-funciona-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <span class="eyebrow">{{Como funciona}}</span>
      <h2 id="como-funciona-titulo">{{Título: do contato ao resultado em 3 passos}}</h2>
    </div>
    <div class="stack stack--lg">
      <div class="grid grid--3 steps">
        <div class="step reveal">
          <span class="step__number" aria-hidden="true">1</span>
          <h3>{{Passo 1, 2-4 palavras}}</h3>
          <p>{{Uma frase sobre o que acontece.}}</p>
        </div>
        <div class="step reveal" data-delay="1">
          <span class="step__number" aria-hidden="true">2</span>
          <h3>{{Passo 2}}</h3>
          <p>{{Uma frase.}}</p>
        </div>
        <div class="step reveal" data-delay="2">
          <span class="step__number" aria-hidden="true">3</span>
          <h3>{{Passo 3}}</h3>
          <p>{{Uma frase.}}</p>
        </div>
      </div>
      <div class="cluster cluster--center"><!-- opcional -->
        <a class="btn btn--primary btn--lg" href="#contato">{{CTA primário}}</a>
      </div>
    </div>
  </div>
</section>
<!-- ===== /[steps] ===== -->
```
Notas: 4 passos → `grid--4`. Os passos podem ser `card` (`<div class="card step reveal">`) quando o fundo da seção for `section` (branco).

### 4.8 `about-split`

```html
<!-- ===== [about-split] Sobre ===== -->
<section class="section" id="sobre" aria-labelledby="sobre-titulo">
  <div class="container split">
    <div class="stack">
      <span class="eyebrow">{{Sobre nós}}</span>
      <h2 id="sobre-titulo" class="mt-0">{{Título: quem somos em 4-8 palavras}}</h2>
      <p>{{Parágrafo 1: origem, há quanto tempo, para quem, 2-3 frases.}}</p>
      <p>{{Parágrafo 2: como trabalham, o que garante o resultado.}}</p>
      <ul class="about__facts">
        <li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>{{Fato 1: 12 anos de mercado}}</li>
        <li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>{{Fato 2: +300 projetos entregues}}</li>
        <li><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>{{Fato 3: equipe certificada}}</li>
      </ul>
      <div class="cluster"><a class="btn btn--secondary" href="#contato">{{CTA secundário}}</a></div>
    </div>
    <div class="media media--4x3 reveal">
      <img src="assets/img/sobre.webp" alt="{{Foto real: equipe, espaço ou trabalho}}" width="1200" height="900" loading="lazy">
    </div>
  </div>
</section>
<!-- ===== /[about-split] ===== -->
```
CSS necessário (bloco Z, só se usar a lista de fatos):
```css
/* [about-split] #sobre: lista de fatos com ícone */
.about__facts { list-style: none; padding: 0; display: grid; gap: var(--space-2); }
.about__facts li { display: flex; gap: var(--space-2); align-items: center; }
.about__facts svg { color: var(--color-primary); }
```
Notas: imagem à esquerda → `split split--reverse`. Sem fatos → remova o `<ul>` (e o CSS). Foto vertical → `media--3x4`.

### 4.9 `stats-band`

```html
<!-- ===== [stats-band] Números ===== -->
<section class="section section--alt section--tight" id="numeros" aria-labelledby="numeros-titulo">
  <div class="container">
    <h2 class="visually-hidden" id="numeros-titulo">{{Nossos números}}</h2>
    <div class="grid grid--4 stats">
      <div class="stat reveal"><span class="stat__value">{{12 anos}}</span><span class="stat__label">{{de mercado}}</span></div>
      <div class="stat reveal" data-delay="1"><span class="stat__value">{{+4.000}}</span><span class="stat__label">{{clientes atendidos}}</span></div>
      <div class="stat reveal" data-delay="2"><span class="stat__value">{{4,9}}</span><span class="stat__label">{{nota no Google}}</span></div>
      <div class="stat reveal" data-delay="3"><span class="stat__value">{{98%}}</span><span class="stat__label">{{de clientes satisfeitos}}</span></div>
    </div>
  </div>
</section>
<!-- ===== /[stats-band] ===== -->
```
Notas: 3 números → `grid--3`. No celular fica 1 coluna; para 2 colunas, bloco Z: `/* [stats-band] #numeros: 2 colunas no celular */ @media (max-width: 39.99rem) { .stats { grid-template-columns: repeat(2, 1fr); } }` (sempre dentro da media query; fora dela a regra quebraria o desktop). Nota de rodapé de um número (ex.: "*pesquisa interna"): `<p class="text-sm text-muted text-center">` depois da grade.

### 4.10 `testimonials-grid`

```html
<!-- ===== [testimonials-grid] Depoimentos ===== -->
<section class="section" id="depoimentos" aria-labelledby="depoimentos-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <span class="eyebrow">{{Depoimentos}}</span>
      <h2 id="depoimentos-titulo">{{Título: o que dizem nossos clientes}}</h2>
    </div>
    <div class="grid grid--3">
      <article class="card testimonial reveal">
        <span class="testimonial__stars" aria-label="5 de 5 estrelas">★★★★★</span>
        <blockquote class="testimonial__quote">{{Citação real, 20-60 palavras, com resultado concreto.}}</blockquote>
        <div class="testimonial__author">
          <img class="testimonial__avatar" src="assets/img/depo-nome.webp" alt="" width="96" height="96" loading="lazy">
          <div><span class="testimonial__name">{{Nome Sobrenome}}</span><span class="testimonial__role">{{cargo, empresa ou "cliente desde 2023"}}</span></div>
        </div>
      </article>
      <article class="card testimonial reveal" data-delay="1">
        <span class="testimonial__stars" aria-label="5 de 5 estrelas">★★★★★</span>
        <blockquote class="testimonial__quote">{{Citação 2.}}</blockquote>
        <div class="testimonial__author">
          <div><span class="testimonial__name">{{Nome (sem foto)}}</span><span class="testimonial__role">{{descrição}}</span></div>
        </div>
      </article>
    </div>
  </div>
</section>
<!-- ===== /[testimonials-grid] ===== -->
```
Notas: 2 depoimentos → `grid--2`; 3 → `grid--3`; 4 → `grid--2`. Sem foto: remova o `<img>` (segundo card). Sem avaliação por estrelas: remova a linha `testimonial__stars`. As aspas de abertura vêm do CSS; não escreva aspas no texto.

### 4.11 `portfolio-grid`

```html
<!-- ===== [portfolio-grid] Portfólio ===== -->
<section class="section section--alt" id="portfolio" aria-labelledby="portfolio-titulo">
  <div class="container">
    <div class="section__header">
      <span class="eyebrow">{{Portfólio}}</span>
      <h2 id="portfolio-titulo">{{Título: projetos recentes}}</h2>
    </div>
    <div class="grid grid--3">
      <figure class="portfolio__item reveal">
        <div class="media media--4x3"><img src="assets/img/projeto-01.webp" alt="{{O que a foto mostra}}" width="800" height="600" loading="lazy"></div>
        <figcaption><strong>{{Nome do projeto}}</strong><span>{{Tipo · cidade · ano}}</span></figcaption>
      </figure>
      <figure class="portfolio__item reveal" data-delay="1">
        <div class="media media--4x3"><img src="assets/img/projeto-02.webp" alt="{{O que a foto mostra}}" width="800" height="600" loading="lazy"></div>
        <figcaption><strong>{{Projeto 2}}</strong><span>{{Tipo · cidade · ano}}</span></figcaption>
      </figure>
      <figure class="portfolio__item reveal" data-delay="2">
        <div class="media media--4x3"><img src="assets/img/projeto-03.webp" alt="{{O que a foto mostra}}" width="800" height="600" loading="lazy"></div>
        <figcaption><strong>{{Projeto 3}}</strong><span>{{Tipo · cidade · ano}}</span></figcaption>
      </figure>
    </div>
  </div>
</section>
<!-- ===== /[portfolio-grid] ===== -->
```
Notas: 4-9 itens, múltiplos de 3 (`grid--3`) ou de 2/4 (`grid--2`, `grid--4`); todas as imagens na MESMA proporção (`media--4x3` ou `media--1x1`); link opcional envolvendo `.media` (`<a href="projeto.html">`). Sem lightbox/carrossel.

### 4.12 `pricing-table`

```html
<!-- ===== [pricing-table] Planos ===== -->
<section class="section" id="planos" aria-labelledby="planos-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <span class="eyebrow">{{Planos}}</span>
      <h2 id="planos-titulo">{{Título: escolha o plano certo para você}}</h2>
    </div>
    <div class="grid grid--3">
      <article class="card plan reveal">
        <h3 class="plan__name">{{Básico}}</h3>
        <p class="plan__price">{{R$ 190}}<small>/mês</small></p>
        <p class="plan__desc">{{Para quem está começando.}}</p>
        <ul class="plan__list"><li>{{Item 1}}</li><li>{{Item 2}}</li><li>{{Item 3}}</li><li>{{Item 4}}</li></ul>
        <a class="btn btn--secondary btn--block" href="#contato">{{Quero este}}</a>
      </article>
      <article class="card plan plan--featured reveal" data-delay="1">
        <span class="badge plan__badge">{{Mais escolhido}}</span>
        <h3 class="plan__name">{{Profissional}}</h3>
        <p class="plan__price">{{R$ 390}}<small>/mês</small></p>
        <p class="plan__desc">{{Para quem quer crescer.}}</p>
        <ul class="plan__list"><li>{{Tudo do Básico}}</li><li>{{Item 2}}</li><li>{{Item 3}}</li><li>{{Item 4}}</li><li>{{Item 5}}</li></ul>
        <a class="btn btn--primary btn--block" href="#contato">{{Quero este}}</a>
      </article>
      <article class="card plan reveal" data-delay="2">
        <h3 class="plan__name">{{Empresa}}</h3>
        <p class="plan__price">{{Sob consulta}}</p>
        <p class="plan__desc">{{Para equipes e volumes maiores.}}</p>
        <ul class="plan__list"><li>{{Tudo do Profissional}}</li><li>{{Item 2}}</li><li>{{Item 3}}</li></ul>
        <a class="btn btn--secondary btn--block" href="#contato">{{Falar com a gente}}</a>
      </article>
    </div>
  </div>
</section>
<!-- ===== /[pricing-table] ===== -->
```
Notas: 2 planos → `grid--2`; só 1 plano destacado (`plan--featured` + `plan__badge`); preço no formato `R$ 1.290` (ponto de milhar, sem centavos quando inteiros).

### 4.13 `faq-accordion`

```html
<!-- ===== [faq-accordion] Dúvidas ===== -->
<section class="section section--alt" id="duvidas" aria-labelledby="duvidas-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <span class="eyebrow">{{Dúvidas frequentes}}</span>
      <h2 id="duvidas-titulo">{{Título: o que perguntam antes de fechar}}</h2>
    </div>
    <div class="faq">
      <details class="faq__item">
        <summary>{{Pergunta 1, na linguagem do cliente?}}</summary>
        <div class="faq__answer"><p>{{Resposta direta em 1-3 frases.}}</p></div>
      </details>
      <details class="faq__item">
        <summary>{{Pergunta 2?}}</summary>
        <div class="faq__answer"><p>{{Resposta.}}</p></div>
      </details>
      <details class="faq__item">
        <summary>{{Pergunta 3?}}</summary>
        <div class="faq__answer"><p>{{Resposta.}}</p></div>
      </details>
    </div>
  </div>
</section>
<!-- ===== /[faq-accordion] ===== -->
```
Notas: 4-8 perguntas; todas fechadas (sem `open`, regra de `GUIA-DESIGN §5`); sem JS; `<summary>` já é focável e abre com Enter/Espaço. Se a especificação pedir, adicione o JSON-LD `FAQPage` (§7.3).

### 4.14 `team-grid`

```html
<!-- ===== [team-grid] Equipe ===== -->
<section class="section" id="equipe" aria-labelledby="equipe-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <span class="eyebrow">{{Equipe}}</span>
      <h2 id="equipe-titulo">{{Título: quem cuida do seu projeto}}</h2>
    </div>
    <div class="grid grid--4">
      <article class="member reveal">
        <div class="media media--1x1"><img src="assets/img/equipe-nome.webp" alt="{{Nome Sobrenome}}" width="600" height="600" loading="lazy"></div>
        <h3>{{Nome Sobrenome}}</h3>
        <p>{{Cargo · 1 linha de credencial}}</p>
      </article>
      <article class="member reveal" data-delay="1">
        <div class="media media--1x1"><img src="assets/img/equipe-nome-2.webp" alt="{{Nome}}" width="600" height="600" loading="lazy"></div>
        <h3>{{Nome}}</h3>
        <p>{{Cargo}}</p>
      </article>
    </div>
  </div>
</section>
<!-- ===== /[team-grid] ===== -->
```
Notas: fotos quadradas (600×600) com enquadramento parecido; 3 pessoas → `grid--3`; 2 → `grid--2`. A foto fica redonda pelo CSS.

### 4.15 `video-embed`

```html
<!-- ===== [video-embed] Vídeo ===== -->
<section class="section section--alt" id="video" aria-labelledby="video-titulo">
  <div class="container">
    <div class="section__header section__header--center">
      <h2 id="video-titulo">{{Título: veja como funciona em 2 minutos}}</h2>
    </div>
    <div class="video media media--16x9">
      <iframe src="https://www.youtube-nocookie.com/embed/{{ID_DO_VIDEO}}" title="{{Título do vídeo}}" width="1280" height="720" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</section>
<!-- ===== /[video-embed] ===== -->
```
Notas: o ID é o trecho depois de `v=` na URL do YouTube (`watch?v=abc123` → `abc123`); `youtube-nocookie.com` não grava cookies antes do play (não exige o aviso de cookies). Vídeo vertical: `media--3x4` com `max-width` no bloco Z.

### 4.16 `cta-band`

Já está em `index.html` (`section section--tight` + `.cta-band` com `btn--inverse`). Faixa sangrada (sem raio, de borda a borda): troque `<div class="container"><div class="cta-band">` por `<div class="cta-band cta-band--full"><div class="container">`. Use a cada 2-3 seções e antes do contato; o botão aponta para `#contato` ou WhatsApp.

### 4.17 `contact-split`

Já está em `index.html`: formulário `form--card` (nome, WhatsApp, e-mail, mensagem, consentimento) + lista `contact__info` (WhatsApp, e-mail, endereço, horário) + mapa opcional. Configuração do `action`/`access_key` em §9; mapa em §10.2 (substitua o `<div class="contact__map media media--16x9" hidden>` pelo bloco com iframe, ou apague-o). Sem formulário (Q37 = B): apague o `<form>` e deixe `.contact__info` + um `btn btn--whatsapp btn--lg`; o `.contact` vira 1 coluna sozinho.

### 4.18 `text-prose`

```html
<!-- ===== [text-prose] Texto longo ===== -->
<section class="section" id="texto" aria-labelledby="texto-titulo">
  <div class="container container--narrow">
    <div class="section__header">
      <span class="eyebrow">{{Eyebrow opcional}}</span>
      <h2 id="texto-titulo">{{Título do texto}}</h2>
    </div>
    <div class="prose">
      <p>{{Parágrafo 1.}}</p>
      <h3>{{Subtítulo}}</h3>
      <p>{{Parágrafo 2.}}</p>
      <ul><li>{{Item}}</li><li>{{Item}}</li></ul>
    </div>
  </div>
</section>
<!-- ===== /[text-prose] ===== -->
```
Notas: em página própria (privacidade, termos), o título é `h1` dentro do `.prose` como em `privacidade.html`. Não coloque `h2` com `mt-0` dentro de `.prose` (o `.prose h2` tem margem própria e vence o utilitário).

### 4.19 `footer`

Já está em `index.html` (4 colunas: marca + navegação + redes + contato; linha legal com `data-year`, razão social, CNPJ e link da privacidade). Remova colunas vazias (o grid se ajusta); sem redes → apague a coluna "Redes". Páginas internas simples: `site-footer site-footer--simple` só com `.site-footer__bottom` (como em `privacidade.html`). Links de âncora em páginas internas: `index.html#secao`.

### 4.20 `whatsapp-float`

Já está em `index.html`: `<a class="whatsapp-float" href="https://wa.me/55DDDNUMERO?text=MENSAGEM" target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">` + SVG. Montagem do link em §10.1. Apague o bloco inteiro (com marcadores) se a pessoa não quiser WhatsApp.

### 4.21 `cookie-banner`

Já está em `index.html`, oculto (`hidden`). Fica invisível e é removido pelo `main.js` enquanto não houver `<script type="text/plain" data-consent>` na página; portanto deixe o bloco em todas as páginas e só adicione analytics conforme §10.6/§11. Textos do banner: ajuste só se a especificação pedir.

### 4.22 Mini-biblioteca de ícones (Lucide, SVG inline 24×24, stroke 2)

Use dentro de `<span class="feature__icon" aria-hidden="true">…</span>` (quadrado 48px) ou com `class="icon"` (20px, em linha) e `aria-hidden="true"`. Abertura padrão de todos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` + conteúdo abaixo + `</svg>`. Para botão/`feature__icon`, ponha `aria-hidden` no SVG; nunca `alt`. Não invente paths: se precisar de um ícone fora da lista, escolha o mais próximo daqui.

| Nome | Conteúdo do SVG |
|---|---|
| check | `<path d="M20 6 9 17l-5-5"/>` |
| shield-check | `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>` |
| zap | `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>` |
| clock | `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>` |
| phone | `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>` |
| mail | `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>` |
| map-pin | `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>` |
| star | `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>` |
| users | `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>` |
| heart | `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>` |
| award | `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>` |
| calendar | `<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>` |
| message-circle | `<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>` |
| arrow-right | `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>` |
| chevron-down | `<path d="m6 9 6 6 6-6"/>` |
| instagram | `<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>` |

Logo do WhatsApp (preenchido, `fill="currentColor"`, sem stroke): já está no `whatsapp-float` do `index.html`; copie de lá.

## 5. Responsivo

- Mobile-first: o CSS base é a versão de celular; as media queries só adicionam colunas. Breakpoints do starter: `40rem` (640px: grids de 3/4 viram 2 colunas; rodapé 2 colunas), `48rem` (768px: `grid--2`, `.split`, `.hero--split`, `.contact` em 2 colunas; gap dos grids maior), `64rem` (1024px: `grid--3`/`grid--4` completos; menu inline; rodapé 4 colunas). Não crie outros breakpoints; se precisar de exceção, use os mesmos valores no bloco Z.
- Faixa obrigatória: 320px a 1440px sem rolagem horizontal. Causas comuns de estouro: largura fixa em px, `white-space: nowrap` em texto longo, imagem sem `max-width` (o starter já põe `max-width:100%` em `img`/`svg`/`iframe`), tabela larga, palavra sem espaço (URL, e-mail) → `overflow-wrap: anywhere` naquele elemento no bloco Z.
- Tamanhos de texto já são fluidos (`clamp`). Não use `vw` solto nem `font-size` em px. H1 muito grande no celular → `hero__title--md`.
- Botões: no celular, dois CTAs lado a lado podem quebrar linha (o `.cluster` cuida); para botão de largura total só no celular, bloco Z: `@media (max-width: 39.99rem) { .hero__actions .btn { width: 100%; } }`.
- Alvos de toque ≥ 44px: `.btn` (44px), `.nav__toggle` (44px), inputs (44px) e `summary` do FAQ já cumprem. Links de texto no rodapé ficam espaçados pelo `gap`.
- Header fixo: as âncoras já compensam a altura com `scroll-padding-top`. O `id` deve estar no `<section>`, não em um `div` interno.
- Como testar sem navegador: `grep -n "px" site/styles.css | grep -v "^\s*/\*" | sed -n '/Z. Específico/,$p'` lista px soltos no bloco Z. Com Playwright/Chromium disponível (Fase 5): viewports 375, 768, 1280 (e 320), `fullPage` screenshots, checar `document.documentElement.scrollWidth <= clientWidth` e erros de console; para capturar os `.reveal` visíveis, abra o contexto com `reducedMotion: 'reduce'` (o IntersectionObserver não dispara com rolagem programática no headless).
- Sem ferramentas: peça à pessoa um print do celular com a descrição `seção — problema`.

## 6. Acessibilidade

**Fórmula de contraste (WCAG 2.x)** — para cada cor, converta R, G, B (0-255) em c = v/255; se c ≤ 0,03928 use c/12,92, senão ((c+0,055)/1,055)^2,4; luminância L = 0,2126·R + 0,7152·G + 0,0722·B. Contraste = (L_clara + 0,05) / (L_escura + 0,05). Mínimos AA: 4,5:1 texto normal; 3:1 texto grande (≥ 24px, ou ≥ 18,66px em negrito), bordas de campos e ícones informativos. Em Node: `node -e "const L=h=>{const [r,g,b]=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255).map(c=>c<=0.03928?c/12.92:((c+0.055)/1.055)**2.4);return 0.2126*r+0.7152*g+0.0722*b};const [a,b]=['#0F766E','#FFFFFF'].map(L);console.log(((Math.max(a,b)+0.05)/(Math.min(a,b)+0.05)).toFixed(2))"`. Sem Node, a pessoa confere no WebAIM Contrast Checker.

Checklist (passagem final da Fase 4 e QA da Fase 5):
- [ ] 1 `h1` por página; `h2` para seções, `h3` para itens; nenhum nível pulado; seções decorativas (stats) com `h2` em `.visually-hidden`.
- [ ] Todo `<section>` com `aria-labelledby` apontando para o `id` do seu título.
- [ ] Contraste AA: texto ≥ 4,5:1; texto ≥ 24px (ou 19px bold) e botões ≥ 3:1; verificado no WebAIM Contrast Checker com os hex finais (`--color-text-muted` sobre `--color-surface` é o par que mais falha).
- [ ] Foco visível: não remova o `:focus-visible` do starter; não use `outline: none`.
- [ ] Skip link presente e `<main id="conteudo">`.
- [ ] Menu: botão com `aria-expanded` + `aria-controls` + rótulo em `.visually-hidden`; fecha com Esc (já no `main.js`); `<nav aria-label="Menu principal">`.
- [ ] FAQ com `<details>/<summary>` (teclado nativo). Não troque por `div` + JS.
- [ ] Formulário: todo `input` com `<label for>`; `required` nos obrigatórios; `autocomplete` (`name`, `tel`, `email`); `inputmode="tel"`; status em `role="status" aria-live="polite"`; honeypot com `aria-hidden="true"` e `tabindex="-1"` (nunca `display:none`, que alguns bots detectam, nem `hidden`, que o leitor de tela pula mas o CSS do starter já esconde fora da tela).
- [ ] Imagens: `alt` que descreve o conteúdo ("Fisioterapeuta orientando exercício de uma paciente"), não "imagem de…"; `alt=""` em decorativas (avatares ao lado do nome, ícones); SVG de ícone com `aria-hidden="true"`; logo com `alt="{{Nome}}"`.
- [ ] Links: texto que faz sentido sozinho ("Ver serviços", não "clique aqui"); `target="_blank"` sempre com `rel="noopener"`; link só-ícone com `aria-label` (ex.: `whatsapp-float`).
- [ ] Iframes com `title`.
- [ ] `prefers-reduced-motion`: já tratado no CSS (bloco 13) e no JS (`.reveal` fica visível). Não adicione animações fora de `.reveal` e `transition`.
- [ ] `lang="pt-BR"` no `<html>`; textos em inglês dentro da página com `lang="en"` no elemento.
- [ ] Zoom 200% sem perda de conteúdo (não use `maximum-scale` nem `user-scalable=no` no viewport).
- [ ] Ferramentas da pessoa (Fase 5): WAVE (extensão) sem erros; Lighthouse Acessibilidade ≥ 90.

## 7. SEO

### 7.1 `<head>` por página (ordem do starter)

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{Nome do negócio}} — {{proposta curta}}</title>                         <!-- 50-60 caracteres, nome + o que faz + cidade -->
<meta name="description" content="{{150-160 caracteres: o que faz, para quem, onde, CTA}}">
<link rel="canonical" href="https://www.dominio.com.br/">                       <!-- URL absoluta final; páginas internas: .../sobre.html -->
<meta name="theme-color" content="#1d4ed8">                                     <!-- = --color-primary -->
<meta property="og:type" content="website"><meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="{{Nome}}"><meta property="og:title" content="{{igual ao title}}">
<meta property="og:description" content="{{igual à description}}"><meta property="og:url" content="https://www.dominio.com.br/">
<meta property="og:image" content="https://www.dominio.com.br/assets/og.jpg">   <!-- absoluta; 1200×630 JPG ≤ 300 KB -->
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<!-- fontes (preconnect ×2 + link com display=swap), depois styles.css, depois o JSON-LD -->
```
- `obrigado.html` e `404.html`: `<meta name="robots" content="noindex, nofollow">`; `privacidade.html`: `noindex, follow`. Páginas internas reais: sem `robots`, com `canonical` próprio e OG próprio.
- URL final antes do domínio: `https://USUARIO.github.io/REPO/` (com barra). Ao trocar para domínio próprio (Fase 5 §5), substitua em todos os arquivos: `grep -rl "github.io" site/`.

### 7.2 JSON-LD (um por site, no `index.html`)

Negócio com endereço físico/atendimento local → `LocalBusiness` (ou subtipo: `MedicalBusiness`, `Dentist`, `LegalService`, `RealEstateAgent`, `Restaurant`, `BeautySalon`, `HomeAndConstructionBusiness`, `AutoRepair`, `Store`); empresa online/nacional sem endereço → `Organization` (sem `address`/`openingHours`, com `sameAs`).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Clínica Raiz Fisioterapia",
  "url": "https://www.clinicaraiz.com.br/",
  "image": "https://www.clinicaraiz.com.br/assets/og.jpg",
  "telephone": "+55-19-3333-0000",
  "email": "contato@clinicaraiz.com.br",
  "address": { "@type": "PostalAddress", "streetAddress": "Rua Coronel Quirino, 1000", "addressLocality": "Campinas", "addressRegion": "SP", "postalCode": "13025-000", "addressCountry": "BR" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "12:00" }
  ],
  "priceRange": "$$",
  "sameAs": ["https://www.instagram.com/clinicaraiz"]
}
</script>
```
Só inclua campos com dado real; apague os que não tiver (não deixe `{{ }}` nem strings vazias). Validar: Rich Results Test do Google (§15) ou `node -e "JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'))" <<< '…'` para checar a sintaxe.

### 7.3 Outros

- `FAQPage` (opcional, quando há `faq-accordion`): `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Pergunta?","acceptedAnswer":{"@type":"Answer","text":"Resposta."}}]}` com as MESMAS perguntas/respostas visíveis.
- `sitemap.xml`: uma `<url>` por página pública (não `obrigado.html`, não `404.html`); `lastmod` = data da publicação `AAAA-MM-DD`; URLs absolutas.
- `robots.txt`: o do starter (`Allow: /`, `Disallow: /obrigado.html`, `Sitemap:` absoluto).
- `404.html`: na raiz do repositório; o GitHub Pages o serve para qualquer URL inexistente; por isso é autossuficiente (CSS inline, link absoluto para a home). Repita os tokens de cor do site no `:root` inline dele.
- Texto: 1 `h1` com a palavra-chave principal + cidade; `h2` descritivos; `alt` com contexto; nomes de arquivo de imagem descritivos (`fisioterapia-campinas-hero.webp`).
- Não use: `meta keywords`, texto oculto, páginas duplicadas, `#` como `href`.

## 8. Performance

- Metas: Lighthouse mobile ≥ 90 em Performance/Acessibilidade/SEO; LCP ≤ 2,5s; CLS ≤ 0,1; home ≤ 1,5 MB.
- Imagens: WebP, qualidade ~80; largura máxima 1600px (hero), 1200px (`about-split`), 800px (cards/portfólio), 600px (equipe), 192px (avatares 2×); peso-alvo: hero ≤ 220 KB, cards ≤ 90 KB, avatar ≤ 15 KB. `width`/`height` reais em todo `<img>` (evita CLS; o CSS redimensiona). `loading="lazy"` em tudo abaixo da primeira dobra; a imagem do hero com `fetchpriority="high"` e sem lazy. Fallback JPG só se a pessoa exigir Safari antigo: `<picture><source srcset="x.webp" type="image/webp"><img src="x.jpg" …></picture>`.
- Conversão: a pessoa entrega WebP (Squoosh) na Fase 2; senão `cwebp -q 82 -resize 1600 0 -metadata none in.jpg -o out.webp` ou `magick in.jpg -auto-orient -strip -resize 1600x -quality 82 out.webp` (`-metadata none`/`-strip` removem EXIF e GPS do celular); sem ferramentas → Squoosh (§15). Checar peso: `ls -la site/assets/img` e total com `du -ch site/assets/img/* | tail -1`.
- Fontes: 2 famílias, 3-4 pesos no total (ex.: Inter 400;500;600 + Manrope 700;800); `display=swap`; os dois `preconnect`; fonte variável com intervalo (`wght@400..700`) só se a família for variável (fonts.google.com/variablefonts), senão a API devolve erro 400 e nada carrega. Fallback `system-ui` nos tokens.
- CSS/JS: um `styles.css` (~30 KB) e um `main.js` (~5 KB) com `defer`; nada externo além de fontes e, se houver, analytics/iframes. Não minifique (dificulta a Fase 6); o ganho é irrelevante.
- Iframes (mapa, vídeo, agenda): sempre `loading="lazy"` e dentro de `.media` com proporção (sem CLS). Mapa e vídeo abaixo da primeira dobra.
- Não use: carrosséis, vídeos de fundo, bibliotecas de animação, imagens em base64, SVG de foto, GIF.
- Medir (Fase 5, pela pessoa): PageSpeed Insights com a URL publicada, aba Celular; se Performance < 90, o culpado quase sempre é o peso da imagem do hero ou fontes demais.

## 9. Formulários em site estático

O GitHub Pages não processa `POST`; o formulário envia para um serviço que repassa por e-mail. **Serviço padrão do kit: Web3Forms** — gratuito para o volume de um site institucional (plano Free com limite mensal de envios; verificar o número atual em web3forms.com), sem conta para começar (a chave chega por e-mail), suporta `redirect` e honeypot no plano gratuito, sem marca d'água no e-mail, `POST` HTML puro. O `<form data-form>` do starter já usa os nomes de campo do Web3Forms (`subject`, `redirect`, `botcheck`).

Passo a passo (Fase 5 §6): a pessoa abre web3forms.com, informa o e-mail de destino (Q37), recebe o `access_key` por e-mail e cola na conversa. A IA preenche o `action` e o `access_key`, faz commit, e a pessoa envia um teste real pelo site publicado.

```html
<form class="form form--card" action="https://api.web3forms.com/submit" method="POST" data-form>
  <input type="hidden" name="access_key" value="{{CHAVE-RECEBIDA-POR-EMAIL}}">
  <input type="hidden" name="subject" value="Novo contato pelo site {{Nome do negócio}}">
  <input type="hidden" name="from_name" value="{{Nome do negócio}} — site">
  <input type="hidden" name="redirect" value="https://www.dominio.com.br/obrigado.html">   <!-- URL ABSOLUTA; sem ela o Web3Forms mostra a própria página de sucesso -->
  <div class="form__honeypot" aria-hidden="true">
    <label for="site-url">Não preencha este campo</label>
    <input type="text" id="site-url" name="botcheck" tabindex="-1" autocomplete="off">   <!-- preenchido = spam, descartado -->
  </div>
  <div class="field"><label for="nome">Nome</label><input type="text" id="nome" name="name" autocomplete="name" required></div>
  <div class="field"><label for="telefone">WhatsApp</label><input type="tel" id="telefone" name="phone" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" required></div>
  <div class="field"><label for="email">E-mail</label><input type="email" id="email" name="email" autocomplete="email" required></div>
  <div class="field"><label for="mensagem">Como podemos ajudar?</label><textarea id="mensagem" name="message" rows="4"></textarea></div>
  <div class="field field--check">
    <input type="checkbox" id="consentimento" name="consentimento" value="sim" required>
    <label for="consentimento">Concordo com o uso dos meus dados para retorno do contato, conforme a <a href="privacidade.html">Política de Privacidade</a>.</label>
  </div>
  <div class="form__actions">
    <button class="btn btn--primary" type="submit">Enviar mensagem</button>
    <span class="form__note">Resposta em até 1 dia útil.</span>
  </div>
  <p class="form__status" role="status" aria-live="polite" data-form-status></p>
</form>
```
- Campos: 3-4 (nome, WhatsApp/telefone, e-mail, mensagem). Nenhum a mais sem pedido da pessoa. Campo `email` vira o "responder para" do e-mail recebido.
- Consentimento LGPD: checkbox `required`, **nunca** `checked`; texto com link para a política. O nome `consentimento=sim` chega no e-mail como registro.
- Até a chave existir, deixe `value="{{CHAVE-RECEBIDA-POR-EMAIL}}"`; o `grep "{{"` do QA acusa o pendente.
- Teste real (Fase 5): enviar pelo site publicado, confirmar e-mail recebido e a chegada em `obrigado.html`. E-mail não chega → spam/lixo eletrônico; chave errada → a resposta do Web3Forms mostra o erro na tela.
- O `main.js` só muda o botão para "Enviando..."; o envio é o `POST` nativo (funciona sem JS).
- Spam: o `botcheck` resolve a maior parte. Se persistir, hCaptcha (suportado pelo Web3Forms) ou **Cloudflare Turnstile** (grátis: até 20 widgets, 10 hostnames por widget, desafios ilimitados): a pessoa cria o widget em dash.cloudflare.com → Turnstile com o domínio do site e envia a `sitekey`; a IA inclui `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>` no `<head>` e `<div class="cf-turnstile" data-sitekey="{{SITEKEY}}"></div>` antes do botão (Web3Forms e Formspree validam o token). O script precisa vir desse domínio (não copie para o site).
- A `access_key` e o ID do Formspree são públicos por natureza e podem ficar no HTML; tokens de API, senhas e `.env` nunca entram no repositório público.

Alternativa (3 linhas): **Formspree** — `action="https://formspree.io/f/{{ID}}"` (conta em formspree.io, plano gratuito com ~50 envios/mês (verificar); ao estourar o limite o serviço para de entregar sem avisar); campos `_subject` (assunto), `_gotcha` (honeypot: troque `name="botcheck"` por `name="_gotcha"`), `_next` (redirect; disponível em plano pago, verificar); campo `email` vira reply-to. Use só se a pessoa já tiver conta ou o Web3Forms estiver indisponível; registre em `site/README.md §6`.

Sem formulário: Q37 = B → só WhatsApp (botão `btn--whatsapp` no contato) e `mailto:`; remova o `<form>` e a linha do serviço em `privacidade.html`.

## 10. Integrações

### 10.1 WhatsApp

- Link: `https://wa.me/55DDDNUMERO?text=MENSAGEM` — número só dígitos, com 55 + DDD + número (`5519999990000`), sem espaços, hífens, parênteses ou `+`. Mensagem codificada para URL (espaço = `%20`; acentos codificados): `node -e "console.log(encodeURIComponent('Olá! Vim pelo site e quero agendar uma avaliação.'))"`. Sempre `target="_blank" rel="noopener"`.
- Onde: `whatsapp-float` (todas as páginas), CTA do hero/cta-band quando WhatsApp é primário (`btn btn--whatsapp btn--lg` ou `btn--primary` conforme a especificação), `contact__info`, rodapé, `obrigado.html`. Mensagens diferentes por ponto são permitidas se a especificação definir.
- Exibição: `(19) 99999-0000`; nunca o número cru no texto visível.

### 10.2 Google Maps

A pessoa vai ao Google Maps → busca o endereço → Compartilhar → "Incorporar um mapa" → copia o `<iframe>`. Cole dentro de `.contact__map` mantendo só `src`, e acrescente `title`, `width="600" height="338"`, `loading="lazy"`, `referrerpolicy="no-referrer-when-downgrade"`, `allowfullscreen`; remova `style=""` do iframe original (o `.media` dá proporção e raio):
```html
<div class="contact__map media media--16x9">
  <iframe src="https://www.google.com/maps/embed?pb=…" title="Mapa com a localização de {{Nome}}" width="600" height="338" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
</div>
```
Sem mapa: apague o `<div class="contact__map" … hidden>`. Alternativa sem iframe (zero cookies): link "Ver no mapa" para `https://www.google.com/maps/search/?api=1&query=ENDERECO+CODIFICADO` em `.contact__info`. Com ou sem mapa, um link "Como chegar" (`https://www.google.com/maps/dir/?api=1&destination=ENDERECO+CODIFICADO`, `target="_blank" rel="noopener"`) abre a rota no app do visitante.

### 10.3 Agendamento (Calendly / Cal.com)

Padrão ★: botão com link direto (`<a class="btn btn--primary btn--lg" href="https://calendly.com/usuario/evento" target="_blank" rel="noopener">Agendar horário</a>` ou `https://cal.com/usuario/evento`). Simples, sem script, sem cookies de terceiros na página. Embed inline só se a especificação exigir: ambos fornecem script externo de embed (Calendly: `assets.calendly.com/assets/external/widget.js` com `<div class="calendly-inline-widget" data-url="…">`; Cal.com (grátis para uso individual): a pessoa copia o snippet em tipo de evento → Embed → Inline → HTML, que carrega `https://app.cal.com/embed/embed.js` e chama `Cal("inline", {calLink: "usuario/evento"})`; há também os modos popup e botão flutuante) — coloque dentro de `.media` com `min-height` no bloco Z e, se houver analytics, trate como script de terceiro (§11).

### 10.4 YouTube

Snippet em §4.15 (`youtube-nocookie.com/embed/ID`, `loading="lazy"`, `title`). Parâmetros opcionais na URL: `?rel=0` (sugestões só do mesmo canal), `&start=30` (começa em 30s). Não use autoplay.

### 10.5 Instagram

Padrão: link no rodapé/`contact__info` com o ícone `instagram` (§4.22) e `aria-label="Instagram de {{Nome}}"`. Feed embutido: fora do escopo (exige script da Meta, cookies e aviso; quebra quando o perfil muda). Alternativa estática: `portfolio-grid` com 3-6 fotos do próprio Instagram (exportadas) e um botão "Ver mais no Instagram".

### 10.6 Analytics (só com Q40 = sim) e pixels

Qualquer script de medição entra **como `type="text/plain" data-consent`**, para o `main.js` ativar só depois de "Aceitar" (§11). Coloque no fim do `<body>`, antes de `<script src="main.js" defer>`, em TODAS as páginas públicas.

Google Analytics 4 (ID `G-XXXXXXXXXX`, a pessoa cria em analytics.google.com):
```html
<script type="text/plain" data-consent async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script type="text/plain" data-consent>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true });
</script>
```
Microsoft Clarity (gratuito; ID do projeto em clarity.microsoft.com):
```html
<script type="text/plain" data-consent>
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "{{ID-DO-PROJETO}}");
</script>
```
Microsoft Clarity é gratuito sem limite de tráfego; GA4 só vale se a pessoa for anunciar no Google (Q41).

Alternativas sem cookies (não exigem banner; pagas ou com plano gratuito limitado): Plausible (`<script defer data-domain="dominio.com.br" src="https://plausible.io/js/script.js"></script>`, pago após teste de 30 dias sem cartão), Umami Cloud (`<script defer src="https://cloud.umami.is/script.js" data-website-id="…"></script>`, plano Hobby gratuito com 6 meses de retenção), Simple Analytics (`<script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>` no fim do `<body>`; plano Free mostra só os últimos 30 dias e exige o badge "Simple Analytics" visível no rodapé). Só se a pessoa pedir explicitamente.

Pixel Meta / Google Ads (Q41 = F): cole o snippet oficial fornecido pela pessoa, convertendo cada `<script>` em `<script type="text/plain" data-consent>` (a tag `<noscript><img …>` do pixel: remova, pois dispararia sem consentimento). Registre ferramenta + ID em `site/README.md §6` e cite-a em `privacidade.html §3 e §6`.

## 11. Aviso de cookies

- Quando: só se a página carrega algo que grava cookies não essenciais (GA4, Clarity, pixels, embed do Instagram, Calendly inline). Sem isso, nenhum banner: o starter remove o `[data-cookie-banner]` sozinho quando não há `script[data-consent]`. Mapa do Google, YouTube `nocookie` e Web3Forms não exigem banner.
- Mecanismo (já no `main.js`, §3.4 item 7): o HTML do banner existe em todas as páginas, oculto. Scripts de terceiros ficam inertes como `<script type="text/plain" data-consent …>` (o navegador não executa `text/plain`). Ao clicar "Aceitar", o `main.js` cria um `<script>` real para cada um (copiando `src`, `async` e o código inline), grava `localStorage["cookie-consent"]="accepted"` e remove o banner; nas próximas visitas ativa direto. "Recusar" grava `rejected` e nunca mais pergunta (até limpar o armazenamento). Scripts que dependem de ordem (gtag) funcionam porque são ativados na ordem do documento.
- Texto: o do starter serve ("Usamos cookies para medir o uso do site…"). Com pixel de anúncios, troque "medir o uso do site" por "medir o uso do site e o resultado de anúncios". Dois botões de mesmo peso visual não é exigido; o starter usa primário/secundário.
- `privacidade.html`: escolher as alternativas "SE USAR ANALYTICS" nas seções 1, 2, 3 e 6, nomeando a ferramenta.
- Link "Alterar preferências de cookies": não existe no starter; se a pessoa pedir, bloco Z + 1 linha no `main.js` (`localStorage.removeItem('cookie-consent'); location.reload()`), documentada no cabeçalho dele.
- Verificar (Fase 5): página carrega sem requisições a `googletagmanager`/`clarity.ms` antes do clique (aba Rede do navegador); após "Aceitar", as requisições aparecem e o banner some; recarregar não mostra o banner de novo.

## 12. Multi-página

- Crie cada página copiando `index.html` inteiro e apagando o `<main>`; mantenha header, footer, `whatsapp-float`, `cookie-banner` e os scripts idênticos (o header tem `<a class="brand" href="index.html">`).
- Links do menu em páginas internas: para páginas (`sobre.html`, `servicos.html`, `contato.html`) e para âncoras da home como `index.html#diferenciais`. Na home, âncoras simples (`#diferenciais`) + links de página.
- Página atual: `aria-current="page"` no `<a>` do menu (o CSS destaca). Mude em cada arquivo.
- `<head>` próprio: `title` ("Sobre — {{Nome}}" / "{{Serviço}} em {{Cidade}} — {{Nome}}"), `description`, `canonical`, `og:title/description/url`; OG image pode ser a mesma.
- Comentário de topo: `<!-- Página Sobre — ESPECIFICACAO §5.2 -->`. Cada página começa com `hero-centered` curto (H1 da página) ou `text-prose` com `h1`.
- `sitemap.xml`: uma `<url>` por página; `robots.txt` inalterado. Rodapé: links para todas as páginas.
- Página de contato separada: `contact-split` com o mesmo formulário; redirect para `obrigado.html` (mesma pasta).
- Mudou o header (link novo)? Replique em TODOS os HTML: `grep -L "sobre.html" site/*.html` lista os que faltam.
- Não crie subpastas por página (`sobre/index.html`): os caminhos relativos de `assets/` e `styles.css` mudariam.

## 13. Padrão de documentação do site (Adendo A.1)

Objetivo: um modelo diferente abre o projeto amanhã e se localiza em minutos, sem reler conversa nem especificação. Documentação leve e padronizada; nada de comentário por linha, JSDoc ou documentação duplicada.

1. **`site/README.md` = MAPA DO SITE** (fonte da verdade do site atual; 60-120 linhas; template em `base/README.md`) com 9 seções fixas: 1 Projeto (nome, 1 linha, URL publicada, repositório, data da última publicação) · 2 Estrutura de arquivos (árvore curta, 1 linha por arquivo) · 3 Mapa de seções (tabela: página | ordem | ID do catálogo | `id` HTML | o que contém) · 4 Design (tokens no topo de styles.css; direção; fontes; paleta em 1 linha) · 5 Convenções (classes do base; CSS só no bloco Z; caminhos relativos; imagens em assets/img; marcadores) · 6 Integrações (formulário: serviço, e-mail, onde está a chave; WhatsApp: número e onde; analytics: ferramenta, ID, onde; mapa; agendamento) · 7 Como ver e publicar (abrir index.html; `git add -A && git commit -m "..." && git push`; Pages atualiza em ~1 min; fallback Netlify Drop) · 8 Como fazer um ajuste (ler este README → localizar pelo marcador → editar o trecho → conferir em 375 e 1280px → Histórico → commit + push) · 9 Histórico (1 linha por mudança, mais recente no topo: `AAAA-MM-DD — o que mudou — por quê (pedido da pessoa)`).
   Exemplo de linha do mapa: `| index.html | 6 | testimonials-grid | depoimentos | 3 depoimentos com foto |`. Exemplo de Histórico: `- 2026-11-20 — Novo depoimento da Carla — pedido de Ana`.
2. **Marcadores de seção no HTML** (obrigatórios, um par por seção, inclusive header, footer, flutuantes):
   ```html
   <!-- ===== [features-grid] Diferenciais ===== -->
   <section class="section" id="diferenciais" aria-labelledby="diferenciais-titulo"> … </section>
   <!-- ===== /[features-grid] ===== -->
   ```
   O `id` da seção é o mesmo dos links do menu e do mapa do README. Localizar: `grep -n "===== \[" site/index.html` lista todas as seções com a linha.
3. **`styles.css` com índice e cabeçalhos de bloco**: índice numerado no topo; cada bloco começa com `/* ===== 7. Hero ===== */`; CSS específico do projeto APENAS no último bloco `/* ===== Z. Específico do projeto ===== */`, cada regra precedida de 1 comentário `[id-do-catalogo] #id-html: o que faz`. Exemplo:
   ```css
   /* ===== Z. Específico do projeto ===== */
   /* [hero-split] #inicio: foto vertical com altura limitada no desktop */
   .hero--split .media { max-height: 32rem; }
   /* [stats-band] #numeros: 2 colunas no celular */
   @media (max-width: 39.99rem) { .stats { grid-template-columns: repeat(2, 1fr); } }
   ```
4. **`main.js`**: comentário de cabeçalho listando os comportamentos e os `data-*`/classes de cada um (já existe); 1 comentário de 1 linha por função. Comportamento novo = 1 linha nova no cabeçalho. Nada mais.
5. **Páginas HTML**: comentário de 1 linha no topo dizendo o que é a página e a seção da ESPECIFICACAO que a originou: `<!-- Página inicial — ESPECIFICACAO §5.1 -->`, `<!-- Página Serviços — ESPECIFICACAO §5.3 -->`.
6. **Commits**: mensagens curtas em pt-BR, prefixo `feat:` (seção/página nova), `fix:` (correção/ajuste), `chore:` (setup, assets), `docs:` (só README); 1 commit por checkpoint ou ajuste. `git log --oneline -15` complementa o Histórico. Exemplos: `feat: hero, header e rodapé`, `fix: contraste do texto secundário`, `docs: mapa de seções completo`.
7. **`ESPECIFICACAO.md`** permanece como PLANEJAMENTO; depois da publicação recebe no topo a nota "Documento de planejamento. A fonte da verdade do site atual é site/README.md". Ajustes de conteúdo não exigem atualizá-la; mudanças estruturais (nova seção/página) exigem 1 linha no mapa de seções do README e 1 linha no Histórico.

## 14. Anti-padrões e erros frequentes de modelos

1. Puxar Tailwind, Bootstrap, Alpine, jQuery, AOS, Swiper ou Font Awesome "por CDN". Proibido: o starter cobre tudo.
2. `style="…"` inline e `<style>` em páginas (exceto `404.html`). Vai para o bloco Z com comentário.
3. `!important` para "vencer" o starter. Resolva com a classe certa ou uma regra no bloco Z com a mesma especificidade.
4. Reescrever `styles.css` ou `index.html` inteiros para uma mudança pequena; "regenerar" o site. Edite trechos.
5. Caminhos absolutos (`/assets/img/x.webp`, `/sobre.html`) ou `file:///…`. Só relativos.
6. Inventar classes que não existem no starter (`.grid-cols-3`, `.text-primary`, `.flex`) ou nomes de tokens diferentes (`--primary-color`). Use §3.3 e §3.2.
7. Lorem ipsum, textos de exemplo, `{{ }}`, números inventados ("+1000 clientes") ou depoimentos fictícios no site final.
8. Vários `h1` por página; `h3` sem `h2`; `h2` usado para tamanho em vez de hierarquia.
9. Ícone sem `width`/`height`/classe (`.feature__icon`, `.icon`) → SVG gigante. Paths de ícone inventados → desenho quebrado; use §4.22.
10. Imagens sem `width`/`height` (CLS), sem `alt`, em PNG/JPG de 3 MB, ou `loading="lazy"` na imagem do hero.
11. Emoji como ícone (🚀, ✅) e gradientes/cores soltas em hex no CSS em vez de tokens.
12. Menu com `display:none` por JS inline, sem `aria-expanded`; FAQ com `div` + JS em vez de `<details>`.
13. `target="_blank"` sem `rel="noopener"`; links `href="#"`; botões `<a>` sem `href` ou `<div onclick>`.
14. Formulário com `action="#"`, `mailto:` como action, ou JS `fetch` próprio; campo de consentimento pré-marcado; honeypot com `display:none`.
15. Scripts de analytics colados como `<script>` normal (dispara sem consentimento) ou duplicados em cada página com IDs diferentes.
16. Animações em tudo (`.reveal` no texto do hero, no header, no rodapé), parallax, carrossel automático, vídeo de fundo.
17. Duplicar o header/footer com pequenas diferenças entre páginas (link faltando, logo diferente, ano fixo).
18. Esquecer `.nojekyll`, `404.html`, `sitemap.xml` ou deixar `og:image`/`canonical` com URL relativa.
19. Mudar paleta, fonte, raio ou direção visual "para ficar mais bonito" sem pedido; adicionar seções que a especificação não tem; propor "duas versões".
20. Mexer fora dos marcadores, apagar marcadores, criar seção sem marcador, ou não atualizar o `site/README.md` (mapa + histórico) após a mudança.

## 15. Referências

Links úteis para a IA e para a pessoa (gratuito salvo indicação; "(verificar)" = não confirmado por busca neste kit).

- Google Fonts — https://fonts.google.com/ — catálogo de fontes gratuitas; botão "Get embed code" gera o `<link>`.
- Google Fonts CSS API v2 — https://developers.google.com/fonts/docs/css2 — sintaxe do link (eixos, intervalos, `display=swap`).
- Fontes variáveis do Google Fonts — https://fonts.google.com/variablefonts — confirmar se uma família aceita intervalo de pesos.
- WebAIM Contrast Checker — https://webaim.org/resources/contrastchecker/ — checar contraste AA entre dois hex.
- Who Can Use — https://www.whocanuse.com/ — contraste simulando tipos de visão.
- Lucide Icons — https://lucide.dev/icons/ — origem dos ícones do §4.22; copiar SVG de outros ícones se a pessoa pedir.
- Squoosh — https://squoosh.app — converter/redimensionar imagens para WebP no navegador.
- Web3Forms — https://web3forms.com — serviço padrão de formulário; chave por e-mail; plano gratuito (verificar limites atuais).
- Formspree — https://formspree.io — alternativa de formulário; plano gratuito limitado (verificar).
- GitHub Pages: documentação — https://docs.github.com/en/pages — criar site, domínio próprio (A 185.199.108/109/110/111.153 + CNAME www → usuario.github.io), "Enforce HTTPS"; limites em https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (site ≤ 1 GB, 100 GB/mês e 10 builds/h como limites brandos; nada de e-commerce/SaaS). Gratuito em repositório público.
- GitHub CLI (`gh`) — https://cli.github.com/manual — login por código no navegador e `gh repo create`; gratuito.
- GitHub Status — https://www.githubstatus.com — confira "Pages"/"Actions" antes de investigar um 404 ou deploy parado; gratuito.
- Cloudflare Turnstile — https://developers.cloudflare.com/turnstile/ — antispam sem quebra-cabeça para o formulário (§9); gratuito (20 widgets).
- Cloudflare Pages — https://developers.cloudflare.com/pages/ — fallback de hospedagem por upload (até 1.000 arquivos) ou Git; gratuito (500 builds/mês).
- Let's Encrypt: registros CAA — https://letsencrypt.org/docs/caa/ — se o domínio tem CAA, inclua `letsencrypt.org` ou o HTTPS do Pages não sai; gratuito.
- Netlify Drop — https://app.netlify.com/drop — fallback: arrastar a pasta `site/` e publicar; gratuito.
- Schema.org LocalBusiness — https://schema.org/LocalBusiness — campos e subtipos do JSON-LD.
- Rich Results Test (Google) — https://search.google.com/test/rich-results — validar o JSON-LD da página publicada.
- PageSpeed Insights — https://pagespeed.web.dev — Lighthouse mobile da URL publicada.
- WAVE — https://wave.webaim.org — avaliação de acessibilidade (extensão ou URL).
- W3C Validator — https://validator.w3.org — validar HTML.
- OpenGraph preview — https://www.opengraph.xyz — ver como o link aparece no WhatsApp/LinkedIn.
- WhatsApp: link wa.me — https://faq.whatsapp.com/5913398998672934 — formato oficial do link com mensagem.
- Google Analytics 4 — https://analytics.google.com — ID `G-…`; gratuito.
- Microsoft Clarity — https://clarity.microsoft.com — mapas de calor e gravações; gratuito, sem limite de tráfego.
- Plausible — https://plausible.io/docs — analytics sem cookies; pago (planos por pageviews) após teste gratuito de 30 dias sem cartão.
- Umami Cloud — https://umami.is/docs — analytics sem cookies; plano Hobby gratuito (6 meses de retenção; pagos com 14 dias de teste).
- Simple Analytics — https://www.simpleanalytics.com — analytics sem cookies; plano Free com painel de 30 dias e badge obrigatório no rodapé; planos pagos sem essas restrições.
- Cal.com — https://cal.com/docs — agendamento; plano gratuito individual; embed inline, popup ou botão flutuante.
- Calendly — https://calendly.com — agendamento; plano gratuito com 1 tipo de evento (verificar).
- MDN Web Docs — https://developer.mozilla.org/pt-BR/ — referência de HTML/CSS/JS em português.
- web.dev: fontes — https://web.dev/articles/font-best-practices — boas práticas de carregamento de fontes.
