console.log("-- start");

var blade_num = 0;
var bottom_num = 0;
var mid_num = 0;
var top_num = 0;

const blade_element = document.getElementById("lightsaber_blade");
const bottom_element = document.getElementById("lightsaber_bottom")
const mid_element = document.getElementById("lightsaber_mid")
const top_element =document.getElementById("lightsaber_top")

// blade_element.addEventListener("click", change_blade);
// bottom_element.ad dEventListener("click", change_bottom);
// mid_element.addEventListener("click", change_mid);
// top_element.addEventListener("click", change_top);

blade_element.style.top = "0px";
bottom_element.style.top = "180px";
mid_element.style.top = "180px";
top_element.style.top = "180px";

function change_blade(){
    blade_num ++;
    if(blade_num > 5) blade_num = 0;
    document.getElementById("lightsaber_blade").src = "assets/blade/blade_" + blade_num + ".png";
}

function change_bottom(){
    bottom_num ++;
    if(bottom_num > 8) bottom_num = 1;
    document.getElementById("lightsaber_bottom").src = "assets/bottom/bottom_sprite_" + bottom_num + ".png";
}

function change_mid(){
    mid_num ++;
    if(mid_num > 8) mid_num = 1;
    document.getElementById("lightsaber_mid").src = "assets/mid/mid_sprite_" + mid_num + ".png";
}

function change_top(){
    top_num ++;
    if(top_num > 8) top_num = 1;
    document.getElementById("lightsaber_top").src = "assets/top/top_sprite_" + top_num + ".png";
}