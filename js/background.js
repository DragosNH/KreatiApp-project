const place = document.querySelector(".place");
const time = document.querySelector(".time");

const places = [
    "A crouded capital with a castle in the background",
    "A magical forest with a mysterious source of power",
    "The ruins of an old castle still haunted by it's previous wars",
    "The trone room of a powerful king",
    "A small peaceful village",
    "A huge storm on a cursed forest",
    "A coasy library with a fire burning inside a chimney",
    "A prepared arena before the big event",
    "A peaceful river in the middle of a forest",
    "The entrance gate of a kingdom",
];

const timeOfTheDay= [
    "during morning",
    "during afternoon",
    "during night",
    "during midnight",
    "during twilight",
    "during noon",
    "during evening",
    "at the dawn",
    "at the sunrise",
    "at the sunset",
];

let placesIndex = 0;
placesIndex = Math.floor(Math.random() * places.length);
let timeIndex = Math.floor(Math.random() * timeOfTheDay.length);

place.innerText = places[placesIndex];
time.innerText = timeOfTheDay[timeIndex];