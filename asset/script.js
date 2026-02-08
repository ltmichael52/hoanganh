
var button = $("#changeColorButton");

var gallery = $(".gallery ")
function buttonClicked() {
    gallery.css("background-color","white")
    console.log("12345")
    
}
button.on("click",buttonClicked);
button.css("color","black")
var imageCard =$(".image-card");
function hideImage(){
    var image =$(this);
    image.hide();

}

imageCard.on("click",hideImage);

