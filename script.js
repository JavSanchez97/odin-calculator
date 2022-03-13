




/* 
These are the four main basic math functions available
 */
// takes two variables, adds, returns sum
function add(a, b){
    return a + b;
}
//returns difference
function subtract(a, b){
    return a - b;
}
//returns product
function multiply(a,b){
    return a * b;
}
//returns quotient, also has a case for divide by 0
function divide(a,b){
    if(b == 0){return "Error! You shouldn't have done that!"}
    else{
        return a / b;
    }
}