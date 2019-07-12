# [<](../../Readme.md) Testing de los reducers
Como está parcialmente explicado en el fichero de [Event Sourcing](../conceptual-definitions/event-sourcing.md) es necesario garantizar la inmutabilidad de los reducers y además estos contienen toda la lógica de la aplicación. Por eso es probablemente la parte de la aplicación más crítica en cuanto a necesidad de testing

Estos teses se localizarán en la carpeta \_\_tests\_\_ dentro de la carpeta state.

1. Generemos un estado inicial completamente nuevo y se lo pasemoos al reducer a testear, mediante un método llamado *initialState()* que todo reducer debe de tener. Si no necesitamos un estado inicial en un fichero de mock, haremos un método con un estado cargado en el momento que nos interese
2. Generaremos el action que vamos a lanzar al reducer.
3. Lanzamos el action sobre el reducer con el estado cargado.
4. Por último una vez ya se ha ejecutado, guardando una instancia al estado previo, comprobaremos que el estado previo que hemos pasado al principio al reducer coincida con el estado inicial que hemos mandado (Así comprobamos que hemos garantizado la inmutabilidad)
5. Hacemos lo mismo pero con el nuevo estado que nos devuelve el reducer y comprobando con un estado mockeado u objetos de dominio mockeados que se haya realizado la modificación adeacuada.

Un pequeño código de ejemplo de como testear uno caso concreto de un reducer inventado.

```
    it("API_SUCCESS EVENT_GET_BY_ID", () => {
        const action = apiSuccess([
            {
                categoryId: 1,
                city: "city",
                country: "country",
                date: new Date("2019-06-01T17:18:27.089Z"),
                description: "description1",
                id: 1,
                imageUrl: "imageUrl",
                thumbnailImageUrl: "thumbnailImageUrl",
                title: "title1",
                venueName: "venueName",
            },
        ], EventActionType.EVENT_GET_BY_ID);

        const previousState = initialState();
        const state = accountReducer(
            previousState,
            action,
        );
        expect(previousState.eventsCache).toEqual([]);
        expect(state.eventsCache).toEqual([eventMocked(1)]);
        expect(previousState.tickets).toEqual([]);
        expect(state.tickets).toEqual([]);
    });
```

Es necesario tener en cuenta que debemos de cargar el estado completo y ejecutar solo 1 acción por test. Es decir mockear los estados para cada situación posible que creamos que pueda afectar diferente. Sino lo hacemos así podemos hacer un cambio que rompa varios teses en lugar de solo el test que debería de romper.

# [<](../../Readme.md)