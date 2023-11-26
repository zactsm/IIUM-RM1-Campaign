const scrollToFormButton = document.getElementById('scrollToForm');
const scrollToContactButton = document.getElementById('scrollToContact');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('.contact-info');

function scrollToSection(section) {
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}

scrollToFormButton.addEventListener('click', function () {
  scrollToSection(formSection);
});

scrollToContactButton.addEventListener('click', function () {
  scrollToSection(contactSection);
});
