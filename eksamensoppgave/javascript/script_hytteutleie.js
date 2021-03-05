/* Jeg forsøkte egentlig å løse denne oppgaven med å bruke arrays,
men etter å ha forsøkt lenge uten å få det til, så tok jeg inspirasjon i måten Øyvind hadde løst oppgaven på.
Så dette er hvorfor løsningene vi kom frem til er ganske like.
 */

window.onload = oppstart;

var arstid = "jul"
/*Hver av hyttene har en id for å leie hytten, og Granbo har to fordi den er ledig i to ulike sesonger.*/
function oppstart () {
    document.getElementById("sesong").onchange = sesong;
    document.getElementById("leiGranstua").onclick = leiGranstua;
    document.getElementById("leiGranboJ").onclick = leiGranboJ;
    document.getElementById("leiGranboV").onclick = leiGranboV;
    document.getElementById("leiGrantoppen").onclick = leiGrantoppen;
    document.getElementById("leiGranhaug").onclick = leiGranhaug;

}
/*Den vil så se hvilken sesong som man har valgt og så vil de hyttene som er tilgjengelige bli vist, imens de andre vil være sjult.
  Dette skjer ved en en if statement som spør om det er enten jul, vinter eller påske. Den viser så de riktige hyttene til den sesongen.*/
function sesong () {
    arstid = document.getElementById("sesong").value;
    if (arstid === "jul") {
        document.getElementById("granstua").style.display = "none";
        document.getElementById("granbo").style.display = "block";
        document.getElementById("leiGranboJ").style.display = "block";
        document.getElementById("leiGranboV").style.display = "none";
        document.getElementById("grantoppen").style.display = "none";
        document.getElementById("granhaug").style.display = "none";
    }
    else if (arstid === "vinter") {
        document.getElementById("granstua").style.display = "none";
        document.getElementById("granbo").style.display = "block";
        document.getElementById("leiGranboJ").style.display = "none";
        document.getElementById("leiGranboV").style.display = "block";
        document.getElementById("grantoppen").style.display = "block";
        document.getElementById("granhaug").style.display = "block";
    }
    else if (arstid === "paske") {
        document.getElementById("granstua").style.display = "block";
        document.getElementById("granbo").style.display = "none";
        document.getElementById("grantoppen").style.display = "none";
        document.getElementById("granhaug").style.display = "none";
    }
}
/* Disse funskjonene gjør så det står utleid i knappene for å vise at de er nå uteleide.*/
function leiGranstua () {
    document.getElementById("leiGranstua").innerHTML = "Utleid";
}

function leiGranboJ () {
    document.getElementById("leiGranboJ").innerHTML = "Utleid";
}

function leiGranboV () {
    document.getElementById("leiGranboV").innerHTML = "Utleid";
}


function leiGrantoppen () {
    document.getElementById("leiGrantoppen").innerHTML = "Utleid";
}

function leiGranhaug () {
    document.getElementById("leiGranhaug").innerHTML = "Utleid";
}