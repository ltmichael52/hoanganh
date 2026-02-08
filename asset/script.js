
var button = $("#changeColorButton");
function buttonClicked() {
    button.css("color","white")
    button.css("background-color","black")
    console.log("12345")
}


button.on("click",buttonClicked);
button.css("color","white")

