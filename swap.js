function swap(a, b) {
    let temp = a
    a = b
    b = temp

    return [a, b]
}

console.log(swap(5,6))

function even(numbers) {
    let evenNumbersArray = []
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evenNumbersArray.push(numbers[i])
        }
    }

    return evenNumbersArray;
}

console.log(even([1,2,3,4,5,6,7,8,9]))