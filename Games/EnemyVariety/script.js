document.addEventListener('load',function (){
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 500;
    canvas.height = 800;

    class Game{
        constructor(ctx, width, height) {
            this.ctx = ctx
            this.width = width
            this.height = height
            this.enemies = []
            this.enemyInterval = 1000
            this.enemyTimer = 0
            this.addNewEnemy() 
        }
        update(deltatime){
            if(this.enemyTimer > this.enemyInterval){
                this.addNewEnemy()
                this.enemyTimer = 0
            }
            else{
                this.enemyTimer+=deltatime
            }
            this.enemies.forEach(obj => obj.update())
        }
        draw(){
            this.enemies.forEach(obj => obj.draw(this.ctx))
        }
        addNewEnemy(){
            this.enemies.push(new Enemy(this))    
        }
    }

    class Enemy{
        constructor(game) {
            this.game = game
            this.x = this.game.width
            this.y= Math.random() * this.game.height
            this.width = 100
            this.height = 100
        }
        update(){
            this.x--
        }
        draw(){
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    
    const game = new Game(ctx, canvas.width, canvas.height)
    let lastTime = 1
    function animate(timestamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const deltatime = timestamp - lastTime
        lastTime = timestamp
        game.update(deltatime)
        game.draw()
        requestAnimationFrame(animate)
    }
    animate(0)
})