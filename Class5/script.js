

var schmoDiv = document.getElementById("sillyfairy");

if(schmoDiv === null){
   
}
console.log(schmoDiv);


function ourDivWasClicked(){
    if(schmoDiv.innerHTML === "Click: I'm the bad fairy"){
        schmoDiv.innerHTML = "You are doomed to draw for all eternity.";
    }else{
        schmoDiv.innerHTML = "Click: I'm the bad fairy";
    }
}

schmoDiv.onclick = ourDivWasClicked;