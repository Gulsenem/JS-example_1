var zahl1 = document.getElementById("zahl1");
var zahl2 = document.getElementById("zahl2");
var rech;
var erg = document.getElementById("ergebnis");
var rech_btn = document.getElementById("rech_btn");


var is_rech_btn = true;

function rechnen()
{
    if (is_rech_btn)
    {
        rech_btn.innerHTML = "Delete";
        is_rech_btn = false;
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
    else if (!is_rech_btn)
    {
        zahl1.value = "" ;
        zahl2.value = "";
        erg.innerHTML = ""; 

        rech_btn.innerHTML = "Rechnen";
        is_rech_btn = true;


    }
}

