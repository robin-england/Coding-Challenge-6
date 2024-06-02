//U63166005
// Coding Challenge #6: Bouncing Ball Animation Challenge

// 2. Ball Constructor:

let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

let width = canvas.width
let height = canvas.height

class Ball{                 // Creates ball class
    constructor(x, y, radius, dx, dy, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
    }                       // Initializes each value

// 3. Draw Function:

    drawCircle(){  // function to draw a circle
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fill()
    }

// 4. Update Function:

    update(){
        this.x += this.dx   // Changes x value by dx amount
        this.y += this.dy

        if (this.x + this.radius >= width){ // When the x + radius reaches the width of the canvas, it reverses the direction of the dx
            this.dx = -this.dx
        }
        if (this.x - this.radius <= 0){     // When the x and radius reaches 0, it reverses the direction of the dx
            this.dx = -this.dx
        }
        if (this.y + this.radius >= height){ // When the y + radius reaches the height of the canvas, it reverses the direction of the dy
            this.dy = -this.dy
        }
        if (this.y - this.radius <= 0){      // When the y and radius reaches 0, it reverses the direction of the dy
            this.dy = -this.dy
        }
    }

    draw(){
        ctx.clearRect(0,0,width,height)
        this.drawCircle()
    }
 }