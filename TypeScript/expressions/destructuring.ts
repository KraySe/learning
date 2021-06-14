// Array destructuring
let fruits: string[] = ['apple', 'pineapple', 'grape'];

let [item1, item2, item3] = fruits;

console.log(item1, item2, item3);

let [, , value3] = fruits;

console.log(value3);
// Tuple destructuring
let person: [string[], number, string, string[]];
person = [['Luis', 'Narvaéz'], 24, 'masculino', ['música', 'lectura']];

// let [nombre, edad, genero, intereses] = person;

// console.log(nombre[0], edad, genero, intereses[1]);

let [, , , interes] = person;

console.log(interes[0]);
// Object destructuring
interface IPerson {
    nombre: string[],
    edad: number,
    genero: string,
    intereses: string[],
}

let personObject: IPerson = {
    nombre: ['Luis', 'Narvaéz'],
    edad: 34,
    genero: 'masculino',
    intereses: ['música', 'lectura']
};

let nombreObject: string[] = personObject.nombre;
let edadObject: number = personObject.edad;

console.log(nombreObject);
console.log(edadObject);


let { nombre: nombreCompleto, edad, genero, intereses } = personObject;

console.log(nombreCompleto, edad, genero, intereses);







