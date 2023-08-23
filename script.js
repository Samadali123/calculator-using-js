// first make a blank string for the output screen input 
let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach(function(elem) {
    elem.addEventListener("click", function(dets){
        
        if(dets.target.innerHTML ==  '='){
            string =  eval(string);
            document.querySelector('input').value = string;
        }
    
        else if(dets.target.innerHTML  == 'C'){
            string = "";
            document.querySelector('input').value =  string;
        }

        else{
            string = string + dets.target.innerHTML;
        document.querySelector("input").value = string;
        }
    })
})
