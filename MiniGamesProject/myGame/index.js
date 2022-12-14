
//imagesimport START

let platform = new Image();
let background = new Image();
let hill = new Image();
let tallPlatform = new Image();
let playerStandLeft = new Image();
let playerStandRight = new Image();
let playerRunLeft = new Image();
let playerRunRight = new Image();
let treasureBox = new Image();

treasureBox.src = "images/treasureBox.png"
playerStandLeft.src = "images/spriteStandLeft.png"
playerStandRight.src = "images/spriteStandRight.png"
playerRunLeft.src = "images/spriteRunLeft.png"
playerRunRight.src = "images/spriteRunRight.png"
platform.src = "images/platform.png"
background.src = "images/background.png"
hill.src = "images/hills.png"
tallPlatform.src = "images/platformSmallTall.png"

//imageimport END

const canvas = document.querySelector("canvas");
const aliveChecker = document.querySelector("#menu");
const winChecker = document.querySelector("#otherMenu");
const tryAgain = document.querySelectorAll("#replayBtn");
tryAgain[0].onclick = function(){
    aliveChecker.style.visibility = "hidden";
    restart();
}
tryAgain[1].onclick = function(){
    winChecker.style.visibility = "hidden";
    restart();
}
canvas.width = 1336
canvas.height = 575

const c = canvas.getContext("2d");

const gravity = 1 ;

class Player {
    constructor() {
        this.speed = 10;
        this.position = {
            x: 200,
            y: 200
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 45;
        this.height = 112;
        this.image = playerStandRight;
        this.frames = 0;
        this.body = {
            stand: {
                right: playerStandRight,
                left: playerStandLeft,
                cropWidth: 177,
                width: 45
            },
            run:{
                right: playerRunRight,
                left: playerRunLeft,
                cropWidth: 341,
                width: 96
            }
        }
        this.currentBody = this.body.stand.right;
        this.currentCropWidth = 177
    }

    draw() {
        c.drawImage(
            this.currentBody,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update(){

        this.frames++;
        if(this.frames > 59 && ( this.currentBody === this.body.stand.right || this.currentBody === this.body.stand.left)) 
            this.frames = 0;
        else if(this.frames > 29 && ( this.currentBody === this.body.run.right || this.currentBody === this.body.run.left)) 
            this.frames = 0;

        this.draw()    
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity;
    }

}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = 580
        this.height = 125
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
class TallPlatform {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = 291
        this.height = 227
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Background {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = 11643
        this.height = canvas.height + 5
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Hill {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = 7350
        this.height = 592
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class TreasureBox{
    constructor({x, y, image}){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = 75
        this.height = 50
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

    let player = new Player();
    let platforms = []
    let backgrounds = []
    let hills = []
    let tallPlatforms = []
    let treasureBoxes = []
    let lastKey;
    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        up: {
            pressed: false
        },
        down: {
            pressed: false
        }
    }

    let score = 0;

function restart() {
     player = new Player();
     platforms = [
        new Platform({ x: -290, y: 475, image: platform}),
        new Platform({ x: -1, y: 475, image: platform}), 
        new Platform({ x: 577, y: 475, image: platform}),  
        new Platform({ x: (577*2), y: 475, image: platform}),
        new Platform({ x: 577*3 + 400, y: 475, image: platform}),
        new Platform({ x: 577*4, y: 475, image: platform}),
        new Platform({ x: 577*5, y: 475, image: platform}),
        new Platform({ x: 577*6 + 200, y: 475, image: platform}),
        new Platform({ x: 577*7 + 200, y: 475, image: platform}),
        new Platform({ x: 577*8 + 200, y: 475, image: platform}),
        new Platform({ x: 577*9 + 200, y: 475, image: platform}),
        new Platform({ x: 577*10 + 200 + 1500, y: 475, image: platform}),
        new Platform({ x: 577*11 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*12 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*13 + 2000, y: 475, image: platform}),
        new Platform({ x: 577*14 + 2000, y: 475, image: platform}),,
        new Platform({ x: 577*15 + 2000, y: 475, image: platform}),,
        new Platform({ x: 577*16 + 2000, y: 475, image: platform}),
        new Platform({ x: 577*17 + 2300, y: 475, image: platform}),
        new Platform({ x: 577*18 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*19 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*20 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*21 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*22 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*23 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*24 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*25 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*26 + 1700, y: 475, image: platform}),
        new Platform({ x: 577*27 + 2150, y: 475, image: platform}),
        new Platform({ x: 577*28 + 2550, y: 475, image: platform}),
        new Platform({ x: 577*29 + 3000, y: 475, image: platform}),
        new Platform({ x: 577*30 + 3450, y: 475, image: platform}),
        new Platform({ x: 577*29, y: 150, image: platform}),
        new Platform({ x: 577*30, y: 150, image: platform}),
        new Platform({ x: 577*31, y: 150, image: platform}),
        new Platform({ x: 577*32, y: 150, image: platform}),
        new Platform({ x: 577*33, y: 150, image: platform}),
        new Platform({ x: 577*34, y: 150, image: platform}),
        new Platform({ x: 577*35, y: 150, image: platform}),
        new Platform({ x: 577*36, y: 150, image: platform}),
        new Platform({ x: 577*31 + 3450, y: 475, image: platform}),
        new Platform({ x: 577*32 + 3450, y: 475, image: platform})
    
    ]
     backgrounds = [
        new Background({x: -290, y: -2, image: background}),
        new Background({x: 11000, y: -2, image: background})
    ]
     hills = [new Hill({x: 0, y: 0 ,image: hill}),new Hill({x: 7500, y: 0 ,image: hill})]

     tallPlatforms = [
        new TallPlatform({ x: 288*6 -285, y: 275, image: tallPlatform}),
        new TallPlatform({ x: 577*10 - 87, y: 340, image: tallPlatform}),
        new TallPlatform({ x: 288*15 + 920 + 1000 , y: 200, image: tallPlatform}),
        new TallPlatform({ x: 288*15 + 920 + 1550 , y: 350, image: tallPlatform}),
        new TallPlatform({ x:  288*15 + 920 + 1550 + 285, y: 350, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500, y: 350, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288*2, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288*3, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288*4, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288*5, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*18 + 2500 + 288*6, y: 250, image: tallPlatform}),
        new TallPlatform({ x: 577*29 - 291 +3, y: 270, image: tallPlatform}),
        new TallPlatform({ x: 577*29 - 291*2 + 5, y: 360, image: tallPlatform})
    ]
    treasureBoxes = [
        new TreasureBox({x: 21957, y : 428, image: treasureBox})
    ]

     score = 0;

}

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height);

    
    backgrounds.forEach(background => {background.draw()});
    hills.forEach(hill => {hill.draw()});

    tallPlatforms.forEach(function(tp){
        tp.draw();
    })
    
    platforms.forEach(function(platform){
        platform.draw();
    })
    treasureBoxes.forEach(function(tb){
        tb.draw();
    })
    player.update();
    
if(winChecker.style.visibility != "visible")
//Player Movements
    if((keys.right.pressed && player.position.x < 500) || (keys.right.pressed && platforms[43].position.x == 1004 && player.position.x  < 1250)){
        player.velocity.x = player.speed
    }
    else if((keys.left.pressed && player.position.x > 400) || keys.left.pressed && score === 0 && player.position.x > 0){
        player.velocity.x = -player.speed
    }
    else{
        player.velocity.x = 0
    }

//platform scroll start
if( player.position.y < canvas.height ){
    if(keys.right.pressed && player.position.x >= 400 && platforms[43].position.x > 1004){
        
        if(player.position.x != 400){
            score += 1;
        platforms.forEach(function(a){
            if(player.position.x >= 500)
                a.position.x -= player.speed;
        })  
        tallPlatforms.forEach(function(a){
            if(player.position.x >= 500)
                a.position.x -= player.speed;
        })
        backgrounds.forEach(function(a){
            if(player.position.x >= 500)
                a.position.x -= player.speed - 4;
        })
        hills.forEach(function(a){
            if(player.position.x >= 500)
                a.position.x -= player.speed - 5;
        })
        treasureBoxes.forEach(function(tb){
            if(player.position.x >= 500)
            tb.position.x -= player.speed
        })
        }
        else{
            
            platforms.forEach(function(a){
                if(player.position.x >= 500)
                    a.position.x -= player.speed;
            })  
            tallPlatforms.forEach(function(a){
                if(player.position.x >= 500)
                    a.position.x -= player.speed;
            })
            backgrounds.forEach(function(a){
                if(player.position.x >= 500)
                    a.position.x -= player.speed - 4;
            })
            hills.forEach(function(a){
                if(player.position.x >= 500)
                    a.position.x -= player.speed - 5;
            })
            treasureBoxes.forEach(function(tb){
                if(player.position.x >= 500)
                tb.position.x -= player.speed
            })
        
        }    
            
    }
    else if(keys.left.pressed && score > 0){
        score -= 1;
        platforms.forEach(function(a){
            if(player.position.x <= 400)
                a.position.x += player.speed;
        })  
        tallPlatforms.forEach(function(a){
            if(player.position.x <= 400)
                a.position.x += player.speed;
        })
        backgrounds.forEach(function(a){
            if(player.position.x <= 400)
                a.position.x += player.speed - 5;
        })
        hills.forEach(function(a){
            if(player.position.x <= 400)
                a.position.x += player.speed - 5;
        }) 
        treasureBoxes.forEach(function(tb){
            if(player.position.x <= 400)
            tb.position.x += player.speed;
        })
    }
}
//platform scroll end here


//platform collision check And Jump
platforms.forEach(function(platform){
    if (player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        (player.position.x + player.width)-10 >= platform.position.x && 
        player.position.x + 10 <= platform.position.x + platform.width
        ) {
        player.velocity.y = 0
        if(keys.up.pressed && winChecker.style.visibility != "visible"){
            player.velocity.y -= 20
        }
    }
})
tallPlatforms.forEach(function(platform){
    if (player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        (player.position.x + player.width)-10 >= platform.position.x && 
        player.position.x + 10 <= platform.position.x + platform.width
        ) {
        player.velocity.y = 0
        if(keys.up.pressed){
            player.velocity.y -= 20
        }
    }
})

if(winChecker.style.visibility != "visible")
//Body swip here
if( keys.right.pressed && lastKey === 'right' && player.currentBody !== player.body.run.right){
    player.frames = 1
    player.currentBody = player.body.run.right;
    player.currentCropWidth = player.body.run.cropWidth;
    player.width = player.body.run.width;
}
else if( keys.left.pressed && lastKey === 'left' && player.currentBody !== player.body.run.left){
    player.currentBody = player.body.run.left;
    player.width = player.body.run.width;
    player.currentCropWidth = player.body.run.cropWidth;
}
else if( !keys.left.pressed && lastKey === 'left' && player.currentBody !== player.body.stand.left){
    player.currentBody = player.body.stand.left;
    player.width = player.body.stand.width;
    player.currentCropWidth = player.body.stand.cropWidth;
}
else if( !keys.right.pressed && lastKey === 'right' && player.currentBody !== player.body.stand.right){
    player.currentBody = player.body.stand.right;
    player.width = player.body.stand.width;
    player.currentCropWidth = player.body.stand.cropWidth;
}

//Alive Check
if( player.position.y > canvas.height ){
    aliveChecker.style.visibility = "visible";
}

}

restart();

animate();

addEventListener('keydown',function({keyCode})
{
    switch (keyCode){

 //left key ( A )
        case 65:
        case 37:
        keys.left.pressed = true;
        lastKey = 'left'
        break;

 //Up key ( W )
        case 38:
        case 87:
            keys.up.pressed = true;
            break;

 //Right key ( D )
        case 68:
        case 39:
            keys.right.pressed = true;
            lastKey = 'right';
            break;
  
//Down key ( S )
        case 83:
        case 40:
           keys.down.pressed = true;
           if(player.velocity.y != 0 && player.position.y+player.height+player.velocity.y <= 950)
           player.velocity.y += 25
//End Case
        case 13:
            if(player.position.x + (player.width/2) > treasureBoxes[0].position.x){
                winChecker.style.visibility = "visible";
            }
    }


    

})

addEventListener('keyup',function(k)
{
    switch (k.keyCode){

 //left key ( A )
        case 65:
        case 37:
        keys.left.pressed = false;
        break;

 //Up key ( W )
        case 38:
        case 87:
            keys.up.pressed = false;
            break;

 //Right key ( D )
        case 68:
        case 39:
            keys.right.pressed = false;
            break;

 //Down key ( S )
        case 83:
        case 40:
            keys.down.pressed = false;

    }
    

})