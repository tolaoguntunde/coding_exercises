// write a program that 
// outputs Fizz if a given number is divisible by 3
// outputs Buzz if the number is dividible by 5
// outputs FizzBuzz if the number is divisible by 3 and 5
let input = 15;
if (input % 3===0 && input % 5 ===0)
{
    console.log("FizzBuzz")
    
}
else if (input % 3 ===0)
{
    console.log("Fizz")
}
else if (input % 5 ===0)
{
    console.log("Buzz")
}
else{
    console.log("Your input does not meet any of the three conditions,please try again!")
}