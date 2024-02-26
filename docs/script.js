document.getElementById('welcomeText').addEventListener('click', function() {
    // Animate the fade-out of the container
    document.querySelector('.container').style.opacity = '0';
    setTimeout(function() {
        // Redirect to home.html after the fade-out
        window.location.href = 'home.html';
    }, 500); // Adjust timing as needed
});

