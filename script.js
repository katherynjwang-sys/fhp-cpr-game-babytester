let compressions = 0;

const person = document.getElementById("person");
const count = document.getElementById("count");
const message = document.getElementById("message");
const reset = document.getElementById("reset");

person.addEventListener("click", function() {

    compressions++;

    count.textContent = compressions;

    if (compressions === 1) {
        message.textContent = "Good start!";
    }

    if (compressions === 10) {
        message.textContent = "Keep going!";
    }

    if (compressions === 30) {
        message.textContent = "30 compressions!";
    }

    if (compressions === 60) {
        message.textContent = "Great job!";
    }
});

reset.addEventListener("click", function() {

    compressions = 0;

    count.textContent = compressions;

    message.textContent = "Start compressions!";
});
