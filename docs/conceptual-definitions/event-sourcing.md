# [<](../../Readme.md) Event Sourcing y Redux

Aunque Redux no se originó como event sourcing sigue en gran medida esta metodología. El Event Sourcing se basa en que las operaciones de edición del dominio de la aplicación quedan registradas y son secuenciales.

El principio es el mismo que un repositorio GIT con los commits o una cadena Blockchain, se van haciendo modificaciones sobre el estado actual siempre al final del mismo.

Esta metodología se usa aporta una serie de ventajas como la testeabilidad y la capacidad de poder volver a un estado previo y toda la trazabilidad. Esta metodología a nivel de backend se utiliza mucho para sistemas bancarios por su trazabilidad y testeabilidad.

## Redux

Redux permite incorporar esta metodología de desarrollo en el desarrollo Frontend. De tal forma que el estado de la aplicación con que objetos del dominio hemos cargado.

Pero Redux sigue siendo un Framework de Javascript, y en Javascript no hay forma sencilla de garantizar la inmutabilidad de un objeto.

Por este motivo se suele aplicar un framework llamado ImmutableJS. El hecho de no tener el estado inmutable supone que en caso de que volvamos atrás habremos alterado los estados antiguos y habremos roto la trazabilidad clave del Event Sourcing.

### ImmutableJS y porque lo hemos descartado
Este framework nos permite generar un estado cuando hacemos una edición del estado y así siempre generamos una nueva entidad y no rompemos la cadena de trazabilidad al pasado.

Sin embargo el dominio de la aplicación siempre debe de ser lo más puro posible, evitando utilizar librerías externas dado que es la parte más vital de nuestro código y donde nos encontraremos con la lógica. Por este motivo de decidió implementar los estados sin InmutableJS y aplicando otras medidas para garantizar la inmutabilidad.
 
### Solución aplicada al tema de la inmutabilidad
Implementar ImmutableJS no nos libra de seguir manejando un lenguaje que no te deja hacer objetos inmutables, por eso en este aspecto para empezar lo mejor es que los desarrolladores entiendan como funciona JS y como deberían hacerse las modificaciones según el tipo de tipo de dato que manejemos en las colecciones, a continuación un enlace donde se explican todas las posibilidades en Javascript Vanilla.

https://daveceddia.com/react-redux-immutability-guide/

Después para garantizar que estemos haciendo bien las cosas, todos los reducers deben de estar testeados con una cobertura absoluta. Dado que es la lógica de la aplicación. Para esto se deberán crear teses con Jest donde.
Eso ns hemos extendido en el siguiente archivo. 

[Testing de Reducers](../testing/testing-reducers.md)

# [<](../../Readme.md)