fetch("../data/data.json")
	.then((response) => response.json())
	.then((collection) => {
		console.log(collection);
		document.querySelector(".test").innerHTML = collection[0].title;
	});
