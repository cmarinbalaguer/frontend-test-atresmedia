# FRONT-END TEST DOG-BREDD

La prueba esta desarrollada con React y Redux para el manejo del estado de la aplicación. Y para hacer la comunicación y peticiones a la Api se ha utilizado Redux-Sagas.

Dentro de 'src' encontramos la estrucctura de carpetas de la prueba:
* En la carpeta 'actions' es donde se encuentran las acciones.
* En la carpeta 'api' es donde se declaran las peticiones a la Api.
* Dentro de la carpeta 'components' se encuentran todos los componentes, desde donde se puede ver como se ha dividido la aplicación. Estos componenetes se han hecho de tal forma que se pueden utilizar sin redux perfectamente, ya que la conexion con redux se hace envolviendo al componente con un contenedor, y estos contenedores se encuentran dentro de la carpeta 'containers'.
* La carpeta 'constants' contiene las constantes de las acciones.
* En la carpeta locale esta la configuración de las traduciones. En el archivo es.json se encuentran las variables de traduccion en españos y en 'en.json' en ingles.
* En 'reducers' encontramos los reducers de la aplicación, separados en dos reducers: listado de razas y conjunto de imágenes de cada raza.
* En la carpeta sagas es donde se encuentran las sagas de la aplicación, en estas sagas será donde una vez ejecuatada una acción se realicen las peticiones a la api y se almacenen las repuestas en el reducer, y así poder controlar perfectamente el estado de la aplicación.
* Carpeta selectors es donde se declara que selectores se van a almacenar en el store.
* En la carpeta store es donde se crea el store de redux.

Se ha utilizado react-router-dom para la navegación.
En la pantalla inicial (/BreedList) aparece un selector de razas de perro, cuando se selecciona una raza aparece el listado de imagenes de esa raza. Si la raza seleccionada dispone de una sub raza, aparecerá otro selector para elegir una sub raza de esa raza elegida, y al elegir esa sub raza aparecera un listado de imágenes de esa sub raza.
El listado de imágenes se ha paginado, con un maximo de 9 imágenes por página.
Al clicar sobre una imagen del listado se mostrara una página con el detalle de la imagen (/DogDetail).

Para la maquetacion e iconos se ha utilizado Material UI.

Para los estilos se ha utilizado sass.

He añadido un archivo .env con la ruta base de la Api. El archivo .env no se sube al repositorio, pero en este caso lo he subido para que funcione la petición a la Api.

Se ha controlado errores al realizar petición y comprobar que ha traido los datos de la api correctamente. Si ha habido algún error saldrá un mensaje y un botón para reintentar y volver hacer la acción.

Se han utilizado prop-types para controlar los tipos usados en los componentes.

Se han aplicado traducciones para dos idiomas (español e ingles), para cambiar de idioma se hará pulsando en 'es' o 'es' en la parte superior derecha de la cabecera.


## Tecnologías
* React
* Redux
* Redux-Sagas

## Inicialización

En la raíz del proyecto, instala las dependencias ejecutando
```bash
npm install
```

Para arrancar la aplicacion ejecutar
```bash
npm start
```

Compilación para modo producción ejecutar
```bash
npm run build
```
Ejecutando este comando los estáticos quedarán alojados en la carpeta build de la raíz.

Compilar test
```bash
npm run test
```

## Test
Los test unitarios estan hechos con Jest y React Testing Library. 
Aquí un resumen de evalución de las preubas realizadas:
```bash
------------------------------------|---------|----------|---------|---------|-------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------------|---------|----------|---------|---------|-------------------
All files                           |   73.99 |    65.22 |   62.86 |   71.43 |                   
 src                                |       0 |      100 |     100 |       0 |                   
  index.js                          |       0 |      100 |     100 |       0 | 8-10              
 src/actions                        |   33.33 |      100 |      20 |   33.33 |                   
  breed.js                          |   14.29 |      100 |       0 |   14.29 | 4-43              
  breedList.js                      |      60 |      100 |      50 |      60 | 10,28             
 src/api/breed                      |   66.67 |      100 |       0 |   66.67 |                   
  index.js                          |   66.67 |      100 |       0 |   66.67 | 6                 
 src/api/breedList                  |     100 |      100 |     100 |     100 |                   
  index.js                          |     100 |      100 |     100 |     100 |                   
 src/api/subBreed                   |      50 |      100 |       0 |      50 |                   
  index.js                          |      50 |      100 |       0 |      50 | 6-9               
 src/app                            |     100 |      100 |     100 |     100 | 
  App.js                            |     100 |      100 |     100 |     100 | 
 src/components/ImgDog              |   66.67 |    33.33 |   33.33 |   72.73 | 
  ImgDog.js                         |   66.67 |    33.33 |   33.33 |   72.73 | 13-15
 src/components/breedDog            |   86.67 |       50 |      50 |   86.67 | 
  BreedDog.js                       |   86.67 |       50 |      50 |   86.67 | 26,51
 src/components/breedSelect         |      75 |    66.67 |      50 |      75 | 
  BreedSelect.js                    |      75 |    66.67 |      50 |      75 | 35-36,40
 src/components/common/errorRequest |   66.67 |      100 |       0 |   66.67 | 
  ErrorRequest.js                   |   66.67 |      100 |       0 |   66.67 | 14
 src/components/common/inputs       |      60 |      100 |   33.33 |      60 | 
  InputSelect.js                    |      60 |      100 |   33.33 |      60 | 11-15
 src/components/common/loader       |     100 |      100 |     100 |     100 | 
  Loader.js                         |     100 |      100 |     100 |     100 | 
 src/components/dogDetail           |     100 |      100 |     100 |     100 | 
  DogDetail.js                      |     100 |      100 |     100 |     100 | 
 src/components/header              |   72.73 |    55.56 |   33.33 |   72.73 | 
  Header.js                         |   72.73 |    55.56 |   33.33 |   72.73 | 16-17,29
 src/components/page                |     100 |      100 |     100 |     100 | 
  Page.js                           |     100 |      100 |     100 |     100 | 
 src/constants/actions              |     100 |      100 |     100 |     100 | 
  breed.js                          |     100 |      100 |     100 |     100 | 
  breedList.js                      |     100 |      100 |     100 |     100 | 
 src/containers/breedSelect         |     100 |      100 |     100 |     100 | 
  BreedSelectPage.js                |     100 |      100 |     100 |     100 | 
 src/locale                         |     100 |      100 |     100 |     100 | 
  i18n.js                           |     100 |      100 |     100 |     100 | 
 src/reducers                       |       0 |        0 |       0 |       0 | 
  index.js                          |       0 |        0 |       0 |       0 | 
 src/reducers/breed                 |      50 |      100 |       0 |      50 | 
  breed.js                          |      50 |      100 |       0 |      50 | 20
 src/reducers/breedList             |     100 |      100 |     100 |     100 | 
  breedList.js                      |     100 |      100 |     100 |     100 | 
 src/reducers/utilsReducer          |     100 |      100 |     100 |     100 | 
  index.js                          |     100 |      100 |     100 |     100 | 
 src/sagas                          |     100 |      100 |     100 |     100 | 
  index.js                          |     100 |      100 |     100 |     100 | 
 src/sagas/breed                    |   17.65 |      100 |      50 |   17.65 | 
  breed.js                          |   17.65 |      100 |      50 |   17.65 | 22-41
 src/sagas/breedList                |   71.43 |      100 |     100 |   71.43 | 
  breedList.js                      |   71.43 |      100 |     100 |   71.43 | 18-20
 src/selectors/breed                |     100 |       75 |     100 |     100 | 
  breed.js                          |     100 |       75 |     100 |     100 | 3,6
 src/selectors/breedList            |     100 |     87.5 |     100 |     100 |
  breedList.js                      |     100 |     87.5 |     100 |     100 | 3
 src/store                          |     100 |      100 |     100 |     100 |
  store.js                          |     100 |      100 |     100 |     100 |
------------------------------------|---------|----------|---------|---------|-------------------
```