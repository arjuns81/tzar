
var canvas = new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromULR("golf-h1.png",function(Img));
	hole_obj=Img;
	hole_obj=scaleToHeight(50);
	hole_obj=scaleToWidth(50);
	hole_obj.set({
	top:hole_y;
	})
	top:hole_x;
	left:hole_y;
	canvas.add(hole_obj);
	new_image();
}

function new_image()
{
	
	fabric.Image.fromULR("ball.png",function(Img));
	ball_obj=Img;
	ball_obj=scaleToHeight(50);
	ball_obj=scaleToWidth(50);
	ball_obj.set({
	})
	top:ball_x;
	left:ball_y;
	canvas.add(ball_obj);
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x==hole_x)&&(ball_y==hole_y)
	canvas.remove(ball_obj);
	document.GetElementById(hd3).InnerHTML="you have hit the goal";
	document.GetElementById(myCanvas)StyleSheet.borderColor="red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y<=450)
		ball_y=ball_y+block_image_height;
console.log(block_image_height = block image height);
console.log( "When up arrow key is pressed",X="+ball x - Y= "ball_y);
canvas.remove(ball_obj);
new_image();
	};

	function down()
	{
		if(ball_y<=450)
		ball_y=ball_y+block_image_height;
console.log(block_image_height = block image height);
console.log( "When down arrow key is pressed",X="+ball x - Y= "ball_y);
canvas.remove(ball_obj);
new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_y<=450)
			ball_y=ball_y+block_image_height;
	console.log(block_image_height = block image-height);
	console.log( "When left arrow key is pressed",X="+ball x - Y= ");
	canvas.remove(ball_obj);
	new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_x >5)
			{
				if(ball_y<=450)
				ball_y=ball_y+block_image_height;
		console.log(block_image_height = block image-height);
		console.log( "When left arrow key is pressed",X="+ball x - Y= ");
		canvas.remove(ball_obj);
		new_image();
		}
	}
	
}

