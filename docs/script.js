document.addEventListener('DOMContentLoaded', function() {
  const contactModal = document.querySelector('.contact-modal');
  const closeBtn = document.querySelector('.close-btn');

  document.getElementById('sign-up').addEventListener('click', function() {
    contactModal.classList.remove('hidden');
  });

  document.getElementById('learn-more').addEventListener('click', function() {
    contactModal.classList.remove('hidden');
  });

  document.getElementById('test-ai').addEventListener('click', function() {
    contactModal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', function() {
    contactModal.classList.add('hidden');
  });

  window.addEventListener('click', function(event) {
    if (event.target === contactModal) {
      contactModal.classList.add('hidden');
    }
  });
});

