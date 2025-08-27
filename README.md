# 📚 Book Search App

Una aplicación móvil híbrida desarrollada con React Native y Expo que permite buscar libros usando la Google Books API, ver detalles completos y guardar favoritos localmente.

## 🎯 Características

- **🔍 Búsqueda de libros**: Busca libros por título, autor o palabras clave usando la Google Books API
- **📖 Detalles completos**: Visualiza información detallada de cada libro incluyendo descripción, fecha de publicación, calificaciones, etc.
- **❤️ Sistema de favoritos**: Guarda y gestiona tus libros favoritos localmente en el dispositivo
- **🎨 Interfaz moderna**: Diseño limpio y responsive optimizado para dispositivos móviles
- **🔗 Enlaces externos**: Acceso directo a vista previa y más información de los libros

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework principal para desarrollo móvil
- **Expo** - Plataforma de desarrollo y herramientas
- **React Navigation** - Navegación entre pantallas
- **AsyncStorage** - Almacenamiento local persistente
- **Google Books API** - Fuente de datos de libros

## 📱 Pantallas de la Aplicación

### 1. Pantalla de Búsqueda (SearchScreen)
- Campo de búsqueda con validación
- Lista de resultados con información básica
- Navegación a detalles y favoritos
- Manejo de estados de carga y errores

### 2. Pantalla de Detalles (BookDetailsScreen)
- Información completa del libro seleccionado
- Botón para agregar/quitar de favoritos
- Enlaces a vista previa y más información
- Interfaz detallada con imagen, descripción y metadatos

### 3. Pantalla de Favoritos (FavoritesScreen)
- Lista de libros guardados localmente
- Funcionalidad para limpiar todos los favoritos
- Navegación directa a detalles de libros favoritos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI (instalado globalmente)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd actividad6
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar configuración de API**
   El proyecto ya incluye la API Key de Google Books configurada en:
   ```
   src/utils/config.js
   ```
   
   **API Key incluida:** `AIzaSyAAjBJ55ujQWnask-GSS5yKBHpQ6xI-rPM`

4. **Ejecutar la aplicación**
   
   **Para desarrollo web:**
   ```bash
   npm run web
   ```
   
   **Para dispositivo Android:**
   ```bash
   npm run android
   ```
   
   **Para dispositivo iOS:**
   ```bash
   npm run ios
   ```

## 📁 Estructura del Proyecto

```
actividad6/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── BookCard.js      # Tarjeta de libro para listas
│   │   ├── LoadingSpinner.js # Indicador de carga
│   │   └── ErrorMessage.js   # Componente de error
│   ├── screens/             # Pantallas principales
│   │   ├── SearchScreen.js   # Pantalla de búsqueda
│   │   ├── BookDetailsScreen.js # Detalles del libro
│   │   └── FavoritesScreen.js   # Lista de favoritos
│   ├── services/            # Servicios y APIs
│   │   ├── googleBooksAPI.js    # Cliente de Google Books API
│   │   └── favoritesService.js  # Gestión de favoritos locales
│   └── utils/               # Utilidades y configuración
│       └── config.js        # Configuración de API
├── assets/                  # Recursos estáticos
├── App.js                   # Componente principal y navegación
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

## 🔧 Configuración de API

### Google Books API
La aplicación utiliza la Google Books API v1 con las siguientes características:
- **Endpoint base**: `https://www.googleapis.com/books/v1/volumes`
- **API Key**: Incluida en el proyecto (AIzaSyAAjBJ55ujQWnask-GSS5yKBHpQ6xI-rPM)
- **Límite de resultados**: 20 libros por búsqueda
- **Campos incluidos**: Título, autores, descripción, fecha de publicación, calificaciones, imágenes, etc.

## 💾 Almacenamiento Local

La aplicación utiliza AsyncStorage para mantener los libros favoritos persistentemente:
- **Clave de almacenamiento**: `@favorites`
- **Formato**: Array de objetos JSON con información completa del libro
- **Operaciones**: Agregar, quitar, verificar existencia y limpiar todos

## 🎨 Características de UI/UX

- **Diseño responsive** adaptado a diferentes tamaños de pantalla
- **Indicadores de carga** durante operaciones asíncronas
- **Manejo de errores** con mensajes informativos
- **Navegación intuitiva** entre pantallas
- **Estados vacíos** con mensajes guía para el usuario
- **Validación de entrada** en formularios de búsqueda

## 🧪 Funcionalidades Implementadas

### ✅ Requerimientos Cumplidos
- [x] **Consumo de API compleja** - Google Books API con múltiples campos
- [x] **Integración con almacenamiento local** - AsyncStorage para favoritos
- [x] **Navegación entre pantallas** - React Navigation Stack
- [x] **Manejo de errores** - Try-catch y componentes de error
- [x] **Estados de carga** - LoadingSpinner durante operaciones
- [x] **Pantalla de búsqueda** - Campo de búsqueda y lista de resultados
- [x] **Pantalla de detalles** - Información completa del libro
- [x] **Sistema de favoritos** - Agregar, quitar y listar favoritos
- [x] **Enlaces externos** - Vista previa e información adicional

### 🔄 Flujo de Usuario Completo
1. Usuario ingresa término de búsqueda
2. App consulta Google Books API
3. Se muestran resultados en lista
4. Usuario selecciona un libro
5. Se navega a pantalla de detalles
6. Usuario puede agregar a favoritos
7. Libro se guarda localmente
8. Usuario puede ver favoritos en pantalla dedicada

## 🐛 Manejo de Errores

- **Errores de red**: Retry automático y mensajes informativos
- **API no disponible**: Fallback y notificación al usuario
- **Datos incompletos**: Valores por defecto y validaciones
- **Almacenamiento local**: Manejo de fallos de escritura/lectura

## 📱 Compatibilidad

- **Plataformas**: iOS, Android, Web
- **Versiones mínimas**: 
  - iOS 11+
  - Android API 21+
  - Navegadores modernos

## 🚀 Scripts Disponibles

```bash
# Desarrollo web
npm run web

# Desarrollo Android
npm run android

# Desarrollo iOS
npm run ios

# Iniciar Metro bundler
npm start

# Limpiar caché
npm run clear
```

## 📸 Capturas de Pantalla

*Las capturas de pantalla se pueden agregar después de ejecutar la aplicación*

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama para nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto es parte de una actividad académica.

## 👨‍💻 Autor

**Marco** - Actividad 6 - Desarrollo de Aplicaciones Móviles

## 📞 Soporte

Para dudas o problemas con la aplicación:
1. Verificar que todas las dependencias estén instaladas
2. Comprobar conexión a internet para API calls
3. Revisar logs de consola para errores específicos
4. Verificar versión de Node.js y Expo CLI

---

**¡Disfruta explorando y guardando tus libros favoritos! 📚✨**
