# AppBiblioteca

Una aplicación móvil híbrida desarrollada con React Native y Expo que permite buscar libros usando la Google Books API, ver detalles completos y guardar favoritos localmente.

## ¿Cómo abrir el proyecto en otra computadora?

1. **Clona el repositorio**
   ```sh
   git clone https://github.com/Notgustavoo/AppBiblioteca.git
   cd AppBiblioteca
   ```
2. **Instala Node.js**  
   Descarga e instala Node.js desde https://nodejs.org/ si no lo tienes.

3. **Instala las dependencias**
   ```sh
   npm install
   ```
4. **Instala Expo CLI (si no tienes Expo Go en tu móvil)**
   ```sh
   npm install -g expo-cli
   ```
5. **Inicia el proyecto**
   ```sh
   npx expo start
   ```
6. **Abre la app en tu teléfono**
   - Descarga la app Expo Go desde Google Play o App Store.
   - Escanea el código QR que aparece en la terminal o en el navegador.
     ¡Listo! Ya puedes usar la app en tu dispositivo.

### Google Books API

La aplicación utiliza la Google Books API v1 con las siguientes características:

- **Endpoint base**: `https://www.googleapis.com/books/v1/volumes`
- **API Key**: Incluida en el proyecto (AIzaSyAAjBJ55ujQWnask-GSS5yKBHpQ6xI-rPM)
- **Límite de resultados**: 20 libros por búsqueda
- **Campos incluidos**: Título, autores, descripción, fecha de publicación, calificaciones, imágenes, etc.

## Capturas de Pantalla
