/* Ejercicio 1 */
const nombre = "Hernan";
let age = 24;
console.log(nombre);
console.log(age);

/* Ejercicio 2 */

Message = `Hola, me llamo ${nombre} y tengo ${age} años.`;
console.log(Message);
/* Ejercicio 3 */

const sum = (a, b) => a + b;
const result = sum(3, 4);
console.log(result);

/* Ejercicio 4 */

const numbers = [5, 10, 20, 30, 40, 50, 60];

const newArray = numbers.map(number => number * 2);

console.log(newArray);

/* Ejercicio 5 */

const pairNumbers = numbers.filter(number => number % 2 === 0);
console.log(pairNumbers);

/* Ejercicio 6 */

const totalAmount = numbers.reduce((acc, number) => acc + number, 0);
console.log(totalAmount);

/* Ejercicio 7 */

const names1 = ["Hernan", "Liz", "Camila"];
const names2 = ["Gabriel", "Lucas", "Celeste"];

const allNames = [...names1, ...names2];

console.log(allNames);

/* Ejercicio 8 */

const pelicula = {
    name: "Scream",
    genero: "terror/comedia",
    año: 1997
};

const {
    name,
    genero,
    año
} = pelicula

console.log(name);
console.log(genero);
console.log(año);

/* Ejercicio 9 */

function movie(pelicula) {
    return `la mejor pelicula es ${name} que tiene un genero de ${genero} y se estreno en el año ${año}`
}
console.log(movie());

/* Ejercicio 10 */

class Persona {
    constructor(nom, edad) {
        this.nom = nom;
        this.edad = edad;

    }
}

class Estudiante extends Persona {
    constructor(nom, edad, curso) {
        super(nom, edad);
        this.curso = curso;
    }

    estudiar() {
        return `Su nombre es ${this.nom}, tiene ${this.edad} años y esta en ${this.curso}.`;
    }
}

const camila = new Estudiante("Camila", "11", "6° grado")

console.log(camila.estudiar())

/* Ejercicio 11 */
import {
    numb
} from './ejercicio_11.js';
resultCuadrado(2).then((result) => console.log('result is: ' + result))

/* Ejercicio 12 */

operator(2).then((result) => console.log('result is: ' + result))


/* Ejercicio 13 */

const funcionErr = (num) => {
    if (num < 0) {
        throw new Error(`El número ${num} es negativo`);
    }
};

const numPositive = (num) => {
    try {
        funcionErr(num);
    } catch (error) {
        console.error(error);
    }
};

numPositive(-1);


/* Ejercicio 14 */

localStorage.setItem("resultCuadrado", resultCuadrado(2));
const result2 = localStorage.getItem("resultCuadrado");
console.log(result2);