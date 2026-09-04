# Nombre del proyecto: Actividad 1: Desarrollo de Servicios Web con Node.js



## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Luis Antonio Ramírez Martínez |
| **Actividad** | Desarrollo de Servicios Web con Node.js |
| **Alumno** | José Alejandro Pérez Millán |
| **Matrícula** | 385570 |
| **Fecha de entrega** | 04/09/2026 |

## Descripción

Este proyecto implementa un servicio de gestión de tareas utilizando Node.js. Expone una API REST para crear, consultar, actualizar y eliminar tareas, además de un servicio SOAP para consultar y agregar tareas. La información se mantiene temporalmente en memoria mientras el servidor está activo.

## Objetivo

El objetivo es aplicar los fundamentos de Node.js para desarrollar servicios web, configurar rutas HTTP con Express, definir y consumir operaciones SOAP mediante un contrato WSDL, organizar la lógica en capas y registrar eventos de la aplicación. También se busca demostrar la escritura de pruebas unitarias y el análisis estático del código.

## Tecnologías utilizadas

* JavaScript sobre Node.js
* Express 5
* `soap` para publicar el servicio SOAP
* Jest para pruebas unitarias
* ESLint para análisis estático
* Log4js para registro de eventos
* Supervisor para el script de desarrollo (`npm run dev`)
* Git y npm para control de versiones y gestión de dependencias

## Requisitos previos

* Node.js y npm instalados. Se recomienda Node.js 18 o superior.
* Git, si se obtiene el proyecto mediante clonación.
* Supervisor instalado globalmente para utilizar el script `npm run dev`; no es necesario si se ejecuta con `node src/app.js`.
* No se requiere base de datos ni cuenta externa.
* Pero se usa Postman, para probar los Métodos GET, POST, DELETE, UPDATE

## Instalación

```bash
git clone git@github.com:alex0726649/Tarea3-Desarrollo-de-ServiciosWeb.git o https://github.com/alex0726649/Tarea3-Desarrollo-de-ServiciosWeb.git
cd "Tarea3-Desarrollo-de-ServiciosWeb/Tarea 3"
npm install
```

## Ejecución

También está disponible el script de desarrollo, siempre que `supervisor` esté instalado:

```bash
npm run dev
```

La API REST queda disponible en `http://localhost:3000/api/tasks` y el servicio SOAP en `http://localhost:3000/wsdl`.

## Scripts / comandos disponibles


| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor con Supervisor para desarrollo; requiere tenerlo instalado. |
| `npm test` | Ejecuta las pruebas unitarias con Jest. |
| `npm run lint` | Analiza el código JavaScript con ESLint. |

## Funcionalidades / uso

### API REST

Todas las rutas REST utilizan el prefijo `/api/tasks` y las respuestas de las tareas tienen la forma `{ id, title, completed }`.

| Método | Endpoint | Función |
|---|---|---|
| `POST` | `/api/tasks` | Crea una tarea. Recibe `{ "title": "Estudiar Node.js" }`. |
| `GET` | `/api/tasks` | Devuelve todas las tareas. |
| `GET` | `/api/tasks/:id` | Devuelve una tarea por su identificador. |
| `PUT` | `/api/tasks/:id` | Actualiza `title` y/o `completed`. |
| `DELETE` | `/api/tasks/:id` | Elimina una tarea. |

Ejemplo de creación:

```bash
curl -X POST http://localhost:3000/api/tasks ^
	-H "Content-Type: application/json" ^
	-d "{\"title\":\"Estudiar Node.js\"}"
```

### Servicio SOAP

El contrato WSDL se encuentra en `src/soap/taskService.wsdl`. El endpoint SOAP es `http://localhost:3000/wsdl` y ofrece estas operaciones:

* `GetTasks`: obtiene la lista de tareas y no requiere parámetros.
* `AddTask`: crea una tarea a partir del parámetro `title`.

El servicio se puede explorar con un cliente SOAP utilizando la URL `http://localhost:3000/wsdl?wsdl`.

La aplicación registra en `logs/` eventos relacionados con la creación, actualización, eliminación y consulta de tareas.

## Pruebas

Las pruebas se ejecutan con:

```bash
npm test
```

La suite `tests/taskService.test.js` cubre la creación de tareas, la consulta de la colección, la actualización de una tarea y su eliminación. Las pruebas utilizan el servicio de tareas directamente y reinician los módulos antes de cada caso para evitar compartir el estado en memoria.

## Análisis de calidad de código

El análisis estático se ejecuta con:

```bash
npm run lint
```

ESLint utiliza las reglas recomendadas para JavaScript mediante la configuración definida en `eslint.config.js`, con compatibilidad para CommonJS, Node.js y los archivos de prueba.

## Estructura general del proyecto

```text
Tarea 3/
|-- eslint.config.js
|-- package.json
|-- plantilla_readme(1).md
|-- logs/
|-- src/
|   |-- app.js
|   |-- routes/
|   |   `-- tasks.js
|   |-- services/
|   |   `-- taskService.js
|   |-- soap/
|   |   |-- tasks.js
|   |   `-- taskService.wsdl
|   `-- utils/
|       `-- logger.js
`-- tests/
	`-- taskService.test.js
```

* `src/app.js`: configura Express, inicia el servidor y publica el servicio SOAP.
* `src/routes/tasks.js`: define los endpoints REST.
* `src/services/taskService.js`: contiene la lógica de gestión de tareas en memoria.
* `src/soap/tasks.js`: implementa las operaciones SOAP.
* `src/soap/taskService.wsdl`: define el contrato del servicio SOAP.
* `src/utils/logger.js`: configura el registro de eventos.
* `tests/taskService.test.js`: contiene las pruebas unitarias.

## Autor

José Alejandro Pérez Millán — 385570
