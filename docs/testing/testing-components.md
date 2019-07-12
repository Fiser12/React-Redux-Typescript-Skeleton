# [<](../../Readme.md) Testing de los componentes

Los componentes de React siguiendo la filosofía de Atomic Design nos estaríamos refiriendo a componentes puros. Es decir este testing iría dirigido a:

- Átomos
- Moleculas
- Organismos
- Templates

Todos los teses de componentes de react deberán de ir junto con los componentes en la misma carpeta, por ejemplo.

```
[Folder] button-shopping-cart
- button-shopping-cart.atom.tsx
- button-shopping-cart.atom.test.tsx
```
Los componentes en base a objetos del dominio que les pasemos deberían de pintarse bien en la interfaz y poder usarse, por ejemplo testeando que al pulsar en un elemento de una lista el evento se lance.
Todo este testing lo podremos realizar mediante Jest, Enzyme y Sion.

- Jest: Es la base del testing, nos proporciona la entrada para ejecutar los teses y las validaciones sobre objetos de javascript. Un framework muy flexible y está configurado para poder hacerse teses en .tsx.
- Enzyme: Este framework se acopla sobre Jest y podemos wrappear un componente de React y analizarlo mediante un selector de JQuery para comprobar que se haya construido correctamente y realizar las verificaciones.
- Sion: Es el framework que nos permite pasar métodos wrappeados para comprobar fácilmente si se han ejecutado al pasar unos ciertos parametros.

## Posible creación de un Storybook
Los componentes lo interesante de ellos es poder visualizarlos en un storybook, con datos mockeados y más funciones. Hay una librería para ello que se llama Storybook.

## Ejemplo de tests
Un ejemplo de un componente testeado complejo usando todas herramientas sería el siguiente.

```
it("On visible list of categories and click on one launch an event", () => {
    const onClickChangePage = sinon.spy();

    const props = {
        categories: [
            categoryMocked(1),
            categoryMocked(2),
            categoryMocked(3),
        ],
        onClickChangePage: (id: number) => onClickChangePage,
        visible: true,
    };

    const event = {
        target: {value: "2"},
    };

    const wrap = shallow(
        <SearchBoxDropdownResults
            categories={props.categories}
            onClickChangePage={props.onClickChangePage}
            visible={props.visible}
        />,
    );

    wrap.find("li").at(0).simulate("click");
    expect(onClickChangePage.calledOnce).toEqual(true);
});
```

# [<](../../Readme.md)