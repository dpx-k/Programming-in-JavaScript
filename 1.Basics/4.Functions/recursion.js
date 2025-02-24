let counter = 3 
function recursion(){ 
    console.log(counter);
    counter -= 1; 
    if (counter === 0){
        return; 
    } 
    recursion(); 
}

recursion();