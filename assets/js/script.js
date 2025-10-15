let scorePlayer = 0;
let ScorePc = 0;
const powers = ["feu", "eau", "terre"];

function powerPc() {
    const randomIndex = Math.floor(Math.random() * powers.length);
    return powers[randomIndex];
}

function powerPlayer(choice){
    const pcChoice = powerPc();
    playGame(choice, pcChoice);
}