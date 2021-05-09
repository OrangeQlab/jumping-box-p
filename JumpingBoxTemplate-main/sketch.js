var canvas;
var music;
var box,block1,block2,block3,block4,edges

function preload(){
    music = loadSound("music.mp3");
}              


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1 = createSprite(100,590,200,25)     
console.log(block1.shapeColor);
          block1.shapeColor = "blue";
          console.log(block1.shapeColor)

           block2 = createSprite(285,590,200,25)     
console.log(block2.shapeColor);
          block2.shapeColor = "orange";
          console.log(block2.shapeColor)

           block3 = createSprite(470,590,200,25)     
          console.log(block3.shapeColor);
                    block3.shapeColor = "green";
                    console.log(block3.shapeColor)

                     block4 = createSprite(655,590,225,25)     
          console.log(block4.shapeColor);
                    block4.shapeColor = "red";
                    console.log(block4.shapeColor)
          
 
         

    //create box sprite and give velocity
     box = createSprite(random(20,750),300,30,30)
    box.velocityY = 3;
    box.velocityX= 3;  
}



function draw() {
    background((169,169,169));
    edges=createEdgeSprites();  
    box.bounceOff(edges[0])
    box.bounceOff(edges[1])
    box.bounceOff(edges[2])

    box.bounceOff(edges[3])


    
    //create edgeSprite



    //add condition to check if box touching surface and make it bounce
    //if(block1.isTouching(box) && box.bouceOff(block1)){
        if(box.isTouching(block1)){box.shapeColor="blue"
    }
    if(box.isTouching(block2)){box.shapeColor="orange"
    }
    if(box.isTouching(block3)){box.shapeColor="green"
    }
    if(box.isTouching(block4)){box.shapeColor="red"
    }
    drawSprites();

}
