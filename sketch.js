var dog, happyDog
var database
var foodS, foodStock

function preload()
{
  dog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dataBase = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  backround(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("images/dogImg1.png")
  }


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
}

