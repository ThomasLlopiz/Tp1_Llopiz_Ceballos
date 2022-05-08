let montoFinal = 0;
let monto = 0;
let cont = 1 ;
function invertir(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    monto = document.getElementById('monto').value;

    let dias = document.getElementById('dias').value;
    let porcentaje = 0;
    
    //para validar que no haya campos vacios
    if (nombre == "") {
        document.getElementById("nombreIncorrecto").style.display = "block";
        return;
    } else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (apellido == "") {
        document.getElementById("apellidoIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (monto == "") {
        document.getElementById("montoIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (dias == "") {
        document.getElementById("diasIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    dias = parseInt(dias);
    if (isNaN(dias)) {
        document.getElementById("diasIncorrecto").style.display = "block";
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    monto = parseFloat(monto);
    if (isNaN(monto)) {
        document.getElementById("montoIncorrecto").style.display = "block";
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (monto < 1000) {
        document.getElementById("montoIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }

    //para saber cuanto va a ser el porcentaje
    if (dias>=30 && dias<=60) {
        porcentaje=40;
    } else if (dias>61 && dias<=120) {
        porcentaje=45;
    } else if (dias>=121 && dias<360) {
        porcentaje=50;
    } else if (dias>=360) {
        porcentaje=65;
    } 
    montoFinal = monto+monto*dias/360*porcentaje/100;
    
    let texto = `<p>Periodo 1* Monto INICIAL: ${monto.toFixed(2)} Monto final: ${montoFinal.toFixed(2)}</p> `;
    document.getElementById('cuadro').innerHTML = texto;
}
function reinvertir(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let monto = document.getElementById('monto').value;
    let dias = document.getElementById('dias').value;
    let gananciaFinal = 0;
    let porcentaje = 0;
    
    //para validar que no haya campos vacios
    if (nombre == "") {
        document.getElementById("nombreIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (apellido == "") {
        document.getElementById("apellidoIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (monto == "") {
        document.getElementById("montoIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (dias == "") {
        document.getElementById("diasIncorrecto").style.display = "block";
        return;
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    dias = parseInt(dias);
    if (isNaN(dias)) {
        document.getElementById("diasIncorrecto").style.display = "block";
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    monto = parseFloat(monto);
    if (isNaN(monto)) {
        document.getElementById("montoIncorrecto").style.display = "block";
    }else {
        document.getElementById("nombreIncorrecto").style.display = "none";
    }
    if (monto < 1000) {
        document.getElementById("montoIncorrecto").style.display = "block";
        return;
    }

    //para saber cuanto va a ser el porcentaje
    if (dias>=30 && dias<=60) {
        porcentaje=40;
    } else if (dias>61 && dias<=120) {
        porcentaje=45;
    } else if (dias>=121 && dias<360) {
        porcentaje=50;
    } else if (dias>=360) {
        porcentaje=65;
    } 
    cont++;
    gananciaFinal = montoFinal+montoFinal*dias/360*porcentaje/100;
    montoFinal = gananciaFinal;
    let texto = `
                    <p>Periodo ${cont}* Monto INICIAL: ${monto.toFixed(2)} Monto final: ${gananciaFinal.toFixed(2)}</p>          
    `;
    document.getElementById('cuadro').innerHTML = texto;
}