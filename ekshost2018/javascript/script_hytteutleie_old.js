window.onload = startup;

function startup()  {
    document.getElementById("buttonReady").onclick = ledig;
}

function ledig() {
    var sesong = document.getElementById("sesong").value

    var hytte = document.getElementById()
}

/*Granstua*/
if (ledighet=false) {
    document.getElementById(granstuaLedighet).innerHTML = "Bestill her!"
}
else {
    document.getElementById(granstuaLedighet).innerHTML = "Utlånt"
}
/*Granbo*/
if (ledighet=false) {
    document.getElementById(granboLedighet).innerHTML = "Bestill her!"
}
else {
    document.getElementById(granboLedighet).innerHTML = "Utlånt"
}
/*Grantoppen*/
if (ledighet=false) {
    document.getElementById(grantoppenLedighet).innerHTML = "Bestill her!"
}
else {
    document.getElementById(grantoppenLedighet).innerHTML = "Utlånt"
}

/*Granhaug*/
if (ledighet=false) {
    document.getElementById(granhaugLedighet).innerHTML = "Bestill her!"
}
else {
    document.getElementById(granhaugLedighet).innerHTML = "Utlånt"
}

/* En array for ledigheten for hyttene */

ledighet=  {   "Jul": {
                "Granstua":true,
                "Granbo":false,
                "Grantoppen":true,
                "Granhaug":true,
                },
            "Vinter":{
                "Granstua":true,
                "Granbo":false,
                "Grantoppen":false,
                "Granhaug":false,
                },
            "Paske":{
                "Granstua":false,
                "Granbo":true,
                "Grantoppen":true,
                "Granhaug":true,
                }
           }
