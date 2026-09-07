const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.addEventListener('click', (event) => {
	if (event.target.closest('a')) {
		siteNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	}
});

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	formMessage.textContent = 'Thanks! I will be in touch soon.';
	contactForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
