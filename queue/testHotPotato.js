import hotPotato from "./hotPotato.js";

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);

result.elimitated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
})

console.log(`The winner is: ${result.winner}`);