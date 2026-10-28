# FASE 1 — Entrevista (a IA pergunta, a pessoa decide)

| | |
|---|---|
| **Objetivo** | Levantar, em ~20 minutos, tudo que o plano do site precisa, sem a IA inferir nada de negócio ou design. |
| **Entrada** | A conversa. Se a pessoa já mandou um briefing/textos/prints, registre o que já está respondido e pergunte só o que falta. |
| **Saída** | `BRIEFING.md` (template em `modelos/BRIEFING.md`) com **Status: aprovado**. |
| **Modelo** | Sonnet basta. |
| **Leia também** | Nada. Não abra os guias nesta fase. |

## 1. Regras do entrevistador

1. **Um bloco por mensagem.** Envie o bloco, espere a resposta, registre, só então envie o próximo. Nunca junte dois blocos (exceto no modo rápido, item 9).
2. **Registre depois de cada bloco.** Modo arquivo: atualize `BRIEFING.md` (crie na primeira vez a partir de `modelos/BRIEFING.md`). Modo chat: mantenha as respostas em uma lista interna compacta e entregue o BRIEFING completo no final.
3. **Não comente as respostas.** Sem elogios, sem "ótima escolha", sem explicar por que perguntou. Depois de registrar, vá direto ao próximo bloco.
4. **Aceite respostas curtas e abreviadas** (`Q13: A; Q14: C; Q16: preço, prazo, garantia`). Se uma resposta não bate com nenhuma opção, registre como "Outro: <texto>". Se for ambígua, faça **uma** pergunta de esclarecimento junto com o bloco seguinte.
5. **★ é o padrão recomendado.** "★", "pode ser o padrão", "decida você" ou "pular" = use o ★ e registre "(assumido)" em "Decisões assumidas". Perguntas sem ★ são decisões que só a pessoa pode tomar: se ela não souber, registre "pendente" e siga.
6. **Perguntas condicionais** vêm com a condição entre parênteses. Pule as que não se aplicam. A numeração nunca muda.
7. **Não proponha design nem estrutura nesta fase.** Nada de "sugiro um hero com…". Opções do kit, sim; opinião, não. Não comece a codar.
8. **Respostas abertas (Q1, Q7, Q8, Q16, Q27, Q33, Q38, Q39):** peça 1-2 linhas; aceite tópicos; não reescreva o texto da pessoa.
9. **Modo rápido (só se a pessoa pedir "rápido" ou "mínimo de perguntas"):** pergunte apenas as perguntas marcadas com ‡ (não têm padrão possível), em até dois blocos; aplique ★ em todas as outras e liste-as como assumidas no resumo final.
10. **Informação extra** que a pessoa der sem ser perguntada vai para a seção certa do BRIEFING. Nunca peça de novo o que já foi dito.

## 2. Bloco 0 — Contexto (6 perguntas, ~3 min)

Antes do bloco, diga em uma linha em qual modo está (arquivo ou chat) e onde vai gravar as respostas.

```
Q1 ‡ Qual é o nome do negócio e, em uma frase, o que ele faz?

Q2 ‡ O que vamos criar?
    A) Landing page: 1 página focada em gerar contatos/vendas (indicada para serviços e campanhas)
    B) Site institucional em uma página só (seções Sobre, Serviços, Contato com âncoras no menu)
    C) Site institucional com várias páginas (Início, Sobre, Serviços, Portfólio, Contato…)
    D) Não sei: me recomende depois das próximas perguntas

Q3 Já existe um site?
    A) Não ★   B) Sim, vamos substituir (URL: ___)   C) Sim, mantemos e criamos uma página nova separada (URL: ___)

Q4 A marca já existe?
    A) Sim, completa (logo + cores + fontes)   B) Parcial (só logo ou só cores)   C) Não, só o nome

Q5 Prazo desejado?
    A) Esta semana   B) Em até 2 semanas ★   C) Sem pressa

Q6 Quem aprova as decisões?
    A) Eu ★   B) Eu e mais alguém (quem: ___)
```

## 3. Bloco 1 — Negócio (6 perguntas, ~4 min)

```
Q7 ‡ Para quem é? Descreva o cliente principal em 1-2 linhas (quem é, o que busca, o que o incomoda hoje).

Q8 ‡ Por que escolher vocês e não o concorrente? Diferencial em 1-2 frases, com fatos (anos, método, garantia, prazo…).

Q9 Cite 2-3 concorrentes ou empresas do seu mercado que você observa (nome e site, se souber).
    (Não vou visitar os sites; na Fase 2 você pode mandar prints do que gosta neles.)

Q10 Tom de voz do site (escolha até 2):
    A) Profissional e direto ★   B) Acolhedor e próximo   C) Técnico e preciso
    D) Inspirador   E) Descontraído   F) Sofisticado/premium   G) Outro: ___

Q11 Onde vocês atuam?
    A) Local (cidade/bairro: ___)   B) Regional/estadual   C) Nacional   D) Online, sem fronteira

Q12 Que provas você já tem? (marque todas)
    A) Depoimentos de clientes   B) Logos de clientes/parceiros   C) Números (anos, clientes, projetos, nota)
    D) Avaliações no Google ou Reclame Aqui   E) Cases/portfólio com fotos   F) Prêmios, selos, imprensa   G) Nenhuma ainda
```

## 4. Bloco 2 — Objetivo e conversão (6 perguntas, ~3 min)

```
Q13 ‡ Ação principal que o visitante deve fazer:
    A) Chamar no WhatsApp   B) Preencher o formulário   C) Agendar um horário (Calendly/Cal.com)
    D) Ligar   E) Comprar/assinar em outro site (link)   F) Baixar um material   G) Outro: ___

Q14 Ação secundária:
    A) Formulário (se a principal for WhatsApp) ★   B) WhatsApp (se a principal for outra) ★
    C) Ver serviços/portfólio   D) Seguir no Instagram   E) Nenhuma

Q15 Como vamos medir sucesso?
    A) Contatos por mês (meta: ___) ★   B) Agendamentos   C) Vendas   D) Presença/credibilidade apenas   E) Outro: ___

Q16 ‡ Quais as 3 dúvidas ou objeções mais comuns antes de fechar com vocês? (viram o FAQ e os argumentos)

Q17 Como o cliente decide?
    A) Rápido, por impulso ou urgência   B) Pesquisa e compara por alguns dias ★   C) Decisão longa (semanas/meses, várias pessoas)

Q18 Mostrar preços no site?
    A) Não ★   B) Sim, tabela com 2-3 planos   C) Só "a partir de R$ ___"
```

## 5. Bloco 3 — Estrutura e conteúdo (7 perguntas, ~4 min)

```
Q19 (só se Q2 = C) Quais páginas?
    A) Início ★   B) Sobre ★   C) Serviços/Produtos ★   D) Portfólio/Cases   E) Equipe
    F) Contato ★   G) Blog (fora do escopo: só um link externo, se existir)   H) Outra: ___

Q20 Seções que você já sabe que quer (marque; posso propor as demais pelo catálogo do kit):
    A) Diferenciais/benefícios ★   B) Serviços ★   C) Como funciona (passos)   D) Sobre ★
    E) Depoimentos ★   F) Números   G) Portfólio/galeria   H) Preços   I) Perguntas frequentes ★
    J) Equipe   K) Vídeo   L) Mapa/endereço   M) Proponha você a partir do catálogo

Q21 Textos:
    A) Já tenho textos prontos (vou enviar)   B) Tenho rascunhos/tópicos; a IA organiza ★
    C) Não tenho nada; respondo um mini-formulário por seção na Fase 2

Q22 Fotos do negócio:
    A) Tenho fotos profissionais   B) Tenho fotos de celular razoáveis   C) Não tenho; vou usar banco de imagens
    D) Não tenho; vou fotografar/contratar antes

Q23 (só se Q4 ≠ C) Logo em qual formato?
    A) SVG ou vetor (AI, EPS, PDF)   B) PNG com fundo transparente   C) JPG ou PNG com fundo   D) Não sei; mando o que tenho

Q24 Depoimentos reais, com nome?
    A) Sim, 3 ou mais   B) Sim, 1 ou 2   C) Vou coletar até a Fase 2   D) Não usar

Q25 Idiomas:
    A) Só português ★   B) Português + inglês   C) Outro: ___
```

## 6. Bloco 4 — Marca e direção visual (8 perguntas, ~5 min)

```
Q26 ‡ Direção de estilo (escolha 1; pode indicar uma 2ª para mesclar; detalhes em GUIA-DESIGN §3):
    A) clean — corporativo limpo: fundo branco, 1 cor forte, muito respiro (consultorias, clínicas, B2B)
    B) editorial — elegante: serifa nos títulos, neutros quentes, fotos grandes (arquitetura, moda, estúdios)
    C) bold — vibrante: cores saturadas, tipografia grande, blocos de cor (eventos, cursos, marcas jovens)
    D) tech-dark — escuro: fundo quase preto, 1 acento vivo, gradientes sutis (software, tecnologia)
    E) organico — acolhedor: tons terrosos/verdes, cantos arredondados (saúde, bem-estar, alimentação)
    F) premium — luxo: preto/off-white, dourado ou bordô mínimo, serifas finas (alto padrão, joias, imóveis)
    G) Ainda não sei: decido na Fase 2 com as referências

Q27 ‡ Três adjetivos para o visual (ex.: "sólido, moderno, acolhedor"):

Q28 Tema:
    A) Claro ★   B) Escuro   C) Claro com algumas seções escuras

Q29 Densidade:
    A) Arejado, muito espaço em branco ★   B) Equilibrado   C) Denso, mais informação por tela

Q30 Movimento:
    A) Nenhum   B) Sutil: elementos aparecem suavemente ao rolar ★   C) Médio: sutil + hovers marcados

Q31 Cores:
    A) Já tenho (mando os códigos hex ou o manual da marca)   B) Tenho só a cor principal; o resto a definir
    C) Não tenho; escolho na Fase 2 com as ferramentas do kit

Q32 Fontes:
    A) Já tenho (nomes: ___)   B) Usar o par padrão da direção escolhida ★   C) Escolho na Fase 2

Q33 ‡ O que você NÃO quer de jeito nenhum? (cores, elementos, clichês, coisas de concorrentes)
```

## 7. Bloco 5 — Técnico e operacional (8 perguntas, ~4 min)

Antes do bloco, uma linha: "Eu cuido de toda a parte técnica; aqui só preciso dos dados e de 2 decisões simples."

```
Q34 Domínio (endereço do site):
    A) Já tenho (qual: ___)   B) Quero registrar (qual: ___; .com.br é feito no Registro.br)
    C) Por enquanto o endereço gratuito do GitHub Pages ★ (dá para trocar depois sem refazer nada)

Q35 Conta no GitHub (é onde o site fica hospedado, de graça):
    A) Tenho (usuário: ___)   B) Não tenho; crio quando chegar a hora ★   C) Prefiro não usar GitHub (vamos publicar via Netlify Drop)

Q36 ‡ WhatsApp do site: número com DDD: ___
    Mensagem que já vem escrita quando o cliente clica: ★ "Olá! Vim pelo site e quero saber mais." ou outra: ___

Q37 Formulário de contato:
    A) Sim; mensagens vão para o e-mail: ___ ★   B) Não, só WhatsApp

Q38 ‡ Dados para contato e rodapé (o que não quiser mostrar, diga "não mostrar"):
    telefone fixo · e-mail público · endereço completo · horário de atendimento · redes sociais (links)

Q39 ‡ Dados legais (rodapé e política de privacidade):
    razão social · CNPJ (ou "não exibir") · e-mail para assuntos de privacidade (pode ser o mesmo do contato)

Q40 Medir visitas (analytics)?
    A) Não por enquanto ★   B) Sim, Google Analytics 4   C) Sim, Microsoft Clarity (mapas de calor, grátis)   D) Sim, os dois
    (Se sim, o site terá um aviso de cookies obrigatório.)

Q41 Integrações extras (marque):
    A) Nenhuma ★   B) Agendamento (link do Calendly/Cal.com: ___)   C) Mapa do Google no contato
    D) Vídeo do YouTube (link: ___)   E) Links/feed do Instagram   F) Pixel Meta / Google Ads (ID: ___)   G) Outro: ___
```

## 8. Encerramento da fase

1. **Se Q2 = D**, recomende o tipo com esta regra e peça confirmação em 1 linha:
   - **Landing page** quando o objetivo é conversão (Q13 A/B/C) e há até 5 serviços e nenhum portfólio/equipe a mostrar.
   - **Institucional one-page** quando há Sobre + Serviços + Contato com pouco conteúdo cada e sem portfólio extenso.
   - **Institucional multi-página** quando há portfólio/cases, equipe, mais de 5 serviços ou necessidade de uma página por serviço.
2. **Gere o `BRIEFING.md`** a partir de `modelos/BRIEFING.md`: preencha cada campo com a resposta (não com a pergunta), marque "(assumido)" o que veio de ★, liste em "Pendências" tudo que a pessoa disse que vai enviar (logo, textos, fotos, depoimentos, hex das cores, links). Status: rascunho.
3. **Envie o resumo** (até 25 linhas, em tópicos): tipo de site e páginas; objetivo e CTA primário/secundário; público e diferencial em 1 linha cada; direção visual, tema, densidade, movimento; o que já existe de conteúdo e o que falta; dados técnicos (domínio, GitHub, WhatsApp, formulário, analytics); decisões assumidas. Termine com:
   > Aprovado? Responda "sim" ou liste ajustes no formato "item — o que mudar".
4. Com o "sim": mude o Status para "aprovado em AAAA-MM-DD" e diga:
   > Fase 1 concluída. Na Fase 2 você faz a pesquisa de referências e separa textos e imagens; eu vou montar sua lista de tarefas personalizada. Posso seguir? (Vou ler `kit-sites/FASE-2-REFERENCIAS.md`.)

## 9. Exemplo de uma troca

```
IA:  Bloco 2 — Objetivo e conversão (6 perguntas, ~3 min)
     Q13 ‡ Ação principal … Q18 Mostrar preços no site? A) Não ★ …

Pessoa: Q13: A; Q14: A; Q15: A, meta 30; Q16: preço, se atendem convênio, quanto tempo leva; Q17: B; Q18: ★

IA:  (registra no BRIEFING: CTA primário WhatsApp (Q13); secundário formulário (Q14); meta 30 contatos/mês (Q15);
     objeções: preço, convênio, prazo (Q16); decisão com comparação (Q17); preços: não exibir (Q18, assumido))
     Bloco 3 — Estrutura e conteúdo (7 perguntas, ~4 min)
     …
```
