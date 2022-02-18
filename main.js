let navMobile = document.querySelector(".icon");
// show nav menu 
navMobile.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("mo")
})
// show the x icon
navMobile.addEventListener("click", function () {
    navMobile.style.display = "none";
    document.querySelector(".icon-x").style.display = "block";
});
// close the nav menu and show the icon and display icon x
document.querySelector(".icon-x").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("mo");
    navMobile.style.display = "block";
    document.querySelector(".icon-x").style.display = "none";
})