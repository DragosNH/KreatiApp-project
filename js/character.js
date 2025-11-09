const race = document.querySelector(".race");
const characterClass = document.querySelector(".class");
const action = document.querySelector(".action");

const charRace = [
    "Human",
    "Dwarf",
    "Elf",
    "Orc",
    "Undead",
    "Hobbit",
    "Goblin",
]

const charClasses = [
    "Warrior",
    "Mage",
    "Wizard",
    "Druid",
    "Hunter",
    "Paladin",
    "Necromancer",
    "Monk",
    "Preist",
    "Thief",
    "Barbarian",
    "Pirate",
    "Ninja",
    "Ranger",
]

const charAction = [
    "Sleeping",
    "Walking",
    "Running",
    "Hiding",
    "Training",
    "Thinking",
    "Laughing",
    "Crying",
    "Climbing",
    "Writting",
    "Digging",
    "Getting ready",
    "Preapering (an attack or spell)",
]

let randRaceIndex = Math.floor(Math.random() * charRace.length);
let randClassIndex = Math.floor(Math.random() * charClasses.length);
let randActionIndex = Math.floor(Math.random() * charAction.length);

race.innerText = charRace[randRaceIndex];
characterClass.innerText = charClasses[randClassIndex];
action.innerText = charAction[randActionIndex];