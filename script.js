var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body")
var ran = document.getElementById("random");

//single color of rgb (like r/g/b) family to hex
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
 
//full rbg to hex without "#""
var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
};

//function for random color generator and return as object
function colors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

 //setting gradient 
function gradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value;
    css.textContent = body.style.background + ";";
}

//OPTIONAL: random color object to string
function random() {
    var { r, g, b } = colors();
    return  r + ", " + g + ", " + b;
}

//random button function
function randomColor() {
    var a = "rgb(" + random() + ")";
    var b = "rgb(" + random() + ")";
    color1.value = "#"+fullColorHex(colors().r, colors().g, colors().b);
    color2.value = "#"+fullColorHex(colors().r, colors().g, colors().b);
    gradient();
}

//event listeners
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);
ran.addEventListener("click", randomColor);

