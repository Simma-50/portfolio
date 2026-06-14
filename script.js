// ── Smooth scroll, no page reload ──
document.querySelectorAll('a[data-t]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const el=document.getElementById(a.dataset.t);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// ── Active nav highlight ──
const secs=['home','skills','projects','contact'];
const navAs=document.querySelectorAll('.nav-links a');
function setActive(){
  let cur='home';
  secs.forEach(id=>{
    const el=document.getElementById(id);
    if(el && window.scrollY>=el.offsetTop-90) cur=id;
  });
  navAs.forEach(a=>a.classList.toggle('active',a.dataset.t===cur));
}
window.addEventListener('scroll',setActive,{passive:true});
setActive();

// ── Typing ──
const phrases=['$ nmap -sV target','$ python3 webenumpy.py','$ wireshark -i eth0','$ burpsuite --launch','$ cat forensics.log'];
let pi=0,ci=0,del=false;
const tel=document.getElementById('typed');
function type(){
  const p=phrases[pi];
  if(!del){tel.textContent=p.slice(0,++ci);if(ci===p.length){del=true;setTimeout(type,1800);return;}}
  else    {tel.textContent=p.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(type,del?42:78);
}
type();

// ── Fade in on scroll ──
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});
},{threshold:.08});
document.querySelectorAll('.fade-in,.fade-left,.fade-right').forEach(el=>obs.observe(el));

// ── Form ──
function handleForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('.form-btn');
  btn.textContent='✓ SENT!';
  btn.style.background='linear-gradient(135deg,#4a9468,#3a7858)';
  setTimeout(()=>{btn.textContent='SEND MESSAGE →';btn.style.background='';},3000);
}