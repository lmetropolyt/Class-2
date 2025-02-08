var redBrick = {
    x: 0,
    y: 0,
    w: 60,
    h: 60,
    xSpeed: 1,
    ySpeed: 4,
    colour: 'pink',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 0,
    y: 50,
    w: 18,
    h: 38,
    xSpeed: 4,
    ySpeed: 1,
    colour: 'purple',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var yellowBrick = {
    x: 0,
    y: 0,
    w: 18,
    h: 20,
    xSpeed: 5,
    ySpeed: 6,
    colour: 'magenta',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var pinkBrick = {
    x: 0,
    y: 0,
    w: 18,
    h: 20,
    xSpeed: 6,
    ySpeed: 8,
    colour: 'indigo',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

// I kind of did this almost in my index so it was cool to fix a lot of issues i had during that experiment
// Note to future self: when you make all the code with colour names like "yellowBrick" It makes it hard to design afterwards because i want to change the colour all the time
function setup(){
    createCanvas(720,280);
}

function draw(){
    background('lime'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
    pinkBrick.draw();
    pinkBrick.move();
}