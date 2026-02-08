var button = $("#changeColorButton");
function buttonClicked() {
    button.css("color","white")
    button.css("background-color","black")
}


button.on("click",buttonClicked);
