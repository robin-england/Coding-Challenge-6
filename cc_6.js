//U63166005
// Coding Challenge #6: Bouncing Ball Animation Challenge

// 2. Ball Constructor:
let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

let width = canvas.width
let height = canvas.height

class Ball{ // Creates ball class
    constructor(x, y, radius, dx, dy, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
    } // Initializes each value

    drawCircle(){  // function to draw a circle
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fill()
    }
 }