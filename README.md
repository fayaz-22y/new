# Flozz Shoe E‑Commerce (Full Stack)

A 3‑tier app: **React** frontend, **Node/Express** backend, **MySQL** database. Includes docker-compose for local dev.

## Quick Start (Docker)
```bash
docker compose up --build
# Frontend: http://localhost:3000
# Backend:  http://localhost:5000/health
# MySQL:    localhost:3306  (user: flozz, pass: flozzpass)
```
The DB is auto-initialized with schema and sample products.

## Manual Start
1) Start MySQL and create DB with `backend/database/schema.sql` and `seed.sql`  
2) Backend
```bash
cd backend
cp .env.example .env   # edit DB creds if needed
npm install
npm run dev
```
3) Frontend
```bash
cd frontend
cp .env.example .env
npm install
npm start
```

## API (excerpt)
- `GET /api/products` — list products  
- `GET /api/products/search?q=term` — search  
- `GET /api/products/:id` — product by id  
- `GET /api/cart/:userId` — get cart  
- `POST /api/cart/add` — { userId, productId, quantity }  
- `PUT /api/cart/item/:id` — { quantity }  
- `DELETE /api/cart/item/:id`  
- `DELETE /api/cart/clear/:userId`  
- `POST /api/orders/create` — { userId, items[], shippingAddress, totalAmount }  

## Notes
- Demo uses userId=1 on frontend. Register/login endpoints exist, but auth isn’t wired into the UI.
- Replace placeholder images with your own product photos.
