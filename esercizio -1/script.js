//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bikes = [
    {
        marca: "bianchi",
        peso: "8",
    },

    {
        marca: "cinelli",
        peso: "8,6",
    },

    {
        marca: "santa cruz",
        peso: "3,4",
    },

    {
        marca: "focus",
        peso: "7,7",
    },

    {
        marca: "scott",
        peso: "6",
    },

    {
        marca: "graziella",
        peso: "2",
    },
];

let lightweightbike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].peso < lightweightbike.peso) {
        lightweightbike = bikes[i];
    }
}

console.log("La bici più leggera è:", lightweightbike.marca, "con un peso di", lightweightbike.peso, "kg");