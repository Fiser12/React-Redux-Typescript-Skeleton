# [<](../../Readme.md) Explicación de la estructura de carpetas y ficheros del proyecto

- src: Carpeta con todo el código del frontend
    - common: En esta carpeta va el código que es común a todo el proyecto, pueden ir en ella elementos desde componentes que reutilicemos o clases de apoyo. Sería una carpeta con el código que podríamos extraer a una librería externa y utilizarlo en otros proyectos.
    - core: En core guardamos clases relacionadas con la definición de las rutas y constantes globales al proyecto.
    - layout: Serían las plantillas de atomic design que vamos a incorporar
    - pages: Serían las páginas de atomic design que vamos a incorporar
    - pods: No está relacionado con atomic design pero sería cada componente de cada layout en una subcarpeta diferente y su estructura interna sería la siguiente con extensiones para cada tipo de componente:
        - xxx.template.tsx: El template es la página sin la lógica aplicada. En page está la lógica y los accesos a redux y en el template solo recibe las cosas como dependencias.
        - xxx.atom.tsx: Esta nomenclatura para cada atom, incluso subcarpeta para atoms, si se reutilizan sacarlos a common
        - xxx.component.tsx: Esta nomenclatura para cada componente o molecula (son lo mismo), si se reutilizan sacarlo a common
        - xxx.organism.tsx: Esta es la nomenclatura para los organism o también llamados compositions. 

- docs: Carpeta con toda la documentación del frontend
- state: Todos los ficheros relacinados con el estado y la lógica de negocio implementada mediante redux
- node_modules: Carpeta con todas las dependencias del proyecto
- package.json: Fichero que marca las versiones máximas de las dependencias que se descargarán
- package-lock.json: Fichero con todas las dependencias bloqueadas que se descargarán
- tsconfig.json: Configuración del compilador de typescript
- webpack.config.js: La coel compilador de ES6 a ES5 y otras funciones como la minificación del código y su ofuscación.nfiguración d

# [<](../../Readme.md)