function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        if (value === 6) {
            images.push(`<img src="Dice Images/${value}.jpg">`);
        } else {
            images.push(`<img src="Dice Images/${value}.png">`);
        }
    }

    // Play dice rolling sound effect
    const diceRollSound = new Audio('sounds/dice-roll.mp3');
    diceRollSound.play();

    // Display results and animate dice images
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    // Animate dice images 
    diceImages.classList.remove('roll-animation');
    void diceImages.offsetWidth; // Trigger reflow to restart animation
    diceImages.classList.add('roll-animation');
}
