const hamburger = document.getElementById('hamburger'),
close = document.getElementById('close'),
mobileMenu = document.getElementById('mobile-nav');

hamburger.addEventListener('click', (e) => {
   mobileMenu.classList.remove('d-none');
   hamburger.classList.add('d-none');
   close.classList.remove('d-none');
});

close.addEventListener('click', (e) => {
   mobileMenu.classList.add('d-none');
   hamburger.classList.remove('d-none');
   close.classList.add('d-none');
});