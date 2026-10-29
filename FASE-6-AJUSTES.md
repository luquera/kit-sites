# FASE 6 — Ajustes depois da entrega (qualquer modelo, em minutos)

| | |
|---|---|
| **Quando usar** | O site já existe (há `site/README.md` com URL publicada) e a pessoa pede uma mudança: texto, imagem, cor, nova seção, nova página, integração. |
| **Entrada** | O pedido da pessoa + `site/README.md`. |
| **Saída** | Site atualizado e publicado; `site/README.md` (Histórico e, se preciso, Mapa de seções) atualizado; commit e push. |
| **Modelo** | Sonnet basta (o site foi feito para isso). |
| **Leia também** | Só o que este arquivo mandar. **Não** releia a conversa antiga, a `ESPECIFICACAO.md` inteira nem os guias completos. |

## 1. Localize-se em 5 passos (≤ 5 minutos)

1. Leia `site/README.md` inteiro. Ele diz o que o site é, onde cada seção está (Mapa de seções), como os tokens
   funcionam, quais integrações existem e como publicar.
2. Rode `git log --oneline -10` dentro de `site/` para ver as últimas mudanças.
3. Identifique a página e a seção do pedido pela tabela do Mapa de seções (ID do catálogo + `id` HTML).
4. Abra **só** o arquivo da página afetada e procure o marcador `<!-- ===== [id-do-catalogo]` ou o `id`. Para estilo, abra
   em `styles.css` apenas o bloco do componente (índice no topo) e o bloco `Z. Específico do projeto`.
5. Se o pedido envolver um padrão que você não conhece (ex.: uma seção nova do catálogo), leia apenas a seção
   correspondente de `kit-sites/GUIA-FRONTEND.md §4` (snippet) e, se for conteúdo, `GUIA-DESIGN.md §5` (regras da seção).

Se `site/README.md` não existir ou estiver desatualizado, crie/complete-o antes de mexer no site (modelo em
`kit-sites/base/README.md`), e avise a pessoa em uma linha.

## 2. Classifique o pedido

| Tipo | Exemplos | O que exige |
|---|---|---|
| **Conteúdo** | trocar um texto, uma foto, um telefone, um depoimento | editar o trecho; conferir `alt`, `width`/`height` e caminho se for imagem; Histórico |
| **Estilo local** | "o botão do hero mais escuro", "cards com menos sombra" | regra no bloco Z com comentário; conferir contraste; Histórico |
| **Estilo global** | mudar cor primária, fonte, raio dos cantos | **perguntar antes** (seção 4); alterar tokens no bloco 1; checar contraste AA em texto e botões; conferir todas as páginas; Histórico + README §4 |
| **Estrutura** | nova seção, remover seção, nova página | snippet do `GUIA-FRONTEND §4` com marcadores; link no menu e no rodapé; se nova página: header/footer idênticos, `aria-current`, title/description, `sitemap.xml`; Mapa de seções + Histórico |
| **Integração** | trocar e-mail do formulário, adicionar analytics, mudar número do WhatsApp | seguir `GUIA-FRONTEND §9-§11`; se adicionar analytics, ativar o aviso de cookies e atualizar `privacidade.html`; README §6 + Histórico |
| **Publicação** | domínio novo, mudar de repositório | `kit-sites/FASE-5-QA-E-PUBLICACAO.md §4-§5`; atualizar `PUBLICACAO.md` e README §1 |

## 3. Regras do ajuste mínimo

1. Mude **só** o que foi pedido. Não refatore, não "aproveite para melhorar", não reordene seções, não troque classes
   que funcionam.
2. Use as classes do starter (`site/README.md §5`). CSS novo **apenas** no bloco Z de `styles.css`, precedido de um
   comentário `[id-do-catalogo] #id-html: o que faz`. Sem CSS inline, sem `!important`, sem bibliotecas.
3. Não altere tokens globais (bloco 1) sem a pessoa pedir explicitamente aquela cor/fonte.
4. Mantenha os marcadores de seção intactos. Se criar uma seção, ela nasce com o par de marcadores.
5. Textos novos: use exatamente o texto que a pessoa deu. Se ela pedir "melhore o texto", proponha **uma** versão
   dentro dos limites do `GUIA-DESIGN §6` e espere o "ok".
6. Imagens novas: WebP (ou o formato recebido se já for leve), largura máxima 1600px, nome sem acento/espaço em
   `assets/img/`, `alt` descritivo, `width`/`height` reais, `loading="lazy"` (exceto hero).
7. Caminhos relativos sempre. Nunca `href="/..."` ou `src="/..."` (exceto em `404.html`, que usa a URL final absoluta).
8. Não leia nem edite `BRIEFING.md`, `REFERENCIAS.md` ou `ESPECIFICACAO.md` nesta fase; eles são planejamento. A fonte
   da verdade do site atual é `site/README.md`.

## 4. Quando perguntar antes de mexer

- O pedido é ambíguo (qual seção? qual texto exatamente? qual tom de azul?).
- A mudança afeta mais de uma seção ou mais de uma página (ex.: cor primária, fonte, menu).
- Envolve excluir conteúdo que existe (seção, depoimento, página).
- Pede algo fora do kit (blog, loja, login, formulário complexo): explique em 2 linhas o que é possível de forma
  simples e pergunte.
- Faltam dados (novo número, novo e-mail, imagem, link): peça tudo de uma vez, em uma lista.

Faça **uma** mensagem com todas as perguntas; não pergunte em conta-gotas.

## 5. Mini-QA depois do ajuste (obrigatório)

- [ ] `grep -rn "{{" site/*.html site/*.css site/*.xml site/*.txt` não retorna nada.
- [ ] Abriu a página alterada no navegador (ou pediu à pessoa) em ~375px e ~1280px: nada estourando, sem rolagem horizontal.
- [ ] Links e âncoras do que mudou funcionam (menu → `id` da seção; páginas novas no menu e no rodapé).
- [ ] Imagens novas com `alt`, `width`/`height`, caminho relativo correto e peso razoável (≤ 300 KB).
- [ ] Se mexeu em cor/fonte: contraste AA conferido (texto ≥ 4,5:1; texto grande e botões ≥ 3:1).
- [ ] Se tem navegador headless disponível: console sem erros. Se não: revise o diff com `git diff`.
- [ ] Se criou/removeu página: `sitemap.xml` e `robots.txt` coerentes.
- [ ] Marcadores de seção e `site/README.md` coerentes com o HTML.

## 6. Atualize a documentação (na medida)

- **Sempre:** 1 linha no topo do Histórico de `site/README.md`: `AAAA-MM-DD — o que mudou — pedido de <pessoa>`.
- **Se estrutural:** linha nova/removida no Mapa de seções (e na árvore de arquivos, se nova página).
- **Se integração:** linha da tabela de Integrações (README §6).
- **Se publicação/domínio:** `PUBLICACAO.md` e README §1.
- Nada mais. Não escreva changelog separado, não comente linha por linha, não atualize a `ESPECIFICACAO.md`.

## 7. Commit, push e mensagem final

```
cd site
git add -A
git commit -m "fix: <o que mudou em até 8 palavras>"   # ou feat: (seção/página nova) · docs: (só README)
git push
```

Mensagem para a pessoa (3 linhas, sem código):
> Feito: [o que mudou, 1 linha por item].
> Onde ver: [URL publicada]#[id] — o GitHub Pages atualiza em cerca de 1 minuto (recarregue com Ctrl+F5 se não aparecer).
> Registrei no histórico do site. Algo mais?

Se o push falhar por autenticação, peça à pessoa para rodar `gh auth login` (ou `gh auth status`) e tente de novo.
Fallback sem GitHub: pedir à pessoa para arrastar a pasta `site/` em https://app.netlify.com/drop.

## 8. Três pedidos comuns, do início ao fim

**"Troca o título do hero para 'Fisioterapia que devolve seu movimento em 30 dias'."**
1. README → hero-split em `index.html` `#inicio`. 2. Abrir `index.html`, achar `<h1 class="hero__title" id="inicio-titulo">`,
substituir o texto. 3. Conferir que cabe em 2-3 linhas no celular (375px); se estourar, trocar para `hero__title--md`.
4. Histórico: `2026-11-03 — Novo H1 do hero — pedido de Ana`. 5. `git commit -m "fix: novo título do hero"` e push.

**"Adiciona mais um depoimento, da Carla (gerente na Acme)."**
1. Pedir o texto (20-60 palavras) e, se houver, a foto (quadrada). 2. README → testimonials-grid `#depoimentos`.
3. Copiar um `<article class="card testimonial">` existente, trocar citação, nome, cargo e avatar (`assets/img/depo-carla.webp`,
192×192, exibido a 96px, `loading="lazy"`). Se ficar 4 itens em `grid--3`, perguntar se prefere `grid--4` ou `grid--2` (4 itens em 3 colunas
deixa um órfão). 4. Mini-QA. 5. Histórico + `git commit -m "feat: depoimento da Carla"` + push.

**"Quero a cor principal mais escura/verde."**
1. É estilo global: pedir o hex exato (ou 2-3 opções que a pessoa indique) — não escolher por ela. 2. Atualizar
`--color-primary`, `--color-primary-strong` e `--color-primary-soft` no bloco 1 de `styles.css`; ajustar `theme-color` no
`<head>` e a cor do `favicon.svg` se for derivada. 3. Conferir contraste do texto branco sobre a nova cor (≥ 4,5:1) e da
cor sobre o fundo. 4. Olhar todas as páginas em 375px e 1280px. 5. README §4 (paleta) + Histórico + `git commit -m "fix: nova
cor primária"` + push.
