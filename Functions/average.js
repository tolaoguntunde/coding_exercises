//write a js function to calculate the average 
//of a list of numbers

let total =0;
function calcAverage(number){
for(i=0; i<number.length; i++)
{
    total=total+number[i]
}

return total/number.length;

}

console.log(calcAverage([20,20,10]))
