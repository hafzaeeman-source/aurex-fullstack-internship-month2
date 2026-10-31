\# AUREX Internship — Week 3: MongoDB CRUD REST API

## Project Overview
A backend REST API developed using Node.js, Express.js, MongoDB Atlas, and Mongoose as part of the AUREX Full Stack Engineering Internship (Month 2).

## Technologies
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Nodemon

## Features
- Create new items
- Retrieve all items
- Retrieve a single item by ID
- Update existing items
- Delete items
- MongoDB Atlas database integration
- API error handling and validation

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Server health check |
| POST | `/api/items` | Create item |
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get item by ID |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

## Installation

1. Navigate to `week-3-mongodb-crud/server`.
2. Run `npm install`.
3. Create a `.env` file with `PORT=5001` and your MongoDB Atlas `MONGO_URI`.
4. Run `npm run dev`.

## Testing
All CRUD operations (POST, GET, PUT, DELETE) were successfully tested using Postman with MongoDB Atlas.

## Postman Collection
Import `AUREX_Week3_Postman_Collection.json` into Postman to test the endpoints.

## GitHub Repository
https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2
