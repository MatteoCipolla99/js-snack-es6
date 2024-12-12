//Snack2
//Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        nameteams: "Inter",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Juventus",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Milan",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Napoli",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Roma",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Lazio",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Atalanta",
        puntifatti: "0",
        fallisubiti: "0"
    },
    {
        nameteams: "Fiorentina",
        puntifatti: "0",
        fallisubiti: "0"
    },
]

for (let i = 0; i < teams.length; i++) {
    teams[i].punti = Math.floor(Math.random() * 101);
    teams[i].fallisubiti = Math.floor(Math.random() * 71);

}

const teamAndFouls = [];
for (let i = 0; i < teams.length; i++) {
    teamAndFouls.push({ nameteams: teams[i].nameteams });
    teamAndFouls.push({ fallisubiti: teams[i].fallisubiti });
}

console.log("teams:", teams);
console.log("team and fouls:", teamAndFouls);
