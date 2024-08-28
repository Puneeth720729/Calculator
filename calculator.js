let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
 
let currentInput = '';
let result = '';
function updateInputdisplay(value){
    document.getElementById('inputdisplay').innerText = value;
}
function updateResultdisplay(value){
    document.getElementById('resultdisplay').innerText = value;
}

boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        const value = box.innerText;

        if(value==="="){
            try{
                result = eval(currentInput);
                updateResultdisplay(result);
                currentInput='';
            }catch(error){
                updateResultdisplay('Error Invalid Expression');
                currentInput = '';
            }
        
        }
        else{
            currentInput+=value;
            updateInputdisplay(currentInput);
        }
    })
})
resetbutton.addEventListener('click',()=>{
    currentInput='';
    result='';
    updateInputdisplay('0');
    updateResultdisplay('Result');
})