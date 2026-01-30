# 📚 Ejercicios de React

Una colección de 9 ejercicios prácticos desarrollados con React 19 y Vite para aprender los fundamentos de React y desarrollo frontend moderno.

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)
![ES Modules](https://img.shields.io/badge/ES-Modules-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎯 Objetivo

Este repositorio contiene una serie de ejercicios progresivos para aprender React desde conceptos básicos hasta funcionalidades más avanzadas como manejo de estado, efectos, y persistencia con localStorage.

## 🚀 Ejercicios Incluidos

### 📋 Lista Completa

| Ejercicio       | Descripción                                                    | Conceptos Clave                                         |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| **Ejercicio 1** | 🎨 **Cambiador de Color** - Cambio dinámico del color de fondo | `useState`, eventos, colores aleatorios                 |
| **Ejercicio 2** | 🔢 **Contador de Clics** - Contador simple con botón           | `useState`, eventos onClick, estado numérico            |
| **Ejercicio 3** | 📝 **Lista Dinámica** - Agregar y eliminar elementos de lista  | `useState`, arrays, map, filter                         |
| **Ejercicio 4** | 🔍 **Filtro de Búsqueda** - Filtrado en tiempo real            | `useState`, filter, includes, toLowerCase               |
| **Ejercicio 5** | 🧮 **Calculadora Simple** - Operaciones matemáticas básicas    | `useState`, validaciones, parseFloat                    |
| **Ejercicio 6** | ⏱️ **Temporizador** - Cronómetro con controles                 | `useState`, setInterval, clearInterval                  |
| **Ejercicio 7** | 🔐 **Generador de Contraseñas** - Passwords aleatorias seguras | `useState`, validaciones, random, caracteres especiales |
| **Ejercicio 8** | 📊 **Contador de Texto** - Conteo de palabras y caracteres     | `useState`, regex, split, replace                       |
| **Ejercicio 9** | ✅ **Lista de Tareas** - TodoList con persistencia             | `useState`, localStorage, JSON, map, filter             |

## 🛠️ Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca principal para UI
- **Vite 7.2.4** - Herramienta de build y desarrollo
- **ES Modules** - Sistema de módulos moderno
- **ESLint** - Linter para calidad de código
- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsive

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/ejercicios-react.git
   cd ejercicios-react
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🎮 Cómo Usar

### Navegación Principal

- Abrir `http://localhost:5173` para ver el índice con enlaces a todos los ejercicios

### Ejecutar Ejercicios Individuales

- Cada ejercicio tiene su propia página HTML y componente React
- Navegar a: `http://localhost:5173/src/ejercicioX/ejercicioX.html`

### Ejemplo de URL directa:

- Ejercicio 1: `http://localhost:5173/src/ejercicio1/ejercicio1.html`
- Ejercicio 9: `http://localhost:5173/src/ejercicio9/ejercicio9.html`

## 📁 Estructura del Proyecto

```
ejerciciosReact/
├── 📄 index.html                 # Página principal con navegación
├── 📄 package.json              # Configuración y dependencias
├── 📄 vite.config.js            # Configuración de Vite
├── 📄 eslint.config.js          # Configuración de ESLint
├── 📁 public/                   # Recursos estáticos
└── 📁 src/
    ├── 📄 index.css             # Estilos globales
    └── 📁 ejercicio[1-9]/       # Cada ejercicio en su carpeta
        ├── 📄 ejercicio[X].html # Página HTML del ejercicio
        ├── 📄 ejercicio[X].jsx  # Componente React
        └── 📄 main.jsx          # Punto de entrada React
```

## 💡 Funcionalidades Destacadas

### 🎨 Ejercicio 1: Cambiador de Color

- Generación de colores hexadecimales aleatorios
- Cambio dinámico del background con un clic
- Uso de estilos inline dinámicos

### ✅ Ejercicio 9: Lista de Tareas (Más Avanzado)

- **Persistencia con localStorage**
- **Estado inicial lazy**: Carga tareas guardadas al iniciar
- **CRUD completo**: Crear, leer, actualizar, eliminar
- **Filtrado**: Eliminación de tareas completadas
- **UI reactiva**: Tachado de tareas completadas

## 🎓 Conceptos de React Aprendidos

### 📚 Hooks Utilizados

- **useState**: Manejo de estado local
- **useEffect**: Efectos secundarios (en desarrollo)

### 🔧 Patrones Implementados

- **Controlled Components**: Inputs controlados por estado
- **Conditional Rendering**: Renderizado condicional
- **Event Handling**: Manejo de eventos
- **State Updates**: Actualizaciones inmutables del estado
- **Local Storage**: Persistencia de datos del navegador

### 🎯 Buenas Prácticas

- **Inmutabilidad**: Siempre crear nuevos arrays/objetos
- **Validación**: Validar inputs antes de procesar
- **Cleanup**: Limpiar intervalos y listeners
- **Naming**: Nombres descriptivos para variables y funciones

## 🚀 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Ejecutar linter
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📋 Próximas Mejoras

- [ ] Agregar TypeScript
- [ ] Implementar testing con Vitest
- [ ] Añadir más ejercicios con useEffect
- [ ] Integrar Context API
- [ ] Agregar manejo de formularios con Formik
- [ ] Implementar routing con React Router

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ **¡Si te ha sido útil este repositorio, dale una estrella!** ⭐
