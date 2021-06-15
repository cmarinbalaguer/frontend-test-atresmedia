# FRONT-END TEST ATRESMEDIA

La prueba esta desarrollada con React y Redux para el manejo del estado de la aplicación. Y para hacer la comunicación y peticiones a la Api se ha utilizado Redux-Sagas.

Dentro de 'src' encontramos la estrucctura de carpetas de la prueba:
* En la carpeta 'actions' es donde se encuentran las acciones.
* En la carpeta 'api' es donde se declaran las peticiones a la Api.
* Dentro de la carpeta 'components' se encuentran todos los componentes, desde donde se puede ver como se ha dividido la aplicación. Estos componenetes se han hecho de tal forma que se pueden utilizar sin redux perfectamente, ya que la conexion con redux se hace envolviendo al componente con un contenedor, y estos contenedores se encuentran dentro de la carpeta 'containers'.
* La carpeta 'constants' contiene las constantes de las acciones.
* En 'reducers' encontramos los reducers de la aplicación, separados en dos reducers: listado de razas y conjunto de imágenes de cada raza.
* En la carpeta sagas es donde se encuentran las sagas de la aplicación, en estas sagas será donde una vez ejecuatada una acción se realicen las peticiones a la api y se almacenen las repuestas en el reducer, y así poder controlar perfectamente el estado de la aplicación.
* Carpeta selectors es donde se declara que selectores se van a almacenar en el store.
* En la carpeta store es donde se crea el store de redux.

Se han utilizado prop-types para controlar los tipos usados en los componentes.

Para los estilos se ha utilizado sass.

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
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   75.64 |    64.71 |   69.44 |   74.65 |                   
 src                        |       0 |      100 |     100 |       0 |                   
  index.js                  |       0 |      100 |     100 |       0 | 8-10              
 src/actions                |      50 |      100 |      25 |      50 |                   
  breed.js                  |   33.33 |      100 |       0 |   33.33 | 4-11              
  breedList.js              |   66.67 |      100 |      50 |   66.67 | 10                
 src/api/breed              |      50 |      100 |       0 |      50 |                   
  index.js                  |      50 |      100 |       0 |      50 | 5                 
 src/api/breedList          |     100 |      100 |     100 |     100 |                   
  index.js                  |     100 |      100 |     100 |     100 |                   
 src/app                    |     100 |      100 |     100 |     100 |                   
  App.js                    |     100 |      100 |     100 |     100 |                   
 src/components/ImgDog      |   66.67 |     37.5 |   33.33 |      75 |                   
  ImgDog.js                 |   66.67 |     37.5 |   33.33 |      75 | 10-11             
 src/components/breedDog    |     100 |      100 |     100 |     100 | 
  BreedDog.js               |     100 |      100 |     100 |     100 | 
 src/components/breedSelect |   66.67 |      100 |      40 |   66.67 | 
  BreedSelect.js            |   66.67 |      100 |      40 |   66.67 | 14,24-28
 src/constants/actions      |     100 |      100 |     100 |     100 | 
  breed.js                  |     100 |      100 |     100 |     100 | 
  breedList.js              |     100 |      100 |     100 |     100 | 
 src/containers/breedSelect |     100 |      100 |     100 |     100 | 
  BreedSelectPage.js        |     100 |      100 |     100 |     100 | 
 src/reducers               |       0 |        0 |       0 |       0 | 
  index.js                  |       0 |        0 |       0 |       0 | 
 src/reducers/breed         |      50 |      100 |       0 |      50 | 
  breed.js                  |      50 |      100 |       0 |      50 | 14
 src/reducers/breedList     |     100 |      100 |     100 |     100 | 
  breedList.js              |     100 |      100 |     100 |     100 | 
 src/reducers/utilsReducer  |     100 |      100 |     100 |     100 | 
  index.js                  |     100 |      100 |     100 |     100 | 
 src/sagas                  |     100 |      100 |     100 |     100 | 
  index.js                  |     100 |      100 |     100 |     100 | 
 src/sagas/breed            |   33.33 |      100 |   66.67 |   33.33 | 
  breed.js                  |   33.33 |      100 |   66.67 |   33.33 | 15-19
 src/sagas/breedList        |   66.67 |      100 |     100 |   66.67 | 
  breedList.js              |   66.67 |      100 |     100 |   66.67 | 17-19
 src/selectors/breed        |     100 |       50 |     100 |     100 | 
  breed.js                  |     100 |       50 |     100 |     100 | 3
 src/selectors/breedList    |     100 |      100 |     100 |     100 | 
  breedList.js              |     100 |      100 |     100 |     100 | 
 src/store                  |     100 |      100 |     100 |     100 | 
  store.js                  |     100 |      100 |     100 |     100 | 
----------------------------|---------|----------|---------|---------|-------------------
```
