# [<](../../Readme.md) Routing

## Funcionamiento general
Las rutas son las que controlan que página vamos a dibujar y cual no. En función de en que ruta nos encontremos pintaremos una página u otra.
Para esto pasamos el componente página a un switch con el patrón de página que queremos.

En este documento explicaremos 
- Como hemos acoplado el react-i18n a este sistema para autogenerar esas rutas sin pedir siempre el locale.
- Como hemos hecho para guardar la ruta en redux.
- Como hemos gestionado los permisos que hemos creado un sistema para controlar si el usuario puede o no acceder a ciertas páginas.
- Como hemos hecho para hacer dispatch automáticos mediante un middleware para precargar los valores al acceder a las páginas.

## Router Middleware
Este middleware es el que se utiliza para crear eventos en la constante routesHandlerActionsOnLoad y en fichero de routes.ts.

Es una clase sencilla que nos permite ahorrarnos implementaciones a medida para hacer cosas parecidas en cada página.

Este middleware nos permite localizar un evento en el momento que se produce un cambio de página y poner un listener en el momento de la carga de la página que nos interese. Mediante el objeto de definición antes dicho podemos decidir.
- Cuando se va a ejecutar el listener pasandole la ruta
- Que vamos a ejecutar en ese momento, haciendo un dispatch del action que nos interese, disponiendo de acceso a las variables de la ruta.

## Multilenguaje con i18n
Se ha decidido hacer uso de las librerías de react-i18next con i18n de javascript internamente y que conecta perfectamente con react.
Sin embargo queremos poder tener en la URL el lenguaje seleccionado y para ello tenemos que hacer algunas modificaciones e incorporarlo bien.

Aquí está el código de ejemplo en el que nos hemos basado para incorporarlo.

https://codesandbox.io/s/j2nxmjywx5

La forma en la que se ha incorporado se puede ver en el App.tsx. En el App se define el path /:locale para todos los comonentes y si no aciertas te redirige al home con el locale por defecto.

```
<Switch>
  <Route path="/:locale" component={AppInner}/>
  <Redirect to={routesLinks().home}/>
</Switch>
```

Y luego nos redirige al AppInner donde tenemos una redirección activa al principio para cambiar el lenguaje sino coincide con el registrado.
```
if (i18n.language !== match.params.locale) {
    i18n.changeLanguage(match.params.locale);
}
```

Y finalmente el switch con los routes.

```
<Switch>
  <PermissionRoute exact path={routerSwitchRoutes().home} component={LoginPage}/>
  <PermissionRoute path={routerSwitchRoutes().initiatives} component={InitiativesPage}
</Switch
```

Las rutas del routerSwitchRoutes ya tienen que tener el locale al principio respetando el patrón de empezar con /es o /eu.

Lo que hemos conseguido con este sistema es que se coja del react-router de la ruta que tenemos y sea esto lo que defina nuestro lenguaje elegido.

En la parte en la que definimos el fichero de routes explicaremos como autogeneramos las rutas sin pedirla a cada componente el locale actual que tenemos.

## Permisos
Para gestionar los permisos, al hacer login la api devuelve un campo llamado zones. En este campo vienen los strings de las zonas que el usuario va a poder visitar. Mediante el uso del componente de ProtectedRouter hacemos estas comprobaciones.
- Si intentamos acceder a la home y sin tener usuario entonces vamos a la home
- Si intentamos acceder a la home y tenemos usuario, nos redirige al dashboard.
- Comprobación de sessión: Si el usuario está a null, deslogueamos
- Comprobación de permisos por página. Si la página a la que intenta acceder tiene los permisos asignados en el usuario la pinta, sino nos redirige al dashboard

Toda esta lógica está en el PermissionRoute

## routes.ts
En el routes tenemos todas las rutas que se utilizan a lo largo de la aplicación. Tanto las llamas a las APIs como las rutas internas para las páginas. A lo mejor convendría separarlos en un fichero de apiRoutes y webRouters.

Básicamente hay una interfaz que implementa propiedades que devuelven strings con la estructura de cada ruta, sin los parametros alterables. routerSwitchRoutes es la constante que se utiliza para estas rutas. Por ejemplo:

```
/:locale/initiatives/:initiativeId/tasks/:taskId
```

Luego el routesLinks en este mismo fichero define la implementación de la conversión del patrón de url anterior en la URL real con los parametros asignados. routesLinks recibiría en el caso anterior los parametros y construiría bien la URL final.

```
/es/initiatives/1234/tasks/54321
```

El locale al routes links no se pide cada vez que quieres generar la nueva ruta, se genera mediante un método locale() que obtiene el locale actual seleccionado en la página y se inyecta al generatePath sin solicitarlo al componente que quiere pintar la ruta destino.

El resultado es que cuando queremos mostrar un link a una iniciativa y una tarea concretas, no pedimos el locale, y podemos poner este método.

```
routesLinks().initiatives(initiative.id, initiative.tasksIds[0])
```

Y si lo que queremos es detectar que estamos en esa página haríamos uso del routerSwitchRoutes

```
routerSwitchRoutes().initiatives
```

## Connected React Router

Esta librería la utilizamos para registar en redux los cambios de ruta de la barra superior. De esta forma podemos hacer la transición mediante actiones de redux. Es una librería externa que solo hay que añadir como middleware.

# [<](../../Readme.md)