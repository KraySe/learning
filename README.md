# ¿Qué es POO?

## Es un paradigma que hace uso de los objetos para la construcción de los software.

## Se busca plasmar la realidad hacia el código.

# ¿Cómo pensamos en objetos?

## Enfócate en algo de la realidad.

## Detalla sus atributos.

## Detalla sus comportamientos o usabilidad.

# Paradigmas

## Tiene diferentes interpretaciones, puede ser un modelo, ejemplo o patrón

## En pocas palabras podemos decir que es una forma o estilo de programación.

# Tipos de paradigmas

## Imperativa.

## Declarativa.

## Estructurada.

## Orientada a objetos.

## Funcional.

---

# Imperativa

## Instrucciones a seguir para dar solución a un problema.

# Declarativa

## Se enfoca en el problema a solucionar.

# Estructurada

## Nos la enseñaron durante nuestra etapa de aprendizaje.

## La solución a un problema sigue una secuencia de inicio a fin.

# Funcional

## Divide el problema en diversas soluciones que serán ejecutadas por las funciones declaradas.

# Orientada a objetos

## Construye soluciones basadas en objetos.

---

# Clases y objetos

## Una clase es una plantilla.

## Un objeto es la instancia de una clase para poder utilizarlo.

---

# Principios POO

## Son una serie de conceptos y fundamentos a tener en cuenta.

### Abstracción.

### Encapsulamiento.

### Herencia.

### Polimorfismo.

---

# Abstracción

## La forma de plasmar algo hacia el código para enfocarnos en su usabilidad.

---

# Objetos

## Características:

    - Estado.
    - Comportamiento.
    - Identidad.

---

# Encapsulamiento

## No toda la información de nuestro objeto es relevante y/o accesible para el usuario.

# Herencia

## La cualidad de heredar características de otra clase.

# Polimorfismo

## Las múltiples formas que puede obtener un objeto si comparte la misma clase o interfaz.

    - Dos formas de hacer polimorfismo.

        -- Interfaces:
                - Son un contrato que obliga a una clase a implementar las propiedades y/o métodos definidos.

        -- Clases Abstractas:
                - Son clases que no se pueden instanciar, solo pueden ser implementadas a través de la herencia.

-- Diferencias :

        - Clases abstractas:

                - 1. Limitadas a una sola implementación.
                - 2. Pueden definir comportamiento base.

        - Interfaces:

                - 1. No tienen limitación de implementación.
                - 2. Expone métodos abstractos ( sin lógica ).

# Relaciones

- En este apartado vamos a estudiar 2 tipos de relaciones:

  . Asociación. ( Una clase pertenece a otra clase, relación: 1 a n, 1 a 1, n a n)
  . Colaboración. ( Hacen referencias a otras clases para lograr un cometido. )

## Asociación

        - Una clase mantiene una asociación de uno a uno con otra clase.

                -- User <-> Adress

        - Una clase mantine una asociación con otra clase a través de una colección.

                -- User -> PhoneNumber[]

        - La asociación se da de ambos lados a través de una colección.

                -- User <<<<->>>> Job

## Colaboración

        - Se da a través de una referencia de una clase con el fin de lograr un cometido.

# SOLID

        - Propuesta por Robert C. Martin en el año 2000.

        - Son recomendaciones para escribir un código mantenible, escalable y robusto.

## Bondades:

        - Alta cohesión. ( Colaboración entre clases. )
        - Bajo acomplamiento. ( Evitar que una clase dependa fuertemente de otra clase. )

# PRINCIPIOS:

## Responsabilidad única

        - Una clase debe tener una razón para existir.
