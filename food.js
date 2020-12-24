class Food{
    constructor(){
        this.foodStock = 0
        this.lastFed
        this.image = loadImage("images/milk.png")
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock
    }
    getFedTime(lastFed){
        this.lastFed = lastFed
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock-=1
        }
    }
    getFoodStock(){
        return this.foodStock
    }
    display(){
        background("green")
        if (lastFed>=12){
            text("Last fed time is more than 12 hours", 50, 30)
        }
        else  if (lastFed==0){
            text("Last fed time is 12 a.m.", 50, 30)
        }
        else{
            text("Last fed time is less than 12 hours", 50, 30)
        }
        var x = 70, y=100
        imageMode(CENTER)
        if(this.foodStock != 0){
            for(var i=0; i<this.foodStockp;i++){
                if(i%10==0){
                    x = 70
                    y = y+50
                }
                image(this.image, x, y, 50, 50)
                x = x+30
            }
        }
    }
    bedroom(){
        background(bedroom, 550, 500)
    }
    garden(){
        background(garden, 550, 500)
    }
    washroom(){
        background(washroom, 550, 500)
    }

}