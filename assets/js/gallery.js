/* Gallery */ 
/* javascript code for gallery is from Web Design Decal at Berkeley */

let galleryWidth = 640; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("gallery-image-row");

let imageNum = 0;

function showNextImage() {
	imageNum += 1;
	let pixel_movement = galleryWidth * imageNum;
	imageRow.style.left = new String(pixel_movement*-1) + "px";

	checkControls();
}

nextButton.onclick = function() {
	showNextImage();
}


function showPrevImage() {
	imageNum -=1;
	let pixel_movement = galleryWidth * imageNum;
	imageRow.style.left = new String(pixel_movement*-1) + "px";

	checkControls();
}

prevButton.onclick = function() {
	showPrevImage();
}

let totalImages = document.getElementsByClassName("gallery-image").length;

function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (imageNum== (totalImages-1)) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
} 