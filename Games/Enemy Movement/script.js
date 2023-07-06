const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies = 100
const enemies=[]
// enemy1 = {
//     x: 0,
//     y: 0,
//     width: 200,
//     height: 200
// }

// const enemyImg = new Image()
// enemyImg.src = 'enemy1.png'
let gameFrame=0;

class Enemy{
        constructor() {
            this.image = new Image()
            this.image.src = 'enemy1.png'
            // this.x = Math.random() * (canvas.width)
            // this.y = Math.random() * (canvas.height)
            // this.speed = Math.random() * 4 -2
            this.spriteWidth = 293
            this.spriteHeight =  155
            this.width = this.spriteWidth/3
            this.height = this.spriteHeight/3
            this.x = Math.random() * (canvas.width - this.width)
            this.y = Math.random() * (canvas.height - this.height)
            this.frame = 0
            this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        }
        update(){
            this.x+= Math.random() * 15 - 7.5
            this.y+= Math.random() * 10 - 5
            if(gameFrame % this.flapSpeed===0) {
                this.frame > 4 ? this.frame = 0 : this.frame++
            }
        }
        draw(){
            // ctx.fillRect(this.x,this.y,this.width,this.height)
            ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
                this.x, this.y, this.width, this.height)
        }
}

// const enemy1 = new Enemy()
// const enemy2 = new Enemy()
for(let i=0;i<numberOfEnemies;i++){
    enemies.push(new Enemy())
}

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemies.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()