const colors = new Map();
colors.set("red", "#ff0000");
colors.set("green", "#00ff00");
colors.set("blue", "#0000ff");


let randIndex = Math.floor(Math.random() * colors.length);


console.log(colors.keys());