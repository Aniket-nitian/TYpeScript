//! Function return type

function add(num1: number, num2: number): number {
    return num1 + num2; //  return 30
}
// console.log(add(10,20));

function greet(name: string): void {
    console.log(`Hi, ${name}`);
}

// let combineFunction : Function;

// combineFunction = 10; //* invalid
// combineFunction = function(){}; valid
// combineFunction = add; //* valid
// console.log(combineFunction(1,2));
// combineFunction = greet;



//* Good Practice

let combineFunction: (a: number, b: number) => number;
//? fnx having 2 numbers and it's return type is number

// combineFunction = greet; //*invalid
combineFunction = add; //* valid

console.log(combineFunction(100, 200));


// Function type & callbacks

type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: CB) {
    const result = num1 + num2;
    cb(result);
}

addHandle(10, 20, (result: number) => {
    console.log(result);
})





