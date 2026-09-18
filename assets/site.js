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
  // Marrero identity moment — once per session, never blocks reduced-motion users.
  const introReduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const intro=document.getElementById('brandIntro');
  const introSkip=intro?.querySelector('.intro-skip');
  const introKey='marrero-intro-seen';
  const hideIntro=()=>{
    if(!intro || intro.hidden) return;
    intro.classList.add('is-leaving');
    setTimeout(()=>{ intro.hidden=true; intro.classList.remove('is-leaving'); },560);
    try{ sessionStorage.setItem(introKey,'1'); }catch{}
  };
  if(intro){
    let seen=false; try{ seen=sessionStorage.getItem(introKey)==='1'; }catch{}
    if(!seen && !introReduce){
      intro.hidden=false;
      introSkip?.focus();
      setTimeout(hideIntro,2300);
    }
    introSkip?.addEventListener('click',hideIntro);
    document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !intro.hidden) hideIntro(); });
  }

  // Marrero Compass — useful decision guidance, not eligibility or enrollment.
  const guideData={
    health:{title:'Health coverage',body:'Start with your household, timing and coverage needs. Marrero Group can help you understand individual and family coverage options.',href:'#contact',cta:'Start this conversation ↗'},
    medicare:{title:'Medicare',body:'Start with where you are in the Medicare timeline and what you want to understand. Marrero Group can walk through Advantage and supplement conversations.',href:'#medicare',cta:'Understand Medicare ↗'},
    life:{title:'Life insurance',body:'Start with who and what you want to protect. Marrero Group can discuss life insurance approaches around your goals.',href:'#retirement',cta:'Explore protection ↗'},
    retirement:{title:'Retirement planning',body:'Start with the future you are planning for. Marrero Group can discuss long-term protection and retirement conversations.',href:'#retirement',cta:'Plan what comes next ↗'},
    career:{title:'Agent opportunity',body:'Start with the kind of career opportunity you are looking for. Explore Marrero Group’s licensed and non-licensed agent path.',href:'https://www.marrerogroupllc.com/become-an-agent',cta:'Explore agent opportunities ↗',external:true},
    community:{title:'Community impact',body:'Start with how you want to participate. Explore Marrero Group’s nonprofit work and Sir Kendrick’s Smile for Autism.',href:'#community',cta:'Explore community ↗'}
  };
  const result=document.getElementById('guideResult');
  document.querySelectorAll('[data-guide]').forEach(button=>{
    button.addEventListener('click',()=>{
      document.querySelectorAll('[data-guide]').forEach(b=>b.classList.remove('is-active'));
      button.classList.add('is-active');
      const data=guideData[button.dataset.guide];
      if(!data || !result) return;
      result.innerHTML='<div><span class="decision-result-kicker">Recommended next conversation</span><h3>'+data.title+'</h3><p>'+data.body+'</p></div><a class="button button-metal" href="'+data.href+'"'+(data.external?' target="_blank" rel="noopener"':'')+'>'+data.cta+'</a>';
    });
  });
