# Usamos una imagen oficial de Node.js como base
FROM node:18-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de la aplicación al contenedor
COPY package*.json ./
COPY app.js .

# Instalamos las dependencias de la aplicación
RUN npm install

# Exponemos el puerto en el que la aplicación va a escuchar
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
