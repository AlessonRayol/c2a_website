var isMenuVisible = true;

document.getElementById("menuBtn").addEventListener("click", function(event){

    event.preventDefault;

    if(isMenuVisible == true) {

        document.getElementById("menu").style.display = "none";

        isMenuVisible = false;
    } else {

        document.getElementById("menu").style.display = "block";

        isMenuVisible = true;
    }
});