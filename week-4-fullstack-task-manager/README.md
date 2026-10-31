# AUREX Internship — Week 4 Full Stack Task Manager

A full-stack task management web application developed as part of the **AUREX Full Stack Engineering Internship — Month 2, Week 4**.

The application allows users to register, log in, and manage their personal tasks securely using React, Node.js, Express.js, MongoDB Atlas, and JWT authentication.

## Features

- User registration and login
- Secure password hashing using bcryptjs
- JWT-based authentication
- Protected dashboard and API routes
- Create, view, update, complete, and delete tasks
- Filter tasks by All, Pending, and Completed
- User-specific task management
- Task statistics dashboard
- Persistent task storage in MongoDB Atlas
- Responsive user interface
- Loading and error handling
- Logout functionality

## Technologies Used

**Frontend**
- React.js
- Vite
- JavaScript
- HTML5 and CSS3
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS

**Development Tools**
- Visual Studio Code
- Git and GitHub
- Postman
- MongoDB Atlas

## Project Structure

```text
week-4-fullstack-task-manager/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   ├── authApi.js
│   │   │   └── taskApi.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2.git
cd aurex-fullstack-internship-month2/week-4-fullstack-task-manager
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_random_jwt_secret
```

Replace the placeholders with your own credentials. Never commit the `.env` file.

Start the backend:

```bash
npm run dev
```

The backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

The Vite development proxy forwards `/api` requests to the Express backend.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |
| GET | `/api/auth/me` | Get authenticated user profile |

### Task Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get current user's tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update task details or completion |
| DELETE | `/api/tasks/:id` | Delete a task |

Task endpoints require a JWT in the `Authorization: Bearer <token>` header.

Optional filtering is available using `GET /api/tasks?completed=true` or `GET /api/tasks?completed=false`.

## Database

MongoDB Atlas is used to store application data.

**Database:** `aurex_week4_taskmanager`

**Collections:**
- `users` — registered user information and hashed passwords
- `tasks` — user-specific task records and completion status

Mongoose models are used to define schemas and interact with MongoDB.

## API Testing

The backend APIs were tested using Postman, including:

- Registration and login
- JWT-protected user profile
- Create task
- Retrieve tasks
- Update task
- Delete task

## Security

- Passwords are hashed before storage.
- JWT authentication protects private endpoints.
- Tasks are associated with their owners.
- Environment variables store database credentials and JWT secrets.
- The `.env` file is excluded from Git.

## Deployment

**Status:** Local development and API testing completed. Production deployment pending.

## Internship Information

**Program:** AUREX Full Stack Engineering Internship  
**Month:** 2  
**Week:** 4  
**Project:** Full Stack Task Manager  
**Repository:** https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2

## Future Improvements

- Password reset functionality
- Task priorities and deadlines
- Search and sorting
- Production deployment

---

Developed as part of the AUREX Full Stack Engineering Internship.