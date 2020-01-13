class Game {
    constructor(elementID) {
        this.element = document.getElementById(elementID); //a pálya HTML eleme
        
        this.hat; // a hat objektum
        this.lifeCntVal = 5; // életek száma
        this.lifeCntObj = document.getElementById('lifeCnt'); // ebben az elemben jelenik meg
        this.UpdateLifeCnt(); // az életek száma. Ennek frissítésével kezdünk.

        // feliratkozások a tojások megfelelő pozícióiban kiváltott két "eseménysorra":
        window.addEventListener('egg/available', event => {
            this.OnEggAvailable(event);
        });
        window.addEventListener('egg/leaving', event => {
            this.OnEggLeaving(event);
        });
        
        // kalap létrehozása
        this.hat = new Hat(this, 'hat');
        this.scoreVal = 0;// Elkapott tojások száma,
        this.scoreObj = this.hat; // a kalapon jelenik meg.
        this.UpdateScore(); // Itt frissítjük.
        this.CreateEggs();        // tojások létrehozása és indítása
    }

    // tojások generálása
    CreateEggs() {
        new egg(this, 'egg');
        setTimeout(() => {
            if (!this.IsGameOver()) {// ameddig nincs vége a játéknak,
                this.CreateEggs();// rendszeres időközönként, újakat indítunk.
            }
        }, 800);
    }

    // A gyűjtött tojások számának növelése
    IncreaseEggsCnt() {
        this.scoreVal++;
        this.UpdateScore();
    }

    UpdateScore() { //A gyűjtött tojások megjelenített számának frissítése.
        this.scoreObj.element.innerText = this.scoreVal + " eggs";
    }

    // Megmaradt életek számának csökkentése
    DecraseLifes() {
        this.lifeCntVal--;
        this.UpdateLifeCnt();
        if (this.IsGameOver()) {
            let elemobj = document.getElementById('message');
            elemobj.innerText = 'Game over!';
            elemobj.style.backgroundColor = 'rgb(255, 150, 150)';
            elemobj.style.borderBottomColor = "red";
            elemobj.style.borderLeftColor = "red";
            elemobj.style.right = "20px";
        }
    }

    UpdateLifeCnt() { // Megmaradt életek számának megjelenített számának frissítése.
        this.lifeCntObj.innerText = this.lifeCntVal;
    }

    // eseménykezelők
    OnEggAvailable(event) {
        // ha game over akkor nem futtatjuk
        if (this.IsGameOver()) {
            return;
        }
        // tojás és a kalap átfedés esetén
        if (this.Above(this.hat, event.detail)) {
            // A tojás rltűnik a kalapban. Valójában, megsemmisül.
            this.destroyMaintainerObj(event);
            // tojásszám növelése
            this.IncreaseEggsCnt();
        }
    }
    OnEggLeaving(event) {
        this.destroyMaintainerObj(event); // A kezelő objektum megsemmisítése
        // ha game over akkor nem futtatjuk
        if (this.IsGameOver()) {
            return;
        }
        // életszám csökkentése
        this.DecraseLifes();// A megmaradt életek számának számának csökkentése.
    }
    destroyMaintainerObj(event){
        event.detail.destroy(); // A DOM elem megszüntetése
        if(event.detail.destroyed) // Ha a Dom elem megszűnt,
             delete event.detail; // az azt kezelő objektumot is töröljük.
    }

    // játék végének tesztelése
    IsGameOver() {
        return this.lifeCntVal <= 0;
    }

    // kalap és tojás átfedés vizgálata
    Above(hat, egg) {
        // a kalap és a tojás vízszintes határai, x koordinátáinak számítása
        let hatLeft = hat.leftX,
            hatRight = hatLeft + this.hat.width,
            eggLeft = egg.leftX,
            eggRight = eggLeft + egg.width;
        if (hatLeft <= eggLeft && eggRight <= hatRight) {
            return true;
        }
        return false;
    }
}
