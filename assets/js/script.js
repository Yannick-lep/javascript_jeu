let scorePlayer = 0;
let scorePc = 0;

const powers = ["feu", "eau", "terre"];

function powerPc() {
    const randomIndex = Math.floor(Math.random() * powers.length);
    console.log("Index aléatoire:", randomIndex);


    const choice = powers[randomIndex];
    console.log("Choix PC généré:", choice)
    return choice;
}

function powerPlayer(playerChoice) {
    console.log("Choix joueur:", playerChoice);
    const pcChoice = powerPc();
    playGame(playerChoice, pcChoice);
}

function playGame(playerChoice, pcChoice) {
    console.log("Début de playGame - Player:", playerChoice, "PC:", pcChoice);
    let resultMessage = "";

    if (playerChoice === pcChoice) {
        console.log("Egalité détectée");
        resultMessage = "Egalité !";
    } else if (
        (playerChoice === "feu" && pcChoice === "terre") ||
        (playerChoice === "eau" && pcChoice === "feu") ||
        (playerChoice === "terre" && pcChoice === "eau")
    ) {
        //console.log("joueur gagne !");
        resultMessage = "Tu gagnes ! Yeah!!!"
        scorePlayer++;
        console.log("Score joueur incrémenté:", scorePlayer);
    } else { 
        console.log("PC gagne !");
        resultMessage = "l'ordinateur gagne, la loose !!!";
        scorePc++;
    }

    console.log("score actuels - joueur:", scorePlayer, "PC:", scorePc);
    // afficher les résultats
    document.getElementById("player-choice").textContent = `Ton choix: ${playerChoice}`;
    document.getElementById("pc-choice").textContent = `Choix de l'ordinateur : ${pcChoice}`;
    document.getElementById("message").textContent = resultMessage;
    document.getElementById("score").textContent = `Score : Joueur ${scorePlayer} - ${scorePc} Ordinateur`;

    //Limite de partie : premier à 10 points
    if (scorePlayer === 10 || scorePc === 10) {
        console.log("Fin de Partie!");
        document.getElementById("message").textContent += "Partie terminer !";
        disableButton();
    }
}

//Désactiver les boutons 
function disableButton() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

//Ajout des écouteurs d'évènements
console.log("Ecouteurs d'événements ajoutés");
document.getElementById("feu").addEventListener("click", () => powerPlayer("feu"));
document.getElementById("eau").addEventListener("click", () => powerPlayer("eau"));
document.getElementById("terre").addEventListener("click", () => powerPlayer("terre"));

