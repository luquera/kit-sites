/* main.js — comportamentos do site (starter do kit-sites). Sem dependências.
   O que faz e em que elementos se apoia:
   1. Marca <html class="js"> para liberar as animações .reveal (CSS só anima com JS ativo).
   2. Menu mobile: botão [data-nav-toggle] abre/fecha #menu (.nav.is-open), atualiza aria-expanded,
      fecha ao clicar em um link, ao apertar Esc e ao redimensionar para desktop.
   3. Cabeçalho [data-header] recebe .is-scrolled após rolar 8px (borda e sombra).
   4. Animação de entrada: elementos .reveal ganham .is-visible ao entrar na tela (IntersectionObserver).
      Respeita prefers-reduced-motion.
   5. Ano atual em [data-year].
   6. Formulário [data-form]: desabilita o botão ao enviar e mostra "Enviando..." em [data-form-status].
   7. Cookies: [data-cookie-banner] só aparece se existir <script type="text/plain" data-consent>;
      "Aceitar" ativa esses scripts e guarda a escolha em localStorage ("cookie-consent").
*/
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 2. Menu mobile
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = toggle ? document.getElementById(toggle.getAttribute('aria-controls')) : null;

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    var label = toggle.querySelector('.visually-hidden');
    if (label) label.textContent = open ? 'Fechar menu' : 'Abrir menu';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 64rem)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  // 3. Sombra do cabeçalho ao rolar
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 4. Animação de entrada
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
      reveals.forEach(function (el) { observer.observe(el); });
    }
  }

  // 5. Ano atual
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // 6. Estado de envio do formulário (o envio em si é o POST normal do HTML)
  document.querySelectorAll('[data-form]').forEach(function (form) {
    form.addEventListener('submit', function () {
      var button = form.querySelector('[type="submit"]');
      var status = form.querySelector('[data-form-status]');
      if (button) { button.disabled = true; button.textContent = 'Enviando...'; }
      if (status) status.textContent = 'Enviando sua mensagem...';
    });
  });

  // 7. Aviso de cookies e scripts condicionados ao consentimento
  var banner = document.querySelector('[data-cookie-banner]');
  var consentScripts = document.querySelectorAll('script[type="text/plain"][data-consent]');

  function activateConsentScripts() {
    consentScripts.forEach(function (tpl) {
      var s = document.createElement('script');
      if (tpl.src) s.src = tpl.src;
      if (tpl.hasAttribute('async')) s.async = true;
      s.textContent = tpl.textContent;
      tpl.replaceWith(s);
    });
  }

  function readConsent() {
    try { return localStorage.getItem('cookie-consent'); } catch (e) { return null; }
  }

  function saveConsent(value) {
    try { localStorage.setItem('cookie-consent', value); } catch (e) { /* armazenamento indisponível */ }
  }

  if (banner) {
    if (!consentScripts.length) {
      banner.remove();
    } else {
      var consent = readConsent();
      if (consent === 'accepted') {
        activateConsentScripts();
        banner.remove();
      } else if (consent === 'rejected') {
        banner.remove();
      } else {
        banner.hidden = false;
        var accept = banner.querySelector('[data-cookie-accept]');
        var reject = banner.querySelector('[data-cookie-reject]');
        if (accept) accept.addEventListener('click', function () {
          saveConsent('accepted');
          activateConsentScripts();
          banner.remove();
        });
        if (reject) reject.addEventListener('click', function () {
          saveConsent('rejected');
          banner.remove();
        });
      }
    }
  }
})();
