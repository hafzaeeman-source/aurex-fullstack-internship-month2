# AUREX Internship — Week 4 Full Stack Task Manager

A full-stack Task Manager application developed as part of the **AUREX Full Stack Engineering Internship — Month 2, Week 4**.

The application allows users to register, log in, and manage their personal tasks using React.js, Node.js, Express.js, MongoDB Atlas, and JWT authentication.

## Live Deployment

- **Frontend:** [Live Task Manager](https://aurex-fullstack-internship-month2-a.vercel.app)
- **Backend:** [Live REST API](https://aurex-fullstack-internship-month2-c.vercel.app)
- **GitHub:** [Source Code](https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2)

**Deployment:** Vercel (Frontend and Backend)  
**Database:** MongoDB Atlas

*Note: The live frontend and backend have been deployed. End-to-end authentication and task management testing is still pending.*

## Features

- User registration and login
- JWT-based authentication
- Password hashing using bcryptjs
- Protected dashboard and API routes
- Create, read, update, and delete tasks
- Mark tasks as completed or pending
- Filter tasks by All, Pending, and Completed
- Task statistics dashboard
- User-specific task management
- MongoDB Atlas database integration
- Responsive user interface
- Logout functionality
- Error and loading states

## Technologies Used

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, JavaScript, HTML5, CSS3 |
| Routing | React Router DOM |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcryptjs |
| API Testing | Postman |
| Deployment | Vercel |
| Version Control | Git, GitHub |

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
│   ├── .env.production
│   ├── vite.config.js
│   ├── vercel.json
│   └── package.json
├── server/
│   ├── api/
│   │   └── index.js
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
│   ├── vercel.json
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

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_random_jwt_secret
```

Start the backend:

```bash
npm run dev
```

Backend URL: `http://localhost:5000`

### 3. Frontend Setup

Open another terminal from the Week 4 project directory:

```bash
cd client
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

The frontend uses the Vite development proxy locally and the `VITE_API_URL` environment variable for production.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive JWT |
| GET | `/api/auth/me` | Retrieve authenticated user |

### Task Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve user's tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

Protected endpoints require an `Authorization: Bearer <token>` header.

## Database

The application uses **MongoDB Atlas** with Mongoose.

Database name: `aurex_week4_taskmanager`

Collections:
- `users` — registered users and hashed passwords
- `tasks` — task records linked to individual users

## API Testing

The backend endpoints were tested locally using Postman, including registration, login, authenticated user retrieval, and task CRUD operations.

Live end-to-end testing is pending.

## Security

- Passwords are stored as hashes.
- JWT protects authenticated API routes.
- Users can access only their own tasks.
- Sensitive credentials are stored in environment variables.
- The backend `.env` file must not be committed to GitHub.

## Deployment

The React frontend and Express backend are deployed as separate Vercel projects. MongoDB Atlas provides database storage.

The frontend uses `VITE_API_URL` to connect to the deployed backend.

## Future Enhancements

- Task priorities and due dates
- Search and sorting
- Password reset
- Additional task analytics

## Internship Details

**Organization:** AUREX  
**Program:** Full Stack Engineering Internship  
**Month:** 2  
**Week:** 4  
**Project:** Full Stack Task Manager

---

Developed as part of the AUREX Full Stack Engineering Internship.