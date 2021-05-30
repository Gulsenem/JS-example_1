
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
        
        inp1.value = "name";
        inp2.value = "Senem";
        show.innerHTML = "Hide Answer";
        is_btn_show = false;
        inp1.style.color = "blue";
        inp2.style.color = "blue";

        document.getElementById("submit").style.display = "none";
        
    }
    else if(!is_btn_show)
    {
        inp1.value = alt_inp1;
        inp2.value = alt_inp2;
        show.innerHTML = "Show Answer";
        is_btn_show = true;
        inp1.style.color = "black";
        inp2.style.color = "black";
    
        document.getElementById("submit").style.display = "block";
    }


}



function submit()
{
    if (is_btn_show)
    {
        if(inp1.value != "name" || inp2.value != "Senem" )
        {
            document.getElementById("box1").style.display = "block";
            document.getElementById("submit").innerHTML = "Try again";

            is_btn_show = false;

        }
        else if(inp1.value == "name" && inp2.value == "Senem" )
        {
            document.getElementById("box2").style.display = "block";
            document.getElementById("submit").innerHTML = "Next Exercise";
    
        }
    }
    else if(!is_btn_show)
    {
        document.getElementById("box1").style.display = "none";
        document.getElementById("submit").innerHTML = "Submit Answer <i class='far fa-chevron-right'></i> ";

        is_btn_show = true;
        

    }


}


