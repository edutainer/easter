class egg extends RigidBody{
    constructor(parElObj, elemClass) {
        super(parElObj, elemClass); // A szülő konstruktora
        this.configMove();  // a mozgás jellemzőinek meghatározás
    }
    configMove(){
        // pozicionálás
        this.y = this.maxY(); // lehető legmagasabbra
        this.x = Math.round(Math.random() * this.maxX());//Random x, de szülőelemre ráférjen.
    }
}
