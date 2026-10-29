# ESPECIFICAÇÃO — Clínica Raiz Fisioterapia

> Exemplo completo (negócio fictício). É o nível de detalhe que a Fase 3 deve entregar: nenhuma decisão de design ou
> negócio fica para a construção. Depois da publicação, a fonte da verdade do site passa a ser `site/README.md`.

**Status:** aprovado em 2026-11-06

## 1. Resumo
Landing page de uma página para a Clínica Raiz Fisioterapia (Campinas/SP), voltada a adultos com dor ou em
recuperação que pesquisam e comparam antes de agendar. O site precisa transmitir competência acolhedora, responder
às objeções (preço/convênio, tempo de resultado, "é só alongamento?") e levar ao WhatsApp.
- **Conversão primária:** WhatsApp com a mensagem "Olá! Vim pelo site e quero agendar uma avaliação."
- **CTA primário (texto):** "Agendar avaliação no WhatsApp" · **CTA secundário:** "Ver como funciona" (âncora `#como-funciona`); no contato, formulário.

## 2. Sitemap
| Página | Arquivo | Title (50-60) | Meta description (150-160) | Seções (IDs do catálogo, em ordem) |
|---|---|---|---|---|
| Início | `index.html` | Clínica Raiz Fisioterapia em Campinas — Avaliação completa | Fisioterapia ortopédica, esportiva, pilates clínico e RPG no Cambuí, Campinas. Avaliação de 60 min, plano individual e reavaliação a cada 4 sessões. Agende pelo WhatsApp. | header-nav, hero-split, stats-band, features-grid, services-cards, steps, testimonials-grid, about-split, faq-accordion, cta-band, contact-split, footer, whatsapp-float |
| Privacidade | `privacidade.html` | Política de Privacidade — Clínica Raiz Fisioterapia | Como a Clínica Raiz trata os dados de quem entra em contato pelo site. | header-nav, text-prose, footer |
| Obrigado | `obrigado.html` | Mensagem enviada — Clínica Raiz Fisioterapia | — | hero-centered |

## 3. Design tokens
- **Direção:** clean (ajustes: neutros quentes, raio maior)
| Token | Valor |
|---|---|
| --color-primary | #0F766E |
| --color-primary-strong | #115E59 |
| --color-primary-soft | #E6F4F1 |
| --color-on-primary | #FFFFFF |
| --color-accent | #D97706 |
| --color-on-accent | #1F1300 |
| --color-bg | #FFFFFF |
| --color-surface | #F7F5F0 |
| --color-surface-2 | #ECE8DF |
| --color-text | #1C2321 |
| --color-text-muted | #4B5563 |
| --color-border | #E4E1DA |
| --color-border-strong | #7A7262 |
| --footer-bg / --footer-text / --footer-muted | #1C2321 / #F7F5F0 / #A8B0AD |
| --font-heading / --font-body | "Manrope", system-ui, sans-serif / "Inter", system-ui, sans-serif |
| --radius-md / --radius-lg | 0.875rem / 1.25rem |
| movimento | sutil: `.reveal` padrão nos cards e itens |
- **Link Google Fonts:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap`
- **Contraste:** texto/fundo 15,6:1 ✔ · branco/primary 5,5:1 ✔ · text-muted/surface 7,1:1 ✔ · accent só em ícones (não em texto)

## 4. Componentes globais
- **header-nav:** links: Diferenciais (`#diferenciais`), Serviços (`#servicos`), Como funciona (`#como-funciona`), Depoimentos (`#depoimentos`), Contato (`#contato`) · CTA: "Agendar avaliação" → link WhatsApp
- **footer:** colunas: marca + frase "Fisioterapia com avaliação completa e plano individual, no Cambuí, Campinas." | Navegação (mesmos links) | Horários (seg-sex 7h-20h, sáb 8h-12h) | Contato (WhatsApp, telefone, e-mail, endereço) · legal: "© 2026 Raiz Fisioterapia Ltda. · CNPJ 00.000.000/0001-00" + link Política de Privacidade + link Instagram
- **whatsapp-float:** sim — mensagem "Olá! Vim pelo site e quero agendar uma avaliação."
- **cookie-banner:** não (sem analytics)

## 5. Seções por página

### 5.1 index.html

#### 1. hero-split — `#inicio`
- **Eyebrow:** "Fisioterapia em Campinas · Cambuí"
- **H1:** "Fisioterapia que trata a causa da dor, não só o sintoma"
- **Subtítulo:** "Avaliação completa de 60 minutos, plano individual com metas e reavaliação a cada 4 sessões. Para quem já tentou remédio e repouso e quer voltar a se mover sem medo."
- **CTAs:** primário "Agendar avaliação no WhatsApp" → `https://wa.me/5519999990000?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.` (target _blank) · secundário "Ver como funciona" → `#como-funciona`
- **Prova:** "★ 4,9 no Google · 310 avaliações" · "12 anos de clínica"
- **Imagem:** `assets-brutos/hero-ana-paciente.jpg` → `site/assets/img/hero.webp` (1600×1200, 4:3) · alt: "Fisioterapeuta Ana Ribeiro orientando exercício de uma paciente na clínica" · `fetchpriority="high"`

#### 2. stats-band — `#numeros` (fundo `section--alt`, `section--tight`)
- **Itens (4):** "12 anos" / "de clínica no Cambuí" · "+4.000" / "pacientes atendidos" · "4,9" / "nota no Google (310 avaliações)" · "92%" / "relatam melhora em até 8 sessões*" — nota de rodapé da seção: "*Pesquisa interna com pacientes de 2025."

#### 3. features-grid — `#diferenciais` (3 cards, `grid--3`)
- **Eyebrow / H2 / lead:** "Por que a Raiz" / "Tratamento com começo, meio e fim" / "Você sabe o que está sendo feito, por quê e quando vai reavaliar."
- **Itens:** ícone `clock` · "Avaliação de 60 minutos" · "Histórico, testes de movimento e metas definidas com você na primeira sessão." — ícone `shield-check` · "Plano individual" · "Nada de protocolo igual para todo mundo: exercícios e técnicas escolhidos para o seu caso." — ícone `zap` · "Reavaliação a cada 4 sessões" · "Medimos a evolução e ajustamos o plano. Se não está avançando, mudamos a estratégia."

#### 4. services-cards — `#servicos` (4 cards com imagem, `grid--2`, fundo `section--alt`)
- **Eyebrow / H2 / lead:** "Serviços" / "O que tratamos" / "Dor crônica, lesões, pós-operatório e prevenção."
- **Itens (imagem 800×600 4:3, título, 1-2 frases, link "Agendar" → WhatsApp):**
  1. `servico-orto.webp` · "Fisioterapia ortopédica" · "Coluna, joelho, ombro e quadril. Dor crônica, hérnia de disco, tendinites e pós-operatório." · alt "Atendimento de fisioterapia ortopédica em maca"
  2. `servico-esportiva.webp` · "Fisioterapia esportiva" · "Recuperação de lesões e retorno seguro ao esporte, do corredor amador ao atleta." · alt "Paciente fazendo exercício de força com acompanhamento"
  3. `servico-pilates.webp` · "Pilates clínico" · "Aulas individuais ou em dupla, com aparelhos, conduzidas por fisioterapeuta." · alt "Sessão de pilates clínico em reformer"
  4. `servico-rpg.webp` · "RPG (Reeducação Postural Global)" · "Para dores posturais e encurtamentos, em sessões individuais de 50 minutos." · alt "Fisioterapeuta orientando postura em sessão de RPG"

#### 5. steps — `#como-funciona` (3 passos, `grid--3`)
- **Eyebrow / H2:** "Como funciona" / "Três passos para voltar a se mover"
- **Passos:** 1 "Avaliação completa" — "60 minutos com fisioterapeuta sênior: histórico, testes e definição de metas." · 2 "Plano individual" — "Frequência, técnicas e exercícios para casa, explicados em linguagem simples." · 3 "Evolução medida" — "Reavaliação a cada 4 sessões e alta planejada, com orientação para não voltar a doer."
- **CTA abaixo dos passos:** "Agendar avaliação no WhatsApp" (botão primário centralizado)

#### 6. testimonials-grid — `#depoimentos` (3 cards, `grid--3`, fundo `section--alt`)
- **Eyebrow / H2:** "Depoimentos" / "Quem já passou por aqui"
- **Itens (estrelas ★★★★★, citação, nome, descrição, avatar 96×96):**
  1. "Cheguei com dor lombar há 6 meses e sem conseguir dirigir mais de 20 minutos. Em 8 sessões voltei a correr. O que mais gostei foi saber exatamente o que estava fazendo e por quê." — Marcos T., gerente comercial, paciente desde 2025 — `depo-marcos.webp`
  2. "Operei o joelho e tinha medo de nunca mais jogar vôlei. O plano foi claro, com metas por semana. Hoje jogo duas vezes por semana." — Carla M., professora, paciente desde 2024 — `depo-carla.webp`
  3. "Fiz RPG por causa da postura e das dores de cabeça. Em dois meses as dores sumiram e aprendi a me sentar direito no trabalho." — João P., analista de sistemas, paciente desde 2025 — `depo-joao.webp`

#### 7. about-split — `#sobre` (texto à esquerda, foto à direita)
- **Eyebrow / H2:** "Sobre a Raiz" / "Uma clínica pequena de propósito"
- **Texto (2 parágrafos):** "A Raiz nasceu em 2014, quando a fisioterapeuta Ana Ribeiro (CREFITO 3/00000-F) decidiu atender com o tempo que cada paciente precisa: avaliação longa, poucos pacientes por horário e acompanhamento de perto. Hoje somos quatro fisioterapeutas, todos com pós-graduação em ortopedia ou esporte." / "Atendemos no Cambuí, em Campinas, com salas individuais, estúdio de pilates e estacionamento. Trabalhamos com reembolso de convênios e emitimos recibo para dedução no imposto de renda."
- **Fatos (3, em lista):** "4 fisioterapeutas especialistas" · "Salas individuais e estúdio de pilates" · "Reembolso de convênios e recibo para IR"
- **Imagem:** `sobre.webp` (1200×800, 3:2 exibida em 4:3) · alt: "Equipe da Clínica Raiz na recepção"

#### 8. faq-accordion — `#duvidas` (6 perguntas, fundo `section--alt`)
- **Eyebrow / H2:** "Dúvidas frequentes" / "O que todo mundo pergunta antes de agendar"
- **Perguntas e respostas:**
  1. "Vocês aceitam convênio?" — "Atendemos como particular e fornecemos recibo e relatório para reembolso. A maioria dos convênios reembolsa entre 40% e 70% do valor; podemos orientar sobre o pedido."
  2. "Quanto custa a avaliação?" — "Informamos o valor pelo WhatsApp, junto com as opções de pacote. A avaliação é cobrada à parte e o valor é abatido se você fechar o plano."
  3. "Em quanto tempo vou melhorar?" — "Depende do caso, mas a maioria dos pacientes relata melhora clara nas primeiras 4 a 8 sessões. Na avaliação você sai com uma estimativa realista e metas por etapa."
  4. "Fisioterapia é só alongamento?" — "Não. Usamos exercício terapêutico, terapia manual, educação sobre a dor e, quando indicado, recursos como eletroterapia. O plano é montado para o seu caso."
  5. "Preciso de pedido médico?" — "Não é obrigatório para iniciar. Se você tiver exames ou laudos, traga: eles ajudam na avaliação."
  6. "Quanto tempo dura cada sessão?" — "A avaliação dura 60 minutos. Sessões de tratamento duram 50 minutos, sempre individuais."

#### 9. cta-band — `#cta`
- **H2:** "Pronto para tratar a causa da dor?"
- **Texto:** "Agende sua avaliação de 60 minutos. Se preferir, deixe seus dados no formulário e retornamos no mesmo dia útil."
- **CTA:** "Agendar no WhatsApp" (`btn--inverse btn--lg`) → link WhatsApp

#### 10. contact-split — `#contato` (fundo `section--alt`)
- **Eyebrow / H2 / lead:** "Contato" / "Fale com a Raiz" / "Respondemos em até 1 dia útil. No WhatsApp costuma ser em minutos."
- **Formulário:** campos Nome, WhatsApp, E-mail, "Conte brevemente o que está sentindo" (textarea) · consentimento LGPD (texto do starter) · botão "Enviar mensagem" · nota "Resposta em até 1 dia útil."
- **Dados:** WhatsApp (19) 99999-0000 · Telefone (19) 3333-0000 · E-mail contato@clinicaraiz.com.br · Endereço Rua Coronel Quirino, 1000 — Cambuí, Campinas/SP · Horário seg-sex 7h-20h, sáb 8h-12h
- **Mapa:** sim — iframe do Google Maps do endereço, dentro de `.contact__map.media.media--16x9`, `loading="lazy"`, title "Mapa com a localização da Clínica Raiz"

### 5.2 privacidade.html
- Preencher o modelo do starter com: Raiz Fisioterapia Ltda., CNPJ 00.000.000/0001-00, endereço acima, serviço de formulário Web3Forms, hospedagem GitHub Pages, WhatsApp; **sem** analytics (usar as alternativas "SE NÃO USAR"); retenção 12 meses; encarregado: Ana Ribeiro — privacidade@clinicaraiz.com.br; data da última atualização = data da publicação.

### 5.3 obrigado.html
- Texto do starter; CTA WhatsApp com a mensagem "Olá! Acabei de enviar uma mensagem pelo site."

## 6. Integrações
- **Formulário:** Web3Forms (padrão do kit) → contato@clinicaraiz.com.br · chave: Ana gera no Web3Forms na Fase 5 e envia · redirect `https://www.clinicaraiz.com.br/obrigado.html`
- **WhatsApp:** +55 19 99999-0000 · texto: "Olá! Vim pelo site e quero agendar uma avaliação."
- **Mapa:** iframe do Google Maps (Ana envia o código "Incorporar um mapa" na Fase 4) · **Agendamento:** não · **Analytics:** não · **Pixels:** não

## 7. SEO e social
- **OG image:** `assets/og.jpg` (1200×630) — Ana faz no Canva: foto do hero + "Fisioterapia que trata a causa da dor"
- **JSON-LD:** `MedicalBusiness` (subtipo de LocalBusiness) — name, url, telephone +55-19-3333-0000, address (Rua Coronel Quirino, 1000, Cambuí, Campinas, SP, 13025-000, BR), openingHoursSpecification (Mo-Fr 07:00-20:00; Sa 08:00-12:00), sameAs Instagram, image og.jpg

## 8. Metas fixas
- WCAG AA · Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO · home ≤ 1,5 MB (hero.webp ≤ 220 KB; serviços ≤ 90 KB cada)

## 9. Critérios de aceite
- [ ] 13 seções presentes na ordem da tabela 2; âncoras do menu funcionam
- [ ] zero `{{` e zero texto provisório; todos os textos iguais a esta especificação (ou aprovados em checkpoint)
- [ ] 320px → 1440px sem rolagem horizontal; menu mobile abre/fecha; FAQ abre/fecha
- [ ] WhatsApp abre com a mensagem; formulário envia e cai em `obrigado.html`
- [ ] imagens WebP com `alt`, `width`/`height`; hero com `fetchpriority="high"`; demais `loading="lazy"`
- [ ] `site/README.md` com mapa das 13 seções e integrações preenchidas
- [ ] política de privacidade com dados reais e sem trechos de analytics

## 10. Plano de build
1. Setup (tokens, fontes, head, favicon do símbolo, imagens otimizadas) → commit
2. header-nav + hero-split + footer + whatsapp-float → **Checkpoint 1**
3. stats-band + features-grid + services-cards → **Checkpoint 2**
4. steps + testimonials-grid + about-split → **Checkpoint 3**
5. faq-accordion + cta-band + contact-split (mapa) → **Checkpoint 4**
6. privacidade.html, obrigado.html, 404.html, sitemap, robots; passagem responsiva + acessibilidade → QA (Fase 5)

## 11. Decisões assumidas e pendências
- Ordem das seções proposta pela IA a partir do catálogo e aprovada por Ana em 06/11 (assumido: stats-band logo após o hero, por haver números fortes)
- [ ] OG image (Canva) — até o Checkpoint 1
- [ ] Código do mapa (Google Maps → Compartilhar → Incorporar um mapa) — até o Checkpoint 4
- [ ] Conta GitHub e chave do Web3Forms — antes da Fase 5
