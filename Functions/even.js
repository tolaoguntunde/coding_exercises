function even(numbers) {
    let evenNumbersArray = []
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i] !== 0 && numbers[i] % 2 === 0) {
            evenNumbersArray.push(numbers[i])
        }
    }

    return squares(evenNumbersArray);
}

function squares (numbers) {
    let squares = []
    for(let i=0; i<numbers.length; i++) {
        squares.push(numbers[i] ** 2)
    }

    return squares;
}

console.log(even([1,2,3,4,5,6,7,8,9,0]))