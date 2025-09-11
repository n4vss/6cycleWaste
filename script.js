// Small interactivity: keyboard focus for nav and a tiny search filter
document.addEventListener('DOMContentLoaded',()=>{
  const search = document.querySelector('.search input');
  const navItems = Array.from(document.querySelectorAll('.nav-item'));

  search.addEventListener('input',(e)=>{
    const q = e.target.value.toLowerCase();
    navItems.forEach(a=>{
      a.style.display = a.textContent.toLowerCase().includes(q)?'block':'none';
    })
  });

  // Make nav keyboard friendly
  navItems.forEach(a=>{
    a.setAttribute('tabindex','0');
    a.addEventListener('keydown',(ev)=>{
      if(ev.key === 'Enter' || ev.key === ' '){
        ev.preventDefault();
        a.click();
      }
    });
  });

  // profile avatar placeholder (colored gradient)
  const profileAvatar = document.getElementById('profileAvatar');
  if(profileAvatar){
    profileAvatar.style.background = 'linear-gradient(135deg,#b583a5,#5c3a75)';
  }

  // Simple handler for Trade buttons; replace with a modal or real flow later
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-trade');
    if (!btn) return;
    const card = btn.closest('.card');
    const title = card ? card.querySelector('.title')?.textContent : 'item';
    alert(`You clicked Trade! on: ${title}`);
  });
});
