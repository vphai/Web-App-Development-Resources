// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
  });
  
  // Smooth scroll for all nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
      document.querySelector('nav ul').classList.remove('show');
    });
  });
  