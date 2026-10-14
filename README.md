Aplicación web construida con **React 19** y **Vite 8** que carga una lista de usuarios desde un archivo JSON y permite visualizarla de dos formas.

## Funcionalidades

- Carga de usuarios desde `public/users.json` mediante `fetch` al montar el componente (`useEffect`).
- Estados de carga y de error controlados.
- **Cargar lista**: muestra los 15 nombres ordenados alfabéticamente en español (`localeCompare` con `'es'`), sin edades.
- **Ver original**: muestra la lista en el orden original del archivo, con nombre y edad de cada usuario.

## Hooks de React utilizados

- **`useState`** (`src/App.jsx`): gestiona cuatro estados:
  - `users`: almacena la lista de usuarios cargada desde el JSON.
  - `loading`: controla el estado de carga inicial (`true` hasta resolver el `fetch`).
  - `error`: guarda el mensaje de error si la petición falla.
  - `vista`: determina qué vista está activa (`null`, `'ordenada'` u `'original'`).
- **`useEffect`** (`src/App.jsx`): ejecuta el `fetch('/users.json')` una sola vez al montar el componente (arreglo de dependencias vacío `[]`), actualizando `users`, `loading` y `error` según el resultado.
- **`StrictMode`** (`src/main.jsx`): envuelve la app en modo estricto para detectar problemas comunes durante el desarrollo (renderizados dobles, efectos no limpios).

No se usan hooks personalizados ni `useMemo`/`useCallback`/`useRef` en este proyecto.

## Tecnologías

- React 19.2
- Vite 8.3
- ESLint 10 (reglas de `react-hooks` y `react-refresh`)

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Comandos disponibles

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR     |
| `npm run build`   | Genera la producción en `dist/`              |
| `npm run preview` | Previsualiza el build de producción          |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto             |

## Estructura del proyecto

```
├── public/
│   ├── users.json      # Datos de los usuarios (nombre y edad)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx         # Componente principal: fetch, estados y vistas
│   ├── UserList.jsx    # Lista de nombres ordenada alfabéticamente
│   ├── App.css
│   ├── index.css
│   └── main.jsx        # Punto de entrada
├── index.html
└── vite.config.js
```

## Formato de los datos

`public/users.json` es un arreglo de objetos con la siguiente estructura:

```json
[
  { "name": "Ana García", "age": 28 }
]
```

## Notas

- El orden alfabético se aplica sobre una copia del arreglo (`[...names]`) para no mutar las props.
- Se usa el índice como `key` en la lista ordenada porque los nombres podrían repetirse y no existe un identificador único en los datos.

## Plantilla base

Proyecto generado a partir de la plantilla oficial [React + Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).

### React Compiler

El React Compiler no está habilitado en esta plantilla debido a su impacto en el rendimiento del desarrollo y de la compilación. Para añadirlo, consulta [esta documentación](https://react.dev/learn/react-compiler/installation).

### Ampliar la configuración de ESLint

Si estás desarrollando una aplicación para producción, recomendamos usar TypeScript con las reglas de lint habilitadas según su tipo. Consulta la [plantilla con TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.


By: Arturo Juárez Monroy
