(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');

  function setMenu(open){
    if(!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    body.classList.toggle('menu-open', open);
    if(open) menu.querySelector('a')?.focus();
    else toggle.focus();
  }
  toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
  document.addEventListener('keydown',e=>{ if(e.key==='Escape' && toggle?.getAttribute('aria-expanded')==='true') setMenu(false); });
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

  document.querySelectorAll('.accordion-item').forEach((item,index)=>{
    const button=item.querySelector('.accordion-button');
    const panel=item.querySelector('.accordion-panel');
    if(!button || !panel) return;
    const buttonId='accordion-button-'+(index+1);
    const panelId='accordion-panel-'+(index+1);
    button.id=buttonId; panel.id=panelId;
    button.setAttribute('aria-controls',panelId);
    panel.setAttribute('role','region');
    panel.setAttribute('aria-labelledby',buttonId);
    button.addEventListener('click',()=>{
      const open=item.classList.toggle('open');
      button.setAttribute('aria-expanded',String(open));
    });
  });

  document.getElementById('quoteForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const value=id=>document.getElementById(id)?.value.trim()||'';
    const subject=encodeURIComponent('Website inquiry — '+value('interest'));
    const bodyText=encodeURIComponent(
      'Name: '+value('first')+' '+value('last')+
      '\nEmail: '+value('email')+
      '\nPhone: '+value('phone')+
      '\nInterest: '+value('interest')+
      '\n\nMessage:\n'+value('message')
    );
    location.href='mailto:info@marrerogroupllc.com?subject='+subject+'&body='+bodyText;
  });

  if(reduce){
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
    return;
  }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },{threshold:.08,rootMargin:'0px 0px -4% 0px'});
  document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));

  if(!fine) return;

  const stage=document.querySelector('[data-parallax-stage]');
  const media=document.querySelector('[data-parallax-media] img');
  const seal=document.querySelector('[data-parallax-seal]');
  stage?.addEventListener('pointermove',e=>{
    const r=stage.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    if(media) media.style.transform='scale(1.018) translate3d('+(x*5)+'px,'+(y*4)+'px,0)';
    if(seal) seal.style.transform='translate3d('+(x*-7)+'px,'+(y*-6)+'px,0)';
  });
  stage?.addEventListener('pointerleave',()=>{
    if(media) media.style.transform='';
    if(seal) seal.style.transform='';
  });

  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      card.style.setProperty('--rx',(y*-1.6)+'deg');
      card.style.setProperty('--ry',(x*2.1)+'deg');
    });
    card.addEventListener('pointerleave',()=>{
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
    });
  });
})();