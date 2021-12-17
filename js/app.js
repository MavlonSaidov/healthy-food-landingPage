const toggleBtn = document.querySelector(".header__burger_btn");
const sideBar = document.querySelector(".header__move");
toggleBtn.addEventListener("click", function () {
	sideBar.classList.toggle("show");
});