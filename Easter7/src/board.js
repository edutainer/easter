destroyMaintainerObj=(lasteventdetail)=>{
    lasteventdetail.destroy(); // A DOM elem megszüntetése
    if(lasteventdetail.destroyed) // Ha a Dom elem megszűnt,
          delete lasteventdetail; // az azt kezelő objektumot is töröljük.
 }

isHRangeInHRange= (covered, blanket) => {    // kalap és tojás átfedés vizgálata
    let blanketRight = blanket.x + blanket.width, // a hat és az egg jobb szélei
    coveredRight = covered.x + covered.width; // x koordinátáinak számítása
    if (blanket.x <= covered.x && coveredRight <= blanketRight){// ha az eggLeft nincs balra
        return true;// a hatLeft-től és az eggRight sem jobbra a hatRight-től
    }// (hat.x és egg.x a bal szélek x koordinátái.)
    return false;
}