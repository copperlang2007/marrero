const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const menu=document.querySelector('.mobile-menu'),openBtn=document.querySelector('.mobile-toggle'),closeBtn=document.querySelector('.mobile-close');
function setMenu(open){menu.classList.toggle('open',open);menu.setAttribute('aria-hidden',String(!open));openBtn?.setAttribute('aria-expanded',String(open));document.body.classList.toggle('nav-open',open);if(open)closeBtn?.focus();else openBtn?.focus()}
openBtn?.setAttribute('aria-expanded','false');openBtn?.addEventListener('click',()=>setMenu(true));closeBtn?.addEventListener('click',()=>setMenu(false));menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open'))setMenu(false)});
document.querySelectorAll('.acc-btn').forEach((btn,i)=>{const item=btn.closest('.acc-item');const content=item?.querySelector('.acc-content');const btnId=`accordion-button-${i+1}`;const panelId=`accordion-panel-${i+1}`;btn.id=btnId;btn.setAttribute('aria-controls',panelId);if(content){content.id=panelId;content.setAttribute('role','region');content.setAttribute('aria-labelledby',btnId)}btn.addEventListener('click',()=>{const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))})});
document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const q=id=>document.getElementById(id).value.trim();const subject=encodeURIComponent('Website inquiry — '+q('interest'));const body=encodeURIComponent('Name: '+q('first')+' '+q('last')+'\nEmail: '+q('email')+'\nPhone: '+q('phone')+'\nInterest: '+q('interest')+'\n\nMessage:\n'+q('message'));location.href='mailto:info@marrerogroupllc.com?subject='+subject+'&body='+body});
if(!reduce){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const fine=matchMedia('(pointer:fine)').matches;
  if(fine){
    const hero=document.querySelector('.hero'),visual=document.querySelector('.hero-visual'),panel=document.querySelector('.hero-panel');
    hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;if(visual)visual.style.transform='translate3d('+(x*9)+'px,'+(y*6)+'px,0)';if(panel)panel.style.transform='translate3d('+(x*-7)+'px,'+(y*-5)+'px,24px)'});
    hero?.addEventListener('pointerleave',()=>{if(visual)visual.style.transform='';if(panel)panel.style.transform=''});
    document.querySelectorAll('.service-card,.path-card,.testimonial').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.setProperty('--rx',(y*-2.6)+'deg');card.style.setProperty('--ry',(x*3.4)+'deg')});card.addEventListener('pointerleave',()=>{card.style.removeProperty('--rx');card.style.removeProperty('--ry')})});
  }
}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
