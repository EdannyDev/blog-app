🚀Red Social Simple - Frontend y Backend

📌Descripción
Blog App es una red social tipo blog, donde los usuarios pueden publicar contenido, comentar y gestionar sus propias publicaciones. 

La aplicación restringe que los usuarios puedan modificar o eliminar publicaciones y comentarios de otros, asegurando la privacidad y control de cada cuenta. Incluye sistema de login y registro para la autenticación.

Los usuarios pueden:
-Crear publicaciones con o sin imágenes.
-Comentar sus propias publicaciones.
-Eliminar solo sus publicaciones y comentarios.

🛠️Tecnologías utilizadas
-Frontend: Next.js, Material-UI, Axios, yarn
-Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, Cors, Multer, npm

⚙️Instalación y ejecución

1.-Clonar el repositorio:
git clone https://github.com/EdannyDev/blog-app

2.-Instalar dependencias:
npm install

3.-Configurar variables de entorno en un archivo .env en la raíz del proyecto:
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogDB
JWT_SECRET=tu_secreto_jwt

4.-Ejecutar la aplicación en modo desarrollo:
node server.js para backend y yarn dev para frontend

5.-Abrir en el navegador:
http://localhost:3000 mientras esta corriendo el backend en http://localhost:5000

✨Características principales
-Publicaciones: Crear y editar solo sus propias publicaciones.
-Comentarios: Comentar solo en publicaciones propias y eliminar solo sus propios comentarios.
-Autenticación: Login y registro de usuarios con JWT y bcryptjs.
-Subida de imágenes en publicaciones mediante Multer.
-Interfaz moderna con Material-UI y componentes responsivos.
-Seguridad y permisos: Usuarios no pueden modificar contenido ajeno.