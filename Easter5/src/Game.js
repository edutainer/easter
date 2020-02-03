class Game {
    constructor(elementID) {
        this.element = document.getElementById(elementID); //a pálya HTML eleme
        this.hat = new Hat(this, 'hat'); // kalap létrehozása
/*        this.showState = new ShowState(this.hat.element, // A new Hat után kell.
            document.getElementById('lifeCnt'),// életek száma itt jelenik meg
            5, // életek száma
            " eggs"); // a score után álló szöveg
*/
        this.CreateEggs();        // tojások létrehozása és indítása
    }
    CreateEggs() {   // tojások generálása
        new egg(this, 'egg');
/*        setTimeout(() => {  
            if (!this.showState.IsGameOver()) {// ameddig nincs vége a játéknak,
                this.CreateEggs();// rendszeres időközönként, újakat indítunk.
            }
        }, 1400);*/
    }

}
