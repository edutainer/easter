class Game {
    constructor(elementID) {
        this.element = document.getElementById(elementID); //a pálya HTML eleme
        this.hat = new Hat(this, 'hat'); // kalap létrehozása
        this.showState = new ShowState(this.hat.element, // A new Hat után kell.
            document.getElementById('lifeCnt'),// életek száma itt jelenik meg
            5, // életek száma
            " eggs"); // a score után álló szöveg
        // feliratkozások a tojások megfelelő pozícióiban kiváltott két "eseménysorra":
        window.addEventListener('egg/PotentialCollisionEventType', event => {
            this.ifCollisionThen(event);
        });
        window.addEventListener('egg/TouchingOfWallEventType', event => {
            this.touchingOfWall(event);
        });
        this.CreateEggs();        // tojások létrehozása és indítása
    }
    CreateEggs() {   // tojások generálása
        new egg(this, 'egg');
        setTimeout(() => {  
            if (!this.showState.IsGameOver()) {// ameddig nincs vége a játéknak,
                this.CreateEggs();// rendszeres időközönként, újakat indítunk.
            }
        }, 1400);
    }
    ifCollisionThen(event) {    // eseménykezelő
        if (this.showState.IsGameOver()) {
            return;        // ha game over akkor nem futtatjuk
        }
        if (isHRangeInHRange(event.detail, this.hat)){// tojás és a kalap átfedés esetén
            destroyMaintainerObj(event.detail);//A tojás eltűnik a kalapban.Valójában: megsemmisül.
            this.showState.IncreaseScoresCnt();  // tojásszám növelése
        }
    }
    touchingOfWall(event) {    // eseménykezelő
        destroyMaintainerObj(event.detail); // A kezelő objektum megsemmisítése
        if (this.showState.IsGameOver()) {
            return;// ha game over akkor nem futtatjuk
        }
        this.showState.DecraseLifes();// A megmaradt életek számának számának csökkentése.
    }
}
