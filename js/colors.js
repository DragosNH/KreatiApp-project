const colors = new Map([
    ["Red", "#ff0000"],
    ["Green", "#00ff00"],
    ["Blue", "#0000ff"],
    ["Black", "#000000"],
    ["White", "#ffffff"],
    ["Red-purple", "#e40078"],
    ["Mystic", "#d65282"],
    ["Bright pink", "#ff007f"],
    ["Barbie pink", "#ff3988"],
    ["Dark chocolate", "#3c1321"],
    ["Rose garnet", "#960145"],
    ["Dogwood rose", "#d71868"],
    ["Rose garnet", "#960145"],
    ["Strawberry", "#fc5a8d"],
    ["Dark pink", "#e75480"],
    ["Royal red", "#d00060"],
    ["Sasquatch Socks", "#ff4681"],
    ["Cherry blossom pink", "#ffb7c5"],
    ["Pink", "#ffc0cb"],
    ["Catawba", "#703642"],
    ["Rose red", "#c21e56"],
    ["Ruby", "#e0115f"],
    ["Salmon pink", "#ff91a4"],
    ["Raspberry", "#e30b5d"],
    ["Pictorial carmine", "#c30b4e"],
    ["Debian red", "#d70a53"],
    ["Big dip o'ruby", "#9c2542"],
    ["Pink raspberry", "#980036"],
    ["Paradise pink", "#e63e62"],
    ["Dingy Dungeon", "#c53151"],
    ["Chocolate brown", "#3f000f"],
    ["UA red", "#d9004c"],
    ["Infra red", "#ff496c"],
    ["Spanish carmine", "#d10047"],
    ["Pomegranate", "#660c21"],
    ["Magic Potion", "#ff4466"],
    ["Radical Red", "#ff355e"],
    ["Snow", "#fffafa"],
]);




let keyNumber = Array.from(colors.keys())
let randIndexForKey = Math.floor(Math.random() * keyNumber.length);

let valueNumber = Array.from(colors.values())
let randIndexForValue = Math.floor(Math.random() * valueNumber.length);


console.log("Colors size is: " + colors.size);
console.log(valueNumber[randIndexForValue]);
console.log(keyNumber[randIndexForKey]);


// Stoped at snow from here: https://encycolorpedia.com/named