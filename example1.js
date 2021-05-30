var inp1 = document.getElementById("var_input");
var inp2 = document.getElementById("name_input");
var show = document.getElementById("show_btn");

var is_btn_show = true;
var alt_inp1, alt_inp2;

if (inp1.value == "name" && inp2.value == "Senem")
{
    function showAns ()
    {
        inp1.value = "name";
        inp2.value = "Senem";
        inp1.style.color = "blue";
        inp2.style.color = "blue";
    }

    function submit ()
    {
        document.getElementById("box2").style.display = "block";
        document.getElementById("submit").innerHTML = "Next Exercise";
    }
}

else 
{
    function showAns ()
    {

    }

    function submit ()
    {
        
    }
}