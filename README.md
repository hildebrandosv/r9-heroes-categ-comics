# Front End 7 | Academia Geek
## Reto: Heroes (Categoría Comics) - Marvel & DC | Sesión 21 dec 2021 

> ## Formador : John Florez | @JohnFlorez25
> ## [WebPage] https://hildebrandosv.github.io/r9-heroes-categ-comics/
#### [Repositorio] https://github.com/hildebrandosv/r9-heroes-categ-comics
___
### --> ENUNCIADO:
#### * Ejercicio con "json-server" y datos en "json" como bases de datos para uso de promesas en ambiente de pruebas.
> [Link_Ejercicio] https://docs.google.com/document/d/1nF50bUhiTEO5Fa1Jou5RwRxqU-hJZpTK/edit?usp=sharing&ouid=106083708411687794311&rtpof=true&sd=true

### --> Notas de importancia:
> - Actualización de **NODE.JS**: Descargar el instalador desde la web con la última versión e instalarla desde windows.

> - Actualización de **npm**: desde la ventana de comandos ejecutar "***npm i -g update npm***".
Si al verificar la versión instalada desde *Gitbash* no se ve la última versión, usar el comando "***hash -r***" para borrar la *caché* de *Gitbash*, y si aún así no se ve la actualización, entonces se ejecuta de nuevo la actualización.
Si aún asi la actualización no funciona, entonces hay que istalarlo de nuevo con "***npm i -g install npm***".

> - Instalación de **JSON.SERVER**: desde la ventana de comandos ejecutar "***npm i -g json-server***".

> - **LEVANTAR EL SERVICIO** de ***json-server***: en la ventana de comandos se ativa el servidor con "***json-server --watch data/_dbmain***". Por defecto se activa en el puerto *3000*, pero si quiero subirlo en un puerto diferente se adiciona al comando el modificador ***--port "número de puerto"***.
>   * NOTA: **_dbMain.json** es una tabla *comodín* para levantar el servicio sin necesidad de tener archivos JSON en la carpeta de "data/" y habilita una tabal que se llama "**tbMain_config**" que está vacia y que después la voy a usar para guardar datos de configuración inicial.
>   * Creé un **package.json** con el escript para **levantar el servicio de json-server**, desde la consola y ubicado en la carpeta madre de "data/", usando el comando **npm run jserver?**, donde "**?** es un consecutivo, dependiendo de las tablas que se vayan a usar.

## --> PANTALLAS DE EVIDENCIA:

### - Envío/Entrega:

### - Código fuente:
![image](https://user-images.githubusercontent.com/73366557/147269655-b552e2bf-66eb-482a-83e2-df480f5e57fc.png)

### - Resultado:
Ejercicio sobre categorías de comics según los héroes de la clase del 21/dic/2021
___
### Hildebrando Sierra V.

