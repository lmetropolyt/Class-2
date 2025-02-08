var redBrick = {
    x: 0,
    y: 0,
    w: 60,
    h: 30,
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



// I kind of did this almost in my index so it was cool to fix a lot of issues i had during that experiment

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('lime'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}