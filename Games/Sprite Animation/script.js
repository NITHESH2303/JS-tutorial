const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
// console.log(ctx)

const CANVAS_WIDTH = canvas.width = 1175
const CANVAS_HEIGHT = canvas.height = 1150

const playerImage = new Image()
playerImage.src = 'mugen_chaos_sprite.png'
const SPRITE_WIDTH = 62
const SPRITE_HEIGHT = 81
// let frameX=0
// let frameY= 0
let playerState = "idle1"
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change',function (e){
    playerState =   e.target.value
})
let gameframe=0 
const staggerframes=5
const spriteAnimations =[]
const animationStates = [
    {
        name: 'idle1',   
        frames: 16
    },
    {
        name: 'fluid',
        frames: 16
    },
    {
        name: 'waterBall',
        frames: 16
    },
    {
        name: 'down1',
        frames: 1
    },
    {
        name: 'idle2',
        frames: 16
    },
    {
        name: 'idle3',
        frames: 16
    },
    {
        name: 'idle4',
        frames: 6
    },
    {
        name: 'attack1',
        frames: 16
    },
    {
        name: 'attack2',
        frames: 13
    },
    {
        name: 'splash',
        frames: 10
    },
    {
        name: 'attack3',
        frames: 16
    },
    {
        name: 'attack4',
        frames: 16
    },
    {
        name: 'jump1',
        frames: 13
    },
    {
        name: 'jump2',
        frames: 5
    },
    {
        name: 'jump3',
        frames: 6
    },
    {
        name: 'down2',
        frames: 13
    }
]

animationStates.forEach((state,index) => {
    let frames = {
        loc:[],
    }
    for(let j=0;j<state.frames;j++){
        let positionX = j*SPRITE_WIDTH
        let positionY = index*SPRITE_HEIGHT
        frames.loc.push({x:positionX, y:positionY}) 
    }
    spriteAnimations[state.name] = frames
})
console.log(spriteAnimations)
function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx.fillRect(50,50,100,100)
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    let position = Math.floor(gameframe/staggerframes)%spriteAnimations[playerState].loc.length
    let frameX = SPRITE_WIDTH * position
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // if(gameframe%staggerframes==0) {
    //     if (frameX < 19) frameX++
    //     else frameX = 0
    // }
    gameframe++
    requestAnimationFrame(animate)
}

animate()