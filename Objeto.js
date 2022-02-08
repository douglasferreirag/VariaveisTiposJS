let obj = {};

console.log(obj);

console.log(typeof(obj));

obj.name = "Julia";

console.log(obj.name);

console.log(obj);

obj.age = 20;

console.log(obj);

console.log(Object.values(obj)); // valores

console.log(Object.keys(obj)); // chaves

let person = {

    name: "Julia",

    age: 20,

    adress: "Rua 2"

}

console.log(person);

console.log(person.name);

console.log(person["name]"]);

person["numberOfSiblings"] = 3;

console.log(person);

let mom = "nameOfMon";

person[mom] = "Maria";

console.log(person);

person.mom = "Marta";

console.log(person);