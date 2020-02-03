class ShowState{
    constructor(scoreElement, lifeCntElement, lifeCntVal, scoreText) {
        this.scoreElement=scoreElement;
        this.scoreVal = 0;// Elkapott tojások száma,
        this.lifeCntVal = lifeCntVal; // életek száma
        this.scoreText= scoreText;
        this.lifeCntElement = lifeCntElement; // ebben az elemben jelenik meg
        this.UpdateLifeCnt(); // az életek száma. Ennek frissítésével kezdünk.
    }
    IncreaseScoresCnt() {    // A gyűjtött tojások számának növelése
        this.scoreVal++;
        this.UpdateScore();
    }
    UpdateScore() { //A gyűjtött tojások megjelenített számának frissítése.
        console.log(this.scoreVal);
        this.scoreElement.innerText = this.scoreVal + this.scoreText;
    }
    DecraseLifes() {   // Megmaradt életek számának csökkentése
            this.lifeCntVal--;
            this.UpdateLifeCnt();
            if (this.IsGameOver()) {
                document.getElementById('message').style.display='block';
            }
    }
    UpdateLifeCnt() { // Megmaradt életek számának megjelenített számának frissítése.
            this.lifeCntElement.innerText = this.lifeCntVal;
    }
    IsGameOver() {    // játék végének tesztelése
            return this.lifeCntVal <= 0;
    }
}