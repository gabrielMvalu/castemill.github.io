document.getElementById('welcomeText').addEventListener('click', function() {
    // Hide the welcome text and logo
    document.querySelector('.container').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('mainContent').classList.remove('hidden');
        // Animate each card to scale up from 0 to 1
        document.querySelectorAll('.card').forEach(function(card, index) {
            setTimeout(function() { // Delay the animation for each card
                card.style.transform = 'scale(1)';
            }, index * 100); // Incremental delay for each card
        });
    }, 300); // Delay to allow the welcome text and logo to fade out
});

