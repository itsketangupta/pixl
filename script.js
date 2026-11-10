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


const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq_question");

  question.addEventListener("click", () => {

    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});
