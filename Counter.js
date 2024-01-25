//document.getElementById('count-el').innerText = 5;
//creating a function to react to the event when invoked

let countEl = document.getElementById('count-el');//paasing an argument
let saveEl = document.getElementById('save-el');//grabbing
let count =0 ;

//camelCase naming variables
function increment(){
    count = count +1;
    countEl.textContent = count;
    //innertext alt textcontent
       
}
//THE DOM
 //the hirachy that represent the html /model...
 //creating a save button

function save(){
    console.log(count)
    let container = count + " - ";//assign count to dash...
    saveEl.textContent += container;  //assigning saveel to cout..
    countEl.textContent = 0;
    //alsonset counter to zero
    count = 0;

}




//solution




















































