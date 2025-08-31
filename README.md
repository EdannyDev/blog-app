# 🚀Red Social Simple – Frontend y Backend  

## 📌Descripción  
**Blog App** es una red social tipo blog, donde los usuarios pueden:  
- Crear publicaciones con o sin imágenes.  
- Comentar en sus publicaciones.  
- Eliminar únicamente sus publicaciones y comentarios.  

El sistema incluye **login y registro de usuarios**, asegurando la privacidad y control de cada cuenta.  
Se garantiza que los usuarios **no puedan modificar o eliminar contenido ajeno**, manteniendo la seguridad y los permisos de cada acción.  

## 🛠️Tecnologías utilizadas  
### Frontend  
- **Next.js** (Framework para frontend)
- **Material-UI** (estilos e iconos)  
- **Axios** (consumo de APIs)  
- **Yarn** (gestor de paquetes)  

### Backend  
- **Node.js**  
- **Express** (Framework para APIs REST)  
- **MongoDB / Mongoose** (Base de datos NoSQL y modelado de datos)  
- **JWT** (autenticación y autorización)  
- **bcryptjs** (encriptación de contraseñas)  
- **CORS** (seguridad en solicitudes cross-origin)  
- **Multer** (gestión de subida de imágenes)  
- **npm** (gestor de dependencias backend)  

## ⚙️Instalación y ejecución  

```bash
# 1. Clonar el repositorio
git clone https://github.com/EdannyDev/blog-app

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno en .env

PORT=5000
MONGO_URI=mongodb://localhost:27017/blogDB
JWT_SECRET=tu_secreto_jwt

# 4. Ejecutar la aplicación
En una terminal, iniciar el backend
node server.js

# 5. En otra terminal, iniciar el frontend
yarn dev

# 6. El sistema estará disponible en el navegador:
http://localhost:3000

# 7. El backend estará funcionando en:
http://localhost:5000

```

## 🗂️Endpoints principales
- Archivos estáticos: `/uploads`
- Usuarios: `/api/users`
- Publicaciones: `/api/posts`

## ✨Características principales
- Publicaciones: crear y editar solo las propias.
- Comentarios: comentar únicamente en publicaciones propias y eliminar los propios.
- Autenticación: login y registro con JWT y bcryptjs.
- Gestión de imágenes: subida de archivos en publicaciones mediante Multer.
- Interfaz moderna y responsiva con Material-UI.
- Seguridad y permisos: los usuarios no pueden modificar contenido ajeno.
