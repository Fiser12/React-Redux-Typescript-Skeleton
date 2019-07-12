# [<](../../Readme.md) Librerías externas seleccionadas
## Typescript
Se ha decidido hacer uso de Typescript y no de JS Vanilla porque con Typescript podemos optar por hacer comprobaciones del código en fase de compilación y nos podemos ahorrar muchas comprobaciones en tiempo de ejecución, generando así un código más eficiente. Por ejemplo ahorrandonos PropTypes haciendo uso de interfaces.

Necesitamos un transpilador, una vez interpretado el código en typescript o ts o typescript react o tsx tenemos que transpilarlo. Para pasarlo de ts o tsx a js o jsx necesitamos el transpilador propio de typescript que es el que mejor funciona.

## React y React DOM
React es una librería de desarrollo frontend escrita en JS que nos permite organizar el código en componentes y crear un flujo de ejecución y actualización de sus datos que se encarga React de actualizar. De esta forma podemos crear una aplicación más limpia donde el nucleo del peso de la aplicación está en código JS y no en plantillas HTML.

ReactDOM es la librería de React que nos permite integrarlo con el DOM de un navegador.

## Redux
Es una librería de gestión del estado de la aplicación mediante acciones, reducers y middlewares. Esto permite separar la lógica de la aplicación de react, usando react para gestionar estados simples y redux para manejar la lógica de la aplicación mediante eventSourcing.

## Webpack
Con el código transpilado de Typescript en ficheros ts o tsx a js o jsx tenemos que convertirlo a ficheros js en ES5, dado que los tenemos en ES6 aun y no son compatibles con los navegadores como IE11.
Además los navegadores no pueden interpretar archivos jsx. Con un webpack correctamente configurado podremos pasar a ES5 y hacer nuestra aplicación compatible hasta ES5..

## Material Ui
Material UI es una librería de React que nos permite incorporar los estilos de Material Design a una aplicación de React. Es decir trabajamos sobre un estandar de estilos depurado y validado por una gran empresa como es google, además con una gran capacidad de modificación.

MaterialUI en si es un wrapper sobre los estilos de Material Design que nos  permite una incoporación más amigable junto con react, permitiendonos incorporar los estilos directamente dentro de la definición de cada componente. Esto permite aislar dichos componentes a nivel de estilos y que sean independientes y puedan tratarse de forma aislada.
## Axios

Axios es una librería de JS para realizar llamadas a una API haciendo uso de Promises, esto nos permite trabajar de forma asincrona en nuestras llamadas APIs y no parar el flujo de ejecución.
 
Las llamadas API se harán a través de un middleware personalizado donde lanzando actions el middleware se encargará de realizar la llamada API y mandar la respuesta a los reducers correspondientes.

#Recursos
En la siguiente carpeta compartida disponemos de muchos cursos y documentación al respecto.

[\\192.168.100.24\Analisis\PROYECTO\Devops\DOCUMENTACION\Frontend]()

# [<](../../Readme.md)