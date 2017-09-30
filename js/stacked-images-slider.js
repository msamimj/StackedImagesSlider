var start = 0;
var itr;

var stackedImagesSlider = document.getElementById('stacked-images-slider');
var maxWidth;
var stackedImages = document.getElementsByClassName('stacked-image');
var stackedImagesLength = stackedImages.length;

var maxHeight;
var posHeight;

function swap(){

	if(start<0){
		start += stackedImagesLength;
	}
	for(itr = 0; itr < stackedImagesLength; itr++){
		switch (itr){
			case start:
				stackedImages[itr].className = "stacked-image si1";
				break;
			case (start+1)%stackedImagesLength:
				stackedImages[itr].className = "stacked-image si2";
				break;
			case (start+2)%stackedImagesLength:
				stackedImages[itr].className = "stacked-image si3";
				break;
			case (start+3)%stackedImagesLength:
				stackedImages[itr].className = "stacked-image si4";
				break;
			case (start+4)%stackedImagesLength:
				stackedImages[itr].className = "stacked-image si5";
				break;
			default:
				stackedImages[itr].className = "stacked-image si0";
		}
	}
	
}

window.addEventListener('keydown', function(e){

	if(e.keyCode == 39){
		start--;
		swap();
	}else if(e.keyCode == 37){
		start++;
		start %= stackedImagesLength;
		swap();
	}

});

function init(){

	maxWidth = Math.ceil(stackedImagesSlider.offsetWidth * 0.3);
	maxHeight = 0;
	posHeight = 0;
	console.log(maxWidth);		

	for(itr = 0; itr < stackedImagesLength; itr++){
		posHeight = stackedImages[itr].naturalHeight / stackedImages[itr].naturalWidth * maxWidth;
		if(posHeight > maxHeight){
			maxHeight = posHeight;
		}
	}

	stackedImagesSlider.style.height = maxHeight + "px";

	swap();
}

window.addEventListener('load', init);
window.addEventListener('resize', init);