function getValues(object: { value1: string, value2?: number }) {
    let { value1, value2 } = object;
    console.log(value1);
    console.log(value2);
}

getValues({ value1: 'Camisea' });

function hello(text: string = 'Hola1') {
    console.log(text);
}

hello();
