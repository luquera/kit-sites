# GUIA DE DESIGN — regras, direções, anatomia, catálogo de seções e copy

| | |
|---|---|
| **Para quem** | A IA, nas Fases 3 (plano) e, pontualmente, 4 e 6. A pessoa não precisa ler. |
| **O que é** | A base de conhecimento de design do kit: números, tokens prontos por direção, ordem de seções por tipo de site, regras por seção do catálogo e regras de texto. |
| **Como ler** | Só a seção que a fase mandar (índice abaixo). Nunca o arquivo inteiro. |
| **Não contém** | HTML/CSS dos componentes (ver `GUIA-FRONTEND.md §3-§4`), SEO técnico (`GUIA-FRONTEND §7`), formulários (`§9`), integrações (`§10`). |

**Índice:** §1 Como usar este guia · §2 Regras quantitativas · §3 Direções de estilo · §4 Anatomia · §5 Catálogo de seções · §6 Copywriting · §7 Erros comuns de design · §8 Checklist de revisão de design · §9 Referências

## 1. Como usar este guia

| Fase / momento | Leia | Para quê |
|---|---|---|
| Fase 1 (Q26) | nada (a tabela das 6 direções já está em `FASE-1-ENTREVISTA.md`) | — |
| Fase 2, montar tarefas de paleta/fontes | §3 (só a direção escolhida) | dar à pessoa os valores padrão e o que ela pode trocar |
| Fase 3, passo 2-3 (tipo e seções) | §4 + §5 | decidir sitemap e ordem de seções a partir do `BRIEFING.md` |
| Fase 3, passo 4 (tokens) | §3 + §2 "Cor" | partir da direção, aplicar paleta/fontes da pessoa, checar contraste |
| Fase 3, passo 5 (copy) | §6 + §5 (regras de copy de cada seção) | rascunhar textos a partir da matéria-prima, nos comprimentos certos |
| Fase 3, antes de apresentar | §7 + §8 | revisar o plano |
| Fase 4, checkpoint com feedback de design | §8; dicionário de feedback em `FASE-4-CONSTRUCAO.md §6` | traduzir pedido em ajuste |
| Fase 6, nova seção ou "melhore o texto" | §5 (a seção) + §6 | manter as regras do site |

Regras de uso:
- A pessoa escolhe a direção (Q26), a paleta (Q31) e as fontes (Q32). Este guia fornece os padrões ★ para o que ela não definiu; registre "(assumido)".
- Nunca misture mais de 2 direções. Ao mesclar, uma é a base (todos os tokens) e a outra empresta no máximo 3 ajustes (ex.: raio, neutros quentes, fonte de título).
- Todo valor numérico daqui é um padrão, não uma lei: a referência principal da pessoa (`REFERENCIAS.md §4`) pode mudá-lo, desde que o contraste AA continue valendo.

## 2. Regras quantitativas

Cada regra em uma linha, com número. O starter (`base/styles.css`) já aplica a maioria; a IA só precisa respeitar as que dependem de conteúdo e escolha.

### 2.1 Tipografia
- Corpo: 16px no mínimo (mobile), 17-18px no desktop; nada legível abaixo de 14px; notas legais e legendas 12-13px. O starter usa `--text-base` = 16→18px fluido.
- Entrelinha sem unidade: 1,5-1,6 no corpo; 1,2-1,3 em títulos de 24-40px; 1,05-1,15 no hero acima de 40px.
- Medida: 45-75 caracteres por linha (ideal 60-70) → `max-width: 65ch` em parágrafos; texto corrido nunca ocupa a largura total em 1440px.
- Escala: razão 1,25 para institucional, 1,333 para LP com hero forte; o starter já usa escala fluida (`--text-sm` … `--text-5xl`), não crie tamanhos soltos.
- Hierarquia de tamanhos visível por tela: no máximo 3 (ex.: H2, H3, corpo).
- Famílias: no máximo 2 (título + texto); pesos: 3-4 arquivos no total (ex.: 400, 500/600, 700); 3ª família só mono em `tech-dark`, para labels/números.
- Pesos: corpo 400 (nunca 300 em fundo claro); ênfase 500-600; títulos 600-800; 100-200 em nada.
- Títulos H1/H2: 20-30 caracteres por linha (`max-width` 20-28ch) e `text-wrap: balance` (o starter já aplica).
- Caixa alta só em até 3 palavras (eyebrow, labels, botões) com `letter-spacing` +0,05 a +0,1em; títulos grandes em sans aceitam -0,01 a -0,03em; nunca tracking negativo em texto corrido ou serifas.
- Eyebrow: 12-14px, caixa alta, tracking 0,08em, peso 600, na cor primária (já é o `.eyebrow` do starter).
- Serifas de display (Playfair Display, Cormorant Garamond, Instrument Serif, DM Serif Display, Fraunces em opsz alto) só em títulos ≥ 24px; Poppins/Montserrat/Space Grotesk/Syne nunca em parágrafos.
- Teste com o título mais longo real e um parágrafo real em português (ç, ã, siglas); nunca com lorem ipsum.

### 2.2 Cor
- Proporção 60-30-10: 60% fundos neutros, 30% primária (títulos de seção, ícones, faixas), 10% destaque exclusivo do CTA.
- Contraste AA: 4,5:1 em texto normal; 3:1 em texto grande (≥ 24px, ou ≥ 18,66px em negrito), ícones, bordas de input e anel de foco. Mire 7:1 no corpo.
- Cheque sempre 6 pares: texto/fundo, texto secundário/fundo, texto do botão/botão, link/fundo, borda de input/fundo, texto/fundo de card (fórmula em `GUIA-FRONTEND §6` ou WebAIM, §9).
- Texto secundário nunca mais claro que `#6B7280` sobre branco (4,8:1); placeholders de input também precisam de 4,5:1.
- Botão com texto branco exige fundo em tom escuro (ex.: `#1D4ED8` 6,7:1; `#16A34A` reprova com 3,3:1); sobre amarelo, laranja, verde-claro e ciano use texto escuro.
- Nunca `#000` sobre `#FFF`: texto em neutro-950 tintado (ex.: `#0F172A`), fundo branco ou off-white (`#F8FAFC`/`#FBF8F3`), `#FFF` reservado para cards sobre `--color-surface`.
- Neutros tintados pela primária (frios para azul/verde; quentes para terracota/dourado); nunca cinza puro.
- Accent (`--color-accent`) aparece em 1 elemento por dobra: estrelas, selo, badge; links usam a primária com sublinhado, nunca a cor do CTA.
- Texto sobre foto: overlay escuro de 40-60% ou bloco sólido; teste no ponto mais claro da imagem.
- Gradientes só em fundos grandes decorativos, 2 matizes vizinhas, nunca atrás de texto pequeno.
- Cores semânticas fixas e separadas da marca: verde (sucesso), âmbar (aviso), vermelho (erro); estado nunca só por cor (ícone + texto).
- Tema escuro não é inversão: fundo neutro-950 tintado, texto `#E5E7EB`-`#F3F4F6` (nunca `#FFF`), primária 2 tons mais clara, sombras viram bordas 1px.
- Sombras tintadas com a cor do texto a 6-12% de opacidade (já nos tokens `--shadow-*`); nunca preto puro.

### 2.3 Espaçamento
- Escala de 4px (`--space-1` … `--space-10`); nenhum valor fora dela.
- Respiro de seção: 64-96px no desktop, 48-64px no mobile (`--section-padding`); `section--tight` reduz 40% (faixas de números/logos).
- Espaço entre o título da seção e os cards: 48px (`.section__header`); entre eyebrow e H2: 12px; entre H2 e lead: 12px.
- Gap entre cards: 24px; padding interno de card: 32px; no mobile, gap 16-24px.
- Hero: 64-128px de padding vertical; subtítulo a 24px do H1; botões a 32px do subtítulo; linha de prova a 24px dos botões.
- Parágrafos: margem inferior 1-1,5em; nunca recuo de primeira linha junto com espaço entre parágrafos.
- "Mais respiro" = subir um passo na escala, não 10px a mais (`FASE-4 §6`).

### 2.4 Layout e grid
- Container 1160px (`--container`); texto longo 760px (`--container-narrow`); gutter lateral 16px no mobile, 24px no tablet, 32px no desktop.
- Breakpoints do starter: 48rem (768px) e 64rem (1024px); mobile-first; tudo em 1 coluna abaixo de 48rem.
- Colunas: 3 itens → `grid--3`; 4 itens → `grid--4` (2×2 em tablet) ou `grid--2`; 5 itens → nunca (corte para 4 ou suba para 6); 6 → `grid--3`.
- Hero split: texto 55% / imagem 45%; imagem 4:3 (1600×1200) ou 1:1; no mobile a imagem vai abaixo do texto.
- Ritmo: alterne `section` e `section--alt` entre seções consecutivas; `cta-band` não conta.
- LP: 7-12 seções no total; institucional: 6-8 na Home, 4-6 nas internas. Acima disso, corte.
- Alinhamento: título de seção à esquerda com cards (padrão) ou centralizado (`section__header--center`) só quando a seção é simétrica (steps, pricing, cta-band, stats).
- Menu: 3-5 links (6 no máximo) + 1 CTA; nomes de 1-2 palavras; logo com altura 36px (`.brand__logo`).
- Rodapé: 3-4 colunas no desktop, 1 no mobile; linha legal separada por borda.

### 2.5 Imagens
- Hero: 1600px de largura, ≤ 220 KB, WebP, `fetchpriority="high"`; demais imagens `loading="lazy"`.
- Cards de serviço/portfólio: 800px de largura, ≤ 90 KB; avatares: 192px quadrados, ≤ 15 KB (mesmos limites de `GUIA-FRONTEND §8`); logos de clientes: SVG ou PNG com altura 72px (exibidos a 36px), monocromáticos via `.logos`.
- Proporções fixas por uso: hero 4:3; cards e vídeo 16:9; sobre 4:3 ou 3:2; avatar 1:1; retrato de equipe 3:4; portfólio 4:3 (ou 1:1 em grade).
- Sempre `width`/`height` reais e `alt` ≤ 125 caracteres descrevendo o conteúdo (ou `alt=""` se decorativa).
- Nunca texto dentro de imagem (exceto logo); nunca foto de banco com "modelo sorrindo apontando"; foto real com luz natural vence foto perfeita de banco.
- Peso total da home ≤ 1,5 MB; 1 imagem por card no máximo; nenhum carrossel automático.
- Favicon: só o símbolo (sem o nome), fundo sólido na cor da marca; a aba mostra 16-32px e detalhes finos somem. OG image: 1200×630, ≤ 300 KB, logo + frase de até 8 palavras, 60px de margem nas bordas (apps cortam a prévia); tags em `GUIA-FRONTEND §7`.
- Antes de usar: remover EXIF/GPS das fotos (Squoosh e `cwebp -metadata none` fazem isso); pessoas identificáveis em fotos e depoimentos só com autorização de uso de imagem por escrito (Código Civil, art. 20), guardada pela pessoa.
- Banco de imagens só para detalhes (mãos, ambiente, produto), nunca para "nossa equipe"/"nosso espaço"; Unsplash, Pexels e Pixabay não exigem crédito; Freepik, Flaticon e Storyset no plano grátis exigem atribuição (linha no rodapé ou página de créditos).
- Ícones: Lucide SVG inline 24×24, traço 2px, em `.feature__icon` (48px com fundo `--color-primary-soft`), cor = primária.

### 2.6 Movimento
- Sutil (★): `.reveal` do starter (fade-up 16px, 600ms, escalonado em 80ms com `data-delay`), hover de botão `translateY(-1px)`; nada mais.
- Médio: sutil + `card--hover` (`translateY(-3px)` + sombra) + hover de imagem `scale(1.03)` no portfólio.
- Nenhum: sem `.reveal`; transições de cor em 150-200ms permanecem.
- Lento (`premium`): `--duration` 400-500ms em hovers; `.reveal` mantido.
- `.reveal` só em cards e itens repetidos, nunca no H1, no menu ou em texto longo; máximo 3 níveis de `data-delay`.
- Nada em loop, nada automático (carrossel, contador, typewriter); `prefers-reduced-motion` desliga tudo (o starter já faz).

### 2.7 Botões e CTAs
- Altura mínima 44px (alvo de toque), padding horizontal ≥ 1,5× o vertical, texto 16-18px em peso 600; `btn--lg` no hero e na `cta-band`.
- 1 botão primário por tela (dobra); o secundário é `btn--secondary` (contorno) ou `btn--ghost` (texto + seta).
- Texto do botão: 2-5 palavras, verbo + objeto ("Agendar avaliação"), sem "Clique aqui", sem "Enviar", sem caixa alta em frases.
- Hero: primário + secundário lado a lado; `cta-band`: só o primário (`btn--inverse` sobre fundo primário); contato: botão do formulário + link WhatsApp.
- Botão WhatsApp: `btn--whatsapp` só quando o WhatsApp é o CTA primário; o `whatsapp-float` é adicional, não substitui o botão do hero.
- Foco visível: anel de 3px na primária (`:focus-visible` do starter); nunca `outline: none` sem substituto.

### 2.8 Formulários
- 3-4 campos (nome, WhatsApp/telefone, e-mail, mensagem); cada campo a mais reduz conversão; nunca CEP, CPF ou "como nos conheceu".
- Label visível acima do campo (14-16px, peso 600); placeholder só como exemplo ("(19) 99999-0000"), nunca como label.
- Input: fonte 16px (evita zoom no iOS), altura 44px, 1 coluna no mobile; borda ≥ 3:1 contra o fundo (ver nota em §3) e foco com anel de 3px.
- Consentimento LGPD: checkbox desmarcado + frase com link para `privacidade.html` (texto em §6.5); botão com o resultado ("Pedir orçamento"), não "Enviar".
- Nota de confiança sob o botão: tempo de resposta e "sem compromisso"; erro de envio em texto (não só cor); sucesso em `obrigado.html`.

## 3. Direções de estilo

Seis direções (IDs fixos). A pessoa escolhe uma (Q26) e pode mesclar uma segunda. Os valores abaixo são os padrões ★: copie a coluna para a tabela de tokens da `ESPECIFICACAO.md §3` e substitua pelo que a pessoa definiu (cores da marca, fontes). Nomes de tokens = bloco 1 de `base/styles.css`. Exemplo preenchido (clean com ajuste quente): `exemplos/ESPECIFICACAO-exemplo.md §3`.

### 3.1 Tokens de cor por direção

| Token | `clean` | `editorial` | `bold` | `tech-dark` | `organico` | `premium` |
|---|---|---|---|---|---|---|
| `--color-primary` | #1D4ED8 | #1F3D33 | #6D28D9 | #22D3EE | #3B6B47 | #141414 |
| `--color-primary-strong` | #1E40AF | #14291F | #5B21B6 | #67E8F9 | #2E553A | #000000 |
| `--color-primary-soft` | #E8EFFF | #E4ECE6 | #EDE9FE | #0E2A33 | #E6EFE3 | #EFEAE2 |
| `--color-on-primary` | #FFFFFF | #FFFFFF | #FFFFFF | #06121A | #FFFFFF | #FAF8F4 |
| `--color-accent` | #F59E0B | #B5542D | #FACC15 | #A78BFA | #D08A3E | #8C6A1F |
| `--color-on-accent` | #1F1300 | #FFFFFF | #1A1400 | #140A2E | #231300 | #FAF8F4 |
| `--color-bg` | #FFFFFF | #FBF8F3 | #FFFFFF | #0B0F17 | #FFFDF8 | #FAF8F4 |
| `--color-surface` | #F6F8FB | #F3EEE6 | #F5F3FF | #111827 | #F6F1E7 | #F2EFE9 |
| `--color-surface-2` | #E9EEF5 | #E9E2D6 | #DDD6FE | #1F2937 | #ECE3D3 | #E8E3DA |
| `--color-text` | #0F172A | #1F1B16 | #14101F | #F3F4F6 | #26251F | #141414 |
| `--color-text-muted` | #475569 | #5C5447 | #4A4458 | #A1A9B8 | #5E5A4F | #5B5750 |
| `--color-border` | #DFE5EE | #D9D0C2 | #D4CDE6 | #2A3444 | #DCD2BF | #CFC8BB |
| `--color-border-strong` | #64748B | #7A6E5F | #6B6390 | #7B8798 | #7A7262 | #6F6A62 |
| `--footer-bg` | #0F172A | #1F1B16 | #14101F | #070A10 | #26251F | #141414 |
| `--footer-text` | #E2E8F0 | #F3EEE6 | #F3F0FF | #E5E7EB | #F6F1E7 | #F2EFE9 |
| `--footer-muted` | #94A3B8 | #B0A796 | #ABA3C4 | #8B93A3 | #B0A997 | #9A9388 |

Contraste (fórmula WCAG; todos passam AA): texto/fundo · texto-muted/surface · on-primary/primary (botão) · on-accent/accent · primary/fundo (links e eyebrow).
- `clean`: 17,9 · 7,1 · 6,7 · 8,5 · 6,7. Accent âmbar só como fundo de selo ou estrelas (2,1:1 sobre branco: nunca como texto).
- `editorial`: 16,2 · 6,5 · 11,8 · 4,9 · 11,2. Accent terracota pode ser texto (4,6:1 sobre o off-white).
- `bold`: 18,7 · 8,5 · 7,1 · 12,0 · 7,1. Amarelo só como bloco de fundo com texto escuro; nunca como texto (1,5:1).
- `tech-dark`: 17,4 · 7,5 · 10,5 (texto escuro sobre ciano) · 6,9 · 10,6. Accent violeta como texto passa (7,0:1).
- `organico`: 15,1 · 6,1 · 6,2 · 6,3 · 6,1. Accent terracota clara só em ícones/selos com texto escuro (2,8:1 como texto: reprova).
- `premium`: 17,4 · 6,3 · 17,4 · 4,7 · 17,4. Dourado como texto só em peso ≥ 500 e tamanho ≥ 14px (4,7:1); alternativa bordô `#6B1F2A` com `--color-on-accent` #FFFFFF (11,3:1).

Nota sobre bordas: `--color-border` é decorativa (1,3-1,6:1) e serve para divisores e cards. Bordas de campos de formulário usam `--color-border-strong` (o starter já aplica em `.field input/textarea/select`), que precisa de ≥ 3:1 sobre o fundo (WCAG 1.4.11); os valores da tabela passam (≥ 4:1).

### 3.2 Fontes, formas e movimento por direção

| Direção | `--font-heading` (pesos) | `--font-body` (pesos) | Alternativa (mesmos papéis) | `--radius-sm` / `-md` / `-lg` | `--shadow-sm` / `-md` / `-lg` | `--duration` e movimento |
|---|---|---|---|---|---|---|
| `clean` | "Manrope" (700, 800) | "Inter" (400, 500, 600) | Plus Jakarta Sans (600, 700) + DM Sans (400, 500) | 0.5rem / 0.75rem / 1rem | os do starter (suaves, tintadas) | 250ms; sutil (`.reveal`) |
| `editorial` | "Fraunces" (500, 600, 700) | "Inter" (400, 500) | Playfair Display (400, 600) + Source Serif 4 (400, 600) | 0.125rem / 0.25rem / 0.375rem | `none` / `none` / `none` (cards só com borda 1px) | 200ms; mínimo (sem `.reveal`, só hover de link/botão) |
| `bold` | "Space Grotesk" (500, 700) | "DM Sans" (400, 500) | Syne (700, 800) + DM Sans (400, 500) | 0.75rem / 1rem / 1.5rem (ou 0 em tudo, para blocos de cor) | `none` / `none` / `none` | 200ms; médio (`.reveal` + `card--hover` + hover de imagem) |
| `tech-dark` | "Inter" (600, 700) | "Inter" (400, 500) | Geist (400, 500, 600) uma família; JetBrains Mono (400) só em labels | 0.5rem / 0.75rem / 1rem | `none` / `0 0 0 1px #2A3444` / `0 24px 48px rgba(0,0,0,0.5)` (só no hero) | 250ms; sutil |
| `organico` | "Nunito" (700, 800) | "Nunito" (400, 600) | Outfit (500, 600) + Figtree (400, 500) | 0.75rem / 1.25rem / 1.5rem | `0 1px 3px rgba(38,37,31,0.06)` / `0 8px 24px rgba(38,37,31,0.08)` / `0 24px 48px rgba(38,37,31,0.10)` | 250ms; sutil |
| `premium` | "Cormorant Garamond" (500, 600; itálico 500) | "Inter" (400, 500) | Instrument Serif (400, itálico) + Albert Sans (400, 500) | 0 / 0.125rem / 0.25rem | `none` / `none` / `none` | 450ms; lento (hovers longos; `.reveal` mantido) |

Pilhas de fallback (`--font-heading`/`--font-body`): sans → `"Nome", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`; serifa → `"Nome", Georgia, "Times New Roman", serif`; mono → `"JetBrains Mono", ui-monospace, Menlo, Consolas, monospace`.

Links do Google Fonts (pesos discretos; cole no `<head>` com os dois `preconnect`, ver `GUIA-FRONTEND §8`):
- `clean`: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap`
- `editorial`: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..700&family=Inter:wght@400;500&display=swap` · alternativa: `family=Playfair+Display:wght@400;600&family=Source+Serif+4:wght@400;600`
- `bold`: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap` · alternativa: `family=Syne:wght@700;800&family=DM+Sans:wght@400;500`
- `tech-dark`: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap` · alternativa: `family=Geist:wght@400;500;600`
- `organico`: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap` · alternativa: `family=Outfit:wght@500;600&family=Figtree:wght@400;500`
- `premium`: `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&display=swap` · alternativa: `family=Instrument+Serif:ital@0;1&family=Albert+Sans:wght@400;500`
- Se a API responder erro 400, a família é estática: troque intervalos (`500..700`) por pesos discretos (`500;600;700`).

### 3.3 Caráter de cada direção (o que muda além dos tokens)

| Direção | Hero | Cards | Imagens | Onde a primária aparece | Usos típicos |
|---|---|---|---|---|---|
| `clean` | `hero-split`, H1 em 2 linhas, foto real 4:3 | borda 1px + sombra suave, ícone em quadrado `primary-soft` | fotos reais, luz natural | botões, eyebrow, ícones, `cta-band` | consultorias, clínicas, B2B, contabilidade |
| `editorial` | `hero-split` ou `hero-centered` com foto grande abaixo; título serifado em 1-2 linhas | sem sombra, divisores 1px, muito espaço | fotografia grande, retratos, 3:4 | títulos H2 (opcional), botões, linhas | arquitetura, moda, estúdios, gastronomia, advocacia |
| `bold` | `hero-centered` com fundo em bloco de cor (`primary` ou `accent`) e H1 em `--text-5xl` | fundo `surface` ou blocos de cor alternados, raio grande | ilustrações, fotos com recorte, cores saturadas | fundos inteiros de seção, títulos | eventos, cursos, marcas jovens, agências |
| `tech-dark` | `hero-centered`, eyebrow em mono opcional, gradiente radial sutil de `primary-soft` | borda 1px `--color-border`, fundo `surface` | mockups de produto, capturas de tela, 16:9 | botões (texto escuro), ícones, linhas de destaque | software, SaaS, tecnologia, fintech |
| `organico` | `hero-split`, formas arredondadas, foto 1:1 com raio grande | raio 20px, sombra quente, fundo creme | pessoas, natureza, alimentos; tons quentes | botões, ícones, fundos `primary-soft` | saúde, bem-estar, alimentação, pet, educação infantil |
| `premium` | `hero-centered` com muito espaço, H1 serifado fino, eyebrow em caixa alta com tracking 0,12em | sem sombra, sem raio, linhas finas | fotografia escura e editorial, 3:4 e 16:9 | botões pretos; dourado só em 1 detalhe por tela | joias, imóveis de alto padrão, hotelaria, beleza, vinhos |

## 4. Anatomia

Ordem de seções por tipo de site, com o propósito de cada uma em 1 linha. `*` = opcional (incluir só se houver conteúdo real). Detalhe de cada ID em §5.

### 4.1 LP de captação (serviço / geração de contatos) — 9-13 seções
1. `header-nav` — orientar e manter o CTA sempre visível.
2. `hero-split` — dizer em 5 segundos o que é, para quem, e pedir a ação (foto real à direita).
3. `logos-strip`* ou `stats-band`* — prova rápida logo após a promessa (logos se B2B; números se há 3-4 verdadeiros).
4. `features-grid` — responder "por que vocês" com 3-4 diferenciais concretos.
5. `services-cards`* ou `steps` — mostrar o que se contrata (serviços) ou como funciona (processo); use os dois só se o negócio tem ambos.
6. `about-split`* — dar rosto e credenciais (quem atende, desde quando, registro profissional).
7. `testimonials-grid` — prova social específica; mínimo 2 depoimentos reais.
8. `faq-accordion` — neutralizar as 3 objeções de Q16 e as dúvidas operacionais.
9. `cta-band` — repetir a ação antes do contato, para quem rolou tudo.
10. `contact-split` — converter: formulário + WhatsApp + dados.
11. `footer` — confiança legal (CNPJ, endereço, privacidade) e navegação.
12. `whatsapp-float` — canal sempre à mão (Brasil).
Variação: se Q17 = A (decisão rápida), suba `testimonials-grid` para logo depois de `features-grid` e corte `about-split`.

### 4.2 LP de produto, evento ou curso — 9-12 seções
1. `header-nav` — CTA "Inscrever-se"/"Comprar"/"Garantir vaga".
2. `hero-centered` (ou `hero-split` se há imagem forte do produto) — promessa + data/preço/local em uma linha de prova.
3. `logos-strip`* — "quem já confia" (patrocinadores, empresas dos alunos, mídia).
4. `features-grid` — o que a pessoa ganha (resultados), não o que o produto tem.
5. `video-embed`* — demonstração ou aula-amostra de até 3 minutos.
6. `steps` — como participar/comprar/começar (3-4 passos) ou o programa (módulos).
7. `pricing-table`* — 2-3 opções claras com 1 destacada; se preço único, use `cta-band` com o preço.
8. `testimonials-grid` — resultados de quem já fez.
9. `faq-accordion` — reembolso, acesso, prazo, certificado, formas de pagamento.
10. `cta-band` — última chamada com urgência verdadeira (vagas, data).
11. `footer` — organizador, CNPJ, privacidade.
`whatsapp-float` só se houver atendimento humano; `contact-split` só se a compra depende de contato.

### 4.3 Site institucional (multi-página)
| Página | Seções, em ordem | Propósito |
|---|---|---|
| Início (`index.html`) | `header-nav`, `hero-split`, `features-grid`, `services-cards` (resumo, 3-4), `about-split` (resumo, com link para Sobre), `testimonials-grid`, `cta-band`, `footer`, `whatsapp-float` | visão geral em 6-8 seções; cada bloco leva para a página interna |
| Sobre (`sobre.html`) | `header-nav`, `hero-centered` (curto, sem imagem), `about-split` (história e método), `stats-band`, `team-grid`*, `cta-band`, `footer` | credibilidade: quem, desde quando, como trabalha |
| Serviços (`servicos.html`) | `header-nav`, `hero-centered` (curto), `services-cards` (detalhado, 3-8), `steps`, `faq-accordion`, `cta-band`, `footer` | o que se contrata e como funciona; 1 página por serviço só se > 6 serviços com conteúdo próprio |
| Portfólio* (`portfolio.html`) | `header-nav`, `hero-centered` (curto), `portfolio-grid` (6-12), `cta-band`, `footer` | prova visual |
| Contato (`contato.html`) | `header-nav`, `contact-split`, `footer` | converter; mapa se há atendimento presencial |
| Privacidade (`privacidade.html`) | `header-nav`, `text-prose`, `footer` | obrigatório (LGPD); modelo do starter |
| Obrigado (`obrigado.html`) | `hero-centered` | confirmação do formulário; não indexar |

### 4.4 One-page institucional (★ quando < 6 serviços e sem portfólio)
`header-nav` (âncoras: Sobre, Serviços, Depoimentos, Contato) → `hero-split` → `features-grid` → `services-cards` → `about-split` → `stats-band`* → `testimonials-grid` → `faq-accordion`* → `cta-band` → `contact-split` → `footer` → `whatsapp-float`. 9-12 seções; se passar de 12, vire multi-página.

## 5. Catálogo de seções

Por ID: quando usar · conteúdo mínimo · variantes (classes do starter) · erros comuns · regras de copy (comprimentos). HTML em `GUIA-FRONTEND §4` pelo mesmo ID. Todo `section` leva o par de marcadores e um `id` em português (`#diferenciais`, `#servicos`, `#como-funciona`, `#sobre`, `#depoimentos`, `#duvidas`, `#contato`).

### `header-nav` — Cabeçalho com navegação
- Quando: sempre, em todas as páginas, idêntico.
- Mínimo: logo (ou nome em texto, `.brand`), 3-5 links, 1 CTA (`btn--primary btn--sm`), menu mobile com `aria-expanded`.
- Variantes: fixo com sombra ao rolar (padrão do starter); `site-header--transparent` sobre hero escuro só em `tech-dark`/`premium` (bloco Z).
- Erros: 7+ links; CTA igual aos links; logo gigante; links para seções que não existem; "Home" como primeiro link (o logo já faz isso).
- Copy: links de 1-2 palavras, na ordem das seções; CTA 2-3 palavras ("Agendar avaliação", "Pedir orçamento").

### `hero-split` — Herói texto + imagem
- Quando: padrão para LP e home quando há uma foto real boa (pessoa, local, produto).
- Mínimo: eyebrow*, H1, subtítulo, CTA primário (+ secundário), imagem 4:3 1600px, linha de prova* (`.hero__proof`).
- Variantes: `split--reverse` (imagem à esquerda); `hero__title--md` quando o H1 tem 10-12 palavras; `media--1x1` para retrato.
- Erros: H1 com slogan vago ("Transformando vidas"); 3 botões; foto de banco; imagem sem `fetchpriority="high"`; carrossel; texto sobre a foto.
- Copy: eyebrow 2-5 palavras (segmento + cidade); H1 6-12 palavras com resultado e público (fórmulas em §6.1); subtítulo 15-30 palavras com como/prazo/diferencial; prova: 2-3 itens de ≤ 6 palavras com números.

### `hero-centered` — Herói centralizado
- Quando: não há foto forte, a mensagem é o foco, páginas internas (versão curta), `obrigado.html`, direções `bold`/`tech-dark`/`premium`.
- Mínimo: eyebrow*, H1, subtítulo, CTA; imagem/mockup opcional abaixo (`media--16x9`).
- Variantes: fundo `section--alt` ou bloco de cor (`bold`); versão curta sem CTA em internas (só eyebrow + H1 + lead).
- Erros: bloco de texto com mais de 60ch de largura; H1 de 3 linhas no desktop; imagem abaixo sem `width`/`height` (salto de layout).
- Copy: H1 6-10 palavras (centralizado pede mais curto); subtítulo ≤ 25 palavras; internas: H1 1-4 palavras ("Nossos serviços") + lead de 10-20.

### `logos-strip` — Faixa de logos
- Quando: ≥ 4 logos reais de clientes, parceiros, convênios ou mídia, com autorização.
- Mínimo: título curto + 4-8 logos monocromáticos (`.logos`, altura 36px).
- Variantes: `section--tight`; logo após o hero ou antes dos depoimentos.
- Erros: 3 logos (parece pouco); logos coloridos de tamanhos diferentes; logos de ferramentas que o negócio usa (não são clientes).
- Copy: título ≤ 8 palavras, factual: "Empresas que já atendemos", "Convênios aceitos", "Na mídia".

### `features-grid` — Diferenciais / benefícios
- Quando: quase sempre; responde "por que vocês" (Q8).
- Mínimo: eyebrow + H2 + lead*; 3 ou 4 cards com ícone Lucide, título, 1-2 frases. 6 no máximo (`grid--3` em 2 linhas).
- Variantes: `grid--3` (3 ou 6 itens), `grid--4`/`grid--2` (4 itens); `card--hover` em `bold`; sem card (ícone + texto soltos) em `editorial`/`premium`.
- Erros: 5 itens; benefícios genéricos ("Qualidade", "Compromisso", "Atendimento"); ícone decorativo sem relação; texto de 4 frases; cards de alturas desiguais por copy desigual.
- Copy: H2 3-8 palavras; título do card 2-5 palavras com substantivo concreto ("Avaliação de 60 minutos"); texto 15-35 palavras com um fato ou número; mesma estrutura em todos os cards.

### `services-cards` — Serviços / produtos
- Quando: 3-8 serviços ou produtos nomeados.
- Mínimo: eyebrow + H2 + lead; cards com título, 1-2 frases, link/CTA*; imagem 4:3 opcional (800px).
- Variantes: `grid--2` com imagem (4 itens); `grid--3` sem imagem (3 ou 6); `grid--4` só sem imagem; na página Serviços, cada card pode virar bloco `split` alternado com texto maior.
- Erros: imagem em uns cards e não em outros; preço escondido em texto; cards que não levam a lugar nenhum quando há página de serviços; mais de 8 (vire lista ou página).
- Copy: título = nome que o cliente usa ("RPG", não "Reeducação Postural Global" sozinho; use os dois); 1-2 frases (10-30 palavras) com para quem + o que inclui; CTA do card 1-2 palavras ("Agendar", "Ver detalhes").

### `steps` — Como funciona
- Quando: serviço com processo (avaliação → plano → entrega), inscrição, compra, onboarding.
- Mínimo: eyebrow + H2; 3-4 passos numerados com título + 1 frase; CTA* abaixo, centralizado.
- Variantes: `grid--3`/`grid--4`; horizontal no desktop e vertical no mobile (padrão); com imagem por passo só se as 3 existirem.
- Erros: 5+ passos (agrupe); passos que são benefícios disfarçados; passo 1 = "Entre em contato" sem dizer o que acontece depois; verbos no infinitivo misturados com substantivos.
- Copy: H2 de 3-6 palavras ("Como funciona", "Três passos para…"); título do passo 2-4 palavras, substantivo ou verbo no imperativo, consistente; frase de 10-20 palavras dizendo o que acontece e em quanto tempo.

### `about-split` — Sobre nós
- Quando: institucional e LP de serviço (pessoas e credenciais vendem); obrigatório para saúde, jurídico, educação.
- Mínimo: eyebrow + H2; 2-3 parágrafos curtos; foto real (equipe, local, fundador) 4:3 ou 3:2; 2-3 fatos em lista.
- Variantes: `split--reverse`; fatos como mini `stats` inline; na página Sobre, 2 blocos `split` alternados (história / método).
- Erros: texto de 6 parágrafos (vai para `text-prose` em Sobre); "missão, visão, valores"; foto de banco; falar de si sem falar do cliente.
- Copy: H2 3-7 palavras com personalidade ("Uma clínica pequena de propósito"); parágrafos de 40-70 palavras: 1º quem e desde quando (com registro profissional), 2º como trabalha e para quem, 3º* estrutura e condições (convênio, nota, estacionamento); fatos de 2-6 palavras com número.

### `stats-band` — Números
- Quando: 3-4 números verdadeiros e verificáveis (anos, clientes, projetos, nota, taxa).
- Mínimo: número + rótulo, em faixa `section--alt section--tight`, 3-4 itens (`grid--3`/`grid--4`).
- Variantes: logo após o hero (prova rápida) ou dentro de Sobre; nota de rodapé da seção para a fonte ("*Pesquisa interna, 2025").
- Erros: números redondos inventados ("+1000 clientes") sem fonte; porcentagem sem contexto; 2 ou 5 itens; contador animado.
- Copy: número com unidade curta ("12 anos", "+4.000", "4,9", "92%"); rótulo 2-6 palavras dizendo de quê ("pacientes atendidos", "nota no Google (310 avaliações)").

### `testimonials-grid` — Depoimentos
- Quando: ≥ 2 depoimentos reais com nome (Q24); nunca inventados.
- Mínimo: eyebrow + H2; 2-3 cards com citação, nome, cargo/contexto; foto 1:1* (96px); estrelas* se vêm de avaliações reais.
- Variantes: `grid--3` (3 ou 6) ou `grid--2`; destaque de 1 depoimento longo em `split` com foto grande (editorial/premium); link "Ver avaliações no Google" abaixo.
- Erros: "Excelente serviço! — Maria" (sem contexto); 5 estrelas em tudo sem fonte; citação de 120 palavras; depoimento de amigo/sócio; sem nome ou com nome completo sem autorização.
- Copy: citação 20-60 palavras, com o problema antes e o resultado depois, na fala da pessoa (não polir demais); nome + sobrenome abreviado ou completo com autorização; contexto 3-6 palavras ("gerente comercial, paciente desde 2025").

### `portfolio-grid` — Portfólio / cases / galeria
- Quando: arquitetura, design, fotografia, obras, reformas, estética, eventos; há 4-9 imagens boas.
- Mínimo: eyebrow + H2; 4-9 figuras com legenda (título + 1 linha); link* para o case.
- Variantes: `grid--3` 4:3 (padrão); `grid--2` 16:9 para obras largas; `media--1x1` em grade de 6-9 (Instagram-like); filtros não (sem JS extra).
- Erros: 3 itens; imagens de proporções diferentes sem `.media`; sem legenda; fotos de 4 MB; "ver mais" que não leva a nada.
- Copy: legenda = o que é + onde/para quem (2-8 palavras: "Reforma de cozinha — apto 70 m², Perdizes") + linha opcional com resultado ou ano.

### `pricing-table` — Planos / preços
- Quando: 2-3 planos claros com preço (Q18 = B); se "a partir de", use `cta-band` ou texto no serviço.
- Mínimo: nome, preço com período, descrição de 1 linha, 4-7 itens, CTA; 1 plano `plan--featured` com badge.
- Variantes: `grid--3` (3 planos) ou `grid--2`; nota abaixo com formas de pagamento e condições.
- Erros: 4+ planos; tabela comparativa com 20 linhas; preço sem período ("R$ 97" de quê?); destaque no plano mais caro sem razão; asteriscos sem explicação.
- Copy: nome do plano 1-2 palavras; preço "R$ 97/mês" ou "R$ 1.200" + "em até 12x"; descrição ≤ 12 palavras dizendo para quem; itens 2-6 palavras começando por substantivo; CTA igual em todos ("Escolher plano") ou específico no destacado ("Começar agora").

### `faq-accordion` — Perguntas frequentes
- Quando: quase sempre; alimentado pelas objeções de Q16 e pelas perguntas que chegam no WhatsApp.
- Mínimo: eyebrow + H2; 4-8 perguntas em `details/summary`, todas fechadas; largura `container-narrow`.
- Variantes: `section--alt`; 2 colunas só com ≥ 8 perguntas curtas (bloco Z); link para o contato ao final ("Não achou? Chame no WhatsApp").
- Erros: perguntas que ninguém faz ("Qual a missão da empresa?"); respostas de 1 palavra ou de 10 linhas; 12+ perguntas; primeira pergunta aberta por padrão; perguntas sobre preço sem resposta real.
- Copy: pergunta ≤ 12 palavras, na fala do cliente, em 1ª pessoa quando natural ("Preciso de pedido médico?"); resposta 1-3 frases (20-60 palavras), direta na primeira frase ("Não." / "Sim, com reembolso."), sem "entre em contato para saber".

### `team-grid` — Equipe
- Quando: institucional em que as pessoas são o diferencial (clínicas, escritórios, consultorias, escolas); fotos reais e autorizadas.
- Mínimo: eyebrow + H2; 3-8 pessoas com foto 3:4 ou 1:1, nome, cargo, 1 linha.
- Variantes: `grid--3`/`grid--4`; retrato com fundo uniforme; link* para LinkedIn.
- Erros: fotos com estilos diferentes (uma de estúdio, uma de celular, uma recortada); 12+ pessoas em cards (vire lista); cargos internos que o cliente não entende; sem registro profissional quando é exigido.
- Copy: nome completo; cargo 2-5 palavras com registro quando houver ("Fisioterapeuta · CREFITO 3/00000-F"); 1 linha de 8-15 palavras com especialidade ou o que a pessoa faz pelo cliente.

### `video-embed` — Vídeo
- Quando: existe um vídeo bom, curto (≤ 3 min) e hospedado no YouTube; apresentação, demonstração, depoimento em vídeo.
- Mínimo: eyebrow + H2 + 1 frase; iframe `youtube-nocookie` em `media--16x9` com `title` e `loading="lazy"`.
- Variantes: centralizado em `container-narrow`; como mídia do `hero-centered`; miniatura com botão (só se o vídeo for pesado para a dobra).
- Erros: autoplay; vídeo institucional de 8 minutos; iframe sem proporção (altura errada no mobile); vídeo como única explicação do serviço.
- Copy: H2 3-6 palavras dizendo o que a pessoa verá ("Veja como é a avaliação"); frase ≤ 20 palavras com a duração ("2 minutos").

### `cta-band` — Faixa de chamada para ação
- Quando: a cada 2-3 seções em LPs longas e sempre antes do contato/rodapé; final de páginas internas.
- Mínimo: H2 (resultado), 1 frase, 1 botão `btn--inverse btn--lg`.
- Variantes: fundo `primary` (padrão) ou `surface-2`/foto com overlay (bloco Z); `cta-band--full` (sem raio, largura total) em `bold`; com 2 botões (WhatsApp + formulário) só no final da página.
- Erros: duas `cta-band` seguidas; título igual ao do hero; frase que repete o botão; usar como separador decorativo sem ação.
- Copy: H2 4-9 palavras, pergunta ou resultado ("Pronto para tratar a causa da dor?"); frase 10-25 palavras com próximo passo e garantia ("Resposta no mesmo dia útil"); botão 2-4 palavras.

### `contact-split` — Contato
- Quando: sempre que houver formulário (Q37) ou dados de contato; página Contato ou última seção da LP.
- Mínimo: eyebrow + H2 + lead; formulário com 3-4 campos + consentimento LGPD + botão + nota; coluna de dados (WhatsApp, telefone, e-mail, endereço, horário) com ícones; mapa* em `media--16x9` com `loading="lazy"`.
- Variantes: sem formulário (só dados + botão WhatsApp grande) quando Q37 = B; `split--reverse`; mapa abaixo em vez de ao lado.
- Erros: 6+ campos; campo "assunto" em select; e-mail de contato invisível; WhatsApp sem link `wa.me`; mapa sem `title`; nota de resposta prometendo o que não cumpre.
- Copy: H2 2-6 palavras ("Fale com a Raiz"); lead ≤ 20 palavras com canal mais rápido e prazo; labels 1-3 palavras; botão com resultado ("Pedir orçamento"); nota ≤ 12 palavras; microcopy completa em §6.5.

### `text-prose` — Texto longo
- Quando: política de privacidade, "Sobre" longo, termos, página de serviço com conteúdo denso.
- Mínimo: H1 (ou H2) + prosa em `.prose` com `max-width: 65ch`, H2/H3 a cada 3-5 parágrafos, listas quando há enumeração.
- Variantes: com sumário em lista de âncoras no topo (≥ 6 H2); data de atualização no fim (privacidade).
- Erros: parágrafos de 12 linhas; texto justificado; sem subtítulos; copiar política de privacidade genérica sem os dados reais (razão social, serviço de formulário, analytics).
- Copy: parágrafos 40-90 palavras; H2 2-6 palavras; frases ≤ 25 palavras; privacidade: preencha o modelo do starter, não escreva do zero.

### `footer` — Rodapé
- Quando: sempre, idêntico em todas as páginas (versão `site-footer--simple` em `obrigado.html`/`privacidade.html`).
- Mínimo: logo/nome + frase, navegação, contato, redes; linha legal com razão social, CNPJ, link Privacidade, © ano (o `main.js` preenche o ano).
- Variantes: 3 ou 4 colunas; coluna "Horários"; selo de registro profissional; links de serviços.
- Erros: rodapé com 30 links; redes sem link; CNPJ omitido quando a pessoa tem empresa (confiança); "Desenvolvido por" com link externo; newsletter sem serviço configurado.
- Copy: frase da marca ≤ 15 palavras (o que faz + onde); títulos das colunas 1-2 palavras; linha legal no formato "© 2026 Razão Social Ltda. · CNPJ 00.000.000/0001-00".

### `whatsapp-float` — Botão flutuante WhatsApp
- Quando: WhatsApp é CTA (Q13 ou Q14) e há alguém para responder; Brasil: quase sempre.
- Mínimo: link `wa.me/55DDDNÚMERO?text=...` com mensagem pré-preenchida (Q36), `aria-label`, canto inferior direito, 56px.
- Variantes: com rótulo "Fale conosco" no desktop; esconder enquanto o `cookie-banner` está aberto (o starter trata).
- Erros: cobrir o botão do formulário no mobile; mensagem pré-preenchida genérica demais ("Olá"); número sem DDI; abrir na mesma aba.
- Copy: mensagem 8-15 palavras, com origem e intenção: "Olá! Vim pelo site e quero agendar uma avaliação."

### `cookie-banner` — Aviso de cookies
- Quando: só com analytics ou pixels (Q40/Q41); sem scripts de terceiros, não existe.
- Mínimo: 1-2 frases, botões Aceitar e Recusar com o mesmo peso visual, link para Privacidade; scripts só após aceitar (`GUIA-FRONTEND §11`).
- Variantes: barra inferior (padrão) ou card no canto; nunca modal bloqueando a página.
- Erros: só botão "Aceitar"; "Recusar" escondido em link cinza; banner que reaparece a cada página; texto jurídico de 6 linhas.
- Copy: "Usamos cookies para medir visitas e melhorar o site. Você pode aceitar ou recusar." + "Aceitar" / "Recusar" + "Política de privacidade".

## 6. Copywriting

A matéria-prima vem da pessoa (Fase 2, Tarefa 5). A IA organiza, corta e dá forma; não inventa fatos, números, depoimentos, prêmios ou garantias. Tudo que faltar vira `[PLACEHOLDER: o que falta]` na especificação e pergunta à pessoa.

### 6.1 Fórmulas de headline (H1 do hero), com 3 exemplos pt-BR cada

| Fórmula | Quando | Exemplos |
|---|---|---|
| **[Resultado] para [público]** | serviço com público claro (★) | "Contabilidade sem surpresas para pequenas empresas de Campinas" · "Aulas de inglês para quem precisa falar no trabalho" · "Projetos de interiores para apartamentos compactos" |
| **[Resultado] em [prazo], sem [dor]** | diferencial de prazo ou de processo | "Seu site no ar em 15 dias, sem mensalidade" · "Dor nas costas tratada na causa, sem remédio" · "Imposto de renda entregue em 48 horas, sem sair de casa" |
| **[Verbo imperativo] [benefício] com [método]** | LP de conversão, tom direto | "Venda mais com um site que responde no WhatsApp" · "Recupere o movimento com um plano feito para você" · "Reforme sua cozinha com projeto e obra em um só contrato" |
| **[Dor]? [Promessa curta].** | público que já sofreu com concorrentes (Q16) | "Cansado de orçamentos que nunca chegam? Resposta em 24 horas." · "Seu contador some na hora do imposto? O nosso atende no WhatsApp." · "Pulgas de novo? Dedetização com garantia de 90 dias." |
| **[Serviço] em [cidade/bairro] com [diferencial]** | negócio local (Q11 = A), ajuda no SEO | "Fisioterapia no Cambuí com avaliação de 60 minutos" · "Marcenaria sob medida na Zona Sul com entrega em 30 dias" · "Clínica veterinária 24h em Curitiba" |
| **[Tempo/método] + [o que fazem para quem]** | institucional, tom sóbrio | "Há 20 anos cuidando da segurança jurídica de empresas familiares" · "Engenharia que entrega obra no prazo desde 2008" · "Design de marcas para negócios que querem crescer" |

Regras: 6-12 palavras; uma ideia; substantivos concretos; sem "soluções", "excelência", "transformar"; nunca começa com o nome da empresa nem com "Bem-vindo"; o subtítulo (15-30 palavras) completa com como, prazo, prova ou para quem; o eyebrow (2-5 palavras) diz o segmento e a cidade. Gere 3 opções de fórmulas diferentes e deixe a pessoa escolher. Teste dos 5 segundos (Fase 4, checkpoint do hero): alguém de fora vê só a primeira tela no celular e diz o que a empresa faz e para quem; se errar, a headline volta.

### 6.2 Comprimentos (resumo; detalhes por seção em §5)

| Elemento | Tamanho |
|---|---|
| Eyebrow | 2-5 palavras |
| H1 (hero) | 6-12 palavras, ≤ 60 caracteres |
| Subtítulo do hero / lead de seção | 15-30 palavras / 10-25 |
| H2 de seção | 3-8 palavras |
| Título de card / passo | 2-5 palavras |
| Texto de card | 1-2 frases, 15-35 palavras |
| Depoimento | 20-60 palavras + nome + contexto (3-6 palavras) |
| Pergunta / resposta do FAQ | ≤ 12 palavras / 1-3 frases (20-60 palavras) |
| Parágrafo (Sobre, prosa) | 40-70 palavras (prosa longa: até 90) |
| Botão | 2-5 palavras |
| Nota sob o botão / formulário | ≤ 12 palavras |
| Número + rótulo (stats) | 1-3 caracteres de número + 2-6 palavras |
| `title` SEO / `meta description` | 50-60 / 150-160 caracteres |
| `alt` de imagem | ≤ 125 caracteres |
| Frase da marca no rodapé | ≤ 15 palavras |
| Frase em geral | ≤ 20 palavras; corte conjunções e advérbios primeiro |

### 6.3 Prova social
- Ordem de força: número verificável com fonte (nota 4,9 no Google · 310 avaliações) > depoimento com nome, foto e contexto > logos de clientes > selos/prêmios > "anos de mercado".
- Específico vence genérico: "voltei a correr em 8 sessões" > "atendimento excelente"; mantenha a fala da pessoa, corte só o excesso. Números exatos ("127 clientes", "4,9 com 86 avaliações") são mais críveis que redondos ("centenas de clientes").
- Perto do CTA: uma prova curta (nota do Google ou 1 frase de depoimento) ao lado ou logo acima do primeiro botão e da `cta-band`; o visitante decide no botão. Use 2-3 tipos de prova diferentes por página (ex.: nota + depoimentos + logos), não 1 tipo repetido.
- Sempre contexto: cargo/situação + "cliente desde 2024"/"paciente desde 2025"; depoimentos de empresa com nome da empresa.
- Sem prova real: use fatos (formação, registro profissional, anos, estrutura, garantia) em `about-split`/`stats-band`; nunca invente; proponha à pessoa coletar 3 depoimentos pelo WhatsApp com 3 perguntas (situação antes, o que fizemos, resultado).
- Avaliações do Google/Reclame Aqui: cite nota + quantidade + link; não copie textos de avaliações sem permissão explícita.
- Logos e prêmios: só com autorização; "na mídia" só com link para a matéria.

### 6.4 CTA
- Fórmula: verbo no infinitivo + objeto (+ canal): "Agendar avaliação no WhatsApp", "Pedir orçamento", "Falar com um especialista", "Reservar horário", "Ver planos", "Baixar o guia", "Garantir vaga".
- Evite: "Saiba mais", "Clique aqui", "Enviar", "Submeter", "Contato", "Entre em contato conosco agora mesmo!!!".
- Primário igual em todo o site (hero, `cta-band`, header); secundário muda por contexto ("Ver como funciona", "Ver portfólio", "Ver serviços").
- Microrreforço (nota sob o botão, ≤ 12 palavras): "Resposta em até 1 dia útil" · "Sem compromisso" · "Avaliação cobrada à parte, abatida no plano" · "Vagas limitadas por turma" (só se verdade).
- Urgência só verdadeira (data, vagas, turma); nunca contador regressivo falso nem "últimas 3 vagas" permanente: além de derrubar a confiança, é publicidade enganosa (CDC).

### 6.5 Microcopy de formulário e páginas de apoio

| Elemento | Texto padrão (★) |
|---|---|
| Labels | "Nome" · "WhatsApp" · "E-mail" · "Mensagem" (ou "Conte brevemente o que precisa") |
| Placeholders (exemplo, não instrução) | "Ana Ribeiro" · "(19) 99999-0000" · "ana@email.com" · "Ex.: dor no joelho há 3 meses" |
| Campo obrigatório | asterisco no label + "Campos obrigatórios" acima do botão; nunca só cor |
| Consentimento LGPD (desmarcado) | "Li e concordo com a [Política de Privacidade] e autorizo o contato pelos dados informados." |
| Botão | "Pedir orçamento" · "Agendar avaliação" · "Enviar mensagem" (último caso) |
| Nota sob o botão | "Resposta em até 1 dia útil. Seus dados não são compartilhados." |
| Erro de validação | "Informe um e-mail válido." · "Preencha seu WhatsApp com DDD." (texto + ícone, cor de erro) |
| Erro de envio | "Não foi possível enviar. Tente de novo ou chame no WhatsApp: (19) 99999-0000." |
| `obrigado.html` | H1 "Mensagem enviada" · texto "Recebemos seu contato e respondemos em até 1 dia útil. Se preferir, chame no WhatsApp agora." · botões "Chamar no WhatsApp" / "Voltar ao início" |
| `404.html` | H1 "Página não encontrada" · "O endereço pode ter mudado. Volte ao início ou fale com a gente." · botão "Ir para o início" |
| Aviso de cookies | ver `cookie-banner` em §5 |

### 6.6 Tom pt-BR
- Trate por "você"; nunca "vc", "tu" ou "o cliente" falando com o cliente. "A gente" só no tom descontraído (Q10 = E).
- Voz ativa, presente do indicativo, frases ≤ 20 palavras: "Avaliamos em 60 minutos", não "A avaliação será realizada".
- Sem gerundismo ("estaremos enviando"), sem "venha conhecer", sem "não perca", sem "!!!", sem CAIXA ALTA em frases.
- Palavras proibidas sem fato ao lado: soluções, excelência, qualidade, compromisso, inovador, diferenciado, personalizado, o melhor, líder, referência.
- Anglicismos só para público tech (Q10 = C e setor de tecnologia); fora disso, "agendamento" e não "booking", "orçamento" e não "quote".
- Números em algarismos (12 anos, 4,9, 60 minutos); "R$ 1.200" com espaço; horas "7h às 20h"; telefone "(19) 99999-0000"; datas "15 de março".
- Ortografia do Acordo (pt-BR): "ideia", "voo", "autoestima"; nada de "Você" com maiúscula no meio da frase.
- Título com inicial maiúscula só na primeira palavra e nomes próprios ("Como funciona", não "Como Funciona").
- Adapte ao tom de Q10: profissional/direto = frases curtas e números; acolhedor = 2ª pessoa e "sem medo", "no seu ritmo"; sofisticado = menos adjetivos, mais substantivos, sem exclamação; técnico = termos precisos com explicação de 5 palavras.
- Consistência: o nome do negócio sempre do mesmo jeito; um único termo por conceito (não alternar "sessão" e "atendimento").
- Fale do cliente: fora da página Sobre, "você/seu" deve aparecer mais que "nós/nosso"; cada benefício começa com o que muda para o cliente ("Você recebe…"), não com o que a empresa tem.
- Reaproveite as palavras do cliente (voice of customer): frases literais de mensagens de WhatsApp e avaliações (Fase 2) viram headline, benefícios e FAQ; o FAQ começa pela maior objeção (preço ou prazo).

### 6.7 Elementos de confiança no Brasil (inclua os que forem verdadeiros)
- WhatsApp com número visível e botão (não só ícone); resposta em horário comercial declarada.
- Razão social e CNPJ no rodapé; endereço completo com mapa quando há atendimento presencial; horário de funcionamento. Esconder CNPJ/endereço "para evitar spam" é lido como sinal de golpe; para loja virtual, nome empresarial, CNPJ e endereço são exigência legal (Decreto 7.962/2013).
- Nota e quantidade de avaliações no Google (Google Business Profile) com link; selo RA1000/Reclame Aqui só se a nota for boa (≥ 7); com nota ruim ou sem página, não mencione.
- Registro profissional e conselho (CREFITO, CRM, CRO, OAB, CREA, CRC, CRP) junto ao nome das pessoas.
- Formas de pagamento: Pix, cartão, parcelamento; "emitimos nota fiscal"; "recibo para reembolso de convênio".
- Garantia explícita e em palavras simples ("garantia de 90 dias", "reavaliação sem custo").
- Fotos reais do local e da equipe (Q22); vídeos curtos quando houver.
- Política de privacidade (LGPD) acessível no rodapé e no formulário; consentimento desmarcado.
- Anos de mercado e número de clientes só com fonte; "desde 2014" vale mais que "+10 anos".
- Instagram ativo linkado (ícone com `aria-label`), não feed incorporado.

## 7. Erros comuns de design

1. Hero com slogan vago e sem CTA visível acima da dobra no celular (375px): o H1 precisa caber em 2-3 linhas e o botão aparecer sem rolar.
2. Mais de 2 famílias de fonte ou 5+ pesos carregados; títulos em peso 300 ou corpo em 300.
3. Texto cinza-claro "elegante" (`#999`, slate-400): reprova AA; mínimo `#6B7280` sobre branco.
4. Texto branco sobre amarelo, laranja, verde-claro ou ciano (3:1 ou menos): use texto escuro ou fundo tom 700.
5. Cor de destaque em tudo (links, ícones, títulos, botões): o CTA some; destaque em 1 elemento por dobra.
6. Preto puro sobre branco puro: usar neutro-950 tintado sobre off-white.
7. Fonte de display (Playfair, Cormorant) em parágrafos ou abaixo de 24px.
8. Linha de texto com 100+ caracteres em 1440px: limite 65ch.
9. Seções todas com o mesmo fundo e o mesmo layout de 3 cards: alterne `section`/`section--alt` e varie split, grid e faixa.
10. 5 cards em grade de 3 (um órfão) ou 4 em grade de 3: ajuste a quantidade ou a grade.
11. Ícones de estilos diferentes (um Lucide, um emoji, um PNG), tamanhos diferentes ou sem relação com o texto.
12. Foto de banco genérica (aperto de mãos, médico apontando, equipe diversa sorrindo em escritório de vidro) no lugar de foto real.
13. Imagens sem proporção fixa: alturas diferentes nos cards, salto de layout ao carregar; sempre `.media--4x3` etc.
14. Carrossel automático, contador animado, animação em loop, pop-up de entrada.
15. Botão primário duplicado 3 vezes na mesma tela ou primário e secundário com o mesmo peso visual.
16. Menu com 7+ itens, nomes de 3-4 palavras ou dropdown em site de uma página.
17. Rodapé enorme (newsletter sem serviço, 4 colunas de links repetidos, mapa gigante) ou rodapé sem CNPJ/privacidade.
18. Espaçamento irregular: 20px aqui, 35px ali; tudo fora da escala de 4px e sem ritmo entre seções.
19. Texto sobre foto sem overlay; gradiente atrás de texto pequeno; fundo com padrão que briga com o conteúdo.
20. Site que só foi olhado no desktop: no mobile a imagem do hero empurra o CTA para baixo, os cards viram 12 telas de rolagem e a tabela de preços estoura a largura.

## 8. Checklist de revisão de design

Use antes de apresentar a `ESPECIFICACAO.md` (Fase 3) e em cada checkpoint da Fase 4. Responda sim para todos ou corrija.

- [ ] Direção, paleta e fontes são as aprovadas em `REFERENCIAS.md` (sem mudanças por conta própria); ajustes registrados em "Decisões assumidas".
- [ ] 6 pares de contraste checados e ≥ 4,5:1 (3:1 para texto grande, ícones, bordas de input e foco), com as razões anotadas na especificação.
- [ ] H1 único por página, 6-12 palavras, cabe em 2-3 linhas a 375px; subtítulo 15-30 palavras.
- [ ] 1 CTA primário por dobra, visível acima da dobra no celular, com o mesmo texto em hero, header e `cta-band`.
- [ ] Ordem de seções segue §4 para o tipo de site, com 7-12 seções (LP) ou 6-8 (home); nenhuma seção sem conteúdo real.
- [ ] Toda seção tem eyebrow/H2 coerente, e os textos respeitam os comprimentos de §5-§6 (nenhum card com o dobro do texto do vizinho).
- [ ] Quantidade de itens compatível com a grade (3→`grid--3`, 4→`grid--4`/`grid--2`, nunca 5); cards com estrutura idêntica.
- [ ] Ritmo visual: `section`/`section--alt` alternados; nenhuma `cta-band` seguida de outra; espaçamento só da escala de tokens.
- [ ] Imagens: proporção fixa por uso, tamanhos-alvo (hero 1600px ≤ 220 KB; cards 800px ≤ 90 KB), `alt` ≤ 125 caracteres, nenhuma foto de banco genérica.
- [ ] Ícones todos Lucide, 24px, mesma cor; 1 ícone por item; relação clara com o texto.
- [ ] Prova social real e específica (nome, contexto, fonte dos números); nada inventado; sem prova real, fatos em Sobre.
- [ ] Movimento conforme Q30 (nenhum/sutil/médio); `.reveal` só em itens repetidos; nada automático ou em loop.
- [ ] Formulário com 3-4 campos, labels visíveis, consentimento LGPD desmarcado, botão com resultado, nota de prazo; WhatsApp com mensagem pré-preenchida.
- [ ] Rodapé com razão social, CNPJ, endereço (se presencial), privacidade, redes com link; menu com 3-5 links + CTA.
- [ ] Conferido em 375px e 1280px (mentalmente na Fase 3; no navegador na Fase 4): sem rolagem horizontal, CTA alcançável com o polegar, tabela/grade não estoura.

## 9. Referências

Links com 1 linha cada; grátis salvo indicação. "(verificar)" = não confirmado por busca nesta versão do kit. A lista completa de galerias de referência e ferramentas de captura está em `FASE-2-REFERENCIAS.md §11`; aqui só o que o planejamento usa.

**Tipografia**
- https://fonts.google.com/ — catálogo das ~1.900 famílias open source usadas no kit; página da fonte mostra pesos e eixos. Grátis.
- https://fonts.google.com/variablefonts — tabela das famílias variáveis com eixos e intervalos; confirme antes de usar `wght@500..700`. Grátis.
- https://developers.google.com/fonts/docs/css2 — sintaxe oficial do link (eixos em ordem alfabética, `display=swap`). Grátis.
- https://fonts.google.com/knowledge — guias do Google Fonts sobre escolher e parear tipos. Grátis.
- https://www.fontpair.co/ — pares de Google Fonts prontos com preview. Grátis (extensão paga opcional).
- https://www.typewolf.com/ — sites reais com fontes identificadas e listas das melhores Google Fonts. Grátis (guias pagos opcionais).
- https://modernfontstacks.com/ — pilhas de fallback de fontes do sistema por classificação. Grátis.
- https://utopia.fyi/type/ — calculadora de escala tipográfica fluida com `clamp()`. Grátis.
- https://practicaltypography.com/ — livro online com as regras essenciais (tamanho, entrelinha, medida). Grátis (pagamento voluntário).
- https://web.dev/articles/font-best-practices — carregamento de fontes (preconnect, swap, preload com critério). Grátis.

**Cor e contraste**
- https://webaim.org/resources/contrastchecker/ — verificador de referência de contraste WCAG AA/AAA. Grátis.
- https://www.whocanuse.com/ — simula o par de cores para daltonismo e baixa visão, com nota WCAG. Grátis.
- https://accessible-colors.com/ — sugere a cor acessível mais próxima quando um par reprova. Grátis.
- https://www.realtimecolors.com/ — aplica paleta e fontes em um site de exemplo (regra 60-30-10), claro/escuro. Grátis.
- https://coolors.co/ — gerador de paletas e extração de cores de imagem. Grátis com limites; Pro ≈ US$ 3/mês.
- https://www.happyhues.co/ — paletas com papéis nomeados aplicadas em um site real. Grátis.
- https://www.radix-ui.com/colors — escalas de 12 passos (claro/escuro) com uso definido por passo. Grátis.
- https://www.tints.dev/ — gera 11 tons a partir de um hex da marca; exporta hex. Grátis.
- https://uicolors.app/generate — gera escala 50-950 a partir de um hex com preview em componentes. Grátis (exportações extras no Pro).
- https://tailwindcss.com/docs/colors — tabela pública de neutros tintados (slate, gray, zinc, neutral, stone) e matizes com valores prontos. Grátis.
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast — critério 1.4.11 (3:1 para bordas, ícones e foco). Grátis.

**Layout, componentes e princípios**
- https://lucide.dev/icons/ — biblioteca de ícones SVG (ISC) usada no kit; copie o SVG inline. Grátis.
- https://lawsofux.com/ — princípios de psicologia aplicados a interfaces (Hick, Fitts, Von Restorff). Grátis.
- https://m3.material.io/styles/typography/type-scale-tokens — escala tipográfica de referência com tamanho/entrelinha. Grátis.
- https://www.refactoringui.com/ — livro de design prático para quem programa (hierarquia, espaçamento, cor). Pago (US$ 99-149; capítulos grátis).
- https://www.nngroup.com/articles/ — artigos de pesquisa de usabilidade (formulários, navegação, legibilidade). Grátis.
- https://land-book.com — galeria de landing pages reais com filtros por setor e estilo. Grátis com limites; Pro ≈ US$ 6/mês.
- https://saaspo.com — exemplos por tipo de seção (hero, pricing, FAQ, depoimentos). Grátis.
- https://www.unsection.com — biblioteca de seções reais (hero, features, footer, CTA, equipe). Grátis.
- https://footer.design — galeria só de rodapés, filtrável por estilo. Grátis.
- https://onepagelove.com — sites de uma página (formato mais próximo da LP institucional simples). Grátis para navegar.
- https://minimal.gallery — sites minimalistas; referência para `clean`/`editorial`. Grátis.

**Anatomia e copy (§4 e §6)**
- https://marketingexamples.com/conversion/landing-page-guide — guia visual curto do que vai acima da dobra, com antes/depois. Grátis.
- https://marketingexamples.com/copywriting/guide — 7 princípios de copy com exemplos ("diga mais simples", "específico vence vago"). Grátis.
- https://www.julian.com/guide/growth/landing-pages — anatomia hero > benefícios > prova > objeções > CTA e fórmula de proposta de valor. Grátis.
- https://copyhackers.com — fórmulas PAS, AIDA, BAB e "voice of customer"; busque "formulas". Blog grátis; cursos pagos.
- https://unbounce.com/landing-page-articles/the-anatomy-of-a-landing-page/ — os 5 elementos essenciais de uma LP, útil como checklist. Grátis.
- https://www.nngroup.com/articles/top-ten-guidelines-for-homepage-usability/ — 10 regras da página inicial (tagline explícita, nada de "Bem-vindo"). Grátis.
- https://www.nngroup.com/articles/designing-effective-carousels/ — por que carrossel no topo falha; mostre a quem pedir "banner rotativo". Grátis.
- https://www.landingfolio.com — galeria organizada por seção (hero, pricing, depoimentos, FAQ). Galeria grátis; templates pagos.
- https://hemingwayapp.com — marca frases longas e voz passiva (funciona com português). Versão web grátis. (verificar)
- https://www.rdstation.com/blog/ — artigos em pt-BR sobre landing page, CTA e formulários; use para vocabulário, não para números. Grátis. (verificar)

**Imagens, ícones e favicon (§2.5)**
- https://squoosh.app/ — redimensionar e converter para WebP no navegador (nada sobe para servidor); remove EXIF. Grátis.
- https://unsplash.com/ e https://www.pexels.com/pt-br/ — fotos gratuitas sem crédito obrigatório; baixe "Large/Grande", nunca "Original". Grátis.
- https://undraw.co/illustrations — ilustrações SVG com a cor da marca aplicada antes de baixar; uma coleção por site. Grátis.
- https://haikei.app/ — fundos SVG (ondas, blobs) nas cores da paleta para separar seções sem foto. Grátis. (verificar)
- https://realfavicongenerator.net/ — gera o pacote de favicon (ico, svg, apple-touch-icon 180, 192/512) com as tags prontas. Grátis.
- https://www.opengraph.xyz/ — prévia do link no WhatsApp/LinkedIn após publicar; testa a OG image. Grátis.
