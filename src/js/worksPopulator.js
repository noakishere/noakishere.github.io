let allData;

let container = document.querySelector(".category-items");
let categories = document.querySelector(".categories");
let returnBtn = document.getElementById("returnCat");

addEventListener("DOMContentLoaded", (event) => {
	fetch("../../assets/data/data.json")
		.then((response) => response.json())
		.then((collections) => {
			console.log(typeof collections);
			allData = collections;
			console.log(allData);
		});
});

function handleSelectedCategory() {}

function populateItems(category) {
	// console.log(typeof Object.values(allData)[category]);
	var items = Object.entries(Object.values(allData)[category]);

	container.innerHTML = "";
	returnBtn.style.display = "block";
	categories.style.display = "none";

	console.log(items);
	if (items != null) {
		items.forEach((element) => {
			let workElement = document.createElement("div");
			workElement.classList.add("item");

			let thumbnailImage = document.createElement("img");
			thumbnailImage.classList.add("avatar");
			thumbnailImage.src = `../../assets/img/${element[1].thumbnail}`;

			let workTitle = document.createElement("h3");
			workTitle.innerHTML = element[1].title;

			workElement.appendChild(thumbnailImage);
			workElement.appendChild(workTitle);

			container.appendChild(workElement);
		});
	}
}

function showCategories() {
	container.innerHTML = "";
	returnBtn.style.display = "none";
	categories.style.display = "grid";
}
