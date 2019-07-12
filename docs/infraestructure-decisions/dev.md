# [<](../../Readme.md) Configuración del entorno de desarrollo
## NPM Y Package
Antes de empezar deberemos de lanzar este comando teniendo ya npm instalado con las dependencias de desarrollo.

```
npm install
```
## Webpack
Webpack solo se usa en el entorno de desarrollo y todo lo relacionado con WebPack se encuentra en el siguiente fichero.
[Webpack](../structural-decisions/webpack-typescript.md)
Antes de nada deberemos de generar el fichero de variables de entorno haciendo uso del fichero .env.dist y generar nuestro .env que no se sube al repositorio de GIT.

Para lanzar el servidor de desarrollo y empezar a trabajar lanzar el siguiente comando.
```
npm start
```

## Testing
El testing debe de lanzarse para comprobar que nada se haya roto. Para ello se hace uso del siguiente comando en la raiz del proyecto. Todo lo relacionado con Testing se encuentra en los 2 siguientes archivos.

```
npm test
```

- [Testing de los Componentes](../testing/testing-components.md)
- [Testing de los Reducers](../testing/testing-reducers.md)

## Linter
Antes de commitear es conveniente lanzar los siguientes commandos para solucionar todos los problemas de uniformidad del código que el linter ya configurado correctamente arregla. Con el flag fix, soluciona gran parte de los despistes pero no todos, luego deberemos solucionar el resto nosotros a mano.
```
tslint -c tslint.json 'src/**/*.tsx' --fix
tslint -c tslint.json 'src/**/*.ts' --fix
```

# [<](../../Readme.md)