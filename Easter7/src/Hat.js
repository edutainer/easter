class Hat extends RigidBody{
    constructor(parElObj, elemClass) {
        super(parElObj, elemClass);
        parElObj.element.addEventListener('mousemove', event => {  // feliratkozás
            this.OnMouseMove(event.clientX);  // az egérmozgás event-re
        });
    }
    OnMouseMove = mouseX => {
        if (mouseX != this.x) {// Az egérmozgás event által meghívandó callback
            this.RenderXPos(mouseX - this.width / 2);
        }
    }
    RenderXPos = x => this.x = Math.max( 0, Math.min( x, this.maxX() ) );
}
