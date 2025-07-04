const n=(s,o)=>{const e=document.querySelector(s),r=new IntersectionObserver(c=>{c.forEach(t=>{t.isIntersecting&&(o(),r.unobserve(t.target))})});e&&r.observe(e)};export{n as c};
