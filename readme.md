PROYECTO CRUD -->

El Proyecto CRUD consiste en "registrar atletas" que se inscribirán en una single page para participar en una maratón de 21k.

El código se desarrolla en Visual Studio Code y utliza: HTML5, JavaScript, Bootstrap, CSS y Jason para su construcción, siendo a través de gitbash y github el canal de entrega al cliente.

Parte 1: HTML -->

Se desarrolla el head integrando link bootstrap para dar estilo.
El formulario contempla el "registro de los atletas" que se inscribirán en la Maratón 21K. Deben ingresar su "nombre completo, email y teléfono". Contempla un botón para "agregar" los datos de registro a una "tabla" visible en front end. 

Una vez registrados los datos: nombre completo, email y teléfono, aparecen en una tabla que en su encabezado contempla "acciones", como también el "botón editar" y el "botón eliminar".

Parte 2: Java Script -->

Una vez finalizada la estructura HTML, se inicia la construcción en JS donde el desafío estuvo en buscar la lógica para que esta información que se registra se logre guardar en el "local storage" a medida que va ingresando, sin perder los datos registrados una vez se editen o eliminen. 
PAra esto, se debía definir una "función para validar la información que se ingresa" (cosa que no sabía se requería) para lo cual debíamos traer los datos solicitados al atleta para señalar que la información es requerida y estuviese bien ingresada en el caso del email. Luego, construir la "función para ingresar la información": nombre, email y teléfono, con la posibilidad de actualizar dicha información de manera oculta. Esta información debe validarse y almacenar en el local storage, para lo cual se usa Jason y se hace a través de un array, para luego iterar y finalmente mostrar la información en la tabla. Se incorporan dos acciones, botón editar y botón eliminar. También se creó una "función para actualizar la información ingresada" actualizando los datos de la lista, que se guarda en el local storage y se actualiza la tabla.

Parte 3: Bootstrap -->

En este proyecto incluí uso de bootstrap, luego de la orientación de la asesoría individual, comencé a utilizar la herramienta en esta solicitud. Lo que también me alegra, porque pensé era muy difícil y estaba equivocada. 

Parte 4: Declaración -->

PAra esta misión, se repasó la clase del sábado anterior para repetir la construcción de los diferentes métodos que permiten captar datos, siendo el "gitelementById" el más utilizado durante la clase y a través del cual intenté desarrollar la misión. 
Si bien la construcción en html lograba verse en web, el ingreso de datos, no pude conseguirlo luego de variados intentos donde mi objetivo era comprender dónde estaba el error. Y mientras intentaba encontrar el error, pasaba el tiempo. En la asesoría individual, el coach mostró una lógica diferente para lograr la misión, lo que para mí fue nuevo y me costó entender esa forma. Finalmente, se me juntaron ambas formas de construcción y ya no tuve tiempo para iniciar otra propia, considerando que mi afán era tratar de entender lo que estaba haciendo, por lo que ocupé más tiempo del que debía en iniciar otro proceso nuevo. 
Finalmente, en la asesoría grupal nos exponen el desarrollo completo de la misión, y me di cuenta que no había visualizado todo lo que debía hacer en JS para lograr la misión solicitada. Sin embargo, me siento contenta de ahora verlo funcionar y comprendo lo que se debía hacer y solo la practica hará que logre algo similar por mi cuenta.