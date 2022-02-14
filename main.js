

const prompt = require('prompt-sync')({sigint:true});

let userInput = Number(prompt("'Select 1 to desconstruct, 2 to construct colors"));


//Prompt for deconstructing colors.
if (userInput === 1)  {

let deconstruct = Number(prompt("'Select 1 for purple, 2 for orange, 3 for green"));
    if (deconstruct === 1){
        console.log('purple =  red + blue')

    }else if (deconstruct ===2){
        console.log('orange =  red + yellow ')

    }else if (deconstruct ===3){
        console.log('green =  blue + yellow ')
    }
    else {
        console.log(' Error')                 // error collection/closing if statements
    }


//Prompt for constructing colors. 

}else if (userInput === 2) {
    let color1 = Number(prompt("'Select 1 for red, 2 for blue, 3 for yellow "));
    let color2 = Number(prompt("'Select 1 for red, 2 for blue, 3 for yellow "));
    
    if (color1===1 && color2===2 || color2===1 && color1===2 ){      // accounting for both selection options
        console.log('These colors = purple');
    }
    else if (color1===1 && color2===3 || color2===1 && color1===3 ){
            console.log('These colors = Orange');

    }
    else if (color1===2 && color2===3 || color2===2 && color1===3 ){
        console.log('These colors = green');
    }
    else {
        console.log(' Error')        // error collection/closing if statements
    }
    
    /*| red + blue | purple |
    | red + yellow | orange |
    | blue + yellow | green |
    | anything else | "error" */

}


















