# EA Node.js + TypeScript + Mongoose

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Exercise-Mongoose.git
cd EA-Exercise-Mongoose
```

## Dependencias del proyecto

Instalar Mongoose y otras dependencias
```
npm install
```

## Tecnologías utilizadas

- **Node.js**: Un entorno de ejecución de JavaScript que permite ejecutar JavaScript en el lado del servidor.
- **TypeScript**: Lenguaje de programación de alto nivel gratuito y de código abierto que añade tipado estático a JavaScript.
- **Git**: Un sistema de control de versiones para el seguimiento de los cambios en el proyecto.
- **Mongoose**: Una libreria para usar MondoDB.
- **Pino**: Una librería para hacer logs


## Estructura del proyecto

```
├── src
├── build
├── package.json       # Configuración de las dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── node_modules
├── .gitignore
├── LICENSE
└── README.md
```

## Complilación y ejecución

Transpilar de TS a JS
```
tsc 
```

Ejecutar JS
```
node dist/index.js
```