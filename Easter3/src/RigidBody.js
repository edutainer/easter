class RigidBody{
        constructor(parElObj, elemClass) {
            this.parElementObj = parElObj;
            this.element = document.createElement('div');// A HTML elem létrehozása
            this.element.className = elemClass;// A HTML elem osztályának meghatározása
            this.parElementObj.element.appendChild(this.element);// játékhoz csatolás
            this.name=elemClass;
        }
        get x() { // leftX // bal szél távolsága a szülő bal szélétől
            return +this.element.style.left.replace('px', '');
        }
        set x(leftx) { // leftX
            this.element.style.left = leftx + 'px';
        }
        get y() { // bottomY // alsó szél távolsága a szülő aljától
            return +this.element.style.bottom.replace('px', '');
        }
        set y(bottomy) { // bottomY
            this.element.style.bottom = bottomy + 'px';
        }
        get height() {        // Bruttó magasság
            return this.element.offsetHeight;
        }
        get width() {        // Bruttó szélesség
            return this.element.offsetWidth;
        }
        get movingStep() {        // Property defs
            return _movingStep;
        }
        set movingStep(whetherisitfunc) {
            if(isFunction(whetherisitfunc))
                this._movingStep = whetherisitfunc;
            else{
                console.log("Error: Nem függény a kapott paraméter!");
                this._movingStep = () => false;
            }
        }
        get isPotentialCollision() {
            return _isPotentialCollision;
        }
        set isPotentialCollision(whetherisitfunc) {
            if(isFunction(whetherisitfunc))
               this._isPotentialCollision = whetherisitfunc;
            else{
                console.log("Error: Nem függény a kapott paraméter!");
                this._isPotentialCollision = () => false;
            }
        }
        get isTouchingOfWall() {
            return _isTouchingOfWall;
        }
        set isTouchingOfWall(whetherisitfunc) {
            if(isFunction(whetherisitfunc))
                this._isTouchingOfWall = whetherisitfunc;
            else{
                console.log("Error: Nem függény a kapott paraméter!");
                this._isTouchingOfWall = () => false;
            }
        }
        maxY=()=> this.parElementObj.element.clientHeight - this.height;
        maxX=()=> this.parElementObj.element.clientWidth - this.width;//max x of leftside
        triggerEvent(evtype) {        // események kiváltása
          window.dispatchEvent(
            new CustomEvent(this.name+'/'+evtype, {
                detail: this
            })
          );
        }
        Move() {
            if (this.destroyed) {
                return;
            }
            this._movingStep();
                // ? constraints
            setTimeout(() => {// mozgás következő lépését kiváltó 
                    this.Move();//  időzítő esemény létrehozása
            }, 10);
        }
        destroy() { // A DOM elem megszűntetését saját "kezelő" objektumából végezzük.
            this.destroyed = true;
            this.parElementObj.element.removeChild(this.element);
        }
}