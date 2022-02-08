let array  = [];

let array2 = new Array();

array.push(3);

console.log(array);

array.push(2); // adiciona no final

console.log(array);

array.pop(); // tira no final

console.log(array);

array.push(2);

array.push(5);

array.shift(); // tira no inicio

console.log(array);

array.unshift(1); // tira no final

console.log(array);

for(let i = 0; i < array.length; i++)

    console.log(array[i]);


console.log(array.includes(3));

console.log(array.every(item => item === 5)); // todos os ítens são iguais a 5

console.log(array.some(item => item === 5)); // algum ítem é 5?

array.reverse(); // reverter o array

console.log(array);



