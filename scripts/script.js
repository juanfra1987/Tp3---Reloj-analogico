function watch() {
    let time = new Date(); //se crea un objeto Date para la fecha y la hora actuales.

    let hours = time.getHours(); // se crean las variables
    let minutes = time.getMinutes(); // y se guardan en ellas
    let seconds = time.getSeconds(); // la hora, minutos y segundos actuales

    if (hours >= 12) {
        porcHours = hours / 12 * 360;
    } else {
        porcHours = hours / 24 * 360;
    }

    porcHours += minutes / 60 * 30;
    porcMinutes = minutes / 60 * 360;
    porcSeconds = seconds / 60 * 360;

    // a travez de la funcion rotate de css giran cada una de las agujas
    document.getElementById("hours").style.transform = "rotate(" + porcHours + "deg)";
    document.getElementById("minutes").style.transform = "rotate(" + porcMinutes + "deg)";
    document.getElementById("seconds").style.transform = "rotate(" + porcSeconds + "deg)";

}

setInterval(watch, 1000); //llama a la funcion watch() cada 1000mseg