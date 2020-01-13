class Hat extends RigidBody{
    constructor(parElObj, elemClass) {
        super(parElObj, elemClass);
        this.mouseX = null; // egér pozi x
        // feliratkozás az egérmozgás event-re
        parElObj.element.addEventListener('mousemove', event => {
            this.OnMouseMove(event.clientX);
        });
    }
//---------------------------------------------------------------------------------------
    get maxLeftX(){
        return  this.parElementObj.element.clientWidth - this.width;
    }
    // Az egérmozgás event által meghívandó callback
    OnMouseMove(mouseX) {
        if (mouseX != this.mouseX) {
            this.mouseX = mouseX;
            this.RenderXPosition(mouseX);
        }
    }
    RenderXPosition(x) {   // x pozíció renderelés
        this.leftX = x - this.width / 2;
        // A kalap a szülőelem két széle között marad
        if(this.leftX > this.maxLeftX) this.leftX = this.maxLeftX;
        else if(x < this.width / 2) this.leftX = 0;
    }
}
