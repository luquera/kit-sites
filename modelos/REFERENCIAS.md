# REFERÊNCIAS — {{Nome do negócio}}

> Compilado na Fase 2 a partir do que a pessoa enviou (prints em `referencias/`, imagens em `assets-brutos/`,
> textos em `conteudo/` ou no chat). A IA preenche; a pessoa aprova. Apague os blockquotes no arquivo final.

**Status:** rascunho | aprovado em {{AAAA-MM-DD}}

## 1. Direção visual final
- **Direção:** {{clean | editorial | bold | tech-dark | organico | premium}}
- **Ajustes:** {{1-3 linhas; ex.: "clean com tons quentes e cantos mais arredondados"}}

## 2. Referências positivas
| Nº | URL | Print | O que aproveitar | Em qual seção |
|---|---|---|---|---|
| 1 | {{URL}} | `referencias/ref-01-{{aspecto}}.png` | {{layout / cores / tipografia / movimento / seção X}} | {{hero, cards…}} |
| 2 | … | … | … | … |

## 3. Referências negativas (evitar)
- {{URL ou descrição}} — {{o que não quer}}

## 4. Leitura das referências (feita pela IA)
> 5-10 observações objetivas e acionáveis sobre os prints: tipo de layout do hero, densidade, escala tipográfica,
> uso de cor (quanto, onde), estilo de imagem, cantos/sombras, movimento. Sem adjetivos vazios.
- {{…}}

## 5. Paleta
> A pessoa decide `primary`, `accent`, `bg` e `text` (e, se quiser, `surface` e `footer-bg`). Os demais a IA deriva
> nesta fase pela regra de `FASE-3 §2 Passo 4`, confere o contraste e marca "(derivado)". Nomes = `GUIA-DESIGN §3.1`.

| Papel (token) | Hex | Quem define | Observação |
|---|---|---|---|
| primary | {{#}} | pessoa | {{…}} |
| primary-strong | {{#}} | IA (derivado) | hover |
| primary-soft | {{#}} | IA (derivado) | fundos suaves, ícones em quadrado |
| on-primary | {{#}} | IA (derivado) | texto sobre `primary` (botão) |
| accent | {{#}} | pessoa (opcional) | só botão principal, selos, estrelas |
| on-accent | {{#}} | IA (derivado) | texto sobre `accent` |
| bg | {{#}} | pessoa | fundo da página |
| surface | {{#}} | pessoa (opcional) ou IA | seções alternadas e cards |
| surface-2 | {{#}} | IA (derivado) | segundo nível de superfície |
| text | {{#}} | pessoa | |
| text-muted | {{#}} | IA (derivado) | |
| border | {{#}} | IA (derivado) | decorativa (divisores, cards) |
| border-strong | {{#}} | IA (derivado) | bordas de campos de formulário (≥ 3:1) |
| footer-bg | {{#}} | pessoa (opcional) ou IA | |
| footer-text | {{#}} | IA (derivado) | |
| footer-muted | {{#}} | IA (derivado) | |
- **Contraste checado:** sim ({{ferramenta}}) | não — texto/bg {{x:1}} · text-muted/surface {{x:1}} · on-primary/primary {{x:1}} · on-accent/accent {{x:1}} · primary/bg {{x:1}} · border-strong/bg {{x:1}}

## 6. Tipografia
- **Títulos:** {{família}} ({{pesos}}) · **Texto:** {{família}} ({{pesos}})
- **Link Google Fonts:** `{{https://fonts.googleapis.com/css2?family=…&display=swap}}`

## 7. Textos brutos (matéria-prima)
| Seção | Onde está | Status |
|---|---|---|
| hero | `conteudo/hero.md` ou inline abaixo | ok / falta |
| … | … | … |

{{Ou cole aqui os textos curtos, por seção.}}

## 8. Imagens e logo
| Arquivo (assets-brutos/) | Uso previsto | Dimensões | Otimizar? |
|---|---|---|---|
| {{hero.jpg}} | hero | {{4000x3000}} | sim → `assets/img/hero.webp` 1600px |
- **Logo:** SVG ( ) PNG transparente ( ) — arquivo: {{…}}
- **Favicon:** {{tem / gerar a partir do logo}} · **Imagem OG 1200x630:** {{tem / a pessoa vai fazer no Canva}}
- **Fotos de depoimentos / logos de clientes:** {{…}}

## 9. Dados operacionais e legais
- **WhatsApp:** +55 {{DDD número}} — mensagem padrão: "{{…}}"
- **E-mail do formulário:** {{…}} · **Telefone:** {{…}} · **E-mail público:** {{…}}
- **Endereço:** {{…}} · **Horário:** {{…}} · **Redes:** {{…}}
- **Razão social:** {{…}} · **CNPJ:** {{…}} · **E-mail de privacidade:** {{…}}

## 10. Pendências
- [ ] {{…}}
