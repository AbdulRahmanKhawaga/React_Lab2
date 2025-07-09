# React Lab 2

A simple React application built with Vite, featuring two main tasks:

- **Task 1:** User List with Search and Verification
- **Task 2:** To-Do List Application

---

## Demo

[View the deployed app here](https://react-lab2-bay.vercel.app/) 
---

## Features

### Task 1: User List
- Displays a list of users with their name, email, phone, and profile picture.
- Shows verification status (✔ for verified, ✖ for not verified).
- Search users by email (case-insensitive).
- Reset search to show all users.

### Task 2: To-Do List
- Add new tasks to your to-do list.
- Mark tasks as done/undo.
- Delete tasks.
- Tasks are managed in-memory (not persisted).

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd React_Lab2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To build the app for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Deployment

This project is ready to be deployed to GitHub Pages or any static site host.

To deploy to GitHub Pages:
```bash
npm run deploy
```

The deployment link will be:
```
<deployment-link>
```
(Replace `<deployment-link>` with your actual deployed URL.)

---

## Project Structure

```
React_Lab2/
├── public/           # Static assets
├── src/
│   ├── task1/        # Task 1 components (User List)
│   ├── task2/        # Task 2 components (To-Do List)
│   ├── App.jsx       # Main app with routing
│   └── ...
├── package.json      # Project metadata and scripts
└── ...
```

---

## License

This project is for educational purposes.
