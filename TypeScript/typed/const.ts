// dato que no puede cambiar, no puede mutar. Tiene el mismo alcance que let.

const STATE: Boolean = false;
// STATE = true;

if (true) {
    const STATE: Boolean = true;
}

for (const iterator of [1, 2, 3, 4, 5, 6, 7]) {
    console.log(iterator);
}

