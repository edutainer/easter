class egg extends RigidBody{
    constructor(parElObj, elemClass) {
        super(parElObj, elemClass);
        // pozicionálás
        this.bottomY = this.parElementObj.element.clientHeight - this.height;
        this.leftX = this.randomX;
        // a mozgás indítása
        this.Move();
    }

//----------------------------------------------------------------------------------
    destroy() { // A DOM elem megszűntetését saját "kezelő" objektumából végezzük.
        this.parElementObj.element.removeChild(this.element)
        this.destroyed = true;
    }

    // A szülőelem "szélességen belüli" random x koordináta.
    get randomX() {
        return Math.round(Math.random() * (this.parElementObj.element.clientWidth - this.width));
    }

    // egyenletes mozgás lefele
    Move() {
        if (this.destroyed) {
            return;
        }

        // Ha elérhető a tojás a kalappal
        if (this.bottomY <= this.parElementObj.hat.height) {
            this.TriggerAvailableEvent();
        }

        // megsemmisítés ha leesett
        if (this.bottomY <= 0) {
            this.TriggerLeavingEvent();
            return;
        }

        // elmozdulás lefele
        this.bottomY = this.bottomY - 2;

        // mozgás következő lépését kiváltó időzítő esemény létrehozása
        setTimeout(() => {
            this.Move();
        }, 10);
    }

    // események kiváltása
    TriggerAvailableEvent() {
        window.dispatchEvent(
            new CustomEvent('egg/available', {
                detail: this
            })
        );
    }
    TriggerLeavingEvent() {
        window.dispatchEvent(
            new CustomEvent('egg/leaving', {
                detail: this
            })
        );
    }
}
