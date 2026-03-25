// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Highlight active page in nav
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
