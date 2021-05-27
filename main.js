canvas=document.getElementById("Yo");
ctx=canvas.getContext("2d");

car1_height=70;
car1_width=120;

car2_height=150;
car2_width=125;

backgroundimage="racing.jpg";

car1_image="car1.png";

car2_image="car2.png"

car1_x=10;
car1_y=10;

car2_x=10;
car2_y=100;

function add()
{
    backgroundimage_tag=new Image();
    backgroundimage_tag.onload=uploadBackground;
    backgroundimage_tag.src=backgroundimage;

    car1_imagetag=new Image();
    car1_imagetag.onload=uploadCar1;
    car1_imagetag.src=car1_image;

    car2_imagetag=new Image();
    car2_imagetag.onload=uploadCar2;
    car2_imagetag.src=car2_image;
}

function uploadBackground()
{
    ctx.drawImage(backgroundimage_tag,0,0,canvas.width,canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2()
{
    ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(j)
{
    var keyPress = j.keyCode;
    console.log(keyPress);
    if (keyPress == '38')
    console.log("up");
    {
    car1_up();
    console.log("up arrow key");
    } 

    var keyPress = j.keyCode;
    console.log(keyPress);
    if (keyPress == '37')
    console.log("left");
    {
    car1_left();
    console.log("left arrow key");
    }

    var keyPress = j.keyCode;
    console.log(keyPress);
    if (keyPress == '40')
    console.log("down");
    {
    car1_down();
    console.log("down arrow key");
    }
    
    var keyPress = j.keyCode;
    console.log(keyPress);
    if (keyPress == '39')
    console.log("right");
    {
    car1_right();
    console.log("right arrow key");
    }
        
        var keyPress = j.keyCode;
        console.log(keyPress);
        if (keyPress == '87')
        console.log("up");
        {
        car2_up();
        console.log("w key");
        } 
    
        var keyPress = j.keyCode;
        console.log(keyPress);
        if (keyPress == '65')
        console.log("left");
        {
        car2_left();
        console.log("a key");
        } 
    
        var keyPress = j.keyCode;
        console.log(keyPress);
        if (keyPress == '68')
        console.log("right");
        {
        car2_right();
        console.log("d key");
        }
        
        var keyPress = j.keyCode;
        console.log(keyPress);
        if (keyPress == '83')
        console.log("down");
        {
        car2_down();
        console.log("s key");
        }
    
}