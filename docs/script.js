document.getElementById('welcomeText').addEventListener('click', function() {
    document.getElementById('mainContent').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('mainContent').style.opacity = 1;
    }, 100); // Timeout ensures the transition is triggered after the element becomes visible
});
