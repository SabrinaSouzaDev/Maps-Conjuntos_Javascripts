const meuArray = [30, 20, 80, 110, 120, 130, 140, 150];

function ar(arr) {
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(ar(meuArray));