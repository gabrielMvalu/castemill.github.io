document.getElementById('welcomeText').addEventListener('click', function() {
    document.querySelector('.container').style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 500); // Adjust timing as needed
});

