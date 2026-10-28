# REFERÊNCIAS — Clínica Raiz Fisioterapia

> Exemplo preenchido (negócio fictício; URLs de referência ilustrativas) para mostrar o resultado esperado da Fase 2.

**Status:** aprovado em 2026-11-05

## 1. Direção visual final
- **Direção:** clean
- **Ajustes:** tons quentes nos neutros (off-white levemente creme), cantos arredondados (raio maior), fotos reais grandes no hero e no "Sobre"

## 2. Referências positivas
| Nº | URL | Print | O que aproveitar | Em qual seção |
|---|---|---|---|---|
| 1 | https://referencia-um.exemplo (clínica de fisioterapia, EUA) | `referencias/ref-01-hero.png` | hero dividido com foto real da equipe à direita, título curto, 2 botões, linha de provas abaixo | hero-split |
| 2 | https://referencia-dois.exemplo (consultoria B2B) | `referencias/ref-02-cards.png` | cards de benefícios com ícone em quadrado suave, muito respiro, 3 colunas | features-grid |
| 3 | https://referencia-tres.exemplo (estúdio de pilates) | `referencias/ref-03-depoimentos.png` | depoimentos curtos com foto redonda, nome e "paciente desde 2022" | testimonials-grid |
| 4 | https://referencia-quatro.exemplo (app de saúde) | `referencias/ref-04-faq.png` | FAQ em acordeão com perguntas na linguagem do paciente | faq-accordion |
| 5 | https://referencia-cinco.exemplo (clínica odontológica) | `referencias/ref-05-contato.png` | contato com formulário à esquerda e WhatsApp/endereço/horário à direita, mapa embaixo | contact-split |

## 3. Referências negativas (evitar)
- Sites de concorrentes com azul hospitalar frio, foto de banco de "médico sorrindo", carrossel automático no topo e pop-up de "agende agora" ao entrar.

## 4. Leitura das referências (feita pela IA)
- Hero dividido (texto 55% / foto 45%), título em 2 linhas, subtítulo curto, botão primário cheio + secundário contornado.
- Densidade baixa: seções com 96-120 px de respiro no desktop; no máximo 3 colunas.
- Tipografia sem serifa, títulos pesados (700-800), texto 17-18 px, cor do texto quase-preta (não cinza).
- Uma cor de marca (verde-petróleo) usada em botões, ícones e eyebrows; fundos neutros quentes alternando branco e creme.
- Fotos reais com luz natural, pessoas em movimento, sem filtro pesado; proporção 4:3 no hero e 1:1 nos avatares.
- Cantos arredondados (12-16 px) em cards, fotos e botões; sombras muito suaves.
- Movimento mínimo: só aparecimento suave ao rolar.

## 5. Paleta
| Papel (token) | Hex | Observação |
|---|---|---|
| primary | #0F766E | verde-petróleo do logo |
| primary-strong | #115E59 | hover |
| primary-soft | #E6F4F1 | fundos de ícone, badge |
| accent | #D97706 | só estrelas/selos |
| bg | #FFFFFF | |
| surface | #F7F5F0 | creme quente (seções alternadas, cards sobre creme ficam brancos) |
| text | #1C2321 | quase-preto esverdeado |
| text-muted | #4B5563 | |
| border | #E4E1DA | |
- **Contraste checado:** sim (WebAIM) — texto/fundo 15,6:1 · branco/primary 5,5:1 · text-muted/surface 7,1:1

## 6. Tipografia
- **Títulos:** Manrope (700, 800) · **Texto:** Inter (400, 500, 600)
- **Link Google Fonts:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap`

## 7. Textos brutos (matéria-prima)
| Seção | Onde está | Status |
|---|---|---|
| hero, diferenciais, serviços, como funciona | `conteudo/raiz-textos.md` (tópicos de Ana) | ok |
| sobre | `conteudo/sobre.md` (6 tópicos) | ok |
| depoimentos | `conteudo/depoimentos.md` (5, usar 3) | ok |
| FAQ | respostas de Ana às 6 dúvidas (chat, 05/11) | ok |

## 8. Imagens e logo
| Arquivo (assets-brutos/) | Uso previsto | Dimensões | Otimizar? |
|---|---|---|---|
| hero-ana-paciente.jpg | hero | 4000x3000 | sim → `assets/img/hero.webp` 1600px (feito no Squoosh) |
| equipe-recepcao.jpg | sobre | 4000x2667 | sim → `assets/img/sobre.webp` 1200px |
| depo-marcos.jpg, depo-carla.jpg, depo-joao.jpg | depoimentos | 1200x1200 | sim → `assets/img/depo-*.webp` 192px |
| servico-orto.jpg … servico-rpg.jpg (4) | services-cards | 3000x2000 | sim → `assets/img/servico-*.webp` 800px |
- **Logo:** SVG — `assets-brutos/logo-raiz.svg` (versão horizontal) e `logo-raiz-branco.svg` (rodapé)
- **Favicon:** gerar a partir do símbolo do logo (SVG) · **Imagem OG 1200x630:** Ana faz no Canva com foto do hero + frase
- **Fotos de depoimentos:** 3 com autorização por escrito · **Logos de clientes:** não se aplica

## 9. Dados operacionais e legais
- **WhatsApp:** +55 19 99999-0000 — mensagem padrão: "Olá! Vim pelo site e quero agendar uma avaliação."
- **E-mail do formulário:** contato@clinicaraiz.com.br · **Telefone:** (19) 3333-0000 · **E-mail público:** contato@clinicaraiz.com.br
- **Endereço:** Rua Coronel Quirino, 1000 — Cambuí, Campinas/SP, 13025-000 · **Horário:** seg a sex 7h-20h, sáb 8h-12h · **Redes:** instagram.com/clinicaraiz
- **Razão social:** Raiz Fisioterapia Ltda. · **CNPJ:** 00.000.000/0001-00 · **E-mail de privacidade:** privacidade@clinicaraiz.com.br

## 10. Pendências
- [ ] Imagem OG (Canva) até o checkpoint 1
- [ ] Conta no GitHub antes da Fase 5
