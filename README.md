# Frontend mediante React Redux y Typescript
## Descripción leve del proyecto
Esta es la base de proyecto para desarrollar webs mediante React, Redux y Typescript. Están configurados también todos los elementos necesarios para hacer la compilación. También está configurado docker con nginx para funcionar como un proxy inverso para conectar con la API del Backend.

Hay otras funciones incorporadas como el testing con Enzyme, Jest y Sion. Además de esto hay un Linter de typescript incorporado y otros elementos como DotEnv.
- Version de la documentación: 0.0.1

## Indice

### Configuración del entorno y despliegues
- [Configuración del entorno de desarrollo local con webpack DevServer](docs/infraestructure-decisions/dev.md)
- [Configuración cualquier entorno usando Docker Compose](docs/infraestructure-decisions/dev-using-docker.md)
- [Guia de despliegues y documentación](docs/infraestructure-decisions/deploy_and_docs_guide.md)

### Definiciones conceptuales
Se han incoporado una serie de metodologías de desarrollo que deberían de conocerse previamente antes de realizar modificaciones al proyecto, así como un conjunto de referencias y recursos interesantes antes de empezar.
- [Atomic design](docs/conceptual-definitions/atomic-design.md)
- [Event sourcing y Redux](docs/conceptual-definitions/event-sourcing.md)
- [Recursos y Referencias](docs/conceptual-definitions/resources.md)

### Decisiones estructurales
El proyecto se ha construido bajo una estructura básica para satisfacer las necesidades como el sistema de permisos, el middleware de la API, la gestión de la sessión o la implementación de WebPack y Typescript.
- [Decisiones Estructurales](docs/structural-decisions/structure-decisions.md)
- [Librerias seleccionadas](docs/structural-decisions/libraries-selected.md)
- [Estructura de ficheros del proyecto](docs/structural-decisions/folder-structure.md)
- [Webpack y Typescript](docs/structural-decisions/webpack-typescript.md)
- [React-Redux Integration](docs/structural-decisions/react-redux-integration.md)
- [API Middleware](docs/structural-decisions/api-middleware.md)
- [API Session](docs/structural-decisions/api-session.md)
- [Routing System](docs/structural-decisions/routing-system.md)

### Testing
Todo lo relacionado con las covenciones básicas de testing del proyecto que se han asumido.
- [Testing de los reducers](docs/testing/testing-reducers.md)
- [Testing de los componentes](docs/testing/testing-components.md)

### Reducers y Middlewares
En esta sección se explican todo lo relacionado en detalle con el flujo que sigue cada reducer y cada caso concreto.
#### Middlewares
- [API Middleware](docs/structural-decisions/api-middleware.md)
- [Routing Middleware](docs/structural-decisions/routing-system.md)
