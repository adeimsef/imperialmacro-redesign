// Imperial Macro — vanilla JS, no build step (GitHub Pages ready)
(function(){
  const nav=document.getElementById('nav');
  const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>24);
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  const burger=document.getElementById('burger'), menu=document.getElementById('mobileMenu');
  if(burger&&menu){
    burger.addEventListener('click',()=>{const open=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(open));});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  }

  // Reveal on scroll
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ const d=e.target.getAttribute('data-delay'); if(d) e.target.style.transitionDelay=d+'ms'; e.target.classList.add('in'); io.unobserve(e.target);} });
    },{threshold:.12});
    els.forEach(el=>io.observe(el));
  } else { els.forEach(el=>el.classList.add('in')); }

  // Duplicate marquee content for seamless loop
  const track=document.getElementById('marqueeTrack');
  if(track) track.innerHTML+=track.innerHTML;

  // Subtle tilt on hero dashboard (desktop, fine pointer only)
  const card=document.getElementById('tiltCard');
  if(card && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='';});
  }

  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
})();
