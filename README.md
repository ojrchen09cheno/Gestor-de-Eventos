<<<<<<< HEAD
# PruebaCoordinadoraBackend
Prueba técnica de Coordinadora para Desarrollador Backend Mid Marzo 2024. 

https://drive.google.com/file/d/1OkKr8GhL97fIfwcpcIafZvBsXwDu2urg/view?usp=sharing
=======
# Gestor-de-Eventos

Application del back-end de un gestor de eventos
>>>>>>> 624459c875580e4ecfe0af559902b591960782bb

Características principales:
- Gestor de eventos con API RESTful en NodeJS con Express en arquitectura hexagonal
- Operaciones CRUD para registro, login, y creación y manejo de los eventos en Postgres
- Autenticación con JWT
<<<<<<< HEAD
- Documentación con Swagger parcial
=======
- Documentación con Swagger
>>>>>>> 624459c875580e4ecfe0af559902b591960782bb
- Inserción y actualización de eventos subiendo archivos csv delimitados por coma con el siguiente encabezado y formato
```
name,address,latitude,longitude,date,country,city,description
string,string,decimal,decimal,YYYY-mm-dd,string,string,string
```
Para ejecutar la app:

- Clonar el repo con 
```
<<<<<<< HEAD
git clone https://github.com/ojrchen09cheno/PruebaCoordinadoraBackend
=======
git clone https://github.com/ojrchen09cheno/Gestor-de-Eventos
>>>>>>> 624459c875580e4ecfe0af559902b591960782bb
```
- Instalar las dependencias dentro del proyecto con npm i
- Crear archivo .env para las variables de entorno y agregar las siguientes:
```
PORT = 8000
DB_USER = usuariobd
DB_HOST = hostbd
DB_PASSWORD = contrasenabd
DB_NAME = nombrebd
DB_PORT = puertobd
TOKEN_EXPIRE = tiempodetoken
SECRET = secreto
```
- Ejecutar los tests con npm test
- Ejecutar la app con npm run dev
- Documentacion en http://localhost/8000/docs
