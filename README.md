# Aurowear

Aurowear es un **e-commerce full-stack** desarrollado con un enfoque profesional, utilizando tecnologías modernas tanto en frontend como en backend.

La arquitectura está pensada para escalar y cubrir las necesidades reales de una plataforma de comercio electrónico: catálogo, carrito, checkout, autenticación, roles y pagos.

---
## Development

### Requirements
- Node.js 18+
- npm 9+

---
## 🧱 Arquitectura (Monorepo)

aurowear/
├── front/ # Next.js (Typescript + React + Tailwind CSS)
├── back/ # NestJS API
└── README.md


- **Frontend (`front/`)**: Next.js con App Router y Tailwind CSS.
- **Backend (`back/`)**: API REST desarrollada con NestJS.

---

## 🚀 Stack Tecnológico

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL

---

## 🎯 Objetivo Funcional

El proyecto tiene como objetivo implementar un e-commerce completo con:

- Catálogo de productos
- Carrito de compras
- Proceso de checkout
- Registro e inicio de sesión de usuarios
- Historial de órdenes
- Panel de administración (gestión de productos y órdenes)

---

### Ejecucion del proyecto desde la raíz (from root)

```bash
npm install
npm run dev

## Ports

Front: http://localhost:3000

Back: http://localhost:3001

Health check
GET http://localhost:3001/health

> Objetivo: que cualquier persona (o yo en 3 meses) pueda levantar el proyecto **sin preguntar nada**.


--- 
## ▶️ Ejecutar en Local 

### Frontend

```bash
cd front
npm install
npm run dev

La aplicación estará disponible en:

http://localhost:3000

---

### Backend

```bash
cd back
npm install
npm run start:dev

La API se ejecuta por defecto en:

http://localhost:3001

---

🗄️ Base de Datos y ORM

El backend utiliza PostgreSQL como base de datos y Prisma como ORM para el acceso y modelado de datos.

La conexión a la base de datos se configura mediante variables de entorno en el archivo .env del backend.

---

🛣️ Roadmap Técnico

UI del catálogo y carrito (frontend)

Endpoints de productos y órdenes (backend)

Persistencia con PostgreSQL + Prisma

Autenticación con JWT y manejo de roles

Implementación de checkout y pagos

Endurecimiento de seguridad:

Validación de datos

Rate limiting

Headers de seguridad

Logging

📌 Estado del Proyecto

🚧 En desarrollo

Aurowear se construye siguiendo buenas prácticas de desarrollo full-stack, con el objetivo de evolucionar hacia un producto listo para producción.


---

