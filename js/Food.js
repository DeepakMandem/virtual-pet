class Form {
    constructor() {
      var foodStock;
      var lastFed;
      this.image = loadImage("images/Milk.png");
    }
   
  
    display(){
      fill(255,255,254);
      textSize(15);
      if(lastFed>=12){

        text("Last Feed : "+ lastFed%12 +"PH",350,30);
      }else if(lastFed==0){
        text("Last Feed : 12 AM",350,30);
      }else{
        text("Last Feed :"+ lastFed + "AM",350,30);
      }
      
      
    }
    getFoodStock(){


    }
  
    updateFoodStock(){


    }
  
    deductFood(){
      
    }
  }
  