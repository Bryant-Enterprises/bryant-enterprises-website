const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (toggle && nav) {
  toggle.hidden = false;
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('open')) { close(); toggle.focus(); } });
  window.matchMedia('(min-width: 801px)').addEventListener('change', close);
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
document.querySelectorAll('#navigation a').forEach(link => { if (link.pathname === window.location.pathname) link.setAttribute('aria-current', 'page'); });
const form = document.querySelector('#inquiry');
if (form) {
  const service = form.elements.service;
  const requested = new URLSearchParams(window.location.search).get('service');
  if (Array.from(service.options).some(option => option.value === requested)) service.value = requested;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const subject = service.selectedOptions[0].text + ' inquiry';
    const body = 'Name: ' + form.elements.name.value.trim() + '\nCity / area: ' + form.elements.location.value.trim() + '\n\n' + form.elements.message.value.trim();
    window.location.href = 'mailto:aidan@bryantenterprises.us?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    document.querySelector('#form-status').textContent = 'Your email app was requested. Review and send the email there. If it did not open, email aidan@bryantenterprises.us directly. Your inquiry has not been submitted by this website.';
  });
}
