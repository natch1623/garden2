document.addEventListener('DOMContentLoaded', () => {
  // elimina clase container al cargar (si la tienes)
  if (document.body.classList.contains('container')) {
    document.body.classList.remove('container');
  }

const numStars = 120;
const sky = document.querySelector('.sky');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Tamaño aleatorio entre 1px y 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Posición inicial
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Duración del parpadeo (1.5s - 4s)
    const duration = Math.random() * 2.5 + 1.5;
    star.style.animationDuration = `${duration}s`;

    // Cada vez que termina su animación, se mueve a otra parte
    star.addEventListener('animationiteration', () => {
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
    });

    sky.appendChild(star);
} 
});
