const navLinks = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href === 'index.html' && currentPath === '')) {
    link.classList.add('active');
  }
});
