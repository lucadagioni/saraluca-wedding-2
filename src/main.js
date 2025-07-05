import './index.css' 

// Intersection Observer per le animazioni di fade-in
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-fade-in-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Opzionale: rimuovere l'observer dopo che l'animazione è stata attivata
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // L'animazione si attiva quando almeno il 10% dell'elemento è visibile
    rootMargin: '0px 0px -50px 0px' // L'animazione si attiva un po' prima che l'elemento entri completamente nel viewport
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}); 