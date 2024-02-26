document.getElementById('welcomeText').addEventListener('click', function() {
    document.querySelector('.container').style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 500); // Adjust timing as needed
});

// Reset the opacity when the page is shown, e.g., navigating back
window.onpageshow = function(event) {
    // Check if the page was accessed via the back button
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        // Reset the container's opacity
        document.querySelector('.container').style.opacity = '1';
    }
};
