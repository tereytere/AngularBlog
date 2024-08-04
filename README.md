# AngularBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Descripción
  
  - El objetivo de este ejercicio es desarrollar un sistema sencillo de blogging
  - La aplicación que desarrollemos dispondrá de dos rutas:

/posts. Se trata de la ruta que da acceso a los diferentes Post que tengamos en el blog

/new. Dentro de esta ruta encontramos el formulario que nos permitirá agregar nuevos Post dentro de nuestro sistema

  - Cada una de estas rutas está representada por un componente (ListaPosts y Formulario)

## PASOS A SEGUIR:

  - Definir el modelo de datos de nuestra aplicación.
    - En este caso tendremos que definir el interfaz Post que cuenta con las siguientes propiedades:
      - titulo, texto, autor, imagen (puede ser una url), fecha, categoria

  - El siguiente paso es la creación del Servicio que se encargará de manejar la información de nuestra aplicación.
    - Dentro del servicio necesitamos definir un array como propiedad del mismo donde insertaremos los diferentes Post
    - Dicho servicio dispondrá de un método create(Post) que nos permitirá agregar los Post cuando lo indiquemos desde el formulario
    - Además incluiremos el método getAll para recuperar todos los Post de nuestro blog
    - Y por último definiremos el método getByCategoria(cat) para que nos devuelva los post de una categoría concreta

  - El siguiente elemento a definir es el componente ListaPosts
    - Se trata de un componente que, recibe del servicio todos los Post y los muestra de manera ordenada.
      - (opcional) Disponer de una serie de botones que nos permitan filtrar por categoría.

  - Por último, desarrollaremos el componente Formulario
    - Este componente representa un formulario con los diferentes campos del modelo Post.
    - Cuando pulsemos el botón enviar, el formulario debe mandar al servicio la información del nuevo Post para que se almacene junto a los demás.

## Para subir nota:

  - Podemos usar localStorage para guardar la información de los posts creados

