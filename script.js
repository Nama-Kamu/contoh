// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// WhatsApp contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const phone = '6281234567890'; // Ganti dengan nomor WhatsApp tujuan
  const text = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank');
});
