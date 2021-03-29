//write a javascript function to sum all the numbers in a list

function sumList(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}

console.log(sumList([1,2,3]))