# [<](../../Readme.md) Integración entre React y Redux

Usamos redux para manejar toda la lógica y el estado de la aplicación. Y para un par de cosas relacionadas con UI, como las notificaciones, la barra de carga en proceso y el drawer del menu.

Redux se integra con react mediante un provider y con el método connect podemos inyectar a un componente de React funciones para enviar a redux nuevas acciones o propiedades que congemos directamente de los reducers de redux.

Para ello en App inyectamos el store cargado de redux con un Provider y así disponemos de acceso a esos datos.

Dado que intentamos respetar atomic-design, hay un aspecto muy importante que controlar. Atomos, moleculas, organismos y templates deberían de ser abstractos y recibir value models y funciones mockeables y no inyectarles a ellas directamente los datos de redux.

Por este motivo quien se encarga de acceder a los datos de redux y manejar la lógica entre redux y react son las páginas. En las páginas encontraremos esto al final.

```
export const AdminPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminPageInner));
```

Pasándole los mapStateToProps y mapDispatchToProps hacemos la inyección de los elementos de redux a la página y luego ya la página se preocupa de pintar las templates y estas se encargan de pintar organismos, moleculas y atomos.

Con esta estructura tenemos al final muy bien segregado donde tiene que estar cada cosa y hacemos componentes muy testeables sin atender a cual es el estado de redux que haya en ese momento.

## Ejemplos

Hay ejemplos en todas las page y los template donde se puede ver la separación entre ellos claramente.

# [<](../../Readme.md)