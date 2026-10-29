# FASE 5 — QA e publicação (a IA verifica e publica; a pessoa testa e cria as contas)

| | |
|---|---|
| **Objetivo** | Garantir que o site está correto, acessível e rápido, e publicá-lo no GitHub Pages (com domínio próprio, formulário e analytics quando a pessoa quiser). |
| **Entrada** | `site/` completo (commit `feat: site completo para QA`), `ESPECIFICACAO.md`, `site/README.md`. |
| **Saída** | Site publicado, `PUBLICACAO.md` (template: `modelos/PUBLICACAO.md`), `site/README.md` com URL e data, nota no topo da `ESPECIFICACAO.md`. |
| **Modelo** | Sonnet basta. |
| **Leia também** | `GUIA-FRONTEND.md` §6 (acessibilidade), §7 (SEO), §8 (performance), §9 (formulário) quando precisar corrigir algo. |
| **Onde rodar comandos** | Sempre **dentro de `site/`** (é o repositório git que vai para o GitHub). |

## 1. QA pela IA (comandos; corrija tudo antes de chamar a pessoa)

Rode dentro de `site/`. Cada item diz o comando e o resultado esperado.

```bash
# 1. Nenhum placeholder sobrou (resultado esperado: nada)
grep -rn "{{" --include=*.html --include=*.css --include=*.js --include=*.xml --include=*.txt --include=*.md .

# 2. Exatamente 1 <h1> por página
for f in *.html; do echo "$f: $(grep -c '<h1' "$f") h1"; done

# 3. Caminhos absolutos proibidos (esperado: só 404.html pode aparecer)
grep -n 'href="/\|src="/' *.html | grep -v '^404.html'

# 4. Imagens sem alt, width ou height (esperado: nada)
grep -n '<img' *.html | grep -v 'alt=' ; grep -n '<img' *.html | grep -v 'width=' ; grep -n '<img' *.html | grep -v 'height='

# 5. Âncoras do menu apontam para ids existentes (compare as duas listas)
grep -oh 'href="#[^"]*"' *.html | sort -u
grep -oh 'id="[^"]*"' *.html | sort -u

# 6. Lazy loading e prioridade do hero
grep -c 'loading="lazy"' index.html ; grep -n 'fetchpriority="high"' index.html

# 7. Title (50-60) e description (150-160) de cada página
for f in *.html; do t=$(grep -o '<title>[^<]*' "$f" | sed 's/<title>//'); d=$(grep -o 'name="description" content="[^"]*' "$f" | sed 's/.*content="//'); echo "$f | title ${#t} | description ${#d}"; done

# 8. Head completo na página inicial (esperado: canonical, og:url, og:image, theme-color, JSON-LD)
grep -n 'rel="canonical"\|og:url\|og:image\|theme-color\|application/ld+json' index.html

# 9. Peso das imagens (esperado: nenhuma acima de 300 KB; total da pasta até ~1,5 MB por página)
find assets/img -size +300k ; du -ch assets/img/* 2>/dev/null | tail -1

# 10. Marcadores de seção batem com o Mapa de seções do README
grep -oh '===== \[[a-z-]*\]' *.html | sort | uniq -c
grep -c '^| ' README.md

# 11. sitemap/robots (esperado: todas as páginas públicas no sitemap; obrigado.html fora; URL final correta)
grep -c '<loc>' sitemap.xml ; grep -n 'Sitemap' robots.txt

# 12. Formulário configurado (esperado: action do serviço + access_key preenchida + redirect com URL absoluta; sem CHAVE-PENDENTE nem disabled no botão após §6)
grep -n 'action=\|access_key\|name="redirect"\|CHAVE-PENDENTE\|type="submit"' index.html contato.html 2>/dev/null
```

Se houver navegador headless disponível (teste: `node -e "require('playwright')"`), rode também o verificador do kit
(dentro de `site/`, ou passe o caminho) e **olhe** as capturas em `../qa-screens/`:

```bash
# 13. Rolagem horizontal e erros de console em 320/375/768/1280 (esperado: só "ok"; capturas em ../qa-screens/)
node ../kit-sites/ferramentas/checar-site.js . --screens
```
(`checar-site.js` renderiza cada `*.html` com `reducedMotion: 'reduce'`, para os `.reveal` aparecerem na captura, e imprime
página, largura, `ROLAGEM HORIZONTAL` se `scrollWidth > clientWidth` e os erros de console.)

Checklist de revisão manual (abra os arquivos ou as screenshots):
- [ ] Ordem das seções igual à `ESPECIFICACAO §2`; textos iguais aos aprovados.
- [ ] Headings em ordem (h1 → h2 → h3); todo `section` com `aria-labelledby`.
- [ ] Contraste AA nos 4 pares (texto/fundo, muted/surface, botão, links) conforme a especificação.
- [ ] Menu mobile abre, fecha com Esc e ao clicar em link; FAQ abre e fecha; botão WhatsApp visível e com a mensagem.
- [ ] `privacidade.html` com dados reais e com/sem o trecho de analytics conforme o caso; link no rodapé e no formulário.
- [ ] `obrigado.html` e `404.html` com textos finais; `404.html` com a URL absoluta final.
- [ ] `site/README.md`: Mapa de seções completo, Integrações preenchidas, Convenções intactas.
- [ ] Aviso de cookies: aparece **só** se houver `<script type="text/plain" data-consent>`.

Corrija, rode de novo o que falhou e faça `git add -A && git commit -m "fix: QA interno"`.

## 2. QA pela pessoa (envie este checklist, adaptando o que não se aplica)

```
Antes de publicar, teste o site aberto em site/index.html:
1. Abra no celular (mande o arquivo para você mesmo ou use a prévia depois de publicado) e role até o fim.
2. Leia todos os textos: nomes, números, telefones, endereço, horários.
3. Clique no botão do WhatsApp: abre a conversa com a mensagem certa?
4. Clique em todos os links do menu e do rodapé.
5. Veja se as fotos são as certas e não estão cortadas de forma estranha.
Depois de publicado:
6. Envie o formulário de verdade e confira se o e-mail chegou (olhe o spam).
7. PageSpeed Insights (https://pagespeed.web.dev): cole a URL, aba "Celular": Performance, Acessibilidade e SEO ≥ 90.
8. WAVE (https://wave.webaim.org): cole a URL: 0 erros (alertas podem existir).
9. Prévia de compartilhamento (https://www.opengraph.xyz ou https://metatags.io): imagem e título aparecem?
10. Digite um endereço que não existe no seu site: a página 404 aparece?
Responda "ok" ou liste: "item — o que vi".
```

## 3. Correções e novo ciclo

Aplique as correções (formato `seção — problema — desejo`, como na Fase 4), rode de novo os comandos afetados e faça
commit `fix: <o que>`. Só avance quando a pessoa disser "ok" para os itens 1-5.

## 4. Publicar no GitHub Pages (caminho principal)

**Pré-requisitos:** conta no GitHub (grátis; a pessoa cria em https://github.com/signup com e-mail e senha) e a
ferramenta `gh` instalada no computador onde o Claude Code roda. Repositório **público** (no plano Free o Pages só
publica de repositório público; privado exige GitHub Pro/Team, e mesmo assim o site continua público na internet).
O repositório público expõe só o site (que é público de qualquer forma): os artefatos de planejamento ficam fora de `site/`.
Limites do Pages (brandos): site ≤ 1 GB, 100 GB de banda/mês, 10 builds/hora; proibido como loja virtual/SaaS.

Passos (a IA executa; a pessoa só faz o login quando pedido):

```bash
# 0. gh instalado?
gh --version
#    Se não: macOS → brew install gh · Windows → winget install --id GitHub.cli · Ubuntu/Debian → sudo apt install gh
#    (peça permissão à pessoa antes de instalar; alternativa sem gh: seção 4.1)

# 1. Login (abre o navegador; a pessoa escolhe GitHub.com → HTTPS → "Login with a web browser" e digita o código)
gh auth login
gh auth status

# 2. Dentro de site/: conferir que está tudo commitado
cd site && git status --short      # esperado: vazio

# 3. Criar o repositório público e enviar (nome: o do negócio em minúsculas com hífens, ex.: clinica-raiz;
#    para URL sem subpasta, chame o repositório de USUARIO.github.io — só 1 por conta)
gh repo create NOME-DO-REPO --public --source=. --remote=origin --push

# 4. Ativar o GitHub Pages (branch main, pasta raiz; index.html em minúsculas na raiz, senão 404)
gh api -X POST repos/USUARIO/NOME-DO-REPO/pages --input - <<'JSON'
{ "build_type": "legacy", "source": { "branch": "main", "path": "/" } }
JSON
#    Se der erro "already exists", o Pages já está ativo. Se der 404/403, use o caminho pelo navegador:
#    github.com/USUARIO/NOME-DO-REPO → Settings → Pages → Build and deployment → Source: Deploy from a branch →
#    Branch: main / (root) → Save.

# 5. Esperar (até 10 minutos; em geral 1-3) e pegar a URL
gh api repos/USUARIO/NOME-DO-REPO/pages --jq '.html_url'
gh api repos/USUARIO/NOME-DO-REPO/pages/builds/latest --jq '.status'   # esperado: built
```

Abra a URL. Se ela for diferente da URL prevista na especificação (ex.: nome do repositório mudou), atualize
`canonical`, `og:url`, `og:image`, `redirect` do formulário, `sitemap.xml`, `robots.txt` e o link do `404.html`, e faça
`git add -A && git commit -m "docs: URL final" && git push`. Lembre: o site fica em `https://USUARIO.github.io/NOME-DO-REPO/`
(com a barra no fim); por isso todos os caminhos são relativos.

Problemas comuns: página em branco → espere o build terminar (`builds/latest`); CSS não carrega → caminho absoluto
em algum `href`; mudança não aparece → espere até 10 minutos e recarregue em janela anônima ou com Ctrl+Shift+R; passou
de 1 hora → `gh run list` / `gh run view --log` (workflow "pages build and deployment") e https://www.githubstatus.com;
arquivos começando com `_` sumiram → confirme que `.nojekyll` está no repositório.

### 4.1 Sem `gh` (pelo navegador)
1. https://github.com/new → Repository name: `nome-do-repo` → Public → Create repository.
2. Na página do repositório: "uploading an existing file" → arraste **o conteúdo** da pasta `site/` (arquivos e a pasta
   `assets/`; se o explorador esconder `.nojekyll`, ative "mostrar arquivos ocultos" ou suba sem ele quando não houver
   arquivos começando com `_`) → "Commit changes".
3. Settings → Pages → Source: Deploy from a branch → Branch `main` / `(root)` → Save. A URL aparece na mesma tela.
4. Para atualizar depois: repita o upload (os arquivos são substituídos) ou instale o `gh` e conecte a pasta
   (`git remote add origin https://github.com/USUARIO/NOME.git && git push -u origin main`).

## 5. Domínio próprio (opcional; `.com.br` no Registro.br)

1. **Registrar:** https://registro.br → "Registre seu domínio" → pesquisar `nomedonegocio.com.br` → criar conta com
   CPF ou CNPJ → pagar (anuidade na faixa de R$ 40 — verificar valor atual) → o domínio fica ativo em minutos/horas.
2. **No GitHub, antes do DNS** (evita sequestro do domínio): Settings → Pages →
   Custom domain → `www.nomedonegocio.com.br` → Save (isso cria o arquivo `CNAME` com uma linha; se a IA preferir, crie
   `site/CNAME` com o domínio, commit e push; nunca apague esse arquivo). Use o `www` como principal: com apex + www no
   DNS o Pages redireciona um para o outro. Verificação do domínio: Settings **da conta** (não do repositório) → Pages →
   "Add a domain" → criar o TXT `_github-pages-challenge-USUARIO` com o valor mostrado → Verify; mantenha o TXT.
3. **DNS no painel do Registro.br:** domínio → "Editar zona" (DNS do Registro.br) → apagar registros A/CNAME
   pré-existentes em `@` e `www` (página "em construção") → adicionar:
   - 4 registros **A** para o domínio raiz (`@` ou vazio): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 registro **CNAME** `www` → `USUARIO.github.io` (sem nome de repositório)
   Salvar. Propagação: de minutos até 24 h (conferir: `dig nomedonegocio.com.br +short`). Depois o GitHub
   emite o certificado (até 1 h) e libera **Enforce HTTPS** (até 24 h): marque. "Certificate not yet created" preso →
   Remove no domínio em Settings → Pages, digite de novo e Save. CAA, se existir, deve incluir `letsencrypt.org`.
4. **Atualizar o site:** `canonical`, `og:url`, `og:image`, `redirect` do formulário, `sitemap.xml`, `robots.txt`, `404.html`
   para `https://www.nomedonegocio.com.br/` (o domínio salvo no passo 2); commit `docs: domínio próprio`; push.
5. **Testar:** `https://nomedonegocio.com.br` e `https://www.nomedonegocio.com.br` abrem com cadeado.
Outros registradores (Cloudflare Registrar, Namecheap, Hostinger, HostGator) seguem o mesmo princípio: registros A e CNAME.
Cloudflare Registrar (`.com` a preço de custo) obriga a usar o DNS da Cloudflare: deixe os registros do GitHub em "DNS only"
(nuvem cinza), senão o proxy pode criar loop de redirecionamento com o Enforce HTTPS.

## 6. Formulário (Web3Forms, padrão do kit; detalhes em `GUIA-FRONTEND §9`)

1. A pessoa cria a chave: https://web3forms.com → "Create your Access Key" → digita o e-mail que vai receber as
   mensagens (o de Q37) → recebe a chave por e-mail → envia a chave para a IA. Plano gratuito: sem cadastro, limite
   mensal de envios (verificar o número atual no site; suficiente para um site institucional).
2. A IA insere a chave em `<input type="hidden" name="access_key" value="…">` (no lugar de `CHAVE-PENDENTE`), remove o
   `disabled` do botão de envio e o texto de status "Formulário será ativado na publicação." do `.form__status`, confere
   `action="https://api.web3forms.com/submit"` e o `redirect` com a URL absoluta de `obrigado.html`; commit
   `feat: formulário ativo`; push.
3. **Teste real:** a pessoa envia o formulário no site publicado e confirma o e-mail (olhar spam; marcar como "não é
   spam"). Se o e-mail não chegar em 5 minutos: conferir a chave, o e-mail cadastrado e o `name` dos campos.
4. Spam: o campo-armadilha `botcheck` já está no starter. Se começar a chegar spam, ative o hCaptcha do serviço ou o
   Cloudflare Turnstile (grátis; a pessoa cria o widget e envia a `sitekey`) — snippet em `GUIA-FRONTEND §9`.
Alternativa (se a pessoa já usa): Formspree (https://formspree.io; plano grátis com poucos envios/mês — verificar) com
`action="https://formspree.io/f/ID"`; ajustar os campos conforme `GUIA-FRONTEND §9`.

## 7. Analytics e Google (opcionais, só se Q40/Q41 pediram)

Regra de escolha: vai anunciar no Google/Meta → GA4 (+ pixel) com banner; não vai → Clarity (com banner) ou analytics sem
cookies e sem banner (Umami Cloud, Simple Analytics; snippets em `GUIA-FRONTEND §10.6`).
- **Microsoft Clarity** (grátis; mapas de calor e gravações): a pessoa cria o projeto em https://clarity.microsoft.com →
  Settings → Setup → copia o ID do projeto. A IA insere o snippet como `<script type="text/plain" data-consent>` antes de
  `</body>` (o `main.js` só ativa após "Aceitar"), confere que o `cookie-banner` está presente e que a
  `privacidade.html` usa o trecho "SE USAR ANALYTICS". Commit `feat: analytics com consentimento`.
- **Google Analytics 4** (grátis): a pessoa cria a propriedade em https://analytics.google.com → ID `G-XXXXXXX`. Mesmo
  mecanismo: o `<script src="https://www.googletagmanager.com/gtag/js?id=G-…">` e o bloco de configuração ficam
  ambos com `type="text/plain" data-consent`.
- **Google Search Console** (grátis; mostra buscas que levam ao site): https://search.google.com/search-console →
  Adicionar propriedade → "Prefixo do URL" com a URL final → verificar por "Tag HTML" (a IA cola a `<meta
  name="google-site-verification">` no `<head>`, commit, push) → Sitemaps → enviar `sitemap.xml`.
- **Google Business Profile** (negócios locais): https://business.google.com → no perfil, "Editar perfil" → "Site" →
  colar a URL. Também coloque a URL na bio do Instagram.

## 8. Fallbacks de hospedagem

- **Netlify Drop** (sem conta GitHub; precisa de conta Netlify grátis): https://app.netlify.com/drop → arrastar a pasta
  `site/` → o site sobe em `nome-aleatorio.netlify.app` → Site configuration → Change site name. Atualizações: arrastar
  de novo em Deploys. Formulário continua pelo Web3Forms (ou Netlify Forms: adicionar `data-netlify="true"` ao `<form>` e
  remover `action`/`access_key`; plano grátis com limite mensal de envios — verificar).
- **Cloudflare Pages** (grátis: 20.000 arquivos por site, 25 MiB por arquivo; upload por arrastar até 1.000 arquivos):
  https://dash.cloudflare.com → Workers & Pages → Create → Pages → "Upload assets" →
  arrastar `site/` → `nome.pages.dev`. Também aceita conexão com o repositório GitHub para publicar a cada push, mas
  decida na criação: projeto criado por upload não migra para Git depois. Domínio próprio: CNAME `www` → `nome.pages.dev`,
  criado depois de registrar o domínio em Custom domains; o domínio raiz exige DNS na Cloudflare.

## 9. Pós-lançamento (obrigatório)

1. Preencher `PUBLICACAO.md` (template `modelos/PUBLICACAO.md`): repositório, URL, domínio/DNS, formulário (teste feito),
   analytics, Search Console, resultado do QA, data, pendências.
2. `site/README.md`: seção 1 (URL publicada, repositório, data) e Histórico: `AAAA-MM-DD — Publicação inicial`.
3. Topo da `ESPECIFICACAO.md`: acrescentar a linha
   `> Documento de planejamento. A fonte da verdade do site atual é site/README.md.`
4. Commit `docs: publicação` e push.
5. Mensagem final para a pessoa (sem código):
   > Site publicado em [URL]. Formulário testado ✔ · WhatsApp ✔ · [domínio/analytics se houver].
   > Para mudar qualquer coisa depois, abra o projeto e envie: "Leia kit-sites/FASE-6-AJUSTES.md e site/README.md. Quero mudar: …".
   > Backup: tudo está versionado no GitHub.
6. Checklist mensal sugerido para a pessoa: enviar um formulário de teste; conferir se o WhatsApp abre; olhar o
   PageSpeed; atualizar números/depoimentos (Fase 6).

## 10. Links

- https://pages.github.com — documentação oficial do GitHub Pages (grátis).
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits — limites e usos permitidos do Pages (grátis).
- https://cli.github.com/manual — `gh`, a ferramenta de linha de comando do GitHub (grátis).
- https://www.githubstatus.com — status do GitHub; cheque "Pages" quando o deploy não sai (grátis).
- https://letsencrypt.org/docs/caa/ — registro CAA e HTTPS do Pages (grátis).
- https://developers.cloudflare.com/turnstile/ — Cloudflare Turnstile, antispam para o formulário (grátis).
- https://registro.br — registro de domínios `.br` (pago, anuidade).
- https://web3forms.com — formulários para sites estáticos (grátis com limite mensal — verificar).
- https://formspree.io — alternativa de formulário (freemium).
- https://app.netlify.com/drop — publicar arrastando a pasta (grátis).
- https://developers.cloudflare.com/pages/ — Cloudflare Pages, documentação e limites (grátis).
- https://pagespeed.web.dev — PageSpeed Insights (grátis).
- https://wave.webaim.org — avaliação de acessibilidade (grátis).
- https://www.opengraph.xyz e https://metatags.io — prévia de compartilhamento (grátis).
- https://clarity.microsoft.com — Microsoft Clarity (grátis).
- https://analytics.google.com — Google Analytics 4 (grátis).
- https://search.google.com/search-console — Google Search Console (grátis).
- https://business.google.com — Google Business Profile (grátis).
