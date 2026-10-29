# kit-sites — sites institucionais e landing pages com IA, sem programar

Este kit é um conjunto de arquivos `.md` que você carrega em um modelo de IA (Claude) para ele **entrevistar você,
planejar e construir um site estático** (institucional ou landing page) e publicá-lo de graça no GitHub Pages.
Você decide tudo de negócio e de design; a IA decide tudo de código. O resultado é um site rápido, acessível,
documentado e versionado, que qualquer modelo (até um mais simples, em outro dia) consegue ajustar em minutos.

## 1. O que você vai obter

- Um site em HTML, CSS e JavaScript puros (sem WordPress, sem plugins, sem mensalidade de plataforma), com 1 a 6 páginas.
- Publicado em `https://seu-usuario.github.io/nome-do-site/` ou no seu domínio (`.com.br` pelo Registro.br).
- Formulário de contato funcionando (Web3Forms), botão de WhatsApp, política de privacidade (LGPD), página 404, SEO básico.
- Um `README.md` dentro do site que explica a estrutura, e um histórico de mudanças: você fecha a conversa hoje e,
  amanhã, outro modelo abre o projeto e se localiza em minutos.

## 2. Para quem é e o que você precisa

Para quem conhece o negócio e tem noção de design, mas não programa. Você vai pesquisar referências, escolher cores e
fontes, escrever a matéria-prima dos textos e separar fotos. A IA faz o resto.

Você precisa de:
- **Claude Code** instalado (aplicativo ou terminal) — é onde a IA lê e grava arquivos. Alternativa mais limitada: claude.ai (seção 8).
- Uma **conta no GitHub** (grátis) para publicar. Se preferir não usar GitHub, há um caminho alternativo (Netlify Drop).
- Navegador, suas fotos e logo, e (opcional) Canva ou Figma para a imagem de compartilhamento e o favicon.
- https://squoosh.app (grátis, no navegador) para deixar as fotos leves.

## 3. Quem decide o quê

| Decisão | Você | A IA |
|---|---|---|
| Tipo de site, páginas, objetivo, público, tom de voz | decide | propõe opções do kit |
| Textos | fornece a matéria-prima e aprova | rascunha dentro de regras de copy |
| Referências visuais, direção de estilo, cores, fontes, fotos, logo | decide e envia | aplica e confere contraste/tamanhos |
| Domínio, conta GitHub, formulário sim/não, analytics sim/não | decide | configura |
| HTML, CSS, JS, responsivo, acessibilidade, SEO técnico, performance | — | decide (regras fixas do kit) |
| git, GitHub Pages, formulário, integrações, testes técnicos | — | executa |

A IA pergunta tudo em múltipla escolha, com um padrão recomendado marcado com ★. Você responde curto
(`Q13: A; Q14: C; Q18: ★`). Se não souber, "★" ou "decida você" resolve: a IA usa o padrão e anota como assumido.

## 4. Como usar em 6 passos (Claude Code)

1. Crie uma pasta para o projeto (ex.: `meu-site/`) e copie a pasta `kit-sites/` para dentro dela.
2. Abra o Claude Code nessa pasta (`meu-site/`). Escolha o modelo da fase (seção 6).
3. Envie exatamente: **`Leia kit-sites/00-COMECE-AQUI.md e inicie a Fase 1`**.
4. Responda os blocos de perguntas da **Fase 1** (uns 20 minutos). Aprove o resumo.
5. Faça as tarefas da **Fase 2** que a IA vai listar (referências, cores, fontes, textos, fotos). Aprove.
6. Aprove o plano (**Fase 3**), valide os checkpoints da construção (**Fase 4**) e siga os passos de publicação (**Fase 5**).

Entre as fases você pode fechar a conversa e abrir outra: os arquivos `BRIEFING.md`, `REFERENCIAS.md`,
`ESPECIFICACAO.md` e `site/README.md` carregam todo o contexto. Para continuar, envie:
**`Leia kit-sites/00-COMECE-AQUI.md e continue de onde paramos`**.

Alternativa: instalar como *skill* do Claude Code, copiando a pasta para `.claude/skills/kit-sites/` dentro do projeto
(ou `~/.claude/skills/kit-sites/` para todos os projetos) e chamando `/kit-sites` (verifique na sua versão do Claude Code:
`claude --version`). Outra opção: um `CLAUDE.md` na raiz do projeto com a linha `@kit-sites/00-COMECE-AQUI.md`, que importa
o roteador em toda conversa (confira com `/memory`; verifique na sua versão).

## 5. As fases

| Fase | Você faz | A IA faz | Modelo e esforço | Seu tempo | Tokens (estimativa) |
|---|---|---|---|---|---|
| 1 Entrevista | responde ~40 perguntas de múltipla escolha | registra em `BRIEFING.md` | Sonnet | 20 min | 15-30 mil |
| 2 Referências | pesquisa 4-6 referências, escolhe cores/fontes, escreve a matéria-prima, separa fotos | lista as tarefas, lê suas referências, compila `REFERENCIAS.md` | Sonnet | 1-3 h (seu trabalho real) | 30-60 mil |
| 3 Plano | aprova (ou ajusta) o plano | escreve `ESPECIFICACAO.md`: páginas, seções, textos finais, cores, fontes, imagens | **Opus 5.5, esforço alto** | 20 min | 60-120 mil |
| 4 Construção | valida 3-5 checkpoints no navegador | constrói o site a partir do starter, documenta, versiona | **Opus, esforço médio** (ou Sonnet) | 30-60 min | 150-350 mil |
| 5 QA e publicação | cria contas (GitHub, Web3Forms), testa no celular, envia o formulário | testa tudo, publica, configura domínio e formulário | Sonnet | 30-60 min | 40-80 mil |
| 6 Ajustes (depois) | pede a mudança em linguagem normal | localiza, edita, testa, publica | Sonnet | 5 min | 10-30 mil |

Estimativas de tokens somam entrada e saída; multiplique pela tabela de preços atual do modelo
(https://platform.claude.com/docs/en/about-claude/pricing) para ter o custo. Preços por milhão de tokens consultados em
2026-10 (entrada / saída): Opus 5.5 US$ 4 / US$ 20; Sonnet 5.5 US$ 2 / US$ 10; Haiku 5.5 US$ 0,10 / US$ 0,50 (prompts até
100K tokens); leitura de cache US$ 0,20 em Opus e Sonnet. Em assinatura Pro/Max não há custo por token, só o limite de uso.
A maior parte do custo está na Fase 4; a Fase 2 é barata em tokens porque o trabalho é seu.

## 6. Trocar de modelo e esforço; fechar e retomar

- No Claude Code, `/model` troca o modelo da conversa (aliases `opus` e `sonnet`). O esforço tem 5 níveis (`low`,
  `medium`, `high`, `xhigh`, `max`; padrão do Claude Code: `xhigh`) e pode ser definido ao abrir, ex.:
  `claude --model opus --effort high`; dentro da conversa use `/effort medium` (verifique na sua versão). Em Opus 5.5 o
  esforço é o único controle de profundidade e custo.
- Modo de permissão por fase: `claude --permission-mode plan` nas Fases 1-3 (a IA só propõe, não edita arquivos) e
  `--permission-mode acceptEdits` na Fase 4 (grava sem confirmar cada edição). Evite `bypassPermissions`.
- Recomendação do kit: **planeje com Opus 5.5 em esforço alto** (Fase 3) e **construa com Opus em esforço médio**
  (Fase 4). Sonnet dá conta de todas as fases com qualidade um pouco menor no plano.
- Para trocar entre fases: encerre a conversa ao final de uma fase (depois do "aprovado"), abra outra com o modelo
  desejado e envie `Leia kit-sites/00-COMECE-AQUI.md e continue de onde paramos`. A IA descobre a fase pelos arquivos.
- Nunca precisa "explicar de novo": tudo que importa está nos arquivos, não na conversa.

## 7. Dicas para gastar menos

- Responda os blocos inteiros de uma vez, em formato curto. Decida rápido; "★" é sempre uma resposta válida.
- Envie prints **rotulados** (o que você gosta em cada um) e poucos: 4-6 bons valem mais que 15.
- Entregue as fotos já leves (Squoosh, WebP, até 1600 px) e com nomes simples.
- Não peça "faz duas versões": peça uma mudança concreta ("hero — título menor no celular").
- Feche a conversa entre fases (`/clear` no Claude Code); conversas longas custam mais a cada mensagem.
- Não edite os arquivos do kit no meio de uma fase: isso invalida o cache de prompt e encarece as mensagens seguintes.
- Use Sonnet nas Fases 1, 2, 5 e 6.

## 8. Usando no claude.ai (modo chat) e em outras ferramentas

- **claude.ai (Projects):** crie um projeto, suba todos os `.md` do kit (e os arquivos de `base/`, `modelos/`, `exemplos/`)
  como conhecimento, e nas instruções do projeto escreva "Siga kit-sites/00-COMECE-AQUI.md". Limitação: a IA não grava
  arquivos; ela entrega cada arquivo em um bloco de código e você salva no seu computador com o nome indicado
  (um editor simples como o VS Code ou o Bloco de Notas serve). A publicação fica por sua conta (Netlify Drop é o
  caminho mais simples). Funciona, mas é mais lento e sujeito a erro: prefira o Claude Code. Limites (verificar no
  plano): o conhecimento do projeto cabe inteiro até ~200 mil tokens (o kit tem ~90 mil); acima disso o claude.ai busca
  trechos e pode perder regras. Para ver uma seção antes de salvar, peça "mostre o hero como um artifact HTML único".
- **Cursor, Claude Desktop (Cowork) e similares:** qualquer ferramenta em que a IA leia e grave arquivos funciona
  igual ao Claude Code. Aponte-a para `kit-sites/00-COMECE-AQUI.md`.

## 9. Ajustes depois de publicado

Abra o projeto no Claude Code (qualquer modelo; Sonnet basta) e envie:
**`Leia kit-sites/FASE-6-AJUSTES.md e site/README.md. Quero mudar: …`**
A IA lê o mapa do site, localiza a seção, edita o mínimo, testa, registra no histórico e publica. Mudanças pequenas
levam poucos minutos.

## 10. Perguntas frequentes

- **Já tenho um site. Posso usar o kit?** Sim, para fazer um novo (ou uma landing page separada). O kit não edita sites feitos em outras plataformas.
- **Quero WordPress/Wix/Framer.** Não é o foco. O kit gera HTML puro justamente para ser simples, grátis e durável.
- **E blog?** Fora do escopo desta versão. Dá para linkar um blog externo (Medium, Substack, LinkedIn) no menu.
- **E loja virtual?** Não. Para vender, use um link externo (checkout, WhatsApp, Hotmart etc.) como botão.
- **Várias línguas?** Possível (páginas duplicadas), mas dobra o trabalho de textos. Decida na Fase 1 (Q25).
- **Preciso saber git?** Não. A IA cuida; você só faz o login no GitHub quando ela pedir.
- **Posso usar só Sonnet?** Sim. O kit foi feito para isso; Opus melhora o plano e a construção, não é obrigatório.
- **O site vai ficar "cara de template"?** Depende das suas referências, fotos e textos. O kit cobra isso de você na Fase 2.
- **Quanto custa hospedar?** Nada no GitHub Pages. O domínio `.com.br` tem anuidade no Registro.br.
- **E se a IA travar numa fase?** Diga "pare" e envie `Leia kit-sites/00-COMECE-AQUI.md e continue de onde paramos`; se preciso, troque de modelo.

## 11. Estrutura da pasta

```
kit-sites/
├── README.md                   ← este manual (para você)
├── SKILL.md                    ← permite instalar como skill do Claude Code
├── 00-COMECE-AQUI.md           ← regras e roteiro para a IA (ponto de entrada)
├── FASE-1-ENTREVISTA.md        ← 41 perguntas em 6 blocos → BRIEFING.md
├── FASE-2-REFERENCIAS.md       ← suas tarefas de pesquisa e decisão → REFERENCIAS.md
├── FASE-3-PLANO.md             ← plano completo → ESPECIFICACAO.md
├── FASE-4-CONSTRUCAO.md        ← construção com checkpoints → site/
├── FASE-5-QA-E-PUBLICACAO.md   ← testes, GitHub Pages, domínio, formulário → PUBLICACAO.md
├── FASE-6-AJUSTES.md           ← mudanças depois de publicado
├── GUIA-DESIGN.md              ← regras de design, direções de estilo, catálogo de seções, copy
├── GUIA-FRONTEND.md            ← stack, starter, snippets, acessibilidade, SEO, performance, formulário
├── base/                       ← starter do site (HTML/CSS/JS, privacidade, obrigado, 404, README do site)
├── ferramentas/                ← checar-site.js: verifica rolagem horizontal e erros em todas as páginas (usado pela IA)
├── modelos/                    ← templates de BRIEFING, REFERENCIAS, ESPECIFICACAO, PUBLICACAO
└── exemplos/                   ← um caso completo preenchido (Clínica Raiz Fisioterapia)
```

Seu projeto (fora de `kit-sites/`): `BRIEFING.md`, `REFERENCIAS.md`, `ESPECIFICACAO.md`, `PUBLICACAO.md`,
`referencias/` (prints), `assets-brutos/` (fotos originais), `conteudo/` (textos) e `site/` (o site publicado).

## 12. Links úteis

- https://claude.com/claude-code — instalar o Claude Code (grátis; usa sua assinatura/créditos Claude).
- https://code.claude.com/docs/en/overview — documentação do Claude Code: instalação, `CLAUDE.md`, skills, flags (grátis; verificar).
- https://platform.claude.com/docs/en/about-claude/pricing — preços oficiais por milhão de tokens (grátis).
- https://claude.com/pricing — planos Free/Pro/Max e o que cada um inclui (grátis; verificar).
- https://github.com/signup — criar conta no GitHub (grátis).
- https://pages.github.com — como funciona o GitHub Pages (grátis).
- https://registro.br — domínios `.com.br` (anuidade).
- https://web3forms.com — formulário de contato para sites estáticos (grátis com limite mensal — verificar).
- https://squoosh.app — comprimir e converter fotos para WebP (grátis).
- https://www.canva.com — imagem de compartilhamento 1200×630 e favicon (grátis/pago).
- https://fonts.google.com — fontes (grátis).
- https://coolors.co — paletas de cores (grátis/pago).
- https://webaim.org/resources/contrastchecker/ — checar contraste de texto (grátis).
- https://www.awwwards.com e https://land-book.com — referências visuais de sites (grátis para navegar).
- https://pagespeed.web.dev — medir velocidade e SEO (grátis).
- https://app.netlify.com/drop — publicar arrastando a pasta, sem GitHub (grátis).
