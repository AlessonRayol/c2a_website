let myCarousel = document.getElementById("carouselExampleIndicators");
myCarousel.carousel("cycle");

myCarousel.addEventListener("click", function() {
    myCarousel.carousel("pause");
    alert("asd");
});
