gsap.from('main', { opacity: 0, x: 40, ease: 'power2.out' });

document.querySelectorAll('a').forEach(a =>
  
  a.addEventListener('click', e => {
 
    e.preventDefault();
    
    gsap.to('main', { opacity: 0, y: -40, ease: 'power2.in', onComplete: () => location.assign(a.href) });
 
  })
);
