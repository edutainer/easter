class RigidBody{

        constructor(parElObj, elemClass) {
            this.parElementObj = parElObj;
            this.element = document.createElement('div');// A HTML elem létrehozása
            this.element.className = elemClass;// A HTML elem osztályának meghatározása
            this.parElementObj.element.appendChild(this.element);// játékhoz csatolás
        }
        // bal szél távolsága a szülő bal szélétől
        get leftX() {
            return +this.element.style.left.replace('px', '');
        }
        set leftX(leftx) {
            this.element.style.left = leftx + 'px';
        }
        // alsó szél távolsága a szülő aljától
        get bottomY() {
            return +this.element.style.bottom.replace('px', '');
        }
        set bottomY(bottomy) {
            this.element.style.bottom = bottomy + 'px';
        }
        // Bruttó magasság
        get height() {
            return this.element.offsetHeight;
        }
       // Bruttó szélesség
        get width() {
            return this.element.offsetWidth;
        }    
}