document.getElementById('noButton').onmouseover = function(event) {
    event.preventDefault(); // Prevent any default button actions
    moveButton();
};

document.getElementById('yesButton').onclick = function() {
    window.location.href = "yes.html";
};

function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth - 100);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight- 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`; /* Adjust for scrolling */
    noButton.style.position = 'absolute'; /* Ensure button can move freely */
}