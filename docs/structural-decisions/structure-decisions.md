# [<](../../Readme.md) Decisiones en la estructura de la aplicación tomadas
## No utilización de create-react-app
No hemos utilizado como base de la aplicación el create-react-app de Facebook por varios motivos. Para empezar no nos sirve para Typescript de serie ya que requiere de ciertas modificaciones en el webpack y requeriría hacer el eject desde el principio. Lo que expondría toda la complejidad del proyecto desde un inicio y no nos interesa. Otra opción hubiese sido haber hecho uso de la librearía react-app-rewired para sobreescribir el webpack de serie. Sin embargo no hemos optado por esta linea de desarrollo

Hemos optado por una configuración de webpack personalizada con una instalación básica que solo incluye lo mínimo y necesario para empezar a funcionar. Así tenemos una configuración mínima que podemos controlar mejor que hay dentro y que no.
## Implementación de Redux
Se ha tomado la decisión de incorporar Redux de cara a poder segregar las acciones que modifican el estado de la definición de los componentes, sacando así la lógica. Esta implementación nos va a permitir una serie de ventajas:
- Capacidades de logging mucho más precisas de la aplicación
- Capacidades de testing de UI mucho más rápido y sencillo inyectando estados.
- Mayor escalabilidad de la aplicación

Las desventajas serían las siguientes
- Mayor curva de aprendizaje de la tecnología

Sin embargo de cara al futuro creemos que esta curva se verá compensada por un código mucho más mantenible a largo plazo.

### Replanteamiento
La curva de aprendzaje de Redux es más pronunciada de lo esperado y ha llevado más tiempo del esperado dominar esta tecnología. Sim embargo ya podemos aprovechar todas las ventajas que ofrece y tenemos ya la estructura montada mediante este sistema.
## Descartado el uso de redux-thunk
Redux-thunk nos permite mandar funciones que devuelven promises a un middleware propio de redux-thunk, que procesa y con ello te abstraes de la llamada API, pero pierdes el control sobre el proceso de llamada a la API y el flujo a través de los middlewares y puedes necesitar modificarlo y volverse demasiado complicado. La solución a este problema es implementar un apiMiddleware que se responsabilice de hacer las llamadas de la API y devuelva un SUCCESS o un FAILTURE indicando cual ha sido la función que lo ha dado.

![Redux with api middleware](../resources/redux-with-api-middleware.jpg)

## Nivel de implementación de redux decidido
Redux es una herramienta de gran potencia y sirve para manejar el estado de la aplicación. Sin embargo redux es muy costoso de implementar a nivel técnico y también si lo usamos sin control para todo podemos tener un perjuicio a nivel de rendimiento.

Esto puede sucedernos por ejemplo con redux-form. Que por cada cambio de foco o por cada tecla que pulsamos lanza un evento y recorre todo el fujo de redux. Esto tiene un perjuicio de rendimiento que haciendo pruebas si hemos notado una perdida de rendimiento en la aplicación.

Creo que un buen enfoque sería usar redux para manejar el estado de los siguientes elementos.
- Routing: Con redux y connected-react-router manejar las rutas
- Llamadas API: Todas las peticiones de API y los cambios que efectuen en la web se realizarán a través de redux-thunk. De esta forma tendremos todo el flujo de la aplicación trazado en redux.
- Sessión: El uso de la sesión se gestionará a través de redux como un estado de si estás logeado o no

Por el momento considero que lo mejor que se puede hacer es evitar hacer uso de librerías como redux-form.

## Uso de atomic-design
Para evitar el caos en la organización de los componentes creemos que es necesario aplicar una filosofía y por la naturaleza del proyecto donde hay formularios dinámicos creemos que este diseño es el que más se aproxima a la realidad.

## Separación de un layout en layout, pods y container
Aunque atomic design habla de layout solo nosotros hemos decidido separarlo, por un motivo simple. 

Si bien un un pod contiene un container y el pod se visualiza dentro de 1 layout siempre en una relación 1-1 con los 3 componentes esta segregación nos permite separar el layout como estructura base que se va a pintar y el container donde se almacena la estrucutura real de subcomponentes. 

De esta forma pueden trabajar varias personas al mismo tiempo en el proyecto en distintos layout sin pisarse en todas las dependencias de un layout.

# [<](../../Readme.md)