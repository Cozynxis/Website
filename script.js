const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const copyButton = document.querySelector('#copy-ip');
const serverAddress = document.querySelector('#server-address');
const copyFeedback = document.querySelector('#copy-feedback');

copyButton?.addEventListener('click', async () => {
  const address = serverAddress.textContent.trim();
  if (address === 'play.jouwserver.nl') {
    copyFeedback.textContent = 'Stel eerst het echte serveradres in via index.html.';
    return;
  }
  try {
    await navigator.clipboard.writeText(address);
    copyButton.innerHTML = 'Gekopieerd! <span>✓</span>';
    copyFeedback.textContent = 'Serveradres gekopieerd. Tijd om Minecraft te starten!';
    window.setTimeout(() => {
      copyButton.innerHTML = 'Kopieer IP <span>▣</span>';
    }, 1800);
  } catch {
    copyFeedback.textContent = 'Kopiëren lukte niet. Selecteer het serveradres en kopieer het handmatig.';
  }
});