class Game {
    constructor(elementID) {
        this.element = document.getElementById(elementID); //a pálya HTML eleme
        this.hat = new Hat(this, 'hat'); // kalap létrehozása
//        this.CreateEggs();        // tojások létrehozása és indítása
    }
/*    CreateEggs() {   // tojások generálása
        new egg(this, 'egg');
    }*/
}
