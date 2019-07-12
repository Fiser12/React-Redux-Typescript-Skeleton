# [<](../../Readme.md) Guía de despliegues y configuración
## GIT
Aunque no se ha realizado hasta ahora, se va a empezar a trabajar en ramas para agregar funcionalidades. 

Los despliegues a preproducción se van a realizar únicamente a través de tags, mientras que ha desarrollo por lo que se merge a la rama de master.

## Realizar un despliegue a desarrollo
Aunque el servidor de desarrollo aun no está configurado para este frontend, cuando lo esté, se desplegará en desarrollo cuando Jenkins detecte un nuevo commit en la rama de master.

## Realizar un despliegue a preproducción y luego a producción
Se desplegarán tags a preprod y a prod con el objetivo de tener etiquetados los momentos exactos y los puntos concretos. Este versionado será incremental para simplificar.

Entre despliegue y despliegue se redactará un CHANGELOG.md en la raiz del proyecto actualizandolo cada vez para mostrar los cambios que se van realizando.
## Documentación
La documentación del proyecto se localiza en la carpeta docs dentro del proyecto. Además de esto la documentación va etiquetada con el número de versión actual y se actualiza previa a cada despliegue a preproducción.
Es decir que deberíamos de poder fijarnos en los tags de git para poder ver los cambios entre documentaciones.

# [<](../../Readme.md)