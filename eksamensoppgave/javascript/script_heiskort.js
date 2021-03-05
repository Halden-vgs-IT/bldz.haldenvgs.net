window.onload = startup;

function startup()  {
document.getElementById("buttonReady").onclick = calculate;
}

/*Her hentes verdiene ifra <select> feltene og blir gjort om til variabelen age og days*/

function calculate()    {
var age = document.getElementById("lstAge").value
var days = document.getElementById("days").value

/*  Her brukes matte til å regne ut verdiene på disse nye variablene som skal vise prisen, og prisen hvis man får tilbud.
    Måten salgsprisen blir regnet ut er med å ta "age" ganger 5. Dette fører til en ny variabel som blir brukt hvis det er mer en 5 dager.*/

var price = age * days ;

var priceSale = age * 5 ;

var moneySaved = (days - 5) * age

if (days <= 5) {
document.getElementById("results").innerHTML = "Prisen er: " + price + "kr";
document.getElementById("moneySaved").innerHTML = "";
}
else {
document.getElementById("results").innerHTML = "Fordi du valgte mer enn fem dager så er prisen er: " + priceSale + "kr";
document.getElementById("moneySaved").innerHTML = "Du har spart: " + moneySaved + "kr";
}
}