# Utilidades interactivas con React

Aplicación académica de **Gerald Pascual** para practicar componentes, estado e interacción de formularios con JavaScript y React. Usa Vite para el desarrollo web y contiene un proyecto Android generado con Capacitor.

## Funcionalidades

- Presentación personal y navegación entre secciones.
- Sumadora de dos valores.
- Conversión de números a letras.
- Generación de tablas de multiplicar del 1 al 13.
- Sección para un vídeo de experiencia del trabajo.

La sección de vídeo muestra un mensaje de pendiente cuando no se ha configurado el identificador de YouTube.

## Tecnologías

React, JavaScript, CSS, Vite y Capacitor para el empaquetado Android.

## Ejecutar la versión web

Con Node.js y npm instalados:

```bash
git clone https://github.com/GeraldPascual30/aplicacion-react-gerald-pascual.git
cd aplicacion-react-gerald-pascual
npm ci
npm run dev
```

Abrir la dirección local que indique Vite.

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor local de desarrollo. |
| `npm run build` | Genera los archivos web en `dist/`. |
| `npm run preview` | Previsualiza la compilación. |
| `npm run lint` | Ejecuta ESLint. |

## Proyecto Android

El directorio `android/` contiene la integración con Capacitor. Para abrirlo con Android Studio:

```bash
npm run build
npx cap sync android
npx cap open android
```

La construcción Android requiere Android Studio y el SDK correspondiente. El repositorio también contiene el archivo académico de entrega en `entrega/TareaReact.apk`.

## Dónde revisar el código

| Archivo | Contenido |
| --- | --- |
| `src/App.jsx` | Navegación, formularios, estado y funciones de las utilidades. |
| `src/App.css` | Estilos y distribución de la aplicación. |
| `src/main.jsx` | Punto de entrada de React. |
| `capacitor.config.json` | Identificador de aplicación y directorio web de Capacitor. |

## Alcance

Es un ejercicio de frontend que trabaja con estado local. No incluye un backend ni una base de datos. Sirve para mostrar lógica de interfaz, validación de entradas y una primera integración de una aplicación web con Android.

---

[Gerald Pascual](https://github.com/GeraldPascual30) · Proyecto académico
