(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#button");
	var crownBurger = document.querySelector("#crownburger");

	function crownBurgerMenu() {
		crownBurger.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", crownBurgerMenu, false);
		
})();