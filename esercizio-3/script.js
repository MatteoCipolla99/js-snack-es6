//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.



function filter(array, numA, numB) {
    let anotherArray = []
    for (let i = 0; i < array.length; i++) {
        if (numA <= i && i <= numB) {
            anotherArray.push(array[i])
        }
    }
    return anotherArray;
}

const numbeArray = [1, 2, 3, 4, 5, 6, 7, 8,]
console.log(filter(numbeArray, 2, 5))

