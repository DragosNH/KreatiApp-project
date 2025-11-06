const colors = new Map([
    ["red", "#ff0000"],
    ["green", "#00ff00"],
    ["blue", "#0000ff"],
    ["black", "#000000"],
    ["white", "#ffffff"],
    ["red-purple", "#e40078"],
    ["mystic", "#d65282"],
    ["bright pink", "#ff007f"],
    ["barbie pink", "#ff3988"],
    ["dark chocolate", "#3c1321"],
]);




let keyNumber = Array.from(colors.keys())
let randIndexForKey = Math.floor(Math.random() * keyNumber.length);

let valueNumber = Array.from(colors.values())
let randIndexForValue = Math.floor(Math.random() * valueNumber.length);


console.log("Colors size is: " + colors.size);
console.log(valueNumber[randIndexForValue]);
console.log(keyNumber[randIndexForKey]);