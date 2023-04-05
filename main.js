var canvas=new fabric.Canvas('myCanvas');
// Create canvas variable
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img) {
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
        });
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		console.log("You have hit the goal!!!");
		document.getElementById("hd3").innerHTML="You have hit the Goal!!! ";
		document.getElementById("myCanavs").style.borderColor="red";
	}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
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
		if (ball_y>=5){
			ball_y=ball_y-block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X = " + ball_x+" , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();	
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(ball_y<=450)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arraow key is pressed, X = " + ball_x+" , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
		 
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arraow key is pressed, X = " + ball_x+" , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arraow key is pressed, X = " + ball_x+" , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

