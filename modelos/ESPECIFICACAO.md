# ESPECIFICAÇÃO — {{Nome do negócio}}

> Documento de planejamento gerado na Fase 3 a partir de `BRIEFING.md` e `REFERENCIAS.md`. Depois da publicação,
> a fonte da verdade do site atual passa a ser `site/README.md`. Critério de pronto: nenhuma decisão de design ou
> negócio fica para a Fase 4. Apague os blockquotes no arquivo final.

**Status:** rascunho | aprovado em {{AAAA-MM-DD}}

## 1. Resumo
{{1 parágrafo: o que é o site, para quem, objetivo}}
- **Conversão primária:** {{WhatsApp com mensagem "…" | formulário | agendar}}
- **CTA primário (texto):** "{{…}}" · **CTA secundário:** "{{…}}"

## 2. Sitemap
| Página | Arquivo | Title (50-60) | Meta description (150-160) | Seções (IDs do catálogo, em ordem) |
|---|---|---|---|---|
| Início | `index.html` | {{…}} | {{…}} | header-nav, hero-split, …, footer, whatsapp-float |
| Privacidade | `privacidade.html` | Política de Privacidade — {{…}} | {{…}} | header-nav, text-prose, footer |
| Obrigado | `obrigado.html` | Mensagem enviada — {{…}} | — | hero-centered |
- **URL prevista:** `{{https://dominio.com.br/ | https://USUARIO.github.io/REPO/}}` (entra em canonical, OG, sitemap e `404.html`)

## 3. Design tokens
- **Direção:** {{ID}} ({{ajustes}})
| Token | Valor |
|---|---|
| --color-primary | {{#}} |
| --color-primary-strong | {{#}} |
| --color-primary-soft | {{#}} |
| --color-on-primary | {{#}} |
| --color-accent | {{#}} |
| --color-on-accent | {{#}} |
| --color-bg | {{#}} |
| --color-surface | {{#}} |
| --color-surface-2 | {{#}} |
| --color-text | {{#}} |
| --color-text-muted | {{#}} |
| --color-border | {{#}} |
| --color-border-strong | {{#}} |
| --footer-bg / --footer-text / --footer-muted | {{#}} / {{#}} / {{#}} |
| --font-heading / --font-body | {{"Família", fallback}} |
| --radius-sm / --radius-md / --radius-lg | {{…}} / {{…}} / {{…}} |
| --shadow-sm / --shadow-md / --shadow-lg | {{…}} / {{…}} / {{…}} |
| --duration | {{…ms}} |
| movimento | {{nenhum: sem .reveal | sutil: .reveal padrão | médio: .reveal + hover marcados}} |
- **Link Google Fonts:** `{{…}}`
- **Contraste (4 pares, ≥ 4,5:1):** texto/fundo {{x:1}} ✔ · text-muted/surface {{x:1}} ✔ · on-primary/primary (botões) {{x:1}} ✔ · primary/fundo (links e eyebrows) {{x:1}} ✔

## 4. Componentes globais
- **header-nav:** links: {{…}} · CTA: "{{…}}" → {{#contato}}
- **footer:** colunas: {{marca + frase | navegação | redes | contato}} · legal: {{razão social, CNPJ}} · link privacidade
- **whatsapp-float:** sim | não — mensagem: "{{…}}"
- **cookie-banner:** sim (há analytics) | não

## 5. Seções por página
> Para cada seção: ID, variante, copy FINAL (sem placeholders), assets (origem → destino), notas.

### 5.1 index.html
#### 1. hero-split — `#inicio`
- **Eyebrow:** "{{…}}"
- **H1:** "{{6-12 palavras}}"
- **Subtítulo:** "{{15-30 palavras}}"
- **CTAs:** primário "{{…}}" → {{destino}} · secundário "{{…}}" → {{destino}}
- **Prova:** "{{…}}" · "{{…}}"
- **Imagem:** `assets-brutos/{{x.jpg}}` → `site/assets/img/hero.webp` (1600px, 4:3) · alt: "{{…}}"

#### 2. {{features-grid}} — `#{{diferenciais}}`
- **Eyebrow / H2 / lead:** "{{…}}" / "{{…}}" / "{{…}}"
- **Itens (3):** {{ícone Lucide}} · "{{título}}" · "{{1-2 frases}}" × 3

#### n. contact-split — `#contato`
- **H2 / lead:** …
- **Formulário:** campos {{nome, WhatsApp, e-mail, mensagem}} · consentimento LGPD · botão "{{…}}" · nota "{{…}}"
- **Dados:** WhatsApp, e-mail, endereço, horário · mapa: sim | não

### 5.2 {{outras páginas}}

## 6. Mapa de assets
| Origem | Destino | Tamanho-alvo | Alt |
|---|---|---|---|
| `assets-brutos/{{x.jpg}}` | `site/assets/img/hero.webp` | 1600px, 4:3 | "{{…}}" |
| `assets-brutos/{{y.jpg}}` | `site/assets/img/{{servico-x}}.webp` | 800px, 4:3 | "{{…}}" |
| {{…}} | `site/assets/og.jpg` | 1200×630 | — |
| {{…}} | `site/assets/favicon.svg` | SVG | — |

## 7. Integrações
- **Formulário:** {{serviço}} → {{e-mail destino}} · chave/ID: {{a pessoa envia na Fase 5}} · redirect `obrigado.html`
- **WhatsApp:** +55 {{…}} · texto: "{{…}}"
- **Mapa:** {{iframe do Google Maps | não}} · **Agendamento:** {{…}} · **Analytics:** {{ferramenta + ID | não}} · **Pixels:** {{…}}

## 8. SEO e social
- **OG image:** `assets/og.jpg` (1200x630) — {{quem faz}}
- **JSON-LD:** LocalBusiness | Organization — nome, URL, telefone, endereço, horário, redes

## 9. Metas fixas
- WCAG AA (contraste, foco, teclado) · Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO · peso da home ≤ 1,5 MB

## 10. Critérios de aceite
- [ ] todas as seções da tabela 2 presentes e na ordem
- [ ] zero `{{` e zero texto provisório
- [ ] 320px → 1440px sem rolagem horizontal
- [ ] formulário envia e redireciona; WhatsApp abre com a mensagem
- [ ] `site/README.md` preenchido e coerente com o HTML
- [ ] {{critérios específicos}}

## 11. Plano de build
1. Setup (tokens, fontes, head, favicon, OG, imagens otimizadas) → commit
2. header-nav + hero-split + footer + globais (whatsapp-float, cookie-banner) → **Checkpoint 1**
3. {{seções 2-4}} → **Checkpoint 2**
4. {{seções 5-n}} → **Checkpoint 3**
5. Páginas internas → **Checkpoint 4**
6. Passagem responsiva + acessibilidade → QA (Fase 5)

## 12. Decisões assumidas e pendências
- {{…}} (assumido)
- [ ] {{pendência}}
