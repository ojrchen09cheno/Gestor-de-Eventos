# Gestor-de-Eventos

Application del back-end de un gestor de eventos

Características principales:
- Gestor de eventos con API RESTful en NodeJS con Express en arquitectura hexagonal
- Operaciones CRUD para registro, login, y creación y manejo de los eventos en Postgres
- Autenticación con JWT
- Documentación con Swagger
- Inserción y actualización de eventos subiendo archivos csv delimitados por coma con el siguiente encabezado y formato
```
name,address,latitude,longitude,date,country,city,description
string,string,decimal,decimal,YYYY-mm-dd,string,string,string
```
Para ejecutar la app:

- Clonar el repo con 
```
git clone https://github.com/ojrchen09cheno/Gestor-de-Eventos
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
- Generar la base de datos usando el script de SQL en:
```
src/infrastructure/repositories/postgres
```
- Ejecutar los tests con npm test
- Ejecutar la app con npm run dev
- Documentacion en http://localhost/8000/docs
