# ¿ Qué es TypeScript ?

Es un **superset de JavaScript**. Decimos que una tecnología superset cuando añade características a un lenguaje de programación, se puede ejecutar y es válido a para sus programas a pesar de estar escrito en otro lenguaje.

## Características fundamentales

La principal característica de _TypeScript_ es el **tipado estático**. Decimos que un lenguaje es de **tipado estático** cuando cumple con estas características principales:

- Las variables tienen un tipo de dato.
- Los valores sólo se pueden asignar a variables del tipo correspondiente.

```typescript
let edad: number; // Asignamos el tipo number para la variable edad
edad = 20; // La variable ahora sólo uede asignar valores de tipo number
```

A partir de estas dos características principales, se derivan algunas otras, como por ejemplo:

- Interfaces.
- Genéricos.
- Casting de datos. (conversión de tipos)
- Argumentos con tipo.
- Tipo de retorno para las funciones.
- Mucho más.

El contraste de estos lengajes son los de tipado dinámico, como _JavaScript_, estos lengajes suelen ser mucho más flexibles, lo que nos permite escribir código menos verboso.

Por otro lado, los lenguajes de tipado estático se presetan a la implementación de herramientas de desarrollo más avanzadas, como:

- Autocompletado de código.
- Recomendación de qué argumentos recibe una función.
- Auto documentación del código.
- Mejor análisis para detectar errores.

```typescript
class Speaker {
  @Auditable
  n() {
    console.log(20);
  }
}
let speaker: Speaker = new Speaker();
speaker.n();

// Auditable(clsPro: any, methodName: string, descriptor?: any) : void
Auditable();
```

### Para compilar un archivo TS a JS

`tsc nombre-del-archivo`

### Modo observador (watch mode)

`tsc nombre-del-archivo -w`

### Crear tsconfig

`tsc --init`

Para definir donde queremos los archivos compilados en js a través de:

```javascript
  "outDir": "./build"
```

Todos los archivos TS en un solo archivo JS:

```javascript
  "outFile": "./build/bundle.js"
```

Incluir y excluir directorios:

```javascript
  "include": ["app/**/*"],
  "exclude": ["node_modules"]
```

## Tipos de datos

- Boolean.
- Number.
- String.
- Array.
- Tuples.
- Enum.
- Any.
- Void.
- Null.
- Undefined.

Castear variables:

```typescript
let value: any = "it is a string";
let result: number = (<string>value).length;
let result2: number = (value as string).length;
```

## Definir variables

Palabras reservadas:

- var (Alcance de manera global)
- let (Alcance en un solo bloque, puede cambiar su valor)
- const (Alcance en un solo bloque, no puede cambiar su valor)

## Expresiones

### Destructuring

Array:

```typescript
let fruits: string[] = ["apple", "pineapple", "grape"];

let [item1, item2, item3] = fruits;

console.log(item1, item2, item3);

let [, , value3] = fruits;

console.log(value3);
```

Tuple:

```typescript
let person: [string[], number, string, string[]];
person = [["Luis", "Narvaéz"], 24, "masculino", ["música", "lectura"]];

let [nombre, edad, genero, intereses] = person;

console.log(nombre[0], edad, genero, intereses[1]);

let [, , , interes] = person;

console.log(interes[0]);
```

Object:

```typescript
interface IPerson {
  nombre: string[];
  edad: number;
  genero: string;
  intereses: string[];
}

let personObject: IPerson = {
  nombre: ["Luis", "Narvaéz"],
  edad: 34,
  genero: "masculino",
  intereses: ["música", "lectura"],
};

let nombreObject: string[] = personObject.nombre;
let edadObject: number = personObject.edad;

console.log(nombreObject);
console.log(edadObject);

let {nombre: nombreCompleto, edad, genero, intereses} = personObject;

console.log(nombreCompleto, edad, genero, intereses);
```

### Spread

Array:

```typescript
let nombres: string[] = ["Pedro", "Juan", "Luis"];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let agrupar: any[] = ["Prueba", 100, ...nombres, ...numbers];
```

Object:

```typescript
let libro = {
  autor: "Oscar",
  titulo: "La perla perdida",
  fecha: new Date(2020, 1, 4),
};

let vehiculo = {
  color: "Negro",
  puerta: "A3",
  marca: "Toyota",
};

let agrupar2: any = {prueba: "Hola", ...libro, ...vehiculo};
```

## Valores opcionales y por defecto

Opcionales, simbolo '?' :

```typescript
function getValues(object: {value1: string; value2?: number}) {
  let {value1, value2} = object;
  console.log(value1);
  console.log(value2);
}

getValues({value1: "Camisea"});
```

Por defecto:

```typescript
function hello(text: string = "Hola1") {
  console.log(text);
}

hello();
```

## Clase

- Plantilla.
- Características.
- Comportamientos.

## Objeto

- Instancia de una clase.
- Estado, valores o características de un objeto.
- Comportamiento.
- Identidad.
