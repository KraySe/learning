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
