var asteroidImg
var rocketImg
var backgroundImg
var bg, rocket, asteroid, bullet
var bulletImg

function preload() {
  asteroidImg = loadImage("asteroid.jpg")
  rocketImg = loadImage("rocket.png")
  backgroundImg = loadImage("background.jpg")
  bulletImg = loadImage("bullet.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2, width, height)

  rocket = createSprite(width / 2, height - 170, 20, 50)
  rocket.scale = 0.4


}


function draw() {
  background(255, 255, 255);
  bg.addImage(backgroundImg)
  rocket.addImage(rocketImg)
  asteroid.addImage(asteroidImg)


  if (keyDown(RIGHT_ARROW)) {
    rocket.x = rocket.x + 0.5
    rocket.velocityX = 0.9
  }



  if (keyDown(LEFT_ARROW)) {
    rocket.x = rocket.x - 0.5
    rocket.velocityX = - 0.9
  }

  if (keyDown("SPACE")) {
    bullet = createSprite(rocket.x, rocket.y, 3, 5)
    bullet.scale = 0.02
    bullet.addImage(bulletImg)
    bullet.velocityY = - 20
  }

  spawnAsteroids()
  drawSprites();
}

function spawnAsteroids(){
  asteroid = createSprite(width/2, height*2, 15, 15)
  asteroid.scale = 0.5
  asteroid.velocityY = 0.10
}