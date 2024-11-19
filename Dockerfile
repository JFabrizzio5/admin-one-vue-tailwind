# Usa una imagen base más reciente de Node.js
FROM node:20-alpine

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto donde corre Vite
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
