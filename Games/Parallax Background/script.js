const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gamespeed =5
// let gameFrame = 0

const backgroundLayer1 = new Image()
backgroundLayer1.src = 'layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = 'layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = 'layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = 'layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = 'layer-5.png'

// let x1=0
// let x2=2400

window.addEventListener('load',function (){
    const slider = document.getElementById('slider')
    slider.value = gamespeed
    const showGameSpeed = document.getElementById('ShowGameSpeed')
    showGameSpeed.innerHTML = gamespeed
    slider.addEventListener('change',function (e){
        gamespeed = e.target.value
        showGameSpeed.innerHTML = gamespeed
    })

    class Layer{
        constructor(image, speedmodifier) {
            this.x1 = 0
            this.y=0
            this.width=2400
            this.height=700
            this.x2  = this.width
            this.image = image
            this.speedModifier = speedmodifier
            this.speed = gamespeed * this.speedModifier
        }
        update(){
            this.speed = gamespeed * this.speedModifier
            if(this.x1<=-this.width){
                this.x1 = 0
            }
            // if(this.x2 <=-this.width){
            //     this.x2 = this.x1 + this.width - this.speed
            // }
            this.x1 = Math.floor(this.x1 - this.speed)
            // this.x2 = Math.floor(this.x2 - this.speed)

            // this.x1 = gameFrame * this.speed % this.width
        }
        draw(){
            ctx.drawImage(this.image,this.x1,this.y,this.width,this.height)
            ctx.drawImage(this.image,this.x1 + this.width,this.y,this.width,this.height)
        }
    }

    const layer1 = new Layer(backgroundLayer1,0.2)
    const layer2 = new Layer(backgroundLayer2,0.4)
    const layer3 = new Layer(backgroundLayer3,0.6)
    const layer4 = new Layer(backgroundLayer4,0.8)
    const layer5 = new Layer(backgroundLayer5,1)

    const gameObj = [layer1, layer2 , layer3, layer4, layer5]

    function animate(){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
        // ctx.drawImage(backgroundLayer4,x1,0);
        // ctx.drawImage(backgroundLayer4,x2,0)
        // if(x1<-2400) x1=2400 + x2 - gamespeed
        // else x1-=gamespeed
        // if(x2<-2400) x2=2400 + x1 - gamespeed
        // else x2-=gamespeed
        gameObj.forEach(obj =>{
            obj.update()
            obj.draw()
        })
        // gameFrame--
        requestAnimationFrame(animate)
    }
    animate()
})

