confetti = function() {
    // spawn confetti shapes that fall from the top of the screen to the bottom
    for (var i = 0; i < 220; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 4.5 + 5 + "s";
        confetti.style.animationDelay = Math.random() * 8 + "s";
        confetti.style.setProperty("--width", (Math.random()*10)+3+"px");
		confetti.style.setProperty("--left", (Math.random()*100)+"%");
        confetti.style.setProperty("--rotation", (Math.random()*360 + 180)+"deg");
        // choose a random christmas emoji
        choices = ["🎄","🎅"]
        confetti.textContent = choices[Math.floor(Math.random() * choices.length)];
        confetti.style.fontSize = (Math.random()*10 + 20)+"px";
        document.body.appendChild(confetti);

        // delete confetti when animation ends
        confetti.addEventListener("animationend", function() {
            this.remove();
        });
        
        
    }
}