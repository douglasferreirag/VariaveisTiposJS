let nome = "João";

let sobrenome = "Pedro";

console.log(typeof(nome));

let concatenado = nome.concat(sobrenome);

console.log(typeof(concatenado));

console.log(concatenado.length); // tamanho

let exemplo = new String("blablabla");

console.log(typeof(exemplo));

console.log(exemplo);

let vazio = "";

console.log(typeof(vazio));

console.log(nome[1]);

console.log(nome.length);

concatenado = nome + " " + sobrenome;

console.log(concatenado);

concatenado = nome + "\n" + sobrenome;

console.log(concatenado);

concatenado = nome + "\n\n" + sobrenome;

console.log(concatenado);

concatenado = `${nome}  ${sobrenome}`;

console.log(concatenado);

concatenado = `${nome}  

${sobrenome}`;

console.log(concatenado);

concatenado = "\"";

console.log(concatenado);


let frase = "Olá, tudo bem?";

console.log(frase.split(" "));

console.log(frase.includes("tudo")); // procura se tem a palavra tudo na frase.

console.log(frase.startsWith("O")); // Começa com O

console.log(frase.startsWith("R")); // Começa com R

console.log(frase.endsWith("?")); // Termina com ?

console.log(frase.replace(",", "!" ) );

let stringModificada = frase.replace(",", "!" ) ;

console.log("String modificada: " + stringModificada);
