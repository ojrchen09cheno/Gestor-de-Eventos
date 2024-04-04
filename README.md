# PruebaCoordinadoraBackend
Prueba técnica de Coordinadora para Desarrollador Backend Mid Marzo 2024. 

LINK_DEL_VIDEO_PLACEHOLDER

Características principales:
- Gestor de eventos con API RESTful en NodeJS con Express
- Operaciones CRUD para registro, login, y creación y manejo de los eventos en Postgres
- Autenticación con JWT
- Documentación con Swagger
- Inserción y actualización de eventos subiendo archivos Excel
- Implementación de lugares cercanos a eventos con API Mapbox/Google Maps
  
Para ejecutar la app:

-Clonar el repo con git clone https://github.com/ojrchen09cheno/WebRestaurante.git
-Instalar las dependencias dentro del proyecto con npm i
-Crear archivo .env para las variables de entorno y agregar las siguientes:
```
PORT = puertoapp
DB_USER = usuariobd
DB_HOST = hostbd
DB_PASSWORD = contrasenabd
DB_NAME = nombrebd
DB_PORT = puertobd
```
- Ejecutar los tests con npm test
- Ejecutar la app con npm run dev
- Documentacion en http://localhost/8000/docs
