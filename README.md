# 📝 Task Tracker CLI

A simple Command Line Interface (CLI) application built with Node.js to manage tasks efficiently.  
You can add, list, update, and mark tasks directly from your terminal.

This is a solution for https://roadmap.sh/projects/task-tracker

---

## 🚀 Features

- Add new tasks
- List all tasks
- Filter tasks by status
- Update task descriptions
- Mark tasks with a specific status
- Persistent storage using `tasks.json`

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/saiGaneshChillara/task-tracker-cli
cd task-tracker-cli
```

### 2. Install dependencies (if any)

```bash
npm install
```

### 3. Make the file executable (Linux/Mac)

```bash
chmod +x index.js
```

### 4. (Optional) Link globally

```bash
npm link
```

Now you can run:

```bash
task-tracker-cli <command>
```

Or without linking:

```bash
node index.js <command>
```

---

## 📁 Project Structure

```
task-tracker-cli/
│
├── index.js       # Main CLI application
├── tasks.json     # Stores tasks data
└── README.md
```

---

## 🛠 Usage

### ➕ Add a Task

```bash
node index.js add "Complete DSA practice"
```

Or (if globally linked):

```bash
task-tracker-cli add "Complete DSA practice"
```

---

### 📋 List All Tasks

```bash
node index.js list
```

---

### 🔍 Filter Tasks by Status

```bash
node index.js list todo
node index.js list in-progress
node index.js list done
```

---

### ✏ Update Task Description

```bash
node index.js update 1 "Complete Linked List implementation"
```

---

### ✅ Mark Task Status

```bash
node index.js mark 1 done
```

You can use any status such as:

- `todo`
- `in-progress`
- `done`

---

## 🗂 Task Object Structure

Each task is stored in `tasks.json` as:

```json
{
  "id": 1,
  "description": "Complete DSA practice",
  "status": "todo",
  "createdAt": "2026-02-21T10:00:00.000Z",
  "updatedAt": "2026-02-21T10:00:00.000Z"
}
```

---

## 🧠 How It Works

- Uses Node.js `fs` module for file operations
- Stores tasks in a local JSON file
- Uses `process.argv` to parse CLI commands
- Automatically creates `tasks.json` if it doesn’t exist

---

## ⚠ Notes

- Task IDs are auto-incremented
- Status values are not restricted (use consistent naming)
- `tasks.json` will be created automatically if not present

---

## 💡 Future Improvements

- Add delete command
- Add validation for allowed status values
- Add colored terminal output
- Add pagination
- Publish as an NPM package

---

## 🛡 Requirements

- Node.js v14 or higher

---

## 📜 License

MIT License