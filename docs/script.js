document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('.contact-btn');
  const contactModal = document.querySelector('.contact-modal');
  const closeBtn = document.querySelector('.close-btn');

  contactBtn.addEventListener('click', () => {
    contactModal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    contactModal.classList.add('hidden');
  });

  // Optional: Close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.add('hidden');
    }
  });
});
