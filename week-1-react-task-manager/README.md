# DoList — React Task Manager

### AUREX Full-Stack Engineering Internship | Month 2 — Week 1

A responsive task management web application developed using **React.js, JavaScript, CSS3, and Vite** as part of the AUREX Full-Stack Engineering Internship.

This project converts a previously developed JavaScript-based task manager into a component-based React application, focusing on reusable components, state management, user interaction, and browser-based data persistence.

## Live Demo

**Live Website:** https://aurex-fullstack-internship-month2.vercel.app/

**GitHub Repository:** https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2

## Features

- **Add Tasks:** Create new tasks easily.
- **Edit Tasks:** Update existing task information.
- **Delete Tasks:** Remove unwanted tasks.
- **Mark as Completed:** Track completed and pending tasks.
- **Search Tasks:** Quickly find tasks using search.
- **Filter Tasks:** View tasks based on their completion status.
- **Local Storage:** Save tasks in the browser so they remain available after refreshing.
- **Responsive Design:** User-friendly layout for desktop and mobile devices.
- **React Components:** Organized and reusable UI components.

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building interactive user interfaces |
| JavaScript (ES6+) | Application logic and functionality |
| HTML5 | Webpage structure |
| CSS3 | Styling and responsive design |
| Vite | Development server and build tool |
| Local Storage | Browser-based task persistence |
| Git & GitHub | Version control and source code hosting |
| Vercel | Frontend deployment |

## Project Structure

```text
week-1-react-task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## React Component Overview

**App.jsx:** Main application component responsible for managing tasks, state, and application functionality.

**Header.jsx:** Displays the application heading and header interface.

**TaskForm.jsx:** Provides the form for adding or updating tasks.

**TaskList.jsx:** Displays the collection of tasks.

**TaskItem.jsx:** Represents an individual task with available actions.

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/hafzaeeman-source/aurex-fullstack-internship-month2.git
```

**2. Navigate to the project folder**

```bash
cd aurex-fullstack-internship-month2/week-1-react-task-manager
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## How It Works

1. The user enters task information through the task form.
2. React updates the application state to display the new task.
3. Users can edit, delete, search, filter, or complete tasks.
4. Task data is saved in browser local storage.
5. Saved tasks are restored when the application is refreshed.

## Testing

The following functionality has been tested:

- Adding new tasks
- Editing existing tasks
- Deleting tasks
- Marking tasks as completed
- Searching tasks
- Filtering tasks
- Retaining task data after refreshing the page
- Running the deployed application on Vercel

## Learning Outcomes

During Week 1, I gained practical experience in:

- Creating a React application using Vite.
- Understanding JSX and component-based architecture.
- Building reusable React components.
- Managing application state using React hooks.
- Handling events and user input.
- Implementing CRUD-style operations on frontend task data.
- Using local storage for data persistence.
- Organizing a React project into maintainable files.
- Using Git and GitHub for version control.
- Deploying a React application using Vercel.

## Internship Information

**Internship:** AUREX Full-Stack Engineering Internship  
**Month:** 2  
**Week:** 1  
**Project:** React Task Manager  
**Developer:** Hafza Eeman  
**Deployment Platform:** Vercel  
**Status:** Completed

## Future Improvements

This React Task Manager will serve as a foundation for learning backend development, REST APIs, MongoDB, authentication, and full-stack integration during the upcoming internship weeks.

---

**Developed as part of the AUREX Full-Stack Engineering Internship — Month 2, Week 1.**