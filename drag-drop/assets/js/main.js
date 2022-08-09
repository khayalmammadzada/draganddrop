let drags=document.querySelectorAll(".drag")
let dropZone=document.querySelector(".dropzone")


// Custom circle Start
let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let inp3=document.querySelector(".inp3")
let btn=document.querySelector(".btn")
let customCircle=document.querySelector(".custom-circle")

btn.addEventListener("click", function(e){
var x= inp1.value
var y= inp2.value
var z= inp3.value
var bgColor="rgb("+x+","+y+","+z+")";
customCircle.style.backgroundColor=bgColor
customCircle.setAttribute("id", bgColor)
});
// Custom circle end

drags.forEach(drag => {
    drag.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", e.target.id)
        console.log(e.dataTransfer.setData)
    });
});


dropZone.addEventListener("dragenter", function(e){
    e.target.style.scale="1.3"
    });

dropZone.addEventListener("dragover", function(e){
    e.preventDefault();
e.target.style.boxShadow="-9px -2px 25px 9px rgba(0,0,0,0.78);"

});

dropZone.addEventListener("dragleave", function(e){
    e.target.style.scale="1"
    
});




dropZone.addEventListener("drop", function(e){
    
    let id=e.dataTransfer.getData("text")
    e.target.style.backgroundColor=id
    e.target.style.scale="1"
});


// Custom circle part


