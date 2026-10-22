# DoList — AUREX Month 2 Week 1

Converted from the supplied **Month 1 Week 4 JavaScript Task Management Application**. Original visual CSS, UI layout, task validation, edit/delete/complete, filters, clear actions and browser storage are retained. The original `aurexWeek4Tasks` localStorage key is retained, so saved tasks in the same browser/origin may be reused.

## Run

1. Open this folder in VS Code.
2. Run `npm install` (or `npm.cmd install` in PowerShell if scripts are blocked).
3. Run `npm run dev` (or `npm.cmd run dev`).
4. Open the URL shown by Vite.

## React component tree

- `App`: owns task list, filtering and editing state, handles actions and localStorage persistence.
- `Header`: displays visible task count via props.
- `TaskForm`: controlled input, validation, add/update and cancel.
- `TaskList`: renders list and empty states.
- `TaskItem`: task row, complete/edit/delete buttons.

## Test checklist

- [ ] Add task and see it immediately
- [ ] Reject blank and 1–2 character tasks
- [ ] Mark complete and return to active
- [ ] Edit and delete tasks
- [ ] Filter All / Active / Completed
- [ ] Clear completed and delete all (confirmation)
- [ ] Refresh: tasks remain saved
- [ ] Test phone-size responsive layout

## Submission

Commit code to GitHub, deploy to Vercel/Netlify, and attach screenshots, live URL, technology list, learning summary and issues. Those external steps require your accounts and testing.

## What changed from vanilla JS?

`document.getElementById`, `innerHTML` and manual event listeners were replaced with JSX, component props, `useState`, `useEffect` and declarative React event handlers.
