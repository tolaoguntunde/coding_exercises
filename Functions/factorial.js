//write a js function to compute the factorial of a given number N

function calcFactorial(num){
    multi =1

for (i=1; i<num+1; i++){

    multi *= i;
}

return multi;
}
console.log(calcFactorial(4))
