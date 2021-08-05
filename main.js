// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		else{
		otherkey();
		document.getElementById("j").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	if ((keyPressed >=97 && keyPressed <=122 )|| (keyPressed >= 65 && keyPressed <= 90)) {
		alphabetkey();
		document.getElementById("j").innerHTML= "you pressed an alphabet key";
	   }
	   

}
function numberkey(){
	if (keyPressed >= 48 && keyPressed <= 57) {
		numberkey();
		document.getElementById("j").innerHTML= "you pressed a number";
}

 

}
function arrowkey(){
	if (keyPressed >= 37 && keyPressed <= 40) {
		arrowkey() 
		document.getElementById("j").innerHTML= "you pressed a arrow key";	
		}
}



function specialkey()
{
if (keyPressed >= 17 && keyPressed >= 18 && keyPressed >= 19) {
	specialkey()
	document.getElementById("j").innerHTML= "you pressed a special key";
}	
}
function otherkey()
{
	if (keyPressed >= ) {
		
	}
	img_image="otherkey.png";
	add();
}
	
