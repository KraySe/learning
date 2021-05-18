# Relaciones

- Existen 2 tipos de relaciones:

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
