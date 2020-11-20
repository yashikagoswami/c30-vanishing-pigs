class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255// pig is completely visible
  }
     display(){
       console.log(this.body.speed)
if(this.body.speed<3){
  super.display();
}
else{
  //World.add(world,this.body), when we add an object
this.Visibility=this.Visibility-5;// in each frame the visivibility reduces by5: 255-250-245-240-235-230....

push()
 World.remove(world,this.body)// when we remove an object

tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();

}
    
 }
};