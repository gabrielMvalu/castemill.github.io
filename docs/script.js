document.getElementById('welcomeText').addEventListener('click', function() {
    document.querySelector('.container').style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 500);
});

window.onpageshow = function(event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        document.querySelector('.container').style.opacity = '1';
    }
};

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const height = card.clientHeight;
  const width = card.clientWidth;

  card.addEventListener("mouseenter", (evt) => {
    card.addEventListener("mousemove", (evt) => {
      requestAnimationFrame(() => {
        const xRotation = -30 * ((evt.layerY - height / 2) / height);
        const yRotation = 20 * ((evt.layerX - width / 2) / width);
        card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });
    });
  });

  card.addEventListener("mouseout", (evt) => {
    card.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
    card.removeEventListener("mousemove", mouseMoveHandler);
  });
  
  card.addEventListener("click", (evt) => {
    card.style.animation = "spin 1s ease-in-out";
    setTimeout(() => {      
      card.style.animation = '';
    }, 1000);
  });
});
