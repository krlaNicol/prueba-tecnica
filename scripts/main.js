// Funcionalidad de scroll suave
document.addEventListener('DOMContentLoaded', () => {
    // Scroll para los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir comportamiento predeterminado
  
        const targetId = link.getAttribute('href').substring(1); // ID objetivo
        const targetElement = document.getElementById(targetId); // Elemento objetivo
  
        // Realizar scroll suave
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Scroll para el botón "Subir al Inicio"
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
      scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0, // Ir al inicio de la página
          behavior: 'smooth'
        });
      });
    }
  });
  