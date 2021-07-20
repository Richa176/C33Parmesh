class createSnow{
    constructor(x,y){
      var options={
        friction:0.001,
        restitution:0.1,
        isStatic:false  
      } 
      this.body = Bodies.circle(x,y,5,options);
        this.image = loadImage("snow5.webp");
        //this.snow=[];
        
        World.add(world, this.body);
        // console.log(this.body.position.y)
        // console.log(this.body);
    }

updateY(){
    if(this.body.position.y > height ){
        Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,600)});   
    } 
}
display(){
    fill("blue");
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,10,10);
 } 
}