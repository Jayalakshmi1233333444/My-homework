var rect,database,position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    rect=createSprite(250,250,18,10);
    rect.shapeColor="red";
    var rectposition= database.ref("rectangle/position");
    rectposition.on("value",readPosition,showError);
}
function draw(){
    background("white");
if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
 drawSprites();
}
}
function writePosition(x,y){
    database.ref("rectangle/position").set({
        x:position.x+x,
        y:position.y+y
    })
}
function readPosition(data){
    position=data.val();
    rect.x=position.x;
    rect.y=position.y;
}
function showError(){
    console.log("error connecting to database");
}