var box = document.getElementById("box");
var blau_btn = document.getElementById("blau_btn");
var rot_btn = document.getElementById("rot_btn");

var is_box_red = true;

box.style.backgroundColor = "#b12525";
rot_btn.style.backgroundColor = "#131313";
blau_btn.style.backgroundColor = "#3f3f3f";

function blau()
{
    if ( is_box_red)
    {
        
        box.style.backgroundColor = "blue";
        blau_btn.style.backgroundColor = "#131313";
        rot_btn.style.backgroundColor = "#3f3f3f";
        is_box_red = false;

    }

    
}

function rot()
{
    
    if ( !is_box_red)
    {
        box.style.backgroundColor = "#b12525";
        rot_btn.style.backgroundColor = "#131313";
        blau_btn.style.backgroundColor = "#3f3f3f";
        is_box_red = true;
        
    }
    
}