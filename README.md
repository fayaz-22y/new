# Flozz - Shoe E-commerce (Combined v1+v2+v3)
## What is included
- frontend: React app (simple, fetches /api/products)
- backend: Node.js + Express (connects to MySQL)
- database: schema + seed SQL
- docker-compose + Dockerfiles

## Run locally (without docker)
1. Start MySQL and create database:
   - `mysql -u root -p -e "CREATE DATABASE flozz_db;"`
   - `mysql -u root -p flozz_db < database/schema.sql`
   - `mysql -u root -p flozz_db < database/seed.sql`
2. Backend:
   - `cd backend && npm install && npm run dev`
3. Frontend:
   - `cd ../frontend && npm install && npm start`

## Run with Docker
`docker-compose up --build`

