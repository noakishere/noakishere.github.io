fetch("../data.json")
	.then((response) => response.json())
	.then((collection) => {
		console.log(collection);
	});
