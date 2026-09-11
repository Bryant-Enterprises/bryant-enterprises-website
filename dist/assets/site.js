'use strict';
const inboxes = Object.freeze({
  'lawn-care': 'lawncare@bryantenterprises.us',
  'tech-repair': 'tech@bryantenterprises.us',
  general: 'aidan@bryantenterprises.us'
});
function createInquiry(service, name, location, message) {
  const inbox = inboxes[service] || inboxes.general;
  const labels = {'lawn-care':'Bryant Lawn Care','tech-repair':'Bryant Tech Repairs',general:'Bryant Enterprises'};
  const subject = (labels[service] || labels.general) + ' inquiry';
  const body = 'Name: ' + name.trim() + '\nCity / area: ' + location.trim() + '\n\n' + message.trim();
  return 'mailto:' + inbox + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
const toggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#navigation');
if (toggle && nav) {
  toggle.hidden = false;
  const closeMenu = () => {toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');};
  toggle.addEventListener('click', () => {const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.addEventListener('click', event => {if(event.target.closest('a'))closeMenu();});
  document.addEventListener('keydown', event => {if(event.key==='Escape' && nav.classList.contains('open')){closeMenu();toggle.focus();}});
  window.matchMedia('(min-width: 761px)').addEventListener('change',closeMenu);
}
document.querySelectorAll('[data-year]').forEach(el => {el.textContent = new Date().getFullYear();});
const form = document.querySelector('#inquiry');
if(form){
  const select = form.elements.service;
  const requested = new URLSearchParams(window.location.search).get('service');
  if(Object.hasOwn(inboxes,requested))select.value=requested;
  const recipient = document.querySelector('#recipient');
  const updateRecipient = () => {const inbox=inboxes[select.value] || inboxes.general;recipient.textContent=inbox;recipient.href='mailto:'+inbox;document.querySelector('#form-status').textContent='';};
  updateRecipient();select.addEventListener('change',updateRecipient);
  form.addEventListener('submit',event => {
    event.preventDefault();if(!form.reportValidity())return;
    window.location.href=createInquiry(select.value,form.elements.name.value,form.elements.location.value,form.elements.message.value);
    document.querySelector('#form-status').textContent='Your email app was requested. Review and send the message there. This website has not sent your inquiry. If no app opened, use the email address shown above.';
  });
}
