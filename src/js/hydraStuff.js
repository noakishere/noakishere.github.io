let hydraBG = new Hydra({
	canvas: document.getElementById("backgroundCanvas"),
	detectAudio: false, // Set to true if you want audio reactivity
});

// s0.initImage("./assets/bg_asset.png");

// src(s0)
// 	.rotate(1, 0.01)
// 	.scroll(0.1, 0.03)
// 	.kaleid()
// 	.scale(0.5, 0.5)
// 	.blend(voronoi(25, 0.02, 0.01))
// 	.out();
// fireflies

document.addEventListener("mousemove", function (e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});

function draw() {
	voronoi(500, 0.2, 8)
		.color(10, 1, mouse.x / 5)
		.brightness(mouse.x / 2000)
		.kaleid()
		.out(o0);

	// gradient(o0).r().out(o1);

	// console.log(mouse.x);
	requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

// draw();
