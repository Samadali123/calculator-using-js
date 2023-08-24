<!-- The code you provided is an HTML document. It defines the structure and content of a web page.
Here's a breakdown of what each part does: -->
<!-- The code you provided is an HTML document. It defines the structure and content of a web page.
Here's a breakdown of what each part does: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My calculator</title>
    <link rel="stylesheet" href="style.css">

    <style>
        
    </style>
</head>
<body>
    <div id="main">
        <div id="container">
            <input type="text" name="" id=""  placeholder="calculator" >
            <div class="row"   >
                <button>C</button>
                <button >X</button>
                <button>%</button>
                <button >/</button>
            </div>

            <div  class="row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
            </div>


            <div  class="row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>



            <div class="row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>



            <div class="row">
                <button class="color">Sp</button>
                <button>0</button>
                <button>.</button>
                <button class="color" id="bg">=</button>
            </div>


        </div>
    </div>

</body>

<script src="script.js"></script>
</html>






/* The CSS code provided is styling the elements of a web page. */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body{
    width: 100%;
    height: 100%;
}

#main{
    width: 100%;
    height: 100%;
    position: relative;
    /* background-color: snow; */
    display: flex;
    align-items: center;
    justify-content: center;
   background-color: black;
}

#container{
    width: 20vw;
    height: 39vw;
    /* background-color: black; */
    border: 2px solid white;
    border-radius: 20px;
    color: white;
    font-family: "gilroy";
    text-align: center;
    padding-top: 20px;
}

#container input{
    padding: 50px  0px;
    width:18vw;
    border-radius: 10px;
    /* font-size:15px; */
    font-weight: bold;
    text-transform: capitalize;
    /* color: black; */
    font-size: 2vw;
    text-align: center;
   color: orange;
   
}


#container .row button{
    position: relative;
    /* padding: 12px 19px; */
    padding: 1vw 1.2vw;
    margin: 13px 5px;
    /* font-size: 20px; */
    font-size: 1.1vw;
    margin-top: 20px;
    border-radius: none;
    background-color: transparent;
    color: white;
}






/* The code is setting up an event listener for each button on the page. When a button is clicked, the
code checks the innerHTML of the button to determine what action to take. */
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


