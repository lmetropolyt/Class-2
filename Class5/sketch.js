var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
var drawModeRadio;

function setup(){
    createCanvas(720,400);
    colourPicker = createColorPicker('deeppink');
    
    strokeWeightSlider = createSlider(1,10,5,1);
    
    bgColourPicker = createColorPicker('purple'); 
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );

    //chANGE THE SHAPE TOOL
    drawModeRadio = createRadio(); 
    drawModeRadio.option('Line'); 
    drawModeRadio.option('Ellipse'); 
    drawModeRadio.option('Rectangle'); 
    drawModeRadio.selected('Line');

    let bgColorRadios = document.getElementsByName('bgColor'); // Added
    for (let i = 0; i < bgColorRadios.length; i++) { // Added
        bgColorRadios[i].addEventListener('change', repaint); // Added
    }
}

function draw(){
    // ellipse(mouseX, mouseY, 10,10);
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        let mode = drawModeRadio.value(); 
        if (mode === 'Line') { 
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (mode === 'Ellipse') { 
            ellipse(mouseX, mouseY, 50, 50); 
        } else if (mode === 'Rectangle') { 
            rect(mouseX, mouseY, 50, 50); 
        }
    }
    /// end remix


}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}