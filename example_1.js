
var inp1 = document.getElementById("var_input");
var inp2 = document.getElementById("name_input");
var show = document.getElementById("show_btn");

var is_btn_show = true;
var alt_inp1, alt_inp2;



function showAns()
{
    if(is_btn_show)
    {

        alt_inp1 = inp1.value;
        alt_inp2 = inp2.value;

        if(inp1.value != "name" || inp2.value != "Senem" )
        {
            inp1.value = "name";
            inp2.value = "Senem";
            inp1.style.color = "blue";
            inp2.style.color = "blue";
            show.innerHTML = "Hide Answer";
            is_btn_show = false;
        }
        else
        {
            inp1.style.color = "blue";
            inp2.style.color = "blue";
            show.innerHTML = "Hide Answer";
            
        }
    }
    else if(!is_btn_show)
    {
        inp1.value = alt_inp1;
        inp2.value = alt_inp2;
        show.innerHTML = "Show Answer";
        is_btn_show = true;


    }


}

function submit()
{
    if(inp1.value != "name" || inp2.value != "Senem" )
    {
        document.getElementById("box1").style.display = "block";
        document.getElementById("submit").innerHTML = "Try again";
    }
    else
    {
        document.getElementById("box2").style.display = "block";
        document.getElementById("submit").innerHTML = "Next Exercise";
    }
}


