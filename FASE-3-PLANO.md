# FASE 3 — Plano (a IA propõe a especificação completa; a pessoa aprova)

| | |
|---|---|
| **Objetivo** | Transformar `BRIEFING.md` + `REFERENCIAS.md` em uma `ESPECIFICACAO.md` tão completa que a construção (Fase 4) não precise tomar **nenhuma** decisão de design ou de negócio. |
| **Entrada** | `BRIEFING.md` e `REFERENCIAS.md` (ambos com Status: aprovado), `conteudo/`, `referencias/`, `assets-brutos/`. |
| **Saída** | `ESPECIFICACAO.md` (template: `modelos/ESPECIFICACAO.md`; exemplo completo: `exemplos/ESPECIFICACAO-exemplo.md`) com **Status: aprovado**. |
| **Modelo** | **Opus, esforço alto**: é a fase que mais exige julgamento (estrutura, copy, tokens). Sonnet funciona; revise com mais atenção no checkpoint. |
| **Leia também** | `GUIA-DESIGN.md` §3 (direções e tokens), §4 (anatomia), §5 (catálogo) e §6 (copy). Não leia o `GUIA-FRONTEND.md` nesta fase (nada de código aqui). |

## 1. Regras do planejador

1. **Tudo vem dos artefatos.** Cada texto, cor, imagem e decisão da especificação deve ser rastreável a uma resposta do
   BRIEFING, a um item de REFERENCIAS ou a uma regra do `GUIA-DESIGN`. Nada de "achei que ficaria bom".
2. **Zero decisões para depois.** Critério de pronto na seção 6. Se faltar algo que só a pessoa pode dar, pergunte
   agora (máximo 5 perguntas, todas em uma mensagem) antes de apresentar o plano.
3. **Copy final, não rascunho.** Textos prontos para colar, dentro dos limites do `GUIA-DESIGN §6`, usando a
   matéria-prima da pessoa. Nunca invente fatos, números, nomes, depoimentos ou prêmios.
4. **Sem código.** A especificação descreve seções por ID do catálogo, variantes, conteúdo e assets. Nada de HTML/CSS.
5. **Uma proposta.** Não apresente duas versões de nada. Se precisar de uma decisão, pergunte com opções e ★.
6. **Apresentação curta.** Wireframe textual (seção 5) + perguntas pendentes. A pessoa aprova ou pede ajustes; depois
   da aprovação, mudanças de estrutura só com pedido explícito.
7. **Registre as assumidas.** Toda escolha feita por regra do kit (e não por resposta da pessoa) vai para
   "Decisões assumidas" da especificação.

## 2. Passo a passo

### Passo 1 — Ler e listar lacunas (5 min)
Leia `BRIEFING.md` e `REFERENCIAS.md` inteiros e os textos em `conteudo/`. Liste o que impede fechar o plano (texto de
uma seção sem matéria-prima, paleta sem hex, sem número de WhatsApp, imagens prometidas que não chegaram). Se houver
lacunas, envie **uma** mensagem com até 5 perguntas/pedidos e espere. Com mais de 5, priorize o que afeta a estrutura
e marque o resto como `[PLACEHOLDER]` aceito (ver Passo 5). Pendências já listadas em `REFERENCIAS.md §10` entram
direto em "Pendências" da especificação e não contam no limite de 5 perguntas; agrupe as perguntas por tema.
Texto da pessoa que contradiz o BRIEFING (ex.: preço no FAQ com Q18 = A) ou que afirma certificação, prêmio ou nota
sem fonte → vira pergunta com ★ = manter o que ela escreveu, exceto afirmações legais sem comprovação (certificação)
→ ★ = remover a palavra.

### Passo 2 — Tipo de site e sitemap
Use `BRIEFING §1` (tipo, Q2/Q19) e as regras de `GUIA-DESIGN §4`:

| Tipo (Q2) | Páginas e arquivos |
|---|---|
| Landing page (A) | `index.html` + `privacidade.html` + `obrigado.html` + `404.html` |
| Institucional one-page (B) | iguais à LP; o menu aponta para âncoras `#sobre`, `#servicos`, `#contato` |
| Institucional multi-página (C) | `index.html`, `sobre.html`, `servicos.html` (ou `produtos.html`), `portfolio.html` (se Q19 D), `contato.html`, mais `privacidade.html`, `obrigado.html`, `404.html` |

Regras: até 5 itens no menu + 1 CTA; se "Serviços" tem ≤ 3 itens e sem detalhe, vire seção da página inicial em vez de
página; "Contato" vira página própria só em multi-página (na LP/one-page é a seção `contact-split`). Nomes de arquivo
em minúsculas, sem acento.

### Passo 3 — Seções por página (IDs do catálogo, `GUIA-DESIGN §5`)
Decida cada seção por regra, a partir do BRIEFING. Inclua a seção **só** quando a condição vale. Em site multi-página,
a página de cada seção é a da anatomia (`GUIA-DESIGN §4.3`); "sempre" vale para o site, não para a página inicial.
A tabela decide SE a seção existe; a anatomia decide ONDE.

| Seção (ID) | Incluir quando | Variante/quantidade |
|---|---|---|
| `header-nav` | sempre | links = páginas/âncoras (máx. 5) + CTA = ação primária (Q13) |
| `hero-split` | há foto real boa do negócio (Q22 A/B) ou imagem de banco aprovada em REFERENCIAS | foto 4:3 à direita |
| `hero-centered` | não há imagem boa, ou a mensagem é o foco (produto digital, evento) | imagem opcional abaixo |
| `logos-strip` | Q12 inclui B **e** há ≥ 4 logos em `assets-brutos/` | 4-8 logos |
| `stats-band` | Q12 inclui C **e** há ≥ 3 números verdadeiros | 3-4 números |
| `features-grid` | sempre | 3 itens (4 se houver 4 diferenciais fortes em Q8); nunca 5 |
| `services-cards` | há 3-8 serviços/produtos nomeados (Q20 B ou matéria-prima) | com imagem se Q22 A; sem imagem caso contrário. 5 serviços → 4 na página inicial (pergunte qual fica fora; ★ = o de menor relevância comercial) e todos na página Serviços; 5 também cabe em `grid--3` com a última linha de 2 (aceitável) — escolha uma e registre |
| `steps` | o serviço tem processo (Q20 C) ou as objeções (Q16) falam de prazo/"como funciona" | 3-4 passos |
| `about-split` | sempre em institucional; na LP se Q20 D ou tom "acolhedor" (Q10 B) | foto real da equipe/local |
| `testimonials-grid` | Q24 A ou B (depoimentos reais com nome) | 3 (ou 2 em `grid--2`); 4 só em `grid--2`/`grid--4` |
| `portfolio-grid` | Q12 E ou Q20 G **e** ≥ 4 imagens | 4-9 itens; página própria se Q19 = D ou ≥ 7 itens |
| `pricing-table` | Q18 B | 2-3 planos; 1 destacado |
| `faq-accordion` | sempre (Q16 fornece as 3 primeiras perguntas) | 4-8 perguntas |
| `team-grid` | Q20 J, em institucional | 2-6 pessoas com foto |
| `video-embed` | Q41 D | 1 vídeo (youtube-nocookie) |
| `cta-band` | sempre antes do contato; também no meio se a página tiver > 8 seções | 1 CTA = ação primária |
| `contact-split` | sempre | formulário se Q37 A; só dados + WhatsApp se Q37 B; mapa se Q41 C |
| `text-prose` | `privacidade.html` sempre; "Sobre" longo em multi-página | — |
| `footer` | sempre | colunas: marca · navegação · contato (· horários ou redes) |
| `whatsapp-float` | Q13 A ou Q14 B | mensagem de Q36 |
| `cookie-banner` | Q40 ≠ A (há analytics) | texto do starter |

Limites: LP 9-13 seções (contando header, footer e whatsapp-float); página inicial de institucional 6-8 (sem contar header e footer); páginas internas 3-5.
Ordem: siga `GUIA-DESIGN §4` para o tipo escolhido. Alterne fundos (`section` / `section--alt`); anote na especificação
qual seção leva `section--alt`.

### Passo 4 — Design tokens
1. Parta da tabela da direção escolhida em `GUIA-DESIGN §3` (REFERENCIAS §1).
2. Sobrescreva com o que a pessoa definiu em REFERENCIAS §5 (paleta) e §6 (fontes). Se ela mesclou duas direções, a
   primeira é a base; da segunda pegue só o que ela citou nos ajustes (ex.: "cantos mais arredondados", "neutros quentes").
3. Derive o que faltar pela regra do guia: `primary-strong` = primária ~15% mais escura; `primary-soft` = primária a
   ~10% sobre o fundo; `surface` = fundo levemente tingido; `text-muted` com contraste ≥ 4,5:1 sobre `surface`.
4. Confira contraste (fórmula em `GUIA-FRONTEND §6`): texto/fundo, text-muted/surface, on-primary/primary (botões),
   primary/fundo (links e eyebrows). Se algo falhar, ajuste o tom (não a cor) e registre.
5. Movimento: Q30 (nenhum → sem `.reveal`; sutil → padrão; médio → `.reveal` + hovers). A resposta de Q30 prevalece
   sobre a coluna "movimento" da direção.
6. Escreva a tabela completa de tokens (todos os nomes de `modelos/ESPECIFICACAO.md §3`) e o link do Google Fonts com
   apenas os pesos usados.

### Passo 5 — Copy final por seção
Para cada seção, escreva o texto final a partir da matéria-prima (`conteudo/`, REFERENCIAS §7, BRIEFING §2-3):
- Siga os comprimentos e fórmulas de `GUIA-DESIGN §6` (H1 6-12 palavras com o resultado para o cliente; subtítulo
  15-30; CTA 2-4 palavras começando com verbo; benefício = título 2-5 palavras + 1-2 frases; depoimento 20-60 palavras
  **exatamente como a pessoa enviou**, só cortando com "[…]" se exceder; FAQ 4-8 perguntas na linguagem do cliente com
  respostas de 1-3 frases, as 3 primeiras vindas de Q16).
- Tom de voz: Q10. Use "você". Fale do cliente antes de falar da empresa.
- Provas: só números e fatos que estão no BRIEFING/matéria-prima. Sem "líder de mercado", sem "melhor da região".
- `[PLACEHOLDER: o que falta]` **somente** quando a pessoa disse que entrega depois; escreva junto o texto provisório que
  será usado até lá (ex.: `[PLACEHOLDER: foto da equipe — usar hero-centered sem imagem até a foto chegar]`).
- Textos de interface: rótulos do formulário, nota de resposta ("Resposta em até 1 dia útil"), texto do consentimento
  (usar o do starter), mensagem do WhatsApp (Q36), textos do rodapé e legais (Q38-Q39). Para o `whatsapp-float`, o
  `aria-label` deve conter o texto visível do botão/rótulo (ex.: rótulo "Fale no WhatsApp" → `aria-label="Fale no
  WhatsApp"`), senão o leitor de tela e o controle por voz divergem.
- Ícones: só pelos nomes da lista de `GUIA-FRONTEND §4.22` (check, shield-check, zap, clock, phone, mail, map-pin, star,
  users, heart, award, calendar, message-circle, arrow-right, chevron-down, instagram, hammer, ruler, building-2,
  file-text, truck, leaf, wrench, home, briefcase, graduation-cap, sparkles, map). Escreva o nome ao lado de cada
  benefício/serviço; se nenhum servir, escolha o mais próximo e registre como assumido.

### Passo 6 — Mapa de assets
Tabela origem → destino → tamanho-alvo → alt, por seção. Tamanhos: hero 1600px (4:3 ou 16:9), `about` 1200px,
`services`/`portfolio` 800px 4:3, avatar de depoimento 192px 1:1 (exibido a 56px), equipe 600px 1:1, logos de clientes SVG ou PNG
com 72px de altura (exibidos a 36px, monocromáticos), OG 1200×630, favicon SVG. Nomes: minúsculos, sem acento, com hífen
(`servico-ortopedia.webp`). Quem otimiza: a pessoa (Squoosh, Fase 2); se os arquivos chegaram sem otimizar, inclua a
tarefa em "Pendências". Sem foto para uma seção que precisa de foto → troque a variante (ex.: `hero-centered`), use
ilustração/ícone ou reutilize fotos de portfólio/projetos quando correspondem ao serviço, e registre como assumido.

### Passo 7 — SEO por página
- `title`: `Nome — proposta curta | Cidade` (LP, 50-60 caracteres); internas: `Página: complemento — Nome`, 40-60
  caracteres; `privacidade`, `obrigado` e `404` ficam isentas do mínimo.
- `meta description` (150-160): o que faz + para quem + onde + convite. Sem listar palavras-chave soltas.
- JSON-LD: `LocalBusiness` (ou subtipo: `MedicalBusiness`, `Dentist`, `LegalService`, `Restaurant`, `Store`,
  `HomeAndConstructionBusiness`, `ProfessionalService`) quando há endereço físico; `Organization` quando não há. Dados:
  nome, URL, telefone, endereço, horário, redes (`sameAs`), imagem OG.
- URL final: domínio (Q34 A/B) ou `https://USUARIO.github.io/REPO/` (Q34 C; usuário de Q35; nome do repositório =
  nome do negócio em minúsculas com hífens). Registre a URL prevista: ela entra em canonical, OG, sitemap e `404.html`.

### Passo 8 — Integrações
- WhatsApp: `https://wa.me/55DDDNUMERO?text=` + mensagem de Q36 codificada (espaço = `%20`, acentos codificados);
  mensagem de WhatsApp de `obrigado.html` = padrão do guia (`GUIA-DESIGN §6.5`).
- Formulário: serviço padrão do kit (ver `GUIA-FRONTEND §9` apenas para o nome; a configuração é da Fase 5), e-mail de
  Q37, campos (nome, WhatsApp, e-mail, mensagem; no máximo 4), redirect `obrigado.html`.
- Mapa (Q41 C): a pessoa envia o código "Incorporar um mapa" do Google Maps na Fase 4 (pendência).
- Analytics (Q40): ferramenta + ID; implica `cookie-banner` e trecho de analytics em `privacidade.html`.
- Agendamento, vídeo, Instagram, pixel (Q41): link/ID e onde entra.

### Passo 9 — Critérios de aceite
Copie a lista base de `modelos/ESPECIFICACAO.md §10` e acrescente os específicos (ex.: "FAQ com as 6 perguntas",
"portfólio com 6 projetos legendados", "banner de cookies aparece na primeira visita").

### Passo 10 — Plano de build
Lotes de 2-3 seções na ordem da página; Checkpoint 1 = header + hero + footer + globais (`whatsapp-float`,
`cookie-banner`); páginas internas depois da inicial;
`privacidade`/`obrigado`/`404`/sitemap/robots por último; passagem final. Liste as pendências que precisam chegar antes
de cada checkpoint (OG, mapa, chave do formulário).

### Passo 11 — Escrever `ESPECIFICACAO.md`
A partir de `modelos/ESPECIFICACAO.md`, todas as seções preenchidas, Status: rascunho. Modo arquivo: grave na raiz do
projeto. Modo chat: entregue o arquivo inteiro em um bloco.

### Passo 12 — Apresentar para aprovação
Envie o wireframe textual (seção 5) e as perguntas pendentes (máx. 5). Com o "sim", mude o Status para "aprovado em
AAAA-MM-DD" e encerre:
> Plano aprovado e gravado em `ESPECIFICACAO.md`. Próxima fase: construção. Se quiser trocar de modelo (Opus em esforço
> médio ou Sonnet), pode fechar esta conversa e abrir outra com: "Leia kit-sites/00-COMECE-AQUI.md e continue". Os
> arquivos carregam todo o contexto. Posso seguir para a Fase 4?

## 3. O que a IA decide sozinha e o que pergunta

| Decide sozinha (por regra do kit; registra como assumido) | Pergunta (máx. 5 perguntas, uma mensagem) |
|---|---|
| Ordem das seções e alternância de fundos | Tipo de site, se Q2 = D e a regra do Passo 2 ficar empatada |
| Quantidade de itens por seção dentro dos limites | Qual depoimento/serviço cortar quando há mais do que o limite |
| Tokens derivados (strong, soft, surface, muted) e ajuste fino de tom para contraste | Trocar a cor primária inteira (se o contraste não fecha de jeito nenhum) |
| Textos de interface e microcopy | Fato, número ou nome que falta na matéria-prima |
| Variante de hero conforme a foto disponível | Usar foto de banco de imagens ou não (se Q22 C sem referência aprovada) |
| Nome do repositório e URL prevista | Domínio definitivo, se a pessoa ainda não decidiu e quer registrar |
| JSON-LD e metadados | Nada |

## 4. Critério de pronto (obrigatório antes de apresentar)

- [ ] Toda seção de toda página tem copy final (ou `[PLACEHOLDER]` aceito pela pessoa, com texto provisório definido).
- [ ] Todos os tokens têm valor; os 4 pares de contraste foram conferidos e anotados.
- [ ] Todo asset tem origem → destino → tamanho-alvo → alt; os que faltam têm substituto decidido e pendência registrada.
- [ ] Integrações com dados completos (WhatsApp com mensagem, e-mail do formulário, IDs) ou decisão explícita de não ter.
- [ ] `title` e `description` de cada página dentro dos limites; URL prevista definida; JSON-LD escolhido.
- [ ] Critérios de aceite e plano de build com checkpoints.
- [ ] Nenhuma decisão de design ou negócio ficou "para ver na construção".

## 5. Formato da apresentação para aprovação (wireframe textual)

Até 30 linhas para LP; multi-página: 10 linhas para a inicial + 2-3 por página interna. Uma linha por seção: `ID — variante — conteúdo-chave — asset`. Exemplo:

```
Plano do site — Clínica Raiz (LP de uma página, 13 seções)
Direção: clean (neutros quentes, cantos maiores) · Fontes: Manrope + Inter · Primária #0F766E · Movimento: sutil
Menu: Diferenciais · Serviços · Como funciona · Depoimentos · Contato · [Agendar avaliação → WhatsApp]

1. hero-split — H1: "Fisioterapia que trata a causa da dor, não só o sintoma" — CTA: Agendar avaliação no WhatsApp / Ver como funciona — hero.webp
2. stats-band — 12 anos · +4.000 pacientes · 4,9 no Google · 92% melhora em 8 sessões
3. features-grid (3) — Avaliação de 60 min · Plano individual · Reavaliação a cada 4 sessões
4. services-cards (4, com fotos) — Ortopédica · Esportiva · Pilates clínico · RPG
5. steps (3) — Avaliação → Plano → Evolução medida
6. testimonials-grid (3) — Marcos T. · Carla M. · João P.
7. about-split — "Uma clínica pequena de propósito" — sobre.webp
8. faq-accordion (6) — convênio · preço · tempo · "só alongamento?" · pedido médico · duração
9. cta-band — "Pronto para tratar a causa da dor?"
10. contact-split — formulário (4 campos) + WhatsApp, telefone, e-mail, endereço, horário + mapa
+ footer, whatsapp-float · páginas: privacidade, obrigado, 404
Pendências: OG image (Canva) · código do mapa · chave do formulário
Perguntas: (1) A "nota 92%" pode aparecer com o asterisco "pesquisa interna 2025"? (2) …

Aprovado? Responda "sim" ou liste ajustes no formato "item — o que mudar".
```

## 6. Limites

- Máximo de 5 perguntas pendentes; se houver mais, decida pelo padrão e registre como assumido.
- Depois do "sim", não reabra estrutura, tokens ou copy por conta própria. Ajustes só a pedido, pelo processo da Fase 4.
- Não produza versões alternativas de headline, paleta ou estrutura; uma proposta, com opções só nas perguntas.
- Não escreva código nem mencione classes CSS na especificação (exceto os nomes de variante do catálogo, como `grid--3`).

## 7. Erros comuns de planejamento

1. Hero com headline sobre a empresa ("Somos referência em…") em vez do resultado para o cliente.
2. Incluir `stats-band` ou `logos-strip` sem números/logos reais (vira "placeholder eterno").
3. Dez seções numa LP com pouco conteúdo: menos seções, mais densas.
4. Depoimentos reescritos "para ficar melhor": são a voz do cliente; mantenha.
5. FAQ ignorando as objeções de Q16.
6. Paleta com acento usado em texto (contraste insuficiente) ou primária chapada em fundos grandes.
7. Fontes diferentes das de REFERENCIAS ou mais de 2 famílias.
8. Esquecer páginas obrigatórias (`privacidade`, `obrigado`, `404`) no sitemap e nos critérios de aceite.
9. Deixar a URL prevista indefinida (quebra canonical, OG, `404.html` e o formulário).
10. Apresentar o plano com perguntas abertas demais ("o que você acha?"): pergunte com opções e ★.

## 8. Exemplo

`exemplos/ESPECIFICACAO-exemplo.md` mostra uma especificação completa para uma LP (13 seções) com copy final, tokens,
assets, integrações, SEO, critérios de aceite e plano de build. Use-o como régua de detalhe; não copie textos dele.
