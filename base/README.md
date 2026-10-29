# {{Nome do negócio}} — mapa do site

> Este arquivo é a **fonte da verdade do site atual**. Qualquer pessoa ou modelo de IA que precise fazer um
> ajuste começa lendo este arquivo inteiro (leva 2 minutos) e depois `git log --oneline -10`.
> Mantenha-o curto e atualizado: toda mudança entra no Histórico (seção 9).

## 1. Projeto
- **O que é:** {{1 linha: landing page / site institucional de X para Y}}
- **URL publicada:** {{https://usuario.github.io/repo/ ou https://dominio.com.br}}
- **Repositório:** {{https://github.com/usuario/repo}}
- **Última publicação:** {{AAAA-MM-DD}}
- **Planejamento original:** `../ESPECIFICACAO.md` (documento de planejamento; o site atual é descrito aqui)

## 2. Estrutura de arquivos
```
site/
├── index.html          página inicial
├── privacidade.html    política de privacidade (LGPD)
├── obrigado.html       confirmação após envio do formulário
├── 404.html            página de erro (autossuficiente, CSS inline; usa a URL final absoluta)
├── styles.css          única folha de estilos (tokens no topo; CSS específico no bloco Z, no fim)
├── main.js             menu mobile, sombra do header, animação .reveal, ano, formulário, cookies
├── robots.txt, sitemap.xml, .nojekyll
├── assets/
│   ├── favicon.svg, apple-touch-icon.png, og.jpg (1200x630), logo.svg
│   └── img/            fotos em WebP, nomes sem acento/espaço (ex.: hero.webp, servico-01.webp)
└── README.md           este arquivo
{{Acrescente outras páginas aqui (sobre.html, servicos.html...)}}
```

## 3. Mapa de seções
Cada seção do HTML está entre marcadores `<!-- ===== [id-do-catalogo] Nome ===== -->` e `<!-- ===== /[id-do-catalogo] ===== -->`.
Para achar uma seção: procure pelo `id` HTML ou pelo marcador.

| Página | Ordem | ID do catálogo | `id` HTML | O que contém |
|---|---|---|---|---|
| index.html | 1 | header-nav | (header) | logo, links do menu, CTA |
| index.html | 2 | hero-split | `inicio` | H1, subtítulo, CTAs, imagem hero.webp |
| index.html | 3 | features-grid | `diferenciais` | 3 benefícios |
| {{…}} | {{…}} | {{…}} | {{…}} | {{…}} |
| index.html | n | cta-band | `cta` | chamada final |
| index.html | n+1 | contact-split | `contato` | formulário + WhatsApp, e-mail, endereço, horário |
| index.html | n+2 | footer | (footer) | navegação, redes, contato, CNPJ, privacidade |

## 4. Design
- **Direção de estilo:** {{clean / editorial / bold / tech-dark / organico / premium}} {{+ ajustes}}
- **Tokens:** topo de `styles.css` (bloco 1). Paleta: primária {{#hex}}, acento {{#hex}}, fundo {{#hex}}, texto {{#hex}}.
- **Fontes:** títulos {{Manrope}}, texto {{Inter}} — `<link>` do Google Fonts no `<head>` de cada página.

## 5. Convenções
- Use só as classes documentadas em `kit-sites/GUIA-FRONTEND.md §3` (`.section`, `.container`, `.grid--3`, `.card`, `.btn--primary`...).
- CSS novo **apenas** no bloco `/* ===== Z. Específico do projeto ===== */` de `styles.css`, com um comentário `[id-do-catalogo] #id-html: o que faz` antes de cada regra.
- Nada de CSS inline, `!important` ou bibliotecas externas. Caminhos sempre relativos (`assets/img/x.webp`).
- Imagens: WebP, largura máx. 1600px, `width`/`height` e `alt` sempre; `loading="lazy"` em tudo menos na imagem do hero.
- Todas as páginas repetem o mesmo header e footer (copiar/colar; link da página atual com `aria-current="page"`).

## 6. Integrações
| Integração | Como está configurada | Onde no código |
|---|---|---|
| Formulário | Web3Forms → e-mail {{destino}}; chave de acesso no `<input name="access_key">`; botão desabilitado até a chave entrar (Fase 5) | `index.html` → `<form data-form>` |
| WhatsApp | {{+55 DDD número}}; mensagem padrão "{{texto}}" | `index.html` → `.whatsapp-float` e `#contato` |
| Mapa | {{Google Maps embed / não usa}} | `index.html` → `.contact__map` |
| Analytics | {{ferramenta + ID / não usa}} | `index.html` → `<script type="text/plain" data-consent>` (ativado pelo aviso de cookies) |
| Agendamento | {{Calendly/Cal.com / não usa}} | {{…}} |

## 7. Como ver e publicar
- **Ver localmente:** abra `site/index.html` no navegador (duplo clique). Teste em 375px (celular) e 1280px.
- **Publicar:** dentro de `site/`: `git add -A && git commit -m "fix: descrição curta" && git push`. O GitHub Pages atualiza em ~1 minuto.
- **Fallback sem GitHub:** arraste a pasta `site/` em https://app.netlify.com/drop .

## 8. Como fazer um ajuste (para qualquer modelo de IA ou pessoa)
1. Leia este README inteiro e rode `git log --oneline -10`.
2. Localize a seção pelo marcador ou `id` (tabela da seção 3). Abra só o arquivo necessário.
3. Edite o trecho mínimo. CSS novo só no bloco Z. Não refatore nem "melhore" o que não foi pedido.
4. Confira no navegador em 375px e 1280px; `grep -n "{{" *.html` não pode retornar nada.
5. Acrescente 1 linha no Histórico (abaixo), faça commit e push. Avise onde ver e que o Pages leva ~1 min.
Procedimento completo: `kit-sites/FASE-6-AJUSTES.md`.

## 9. Histórico (mais recente no topo)
- {{AAAA-MM-DD}} — Publicação inicial — {{versão 1 aprovada pela pessoa}}
