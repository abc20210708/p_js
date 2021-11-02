function add(n1,n2) {
    return n1 + n2;
}

add(10,20);

function operateAll(n1,n2) {

    let results = [n1 + n2, n1 - n2, n1 * n2, n1 / n2]
    return results;
}

let total = operateAll(1,2);
console.log(total);
