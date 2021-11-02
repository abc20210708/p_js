
function operateAll(n1, n2) {
    let results = [n1 + n2, n1 - n2, n1 * n2, n1 / n2];

    return results;

}

let abc = operateAll(5,5)
console.log(`곱셈: ${abc[2]}`);