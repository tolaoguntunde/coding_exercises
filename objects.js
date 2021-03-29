let person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// console.log(Object.keys(person))
// person.firstName = "Joe"
// person.lastName = "Biden"

console.log(person.fullName())