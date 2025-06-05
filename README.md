🧠 API Gestión de Usuarios/Productos con Node.js y MongoDB
Este proyecto implementa una interfaz web para el inicio de sesión y registro de usuarios, junto con una API desarrollada en Node.js para gestionar usuarios y productos/servicios en una base de datos MongoDB Atlas.

📌 Evidencia GA4-220501096-AA1-EV01 – API del Proyecto
🎯 Objetivo
Construir una API RESTful que permita:

-Autenticación de usuarios para ingreso a la aplicación.
-Crear, consultar, actualizar y eliminar usuarios.
-Crear, consultar, actualizar y eliminar productos o servicios.
-Interacción con una base de datos MongoDB Atlas.
-Utilización de los métodos HTTP: POST, GET, PUT, DELETE.

⚙️ Todas las funcionalidades han sido desarrolladas utilizando programación orientada a objetos y probadas mediante herramientas de testing como Postman, Insomnia, o directamente desde el navegador.

🚀 Requisitos Previos
Antes de iniciar, asegúrate de tener instalado:

-Node.js
-Visual Studio Code
-Git
-Extensión Live Server para VSCode

⚙️ Instalación del Proyecto
-Clonar el repositorio
git clone https://github.com/DevCheco/mi-api

-Abrir el proyecto en VSCode
Abrir una terminal en la carpeta raíz del proyecto

-Ejecutar el servidor
node app.js

-Abrir la interfaz de usuario
Ve al archivo index.html
Haz clic derecho y selecciona Open with Live Server

🔐 Autenticación y Acceso a la API
Una vez que el usuario se registra o inicia sesión correctamente desde la interfaz en index.html, estará autenticado y podrá acceder a los endpoints de la API.

La autenticación es necesaria para poder consumir la API que permite la gestión de usuarios y productos. El backend verifica las credenciales y genera acceso seguro.



📌 Estos endpoints están conectados a MongoDB Atlas y fueron desarrollados usando POO.

🧪 Testing
Puedes probar los endpoints mediante:

-Postman
-Insomnia
-Navegador web (para métodos GET)

🛠️ Tecnologías Usadas
Node.js
Express.js
MongoDB Atlas
HTML/CSS (Frontend)
JavaScript
Visual Studio Code
Git
