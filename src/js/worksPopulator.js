let allData;
let selectedItems;
let selectedSingleItem;

let container = document.querySelector(".category-items");
let categories = document.querySelector(".categories");
let returnBtn = document.getElementById("returnCat");

// Single item DOMs
let workContainer = document.querySelector(".work-container");
let singleWorkContainer = document.querySelector(".single-work-container");

let headerPIC = document.querySelector("#headerPIC");
let infoTitle = document.querySelector("#infoTITLE");
let infoMedium = document.querySelector("#infoMEDIUM");
let infoDate = document.querySelector("#infoDATE");
let infoLinks = document.querySelector("#infoLinks");
let workDesc = document.querySelector(".work-description");

addEventListener("DOMContentLoaded", (event) => {
	fetch("../../assets/data/data.json")
		.then((response) => response.json())
		.then((collections) => {
			console.log(typeof collections);
			allData = collections;
			console.log(allData);
			getSpecificItem();
		});
});

function populateItems(category) {
	// console.log(typeof Object.values(allData)[category]);
	selectedItems = Object.entries(Object.values(allData)[category]);

	container.innerHTML = "";
	returnBtn.style.display = "block";
	categories.style.display = "none";

	console.log(selectedItems);
	if (selectedItems != null) {
		selectedItems.forEach((element, index) => {
			let workElement = document.createElement("div");
			workElement.classList.add("item");

			let thumbnailImage = document.createElement("img");
			thumbnailImage.classList.add("avatar");
			thumbnailImage.src = `../../assets/img/${element[1].thumbnail}`;

			let workTitle = document.createElement("h3");
			workTitle.innerHTML = element[1].title;

			workElement.appendChild(thumbnailImage);
			workElement.appendChild(workTitle);

			workElement.addEventListener("click", () => {
				showItem(index);
			});

			// workElement.onclick.add(showItem(index));

			container.appendChild(workElement);
		});
	}
}

function showItem(item) {
	selectedSingleItem = selectedItems[item];
	console.log(selectedSingleItem);

	container.innerHTML = "";
	returnBtn.style.display = "block";
	categories.style.display = "none";
	singleWorkContainer.style.display = "grid";

	if (selectedSingleItem != null) {
		// ****HEADER INFO SECTION***
		headerPIC.src = `../../assets/img/${selectedSingleItem[1].headerPIC}`;
		// info
		infoTitle.innerHTML = selectedSingleItem[1].title;
		infoMedium.innerHTML = selectedSingleItem[1].medium;
		infoDate.innerHTML = selectedSingleItem[1].date;

		//info links
		infoLinks.innerHTML = "";
		let links = selectedSingleItem[1].links;

		if (links != null) {
			links.forEach((link) => {
				let newListItem = document.createElement("li");
				let newLink = document.createElement("a");
				newLink.innerHTML = link[0];
				newLink.href = link[1];
				newLink.target = "_blank";

				newListItem.appendChild(newLink);
				infoLinks.appendChild(newListItem);
			});
		}

		// DESCRIPTION

		workDesc.innerHTML = "";
		let itemDesc = selectedSingleItem[1].desc;

		workDesc.innerHTML += "<br />";
		itemDesc.forEach((element) => {
			// workDesc.innerHTML += element;
			if (element.length >= 2) {
				// text
				let newH = document.createElement("h3");
				newH.innerHTML = element[0];

				let newP = document.createElement("p");
				newP.innerHTML = element[1];
				newP.classList.add("desc-p");

				workDesc.appendChild(newH);
				workDesc.appendChild(newP);
			}
			// Image
			else if (element.length == 1) {
				let newImg = document.createElement("img");
				newImg.src = element[0];
				newImg.classList.add("desc-img");

				workDesc.appendChild(newImg);
			}
		});
	}
}

function showCategories() {
	container.innerHTML = "";
	returnBtn.style.display = "none";
	singleWorkContainer.style.display = "none";
	categories.style.display = "grid";
}

function getSpecificItem() {
	const urlQuery = window.location.search;

	let queries = urlQuery.slice(1);
	queries = queries.split("&");

	if (queries.length == 2) {
		if (queries[0].includes("cat") && queries[1].includes("i")) {
			let catQ = queries[0].split("=");
			let itemQ = queries[1].split("=");

			let cat = parseInt(catQ[1]);
			let item = parseInt(itemQ[1]);
			selectedItems = Object.entries(Object.values(allData)[cat]);
			showItem(item);
		}
	}
}
