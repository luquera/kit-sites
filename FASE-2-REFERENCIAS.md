# FASE 2 — Referências (a pessoa pesquisa e decide; a IA lista, recebe e organiza)

| | |
|---|---|
| **Objetivo** | Reunir, em 1-3 dias de trabalho da pessoa, tudo que o plano (Fase 3) precisa e que só ela pode dar: referências visuais, direção, paleta, fontes, textos brutos, imagens, logo e dados operacionais. |
| **Entrada** | `BRIEFING.md` com Status: aprovado. |
| **Saída** | `REFERENCIAS.md` (template: `modelos/REFERENCIAS.md`; exemplo: `exemplos/REFERENCIAS-exemplo.md`) com **Status: aprovado** + pastas `referencias/`, `assets-brutos/`, `conteudo/` preenchidas. |
| **Modelo** | Sonnet basta. A fase é barata em tokens: o trabalho é da pessoa. |
| **Leia também** | `GUIA-DESIGN.md §3` (só a direção escolhida), para montar as Tarefas 3 e 4. Nada mais. |

## 1. Objetivo e quem faz o quê

| Etapa | Pessoa | IA |
|---|---|---|
| Lista de tarefas | — | monta a lista personalizada a partir do BRIEFING (seção 2) e envia uma tarefa por mensagem |
| Referências visuais | pesquisa nas galerias, escolhe, tira prints, rotula | lê os prints uma vez e escreve a "Leitura das referências" |
| Direção, paleta, fontes | decide (confirma, ajusta ou escolhe com as ferramentas) | aplica os padrões do kit quando ela delega; checa contraste |
| Textos | responde os mini-formulários ou envia o que já tem | só registra onde está cada coisa; **não** escreve copy nesta fase |
| Imagens, logo, favicon, OG | fornece, otimiza (Squoosh), nomeia | confere formato, tamanho e nome; registra o que falta |
| Dados operacionais e legais | fornece | registra no formato exato (DDI, hex, URLs completas) |
| Compilação | aprova | monta `REFERENCIAS.md`, faz UMA rodada de pendências, pede aprovação |

Regras da fase:
1. **Uma tarefa por mensagem.** Envie o bloco da tarefa, espere a entrega, registre em `REFERENCIAS.md`, só então a próxima. A pessoa pode pedir "manda tudo de uma vez": então envie as tarefas em uma única mensagem, numeradas, e receba na ordem que ela quiser.
2. **Copie os blocos de texto desta fase como estão.** Adapte só o que está entre colchetes e remova o que a seção 2 mandar pular. Não acrescente explicações.
3. **Pergunte, não infira.** Se a pessoa não tem algo, use o padrão da seção 10 e registre "(assumido)". Nunca invente uma referência, uma cor ou um texto.
4. **Economia de tokens.** Peça prints só do que a descrição em texto não resolve; exija a descrição junto com cada print; leia cada imagem uma vez; não reenvie o briefing.
5. **Não comece a planejar nem a codar.** Nada de "sugiro um hero com…" nesta fase.

## 2. Como a IA personaliza a lista de tarefas a partir do BRIEFING

Leia o `BRIEFING.md` e aplique as regras abaixo antes de enviar qualquer tarefa. As 7 tarefas existem sempre; o que muda é o tamanho de cada uma.

| Resposta no BRIEFING | Efeito na lista |
|---|---|
| Q26 = A-F (direção escolhida) | Tarefa 2 vira confirmação em 1 linha ("mantém `clean`?"). Q26 = G: Tarefa 2 completa, com a tabela das 6 direções. |
| Q31 = A (já tem cores) | **Pule a Tarefa 3.** Peça só os hex (ou o manual da marca) e registre. Q31 = B: Tarefa 3 reduzida — a pessoa envia a primária, a IA deriva o resto pela regra de `FASE-3 §2 Passo 4` e ela aprova. Q31 = C: Tarefa 3 completa. |
| Q32 = A (já tem fontes) | Tarefa 4 vira conferência: os nomes estão no Google Fonts? Se não, ofereça a substituição da tabela da Tarefa 4. Q32 = B: **pule a Tarefa 4**, registre o par padrão da direção "(assumido)". Q32 = C: Tarefa 4 completa. |
| Q4 = C (só o nome, sem marca) | Tarefa 6: não peça logo; registre "logo em texto" (seção 10). Tarefas 3 e 4 completas. |
| Q23 = A (logo em SVG/vetor) | Tarefa 6: peça só o arquivo; remova as instruções de vetorização. Q23 = B/C/D: mantenha as instruções de remover fundo e vetorizar. |
| Q21 = A (textos prontos) | Tarefa 5 vira conferência: peça os arquivos para `conteudo/`, confira se cobrem cada seção provável e pergunte só o que falta. Q21 = B: peça os rascunhos e envie o mini-formulário só das seções sem rascunho. Q21 = C: Tarefa 5 completa. |
| Q22 = A/B (tem fotos) | Tarefa 6: lista de fotos próprias + checklist de otimização. Q22 = C: Tarefa 6 com a parte de banco de imagens. Q22 = D: registre pendência com data combinada; a Fase 3 pode avançar com `hero-centered` provisório. |
| Q24 = A/B (tem depoimentos) | Tarefa 5: peça só os textos originais, nome, contexto e autorização. Q24 = C: inclua o roteiro de coleta por WhatsApp com prazo. Q24 = D: **não peça depoimentos** e não inclua a seção. |
| Q12 (provas) | B: peça logos de clientes (Tarefa 6). C: peça os números com fonte (Tarefa 5, "números"). D: peça link + nota + quantidade de avaliações. E: peça imagens do portfólio (Tarefa 6) e o mini-formulário de cases. G: não peça prova; registre. |
| Q20 (seções que quer) | Tarefa 5 inclui o mini-formulário só das seções marcadas + as obrigatórias (hero, FAQ, contato). Q20 = M: use as seções prováveis pelo tipo (regras de `FASE-3 §2 Passo 3`), sem decidir estrutura agora. |
| Q2 = C (multi-página) e Q19 | Inclua "sobre" completo; "equipe" se Q19 = E; "portfólio" se Q19 = D. Q2 = A/B: "sobre" curto. |
| Q18 = B/C (mostra preços) | Inclua o mini-formulário "oferta e preços". |
| Q41 | D: peça o ID do vídeo no YouTube + capa. B: link do Calendly/Cal.com. F: ID do pixel. C: nada agora (o código do mapa é pedido na Fase 4). |
| Q36-Q39 já respondidos | Tarefa 7 vira conferência: liste o que já está no BRIEFING e peça só o que falta ou está incompleto (DDD, CNPJ formatado, URLs completas). Q35 = B: inclua "crie a conta no GitHub antes da Fase 5". |

**Mensagem que abre a fase** (envie após o "sim" da Fase 1, antes da Tarefa 1):

```
Fase 2 — Referências. Aqui o trabalho é seu; eu organizo.
São [N] tarefas: referências visuais, direção, [paleta,] [fontes,] textos, imagens e dados.
Vou mandar uma por vez; responda cada uma e eu registro em REFERENCIAS.md.
Tempo estimado: [2-4] horas, no seu ritmo. Pode responder "pular" em qualquer tarefa que eu uso o padrão do kit e anoto como assumido.
Arquivos: prints em referencias/, imagens em assets-brutos/, textos em conteudo/ (ou cole aqui no chat).
Tarefa 1 a seguir.
```

## 3. Tarefa 1 — Referências visuais

Bloco para enviar (remova as galerias que não servem ao setor; mantenha 5-8 linhas de galerias):

```
Tarefa 1 — Referências visuais (1-2 h)

Escolha 4 a 6 sites que você gostaria que o seu parecesse e 1 ou 2 que NÃO quer parecer.
Prefira sites reais do seu setor, não mockups. Onde procurar (todas grátis para navegar):
- Siteinspire (siteinspire.com) — Filter > Type: Corporate/Landing; Subject: seu setor; Style: até 2 (ex.: Minimal + Typographic).
- Land-book (land-book.com) — Categories: indústria + tipo (Landing page/Business); filtros de estilo, tipografia e cor. Plano grátis basta.
- Lapa Ninja (lapa.ninja/category/business) — troque "business" por agency, health, education, restaurant…; prints de página inteira.
- One Page Love (onepagelove.com) — Inspiration > categoria; melhor fonte para site de uma página com âncoras.
- Minimal Gallery (minimal.gallery) e Siiimple (siiimple.com) — menu por categoria; ideais para `clean` e `editorial`.
- Made in Webflow (webflow.com/made-in-webflow/brasil) — sites brasileiros; busque "clínica", "advocacia", "arquitetura".
- Framer Gallery (framer.com/gallery/styles) — escolha 1 estilo (Minimal, Light, Dark, Colorful) compatível com a direção.
- Awwwards (awwwards.com/websites/business-corporate) — filtre Category + Tag "Clean" ou "Minimal"; prefira Honorable Mention; ignore efeitos 3D.
- Por seção: Maxibestof (maxibestof.one/websites/<indústria>/sections/<seção>), Saaspo (saaspo.com/section-type/…), Unsection (unsection.com), Footer.design (rodapés), Navbar Gallery (menus).
- Movimento: Landing.love (landing.love) — vídeos da página inteira; descreva o efeito em palavras.
- Dribbble/Behance: só para cor e tipografia (são mockups); rotule como "mockup".

Para cada site, entregue:
1. A URL do site ao vivo (não a da galeria).
2. UM print: a dobra/seção que justifica a escolha (hero, cards, rodapé…). Só para a sua referência principal, a página inteira.
3. O rótulo (texto), neste formato:
   ref-01 — https://site.com — gosto: layout do hero (foto à direita, título em 2 linhas); cor (1 cor + neutros); tipografia (serifa nos títulos) — não gosto: menu escondido — para a seção: hero
   Marque o aspecto principal de cada uma (layout, cor, tipografia, movimento ou seção).
   Negativas: neg-01 — URL — motivo em 1 frase ("muito escuro", "parece template", "pop-up ao entrar").

Como tirar o print (desktop, largura padronizada):
- Chrome/Edge: F12 > ícone de celular (Ctrl+Shift+M) > largura 1440 > role até o fim e volte ao topo > Ctrl+Shift+P (Mac: Cmd+Shift+P) > digite "screenshot" > "Capture full size screenshot" (página inteira) ou "Capture screenshot" (só a tela). Para uma seção: botão direito no elemento > "Capture node screenshot".
- Firefox: botão direito em área vazia > "Capturar tela" > "Salvar página inteira" ou "Salvar visível" > Baixar.
- Extensão (opcional): GoFullPage (Chrome/Edge), Alt+Shift+P.
- Feche o aviso de cookies antes. Mobile (largura 390) só se o comportamento no celular for o motivo da referência.
- Página inteira muito alta (> 2.000 px): corte em 2-3 partes (ref-01-geral-a.png, -b.png, -c.png).

Salve em referencias/ como ref-NN-<aspecto>.png (ex.: ref-01-hero.png, ref-02-cards.png, ref-03-rodape.png, neg-01-escuro.png). PNG; JPG qualidade 85 se passar de 3 MB.
```

Notas para a IA:
- Limite: 4-6 positivas + 1-2 negativas, no máximo 8 referências; as fatias de uma mesma página contam como 1 print. Cada imagem custa ~1,5-5 mil tokens; não peça mais.
- Rótulo sem "o que não gosta" ou sem URL ao vivo: peça o complemento na rodada única de pendências (seção 10), não antes. Board (Pinterest, Figma, Milanote) em vez de arquivos: diga que você não navega nesses links e peça os prints + URLs.
- Se ela cita um concorrente (Q9), aceite o print da página dele como referência positiva ou negativa, com o mesmo rótulo.

## 4. Tarefa 2 — Direção visual

Bloco para enviar. Se Q26 já tem direção, envie só a primeira linha e a tabela fica de fora:

```
Tarefa 2 — Direção visual (5 min)

No briefing você escolheu [`clean`]. Olhando as referências que separou, mantém? Responda "mantém" ou "mudar para X" ou "X com ajustes: …" (ex.: "clean com tons quentes e cantos mais arredondados").

Se ainda não escolheu, as 6 direções (detalhes em kit-sites/GUIA-DESIGN.md §3):
| ID | Em uma linha | Indicada para |
|---|---|---|
| clean | fundo branco, 1 cor forte, muito respiro, sombras suaves | consultorias, clínicas, B2B, contabilidade |
| editorial | serifa nos títulos, neutros quentes, fotos grandes, sem sombra | arquitetura, moda, estúdios, gastronomia, advocacia |
| bold | cores saturadas, blocos de cor, tipografia grande | eventos, cursos, marcas jovens, agências |
| tech-dark | fundo quase preto, 1 acento vivo, bordas finas | software, tecnologia, fintech |
| organico | tons terrosos/verdes, cantos bem arredondados, superfícies creme | saúde, bem-estar, alimentação, pet, educação infantil |
| premium | preto/off-white, dourado ou bordô mínimo, serifa fina, lento | joias, imóveis de alto padrão, hotelaria, beleza |
Escolha 1 (pode mesclar uma 2ª: "editorial com os cards do clean").
```

Notas para a IA: registre em `REFERENCIAS.md §1` o ID + ajustes em 1-3 linhas. A primeira direção é a base; da segunda entra só o que a pessoa citou. Se as referências contradizem a direção (ex.: escolheu `clean` e mandou 5 sites escuros), aponte em 1 linha e pergunte qual vale; não decida.

## 5. Tarefa 3 — Paleta

**Se Q31 = A** (já tem marca), envie só isto:

```
Tarefa 3 — Cores (2 min)
Envie os códigos hex das cores da marca (ou o manual/PDF da marca em assets-brutos/), indicando qual é a principal.
Se tiver versão do logo para fundo escuro, diga.
```

**Se Q31 = B ou C**, envie:

```
Tarefa 3 — Paleta (20-40 min)

Preciso de 1 cor principal (e, se quiser, 1 de destaque). Eu derivo o resto (tons, neutros, fundos) e checo o contraste.
Como escolher, se ainda não tem:
- Huemint (huemint.com) — template "Website", trave a cor que já tem no cadeado, "Creativity" baixo, Generate.
- Coolors (coolors.co/generate) — espaço gera, cadeado trava; "Image picker" tira cores de uma foto do seu produto/ambiente.
- Color Hunt (colorhunt.co) — filtre pelo clima (Warm, Earth, Dark, Pastel…); diga qual das 4 cores é a principal.
- Realtime Colors (realtimecolors.com) — cole as cores e as fontes e veja em um site de exemplo; alterne claro/escuro; copie a URL.

Regras que vou aplicar (para você não escolher algo que eu vou ter que mudar):
1. Texto sobre fundo: contraste mínimo 4,5:1; botão com texto branco pede cor escura (tom 600-700); amarelo, laranja, verde-claro e ciano pedem texto escuro.
2. Uma cor principal + no máximo 1 de destaque; o destaque aparece só no botão principal e em selos.
3. Proporção 60-30-10: 60% fundo neutro, 30% cor principal, 10% destaque.
4. Nada de preto puro (#000) nem cinza puro: os neutros ganham um leve tom da cor principal.
5. Fundo claro por padrão (Q28); tema escuro não é inversão: é outra paleta.
Cheque você mesmo em webaim.org/resources/contrastchecker: texto #… sobre fundo #… e branco sobre a cor do botão.

Entregue (o que não souber, deixe em branco que eu derivo):
| Papel | Hex |
|---|---|
| primary (botões, links, ícones) | # |
| accent (destaque, opcional) | # |
| bg (fundo da página) | # |
| text (texto) | # |
E 1 linha: "primária é X porque …" (ex.: "verde do logo", "quero parecer sólido").
```

Notas para a IA:
- Derive `primary-strong`, `primary-soft`, `surface`, `text-muted`, `border` pela regra de `FASE-3 §2 Passo 4` e confira os pares de contraste de `GUIA-DESIGN §2.2` (fórmula em `GUIA-FRONTEND §6`). Se um par reprova, ajuste o tom (não a cor) e diga em 1 linha o que mudou.
- Se a pessoa mandar 5 cores sem papéis (Coolors), atribua: mais escura = text, mais clara = bg, mais saturada = accent, a que ela chamou de principal = primary; descarte o resto e informe.
- Registre em `REFERENCIAS.md §5` a tabela papel → hex do modelo e "Contraste checado: sim (fórmula WCAG / WebAIM) — pares x:1".

## 6. Tarefa 4 — Tipografia

**Se Q32 = B**, não envie tarefa: registre o par padrão da direção "(assumido)". **Se Q32 = A**, envie só a conferência (3 primeiras linhas do bloco). **Se Q32 = C**, o bloco inteiro:

```
Tarefa 4 — Fontes (10-20 min)

Se já tem fontes: diga os nomes. Só uso fontes gratuitas do Google Fonts; se a sua for paga, aceita a substituição?
(Gotham → Montserrat ou Figtree; Helvetica/Arial → Inter; Proxima Nova → Plus Jakarta Sans; Circular → DM Sans; Gilroy → Outfit ou Manrope; Futura → Jost ou Outfit; Garamond → EB Garamond ou Cormorant Garamond.)

Se não tem, o par padrão da sua direção é [Títulos: Manrope / Texto: Inter] (todos em kit-sites/GUIA-DESIGN.md §3):
| Direção | Títulos | Texto | Alternativa |
|---|---|---|---|
| clean | Manrope | Inter | Plus Jakarta Sans + DM Sans |
| editorial | Fraunces | Inter | Playfair Display + Source Serif 4 |
| bold | Space Grotesk | DM Sans | Syne + DM Sans |
| tech-dark | Inter | Inter | Geist (uma família só) |
| organico | Nunito | Nunito | Outfit + Figtree |
| premium | Cormorant Garamond | Inter | Instrument Serif + Albert Sans |
Responda "padrão" ou escolha outra. Para testar: fonts.google.com (digite um título real seu, com acentos, no campo de preview), fontpair.co (pares prontos), typewolf.com/google-fonts (os 40 melhores com exemplos), realtimecolors.com (fontes + paleta juntas).
Limites: 2 famílias no máximo; pesos 400/500/600/700; fontes de display (Playfair, Cormorant) só em títulos; Poppins/Montserrat não servem para texto corrido.

Entregue: "Títulos: <nome> / Texto: <nome>" (+ pesos, se souber).
```

Notas para a IA: monte o link do Google Fonts com os pesos da direção (`GUIA-DESIGN §3.2` tem os links prontos; famílias estáticas usam pesos discretos `400;700`, não intervalos). Registre em `REFERENCIAS.md §6`: famílias, pesos e o link. Fonte que não existe no Google Fonts e sem substituição aceita: pendência.

## 7. Tarefa 5 — Textos (matéria-prima)

Inclua só os mini-formulários das seções prováveis (seção 2). Cada resposta pode ser tópicos; a IA organiza na Fase 3. Bloco para enviar:

```
Tarefa 5 — Textos (30-90 min; responda em tópicos, não precisa caprichar)

Salve as respostas em conteudo/<secao>.md (um arquivo por seção) ou responda aqui no chat com o nome da seção antes de cada bloco.
Copie frases reais que clientes usam (WhatsApp, avaliações): eu uso as palavras deles, não as minhas.

HERO (primeira tela)
1. Em uma frase: o que você vende e para quem?
2. O resultado principal que o cliente obtém (1 frase).
3. A maior dor que ele quer evitar (1 frase).
4. O diferencial que os concorrentes não têm (1-2 frases, com fatos: anos, método, prazo, garantia).
5. Uma prova rápida: nota no Google + nº de avaliações, ou nº de clientes/anos.

DIFERENCIAIS (3-4 itens)
Para cada um: "Por causa de [o que fazemos], o cliente consegue [resultado] e deixa de [dor]". 3 a 4 frases assim.

SERVIÇOS (3-8)
Para cada serviço: nome · 1 frase de benefício · 2-3 tópicos do que inclui · para quem é · preço, "a partir de" ou "sob orçamento".

COMO FUNCIONA (3-5 passos)
"Passo 1 — nome — 1 frase — prazo". Do primeiro contato até a entrega.

SOBRE
1. Por que a empresa existe (1 frase). 2. História em 3 marcos com ano. 3. Quem atende: nome, cargo, registro profissional (CREFITO, CRM, OAB…), 1 linha. 4. 2-3 fatos (anos, clientes, cidades). 5. Formação, prêmios, certificações, se houver.

NÚMEROS (só se forem verdadeiros e você souber a fonte)
3-4 números exatos: "127 clientes", "4,9 no Google (86 avaliações)", "desde 2014". Nada de "centenas".

DEPOIMENTOS (2-3; só reais e com autorização)
Por cliente: texto original (20-60 palavras; não reescreva) · nome completo · cargo/empresa ou cidade · foto quadrada (opcional) · "autorizou por escrito: sim".
Se ainda não tem: mande esta mensagem a 3-5 clientes no WhatsApp: "Pode me responder 3 perguntas para o site? 1) Como estava antes? 2) O que mudou? 3) O que diria a quem está em dúvida? Posso publicar com seu nome?" Prazo: [data].

PERGUNTAS FREQUENTES (4-8)
As perguntas que você mais responde antes de fechar, como o cliente pergunta ("Quanto custa?", "Atende minha cidade?"), e a resposta que você dá hoje em 1-3 frases. Comece pelas 3 objeções do briefing: [Q16].

CHAMADA FINAL (CTA)
1. Texto do botão principal, 2-4 palavras começando com verbo (ex.: "Pedir orçamento", "Agendar avaliação"). 2. Uma frase de segurança para ficar sob o botão, até 12 palavras ("Resposta em até 1 dia útil", "Sem compromisso") — só se for verdade.

CONTATO
1. Frase de abertura com benefício ("Fale com a gente e receba o orçamento em 24h"). 2. O que o visitante deve escrever na mensagem (vira o placeholder do campo). 3. Prazo real de resposta.

[OFERTA E PREÇOS — só se Q18 = B/C: planos (nome, preço, 4-7 itens), formas de pagamento, garantia, condição especial real.]
[PORTFÓLIO/CASES — só se houver: para 3-6 trabalhos: cliente (ou setor) · contexto 1 frase · o que foi feito 2-3 frases · resultado com número · imagens · autorização.]
[EQUIPE — só em institucional com Q19 = E: nome, cargo, 1 linha, foto com o mesmo enquadramento.]
```

Notas para a IA:
- Não reescreva nada agora. Registre em `REFERENCIAS.md §7` onde está cada seção (`conteudo/hero.md`, "chat, 05/11") e o status ok/falta.
- Comprimentos-alvo que a Fase 3 vai aplicar estão em `GUIA-DESIGN §6.2`; se a pessoa perguntar "quanto escrever", responda "tópicos bastam; eu corto".
- Seção sem matéria-prima após a rodada de pendências: registre "falta"; a Fase 3 decide entre `[PLACEHOLDER]` aceito e remover a seção.

## 8. Tarefa 6 — Imagens, logo, favicon, OG

Bloco para enviar (remova o que a seção 2 mandar: logo se Q4 = C; vetorização se Q23 = A; banco se Q22 = A/B; depoimentos se Q24 = D):

```
Tarefa 6 — Imagens, logo, favicon e imagem de compartilhamento (1-2 h)

Salve tudo em assets-brutos/. Nomes em minúsculas, sem acento, sem espaço, com hífen e significado: hero-fachada.webp, servico-ortopedia.webp, equipe-ana-souza.webp, logo.svg. Nunca IMG_2043.jpg.
Não envie pelo WhatsApp como foto (comprime e renomeia); use "Documento", Google Drive ou a pasta direto.

Checklist:
- [ ] FOTO DO HERO: 1 foto horizontal com uma área "calma" de um lado para o texto → 1600 px de largura, WebP, até 250 KB.
- [ ] FOTOS DE SEÇÃO (sobre, equipe, espaço): 1200 px, WebP, até 150 KB cada; todas com o mesmo tratamento (mesmo filtro, mesma luz).
- [ ] FOTOS DE SERVIÇOS/PORTFÓLIO: 800-1200 px, WebP, até 100 KB, TODAS na mesma proporção (4:3 ou 1:1).
- [ ] FOTOS DE DEPOIMENTOS (opcional): quadradas, 192 x 192 px, WebP, até 15 KB, com autorização de uso de imagem.
- [ ] FOTOS DA EQUIPE (se houver seção): quadradas, 600 x 600 px, mesmo enquadramento.
- [ ] LOGOS DE CLIENTES (se houver faixa): 4-8 em SVG (ou PNG transparente, altura mínima 120 px), com autorização.
- [ ] LOGO: logo.svg com texto convertido em curvas e fundo transparente. Se tiver, também logo-branco.svg (para fundo escuro) e simbolo.svg (só o símbolo).
- [ ] FAVICON: só o símbolo (sem o nome), PNG 512 x 512 com fundo sólido na cor da marca — ou o .zip do favicon.io / realfavicongenerator.net.
- [ ] IMAGEM DE COMPARTILHAMENTO (OG): og-image.png de 1200 x 630 px, até 300 KB, com logo + 1 frase de até 8 palavras + fundo na cor da marca; deixe 60 px de margem nas bordas.
- [ ] VÍDEO (só se Q41 = D): suba no YouTube como "Não listado" e envie o ID (o que vem depois de v=) + uma capa 1280 x 720 em WebP até 150 KB.
- [ ] fotos.txt: uma linha por arquivo: "hero-fachada.webp — fachada da clínica no fim da tarde, recepção iluminada" (vira a descrição acessível).
- [ ] Autorizações de uso de imagem de clientes/pacientes/funcionários fotografados: guarde (não precisa enviar); me confirme que existem.

Otimizar no Squoosh (squoosh.app, roda no navegador, nada é enviado):
1. Arraste a foto. 2. À direita, em "Resize", marque e defina a largura (1600 hero · 1200 seções · 800 cards · 192 avatares). 3. Em "Compress", escolha WebP, qualidade 75-80. 4. Confira o peso no canto inferior. 5. Baixe e renomeie.

Logo em SVG — como exportar:
- Figma: selecione o logo > painel Export > "+" > SVG > marque "Outline text" > Export.
- Illustrator: Texto > Criar contornos; Arquivo > Exportar como > SVG.
- Canva: Compartilhar > Baixar > SVG (recurso Pro; o teste de 30 dias resolve) > "Fundo transparente".
- Só tem PNG/JPG: remova o fundo em adobe.com/br/express (grátis, com conta) ou remove.bg (prévia grátis); depois vetorize em adobe.com/br/express/feature/image/convert/svg (grátis) ou vectorizer.ai (pago). Logo com gradiente ou foto não vetoriza: envie PNG transparente com no mínimo 1000 px de largura.
- Limpe o SVG em jakearchibald.github.io/svgomg (desmarque "Remove viewBox").

OG e favicon no Canva (canva.com): Criar design > Tamanho personalizado > 1200 x 630 (OG) ou 512 x 512 (favicon) > monte > Compartilhar > Baixar > PNG.

Sem fotos próprias (banco de imagens, uso comercial sem crédito):
- Unsplash (unsplash.com) — busque em inglês; filtros Orientation e Color; baixe "Large" (2400 px), nunca "Original"; pule as marcadas "Unsplash+". Termos: "brazil", "sao paulo" + o setor.
- Pexels (pexels.com/pt-br) — em português; filtros de orientação e cor; baixe "Grande" (1920 px). Termos: "brasileira", "padaria", "consultório".
- Pixabay (pixabay.com/pt) — terceira opção; ignore a primeira linha (patrocinada, paga).
- Ilustrações: unDraw (undraw.co/illustrations) — troque a cor para a sua primária antes de baixar o SVG; use UMA coleção só.
- Freepik, Flaticon e Storyset são grátis só com crédito no rodapé: avise se usar.
Critérios: cenas de detalhe (mãos trabalhando, ambiente, produto), não rostos de banco; luz natural; mesma temperatura de cor em todas; nada de terno com aperto de mão, mulher de headset ou escritório de vidro. Nunca use banco para "nossa equipe" ou "nosso espaço". Passe tudo pelo Squoosh igual às fotos próprias.
```

Notas para a IA:
- Ao receber, liste `assets-brutos/` e confira: formato, dimensões (se tiver `identify`/`file`), peso, nome. Não abra cada imagem com a ferramenta de leitura de imagem; abra só a foto do hero (1 imagem) se precisar descrever para a Leitura das referências.
- Fotos sem otimizar: aceite, registre "Otimizar? sim" na tabela de `REFERENCIAS.md §8` e deixe a conversão para a Fase 4 (`FASE-4 §2` tem o fallback com `cwebp`/ImageMagick; sem eles, a pessoa passa no Squoosh). Logo só em JPG com fundo branco: pendência "logo transparente/SVG"; se não vier, regra da seção 10.
- Registre também a biblioteca de ícones: Lucide (padrão do kit, SVG inline). A pessoa só escolhe ícones se quiser; senão a Fase 3 escolhe pelo nome.

## 9. Tarefa 7 — Dados operacionais e legais

Bloco para enviar (liste antes o que já está no BRIEFING e peça só o que falta):

```
Tarefa 7 — Dados do site (10 min). O que não quiser exibir, escreva "não exibir".

- WhatsApp: +55 (DDD) número · mensagem que já vem escrita quando clicam: "…" (1 frase, na voz do cliente)
- E-mail que recebe o formulário: … (confira que você acessa; será o destino das mensagens)
- Telefone fixo (opcional): … · E-mail público para exibir: …
- Endereço completo com CEP (ou só cidade/UF se atende online): … · Link do Google Maps do local (se Q41 = C): …
- Horário de atendimento por dia: seg-sex …, sáb …
- Redes sociais (URLs completas, só as ativas): instagram.com/…, linkedin.com/company/…, …
- Razão social: … · CNPJ (formatado 00.000.000/0001-00) ou "não exibir": …
- E-mail para assuntos de privacidade (pode ser o mesmo do contato): …
- Nota do Google e nº de avaliações + link do Perfil da Empresa (se Q12 = D): …
- Conta GitHub: usuário … (se ainda não tem, crie em github.com antes da Fase 5 e me avise; é grátis)
[- Calendly/Cal.com: link … | YouTube: ID … | Pixel: ID …]
```

Notas para a IA: registre em `REFERENCIAS.md §9` no formato do modelo (DDI+DDD, hex, URLs completas). WhatsApp sem DDD, CNPJ sem formato ou e-mail com erro de digitação óbvio: peça correção na rodada de pendências. Não valide CNPJ nem acesse links.

## 10. Entrega e compilação

Quando a pessoa entregar a última tarefa (ou disser "é tudo"), faça nesta ordem, sem pular:

1. **Inventário (1 comando por pasta).** Liste `referencias/`, `assets-brutos/`, `conteudo/`. Modo chat: liste o que recebeu pelo nome que a pessoa deu.
2. **Leitura das referências.** Abra cada print de `referencias/` uma única vez com a ferramenta de leitura de imagem (no Claude Code, `Read` no arquivo .png/.jpg), na ordem dos números, com o rótulo da pessoa ao lado. Imagem ilegível por ser muito alta: peça a fatia na rodada de pendências. Escreva em `REFERENCIAS.md §4` de 5 a 10 observações objetivas, uma linha cada, cobrindo: tipo de hero (dividido/centralizado, proporção texto/imagem, nº de botões), densidade (respiro entre seções, nº de colunas), tipografia (sans/serifa, peso dos títulos, tamanho relativo do texto), cor (quantas, onde a primária aparece, fundos alternados), imagens (reais/ilustração, proporção, tratamento), cantos e sombras, movimento. Formato: `Hero dividido 55/45, título em 2 linhas, botão cheio + contornado (ref-01, ref-03).` Sem adjetivos vazios ("bonito", "moderno"). Negativas: 1 linha com o que evitar.
3. **Monte `REFERENCIAS.md`** a partir de `modelos/REFERENCIAS.md`, todas as 10 seções, apagando os blockquotes. Status: rascunho. Modo chat: entregue o arquivo em um bloco de código e peça para salvar na raiz do projeto.
4. **Cheque completude** com esta lista; o que falhar vira pendência:
   - [ ] §1 direção com ID válido · §2 cada referência com URL ao vivo + arquivo + o que aproveitar + seção · §3 ao menos 1 negativa
   - [ ] §5 nove tokens com hex e contraste checado · §6 duas famílias (ou uma) com pesos e link
   - [ ] §7 cada seção provável com "ok" ou "falta" · §8 hero, logo (ou "texto"), favicon (ou "gerar"), OG (ou pendência)
   - [ ] §9 WhatsApp com DDI/DDD e mensagem; e-mail do formulário; razão social/CNPJ ou "não exibir"; e-mail de privacidade
5. **UMA rodada de pendências.** Envie uma única mensagem com tudo que falta ou está fora de formato (máximo 8 itens, numerados, cada um com o formato esperado). Espere. O que não vier aplique o padrão abaixo e registre "(assumido)" em `REFERENCIAS.md §10`. Não faça segunda rodada: pendências restantes vão para §10 e a Fase 3 trabalha com elas.
6. **Padrões quando a pessoa não tem algo:**

| Falta | Padrão (registrar "(assumido)") |
|---|---|
| Fotos próprias (Q22 C/D) e nenhuma de banco escolhida | Hero sem imagem (`hero-centered`); seções com foto viram texto + ícone; pendência "fotos" com os critérios da Tarefa 6 |
| Logo | Nome do negócio em texto, na fonte de títulos, peso 700, cor `text` (ou `primary`). Logo só em PNG com fundo: usar sobre fundos claros; pendência "SVG/transparente" para o rodapé escuro |
| Favicon | Gerar `favicon.svg` a partir do símbolo do logo ou da inicial sobre fundo `primary` (o starter já tem um `favicon.svg` para adaptar) |
| Imagem OG | Pendência obrigatória antes da publicação (Fase 5); instrução: Canva 1200 x 630, 10 minutos |
| Depoimentos (Q24 D ou não chegaram) | Sem `testimonials-grid`; prova por fatos (anos, registro profissional, estrutura) em `about-split`/`stats-band` |
| Números verificáveis | Sem `stats-band` |
| Referências (pessoa não quer pesquisar) | Direção escolhida com os tokens padrão de `GUIA-DESIGN §3`; §2 vazio; §4 com 1 linha "sem referências; padrão da direção" |
| Paleta / fontes | Tokens e par padrão da direção (`GUIA-DESIGN §3.1` e `§3.2`) |
| Texto de uma seção | "falta" em §7; a Fase 3 decide `[PLACEHOLDER]` aceito ou remover a seção |
| CNPJ / razão social | "não exibir"; política de privacidade com o nome fantasia e o e-mail de privacidade |
| Conta GitHub | Pendência para a Fase 5; fallback Netlify Drop |
| Mensagem do WhatsApp | "Olá! Vim pelo site e quero saber mais." |

7. **Aprovação.** Envie o resumo (≤ 25 linhas): direção e ajustes; nº de referências e as 3 observações mais importantes da leitura; paleta em 1 linha (primary, accent, bg) e contraste; fontes; textos recebidos por seção (ok/falta); imagens (hero, logo, favicon, OG) e o que será assumido; dados (WhatsApp, e-mail, CNPJ) sem repetir os valores; pendências. Termine com:
   > Aprovado? Responda "sim" ou liste ajustes no formato "item — o que mudar".
8. **Com o "sim":** mude o Status para "aprovado em AAAA-MM-DD" e envie:
   > Fase 2 concluída e gravada em `REFERENCIAS.md`. A próxima fase é o plano completo do site (estrutura, textos finais, cores, imagens), a que mais exige julgamento. Recomendo trocar para **Opus em esforço alto** (`/model` no Claude Code; ou feche este chat e abra outro com "Leia kit-sites/00-COMECE-AQUI.md e continue" — os arquivos carregam o contexto). Sonnet também funciona; revise o plano com mais atenção. Posso seguir para a Fase 3? (Vou ler `kit-sites/FASE-3-PLANO.md` e `GUIA-DESIGN.md`.)

Economia de tokens nesta fase: não releia o BRIEFING inteiro (use só os Q citados na seção 2); não descreva as imagens para a pessoa (ela as conhece); não reenvie a tarefa inteira para corrigir um item; não cole `REFERENCIAS.md` no chat no modo arquivo.

## 11. Links

Grátis salvo indicação. "(verificar)" = não confirmado por busca nesta versão do kit; se o link falhar, peça à pessoa para buscar o nome.

**Galerias de sites reais**
- https://www.siteinspire.com — galeria curada com filtros Type/Subject/Style; ótima para institucional sóbrio. Grátis.
- https://land-book.com — landing pages e sites por indústria, estilo, tipografia e cor; páginas por seção. Grátis com limites; Pro ≈ US$ 6/mês.
- https://www.lapa.ninja — 7.300+ landing pages por categoria, print da página inteira. Grátis; Pro US$ 9/mês (desnecessário).
- https://onepagelove.com — sites de uma página por categoria; galerias de UI por seção. Grátis para navegar.
- https://minimal.gallery — sites minimalistas por categoria; referência para `clean`/`editorial`. Grátis.
- https://siiimple.com — 900+ sites minimalistas em 60+ categorias de setor. Grátis.
- https://webflow.com/made-in-webflow/brasil — sites brasileiros reais; busca por palavra-chave. Grátis.
- https://framer.com/gallery/styles — galeria por estilo (Minimal, Light, Dark, Colorful) e categoria. Grátis.
- https://awwwards.com/websites/business-corporate — sites premiados; filtre Category + Tag Clean/Minimal; evite Site of the Day. Grátis para navegar.
- https://dribbble.com e https://www.behance.net — mockups; só para cor e tipografia; filtro por cor hex. Grátis para pesquisar.

**Galerias por seção**
- https://maxibestof.one — 10.000 seções por indústria e tipo (hero, pricing, testimonial, faq, contact, footer). Grátis com parte bloqueada; Pro US$ 6-9/mês.
- https://saaspo.com — seções de sites SaaS por tipo (hero, FAQ, pricing); padrões valem para qualquer site. Grátis.
- https://www.unsection.com — biblioteca de seções reais (hero, features, footer, CTA, team). Grátis.
- https://footer.design — só rodapés, filtráveis por estilo. Grátis.
- https://www.navbar.gallery — só barras de navegação, por estilo e setor. Grátis.
- https://www.landing.love — landing pages gravadas em vídeo (para movimento). Grátis.

**Captura de tela e extração**
- https://www.freecodecamp.org/news/how-to-take-full-page-screenshots-in-chrome-without-extensions/ — passo a passo do "Capture full size screenshot" do Chrome/Edge. Grátis.
- https://chrome.google.com/webstore/detail/fdpohaocaechififmbbbbbknoalclacl — GoFullPage, extensão de print de página inteira. Grátis (Premium para editar).

**Cor, contraste e tipografia**
- https://huemint.com — paletas por IA com papéis (fundo, texto, destaque) em template de site. Grátis.
- https://coolors.co/generate — gerador de paletas; extrai cores de imagem; checagem de contraste. Grátis com limites; Pro ≈ US$ 3/mês.
- https://colorhunt.co — paletas de 4 cores por clima. Grátis.
- https://www.realtimecolors.com — paleta + fontes aplicadas em um site de exemplo; claro/escuro; exporta URL. Grátis.
- https://webaim.org/resources/contrastchecker/ — verificador de contraste WCAG AA/AAA. Grátis.
- https://fonts.google.com — catálogo das fontes gratuitas usadas no kit; teste com texto real em português. Grátis.
- https://www.fontpair.co — pares prontos de Google Fonts com preview. Grátis.
- https://www.typewolf.com/google-fonts — os 40 melhores do Google Fonts com exemplos; alternativas grátis para fontes pagas. Grátis.

**Imagens, logo, favicon, OG**
- https://squoosh.app — redimensiona e converte para WebP no navegador; ferramenta principal de otimização. Grátis.
- https://jakearchibald.github.io/svgomg/ — limpa e reduz SVG do logo (manter viewBox). Grátis. (verificar)
- https://www.adobe.com/br/express/feature/image/remove-background — remove fundo em alta resolução com conta Adobe grátis. Grátis.
- https://www.adobe.com/br/express/feature/image/convert/svg — vetoriza PNG/JPG simples para SVG. Grátis.
- https://www.remove.bg — remove fundo; prévia grátis em baixa resolução, alta resolução paga. Freemium.
- https://vectorizer.ai — vetorização por IA de alta fidelidade; download pago (≈ US$ 10/mês). Pago. (verificar)
- https://www.canva.com/pt_br/ — OG 1200 x 630, favicon 512, filtro uniforme em fotos; SVG e fundo transparente só no Pro (≈ R$ 35-40/mês). Freemium. (verificar)
- https://www.figma.com — exportar logo em SVG com "Outline text", montar OG; plano Starter grátis. Freemium. (verificar)
- https://favicon.io — gera pacote de favicon a partir de PNG, texto ou emoji. Grátis.
- https://realfavicongenerator.net — gerador completo de favicon com preview por plataforma e bloco HTML. Grátis.
- https://unsplash.com — fotos de banco; uso comercial sem crédito; baixe "Large". Grátis (Unsplash+ pago).
- https://www.pexels.com/pt-br/ — fotos e vídeos de banco em português; uso comercial sem crédito. Grátis.
- https://pixabay.com/pt/ — fotos, vetores e ilustrações; uso comercial sem crédito. Grátis.
- https://undraw.co/illustrations — ilustrações SVG com cor personalizável; sem crédito. Grátis.
- https://storyset.com — ilustrações editáveis; grátis só com crédito no rodapé. Freemium.
- https://lucide.dev/icons — biblioteca de ícones SVG padrão do kit (copiar SVG inline). Grátis.
