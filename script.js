const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const video = card.querySelector('.card video');
  
  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
  });
});
