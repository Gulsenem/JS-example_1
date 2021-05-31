var zahl1 = document.getElementById("zahl1");
var zahl2 = document.getElementById("zahl2");
var rech;
var erg = document.getElementById("ergebnis");

function rechnen()
{
    if ( parseFloat(zahl1.value)!="" && parseFloat(zahl2.value)!=""  )
    {
        rech = parseFloat(zahl1.value) + parseFloat(zahl2.value); 
        erg.innerHTML = rech; 
    }
    else if ( parseFloat(zahl1.value)=="0" && parseFloat(zahl2.value)=="0"  )
    {
        rech = parseFloat(zahl1.value) + parseFloat(zahl2.value); 
        erg.innerHTML = rech; 
    }
    else if (parseFloat(zahl1.value)=="" && parseFloat(zahl2.value)=="" )
    {
        alert("hallo");
        //erg.innerHTML = "Zahl ist nicht angegeben worden";
        //erg.style.color = "red";
    }

}