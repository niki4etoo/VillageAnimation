const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	const box = BABYLON.MeshBuilder.CreateBox("box", {width: 2, height: 1.5, depth: 3, updatable: true}, scene);

	box.position.y = 0.75;
	
	//Roof of the basic house
	const roof = BABYLON.MeshBuilder.CreateCylinder("roof", { diameter: 1.3, height: 1.2, tessellation: 3}, scene);
	roof.scaling.x = 0.75;
	roof.rotation.z = Math.PI / 2;
	roof.position.y = 1.22;
	
	const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 10, depth: 4}, scene);

	const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
	camera.attachControl(canvas, true);
	const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

	//Sounds
	const sound = new BABYLON.Sound("RelaxingGalaxyBeat", "relaxing-galaxy-beat.mp3", scene, null, { loop: true, autoplay: true });
	

	return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
	scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
	engine.resize();
});
