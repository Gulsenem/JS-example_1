var zahl1 = document.getElementById("zahl1");
var zahl2 = document.getElementById("zahl2");
var rech;
var erg = document.getElementById("ergebnis");



function rechnen()
{
    if ( zahl1.value != "" && zahl2.value != "" )
    {
        rech = parseFloat(zahl1.value) + parseFloat(zahl2.value); 
        erg.innerHTML = rech;       
    }
    else if ( zahl1.value == "" && zahl2.value == "" )
    {
        erg.innerHTML = "Zahl ist nicht angegeben worden";
        erg.style.color = "red"; 
        erg.style.fontSize = "16px";
    }

}

