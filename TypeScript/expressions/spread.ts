let nombres: string[] = ['Pedro', 'Juan', 'Luis'];
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let agrupar: any[] = ['Prueba', 100, ...nombres, ...numbers];

//console.log(agrupar);

let libro = {
    autor: 'Oscar',
    titulo: 'La perla perdida',
    fecha: new Date(2020, 1, 4)
};

let vehiculo = {
    color: 'Negro',
    puerta: 'A3',
    marca: 'Toyota'
};

let agrupar2: any = { prueba: 'Hola', ...libro, ...vehiculo };

// console.log(agrupar2);

