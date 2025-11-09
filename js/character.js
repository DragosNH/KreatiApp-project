const race = document.querySelector(".race");
const characterClass = document.querySelector(".class");
const action = document.querySelector(".action");

const charRace = [
    "Human",
    "Dwarf",
    "Elf",
    "Orc",
    "Hndead",
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

console.log("Classes so far: " + charClasses.length)
console.log("Actions so far: " + charAction.length)