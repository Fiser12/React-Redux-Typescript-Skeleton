# [<](../../Readme.md) Webpack y Typescript

Este proyecto a la hora de compilar los archivos de typescript (ts y tsx) a ECMAScript5 sigue un flujo que es necesario tener presente.
Dado que el transpilador de Typescript a ES6 funciona muy bien pero a ES5 no tanto, dejamos que Typescript haga el trabajo que sabe hacer. Y luego usamos Webpack para transpilar a ES5 desde el ES6 generado.

Todo esto está definido en los ficheros de webpack.config.js y en tsconfig.

El uso de typescript fue lo que nos descartó hacer uso de la base de proyectos react que proporciona Facebook.

## Alias

Hemos creado unos alias para cada carpeta para que puedan accederse a ellas sin rutas relativas. Pero esta configuración no he conseguido que funcione en el entorno de testing con lo cual no es usable y seguimos tirando de rutas relativas.

Lo ideal sería usar alias y empezar a usar index.tsx para definir las dependencias por carpetas y no por archivos como hacemos ahora.

## Proxy con Webpack

Para evitar el problema de CORS en local hemos configurado el proxy de Webpack apuntando al servidor de desarrollo. Sin embargo esta configuración sería diferente a producción

## Otras funcionalidades
También está activo en el repositorio la minificación de CSS y la ofuscación y minificación del JS.

# [<](../../Readme.md)