const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const CollisionCanvas = document.getElementById('collisionCanvas')
const Collisionctx = CollisionCanvas.getContext('2d')
CollisionCanvas.width = window.innerWidth;
CollisionCanvas.height = window.innerHeight;

let ravens = []
let timeToNextRaven=0
let lastTime = 0    
let ravenInterval = 500
let score = 0
ctx.font = '50px Impact'

let explosions=[]
let gameOver = false
let particles = []

class Raven{
    constructor() {
        this.spriteWidth = 271
        this.spriteHeight = 194
        this.sizeModifier = Math.random() * 0.6 + 0.4
        this.width = this.spriteWidth * this.sizeModifier
        this.height = this.spriteHeight * this.sizeModifier
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height)
        this.directionX =  Math.random()*5+3
        this.directionY = Math.random()*5 - 2.5
        this.markedForDeletion= false
        this.image = new Image()
        this.image.src = 'raven.png'
        this.frame = 0
        this.maxframe = 4
        this.timeSinceFlap = 0
        this.flapinterval = Math.random() * 50 + 50
        this.randomColors =  [Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)]
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' +
            this.randomColors[2] + ')'
        this.hasTrails = Math.random() > 0.5
    }
    update(deltatime){
        if(this.y < 0 || this.y > canvas.height - this.height){
            this.directionY  = this.directionY * -1
        }
        this.x -= this.directionX
        this.y += this.directionY
        if(this.x < 0 - this.width) this.markedForDeletion = true
        this.timeSinceFlap += deltatime
        if(this.timeSinceFlap > this.flapinterval) {
            if (this.frame > this.maxframe) this.frame = 0
            else this.frame++
            this.timeSinceFlap = 0;
            if(this.hasTrails) {
                for(let i=0;i<5;i++){
                    particles.push(new Particle(this.x, this.y, this.width, this.color))
                }
            }
        }
        if(this.x< 0 - this.width) gameOver = true
        // console.log(deltatime)
    }
    draw(){
        Collisionctx.fillStyle = this.color
        Collisionctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, 
            this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}  

class Explosion{
    constructor(x, y, size) {
        this.image = new Image()
        this.image.src = 'boom.png'
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.size = size
        this.x = x
        this.y = y
        this.frame = 0;
        this.sound = new Audio()
        this.sound.src = 'explosion.wav'
        this.timeSinceLastFrame = 0
        this.frameInterval = 200
        this.markedForDeletion = false
    }
    update(deltatime){
        if(this.frame === 0) this.sound.play()
        this.timeSinceLastFrame +=deltatime
        if(this.timeSinceLastFrame > this.frameInterval){
            this.frame++
            if(this.frame > 5) this.markedForDeletion = true
        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth,
            this.spriteHeight, this.x, this.y - this.size/4, this.size, this.size)
    }
}

class Particle{
    constructor(x, y, size, color) {
        this.size = size
        this.x = x - this.size/3;
        this.y = y - this.size/3;
        this.color = color
        this.radius = Math.random() * this.size/10
        this.maxradius = Math.random() * 20 + 35
        this.makedForDeletion = false
        this.speedX = Math.random() * 1 + 0.5
    }
    
    update(){
        this.x+= this.speedX
        this.radius += 0.5
        if(this.radius > this.maxradius - 5) this.makedForDeletion = true
    }
    
    draw(){
        ctx.save()
        ctx.globalAlpha = 1- this.radius/this.maxradius
        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.restore()
    }
}

function drawScore(){
    ctx.fillStyle = 'black'
    ctx.fillText('Score:' + score, 50, 75)
    ctx.fillStyle = 'white'
    ctx.fillText('score' + score, 55, 80)
}   

function drawGameOver(){
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black'
    ctx.fillText('GAME OVER, your score is ' + score, canvas.width/2,
        canvas.height/2)
    ctx.fillStyle = 'white'
    ctx.fillText('GAME OVER, your score is ' + score, canvas.width/2 + 5,
        canvas.height/2 + 5)
}

window.addEventListener('click',function (e){
    const detectPixelColor = Collisionctx.getImageData(e.x, e.y, 1, 1)
    console.log(detectPixelColor)
    const pc = detectPixelColor.data
    ravens.forEach(obj => {
        if(obj.randomColors[0] === pc[0] && obj.randomColors[1] === pc[1] &&
        obj.randomColors[2] === pc[2]){
            obj.markedForDeletion = true
            score++
            explosions.push(new Explosion(obj.x, obj.y, obj.width))
        }
    })
})

function animate(timestamp){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    Collisionctx.clearRect(0, 0, canvas.width, canvas.height)
    let deltatime = timestamp - lastTime
    lastTime = timestamp
    timeToNextRaven +=deltatime
    if(timeToNextRaven > ravenInterval){
        ravens.push(new Raven())
        timeToNextRaven = 0
        ravens.sort(function (a,b){
            return a.width - b.width
        })
    } 
    drawScore();
    [...particles, ...ravens, ...explosions].forEach(obj => obj.update(deltatime));
    [...particles, ...ravens, ...explosions].forEach(obj => obj.draw());
    ravens = ravens.filter(obj => !obj.markedForDeletion);
    explosions = explosions.filter(obj => !obj.markedForDeletion)
    particles = particles.filter(obj => !obj.markedForDeletion)
    if(!gameOver) requestAnimationFrame(animate)
    else drawGameOver()
}

animate(0)