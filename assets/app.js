
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('vis');obs.unobserve(x.target)}})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(e=>obs.observe(e));
const nav=document.querySelector('nav');
window.addEventListener('scroll',()=>nav&&nav.classList.toggle('scrolled',scrollY>60));
document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.nav-links')?.classList.toggle('open'));
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{q.classList.toggle('active');q.nextElementSibling.classList.toggle('open')}));
const cObs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){const t=x.target,n=parseFloat(t.dataset.t),p=t.dataset.p||'',s=t.dataset.s||'',d=1600,st=performance.now(),step=now=>{const pr=Math.min((now-st)/d,1),ea=1-Math.pow(1-pr,4),c=n%1!==0?(ea*n).toFixed(1):Math.floor(ea*n);t.textContent=p+c+s;if(pr<1)requestAnimationFrame(step)};requestAnimationFrame(step);cObs.unobserve(t)}})},{threshold:.5});
document.querySelectorAll('[data-t]').forEach(e=>cObs.observe(e));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('.nav-links')?.classList.remove('open')}}));
