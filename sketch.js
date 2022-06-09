var red_button, buttonGroup;
var redImg, blueImg, yellowImg, greenImg, pinkImg, purpleImg, greyImg, aquaImg;
var customCursor, customImg;
var bgImg;
var score = 0;


function preload() {
    redImg = loadImage("./assets/red_square.png");
    blueImg = loadImage("./assets/blue_square.png");
    yellowImg = loadImage("./assets/yellow_square.png");
    greenImg = loadImage("./assets/green_square.png");
    pinkImg = loadImage("./assets/pink_square.png");
    purpleImg = loadImage("./assets/purple_square.png");
    greyImg = loadImage("./assets/grey_square.png");
    aquaImg = loadImage("./assets/aqua_square.png");
    
    customImg = loadImage("./assets/cursor.png");
    bgImg = loadImage("./assets/background.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    buttonGroup = new Group();

    customCursor = createSprite(500, 300)
    customCursor.addImage('cursor', customImg)
    customCursor.scale = 0.1
    
}

function draw() {

    background(bgImg, windowWidth/2, windowHeight/2);

    textSize(25)
    fill("blue")
    text("Don't click RED!", 700, 30)
    text("score:" + score, 900, 30)
    spawnColours();

    customCursor.x = mouseX;
    customCursor.y = mouseY;

    if (buttonGroup.isTouching(customCursor)){
        colourClick();
    }

    drawSprites();
}

    function spawnColours() {
        if (frameCount % 25 === 0){
            red_button = createSprite(1400, 673);
            var rand = Math.round(random(1,8))
            //var xPosition = [[130, 30], [230, 30](330, 30], (425, 30], (525, 30], (620, 30], (720, 30], (815, 30], (915, 30], (1010, 30)], (1110, 30)], (1205, 30)], (1303, 30)], (1400, 30]]
            var yPosition = [110, 190, 270, 351, 431, 512, 592, 673]
            var xPosition = [130, 230, 330, 425, 525, 620, 720, 815, 915, 1010, 1110, 1205, 1303, 1400]
            red_button.x = random(xPosition);
            red_button.y = random(yPosition);
            switch(rand) {
                case 1: red_button.addImage(redImg);
                    break;
                case 2: red_button.addImage(blueImg);
                    break;
                case 3: red_button.addImage(greenImg);
                    break;
                case 4: red_button.addImage(yellowImg);
                    break;
                case 5: red_button.addImage(pinkImg);
                    break;
                case 6: red_button.addImage(greyImg);
                    break;
                case 7: red_button.addImage(aquaImg);
                    break;
                case 8: red_button.addImage(purpleImg);
                    break;
                default: break;
          }
          red_button.scale = 0.4
          customCursor.depth = red_button.depth + 1;
          buttonGroup.add(red_button);
        }
        }

        function colourClick() {
            score = score + 1
            red_button.remove();
            customCursor.x = 100;
            customCursor.y = 30
        }