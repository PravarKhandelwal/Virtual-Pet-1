//Create variables here
var dog,happyDog;
var database;
var food,foodStock;
function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png")
  dog_img2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(350,350,10,10);
  dog.addImage(dog_img);
  dog.scale = 0.4;
  
  database = firebase.database()
  var foodStock = database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  

  
  //add styles here
background(46, 139, 87);
drawSprites();
textSize(20);
  fill (255,255,255);
  stroke (5);
  console.log(food);
text ("Food remaining:"+food,150,200);

text("Note: Press Up arrow to feed drago milk ",100,100);
 if(keyDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dog_img2);

  
}

}

function readStock(data)
{
    food= data.val()
    
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food: x
  })
}


