/**Write a closure function that receives a value as a parameter, creates a counter and returns updated value every time its being called adding previous counter to new set value */

function updateValue() {
    let counter = 0;

    //inner function does all the work and is a closure to outer fucntion
    return function (value) {
        counter += value;
        return counter;
    };
}

//writing output of function call in a variable so we can keep track of the counters
const output = updateValue();

console.log(output(5)); // Output: 5 (counter = 5)
console.log(output(3)); // Output: 8 (counter = 5 + 3 = 8)
console.log(output(10)); // Output: 18 (counter = 8 + 10 = 18)