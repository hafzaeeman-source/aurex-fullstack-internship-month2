# Full Stack Task Manager

## AUREX Full Stack Development Internship — Month 2, Week 4

A full stack Task Manager application developed using React.js, Node.js, and Express.js. The application provides CRUD functionality through a REST API and a responsive user interface.

## Features

- Add new tasks
- Display all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- View total, completed, and pending task counts
- Responsive user interface
- REST API integration
- Loading and error handling

## Technologies Used

**Frontend:** React.js, Vite, JavaScript, HTML5, CSS3

**Backend:** Node.js, Express.js

**Tools:** Git, GitHub, VS Code

**Database:** MongoDB Atlas and Mongoose (planned integration)

## Project Structure

```text
week-4-fullstack-task-manager/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
├── server/
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
└── README.md
```

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Installation

Clone the repository:

```bash
git clone https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2.git
```

Navigate to the Week 4 folder:

```bash
cd aurex-fullstack-internship-month2/week-4-fullstack-task-manager
```

Install and start the backend:

```bash
cd server
npm install
npm run dev
```

Open another terminal and start the frontend:

```bash
cd client
npm install
npm run dev
```

The backend runs on `http://localhost:5000` and the frontend normally runs on `http://localhost:5173`.

## Current Data Storage

The application currently stores tasks in server memory. Changes are not permanent and will reset when the backend restarts.

MongoDB Atlas integration is planned to provide persistent storage.

## Deployment

Frontend: Vercel (pending)

Backend: Public hosting (pending)

## Internship Details

**Organization:** AUREX

**Internship:** Full Stack Development

**Month:** 2

**Week:** 4

**Project:** Full Stack Task Manager

**Status:** Frontend and backend implemented; deployment and database integration pending.

---

Developed as part of the AUREX Full Stack Development Internship.