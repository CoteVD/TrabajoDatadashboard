# Data Dashboard

## Detalles de Implementación

Nuestra implementación permitirá a la usuaria visualizar la información detallada del progreso de cada una de las alumnas, en esta versión, esta disponible la visualización de una alumna en particular la cual utilizamos como conejillo de indias para testear nuestro código.
En el archivo data.js pueden encontrar una extensa colección de variables y procedimientos que usamos para poder ir desmenuzando la gigantesca base de datos de las alumnas con la que trabajamos. Ya que esta data esta restringida solo a un cohort (Lima 2018 ), la información gira solo dentro de este archivo.
Los datos fueron llamados a través del uso de "Fetch" y sus respectivas "promesas" una vez capturada la información se fue obteniendo datos cada vez más particulares a través de ciclos como for in, for each, etc. Fue un extenso trabajo poder llegar a acceder a los subniveles más profundos de esta información.
Por otro lado tenemos el archivo main.js, en el cual trabajamos exclusivamente el "manejo de DOM" de esta manera pudimos mantener por separado la lógica de las funciones requeridas con toda la parte visual y funcional del sitio, acá se obtienen los elementos del html para cruzarlos con la información obtenida en el data.js, fue un largo trabajo de varios días el lograr que se visualizaran los datos de manera correcta, lo que seguimos trabajando hasta este momento.

### User Experience Design

#### 1) Definición del producto

* ¿Quiénes son los principales usuarios de producto?
Este producto está dirigido a las training manager de Laboratoria, quienes tienen la tarea de monitorear el progreso de las alumnas durante el bootcamp,  ya sea de forma global o personalizada. 

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Poder acceder a la información personalizada de las alumnas de manera clara y eficaz, permitiendo una lectura rápida que propicie la toma decisiones de forma ágil y sea simple a momento de tener que compartir esta información con los coach.

* ¿Cuáles son los datos más relevantes que el usuario quiere ver en la interfaz y por qué? ¿Cómo los descubriste?
Los datos más relevantes a visualizar en el caso particular de Valentina Smith la training manager de SCL son los progresos individuales de las alumnas (completitud de los ejercicios, resultados de estos, poder ordenarlos, etc.), lo sabemos porque se lo preguntamos en la entrevista que le realizamos al comenzar el proyecto.

* ¿Cómo crees que el producto les está resolviendo sus problemas?
Este producto en su etapa final le permitirá a las training manager acceder de forma rápida y simple a las información personalizada de las alumnas, por medio de un flujo de información que sin tantos pasos intermedios, generando un uso simple, directo y eficaz.

* ¿Cómo fue tu proceso de diseño?
El proceso de diseño de este producto comenzó con la formulación de las preguntas a realizar a Valentina, luego con ese feedback empezamos a plantear el diseño y distribución de la página, siempre pensando en su usabilidad, ella fue enfática que debía ser una aplicación web rápida, simple y sin pasos innecesarios. Planteamos un flujo de uso con pocas transiciones en la cual todo estuviese conectado y eso se complementara con formas de visualizar la información por medio de gráficos, y datos relevantes con un mayor peso visual, etc.


#### 2) Sketch de la solución (prototipo de baja fidelidad)

*Sketch de la solución (prototipo de baja fidelidad)
La primera etapa de nuestro proceso creativo consistió en hacer muchos borradores con papel y lápiz,
(pueden revisar algunos de los sketch incluidos en la carpeta src/ UX/ baja fidelidad ) de esta forma más sencilla pudimos ir visualizando una idea general y también comprender mejor que era lo que queríamos lograr, también nos sirvió para aclarar nuestras ideas y poder determinar cuales serían las estructuras básicas que usaríamos para construir nuestro producto. Durante este proceso también pudimos compartir un poco y conocernos mejor para poder establecer una buena relación de compañerismo, apoyo y compromiso entre nostras para lo que se nos venía por delante con este arduo proyecto.
Continuando con el proceso probamos varias herramientas para la fabricación de nuestro prototipo, siendo una muy útil "balsamiq" la que con una interfaz muy sencilla era perfecta para ordenar mejor nuestras ideas del papel a lo digital pero aún muy básico (estas imágenes también están incluidas en la carpeta antes mencionada) . También probamos la diagramación con una app móvil llamada "Wireflow" y la funcionalidad con otra llamada "Prott" , fue una especie de tour por diversas aplicaciones que nos ofrecían hacer nuestro trabajo más "fácil y bonito" , sin embargo ya en este punto comenzamos a darnos cuenta de que debíamos priorizar algunas cosas por sobre otras. Por lo que finalmente nos quedamos con una plataforma virtual llamada "Figma" con la cual empezamos a trabajar bastante.

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Llegadas a este punto nuestro producto iba tomando cada vez más cuerpo y ya podíamos ver algo más claro y definido, sin embargo al momento de emular el flujo de nuestro sitio nos dimos cuenta de que nuestro diseño era muy extenso y complicado de implementar en vista del tiempo que nos quedaba para desarrollar, por lo que tras muchos re-dibujos y hojas ralladas logramos conceptualizar que era lo que realmente necesitábamos, y así nos fuimos desprendiendo de muchos adornos y otras cosas bonitas que se nos habían ocurrido al principio para finalmente quedarnos con lo más fundamental y apegado al encargo que se nos entrego.
Aun así este diseño era bastante atractivo, utilizamos los colores institucionales y algunos tips del manual de marca, nuestra idea principal era emular cosas de la vida real con las que trabaja nuestra usuaria como las fotos de las alumnas que tienen en la oficina o los stickers de puntitos de colores que usan para destacarlas, pueden revisar el prototipo terminado en el siguiente enlace:

[propotipo alta fidelidad](https://www.figma.com/file/bmUVrzOkpREixx4i5XDFQyEv/Untitled)



## Primeros pasos

Al ser este un proyecto de código abierto puedes acceder a él de la siguiente forma: 

1. Debes tener un editor de texto funcional. Puede ser; [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), etc.
2. Para ejecutar los comandos a continuación necesitarás una terminal, que permite interpretar las líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar GNU/Linux.
3. Ya estás listo para [Clonar](https://help.github.com/articles/cloning-a-repository/) este repositorio con el fin de tener una copia local, puedes obtener el enlace desde el botón verde que está en la esquina superior derecha de tu pantalla.
4. 1ro debes abrir la terminal iniciar git y posicionarte en la carpeta donde quieres que se guarde tu clon, escribir el comando "git clone" y listo! ya tendrás una copia local del proyecto. 
5. Ya estás listo para explorar el código!
