
let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");
let teamAScore = 0;
let teamBScore = 0;

function addTeamA1() {
    teamAScore += 1;
    home.textContent = teamAScore;
}

function addTeamA2() {
    teamAScore += 2;
    home.textContent = teamAScore;
}

function addTeamA3() {
    teamAScore += 3;
    home.textContent = teamAScore;
}

function addTeamB1() {
    teamBScore += 1;
    guest.textContent = teamBScore;
}

function addTeamB2() {
    teamBScore += 2;
    guest.textContent = teamBScore;
}

function addTeamB3() {
    teamBScore += 3;
    guest.textContent = teamBScore;
}

function resetScores() {
    teamAScore = 0;
    teamBScore = 0;
    home.textContent = teamAScore;
    guest.textContent = teamBScore;
}