#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "tasks.json");

const command = process.argv[2];
const args = process.argv.slice(3);

if (!command) {
  console.log("Usage: task-tracker-cli <command>");
  process.exit(1);
}

function loadTasks() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
  if (!description) {
    console.log("Please provide a description for the taks.");
    return;
  }

  const tasks = loadTasks();

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log(`Task added successfully with ID :${newTask.id}`);
}

function listTasks(filterStatus = null) {
  const tasks = loadTasks();

  let filteredTasks = tasks;

  if (filterStatus) {
    filteredTasks = tasks.filter(task => task.status === filterStatus);
  }

  if (!filteredTasks) {
    console.log("No tasks found");
    return;
  }

  filteredTasks.forEach(task => {
    console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
  })
}

function updateTaskDescription(id, newDescription) {
  console.log("Id is ", id);
  const tasks = loadTasks();
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    console.log("Task not found");
    return;
  }

  task.description = newDescription;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);

  console.log("Task updated succesfully");
}

function markStatus(id, status) {
  const tasks = loadTasks();
  const task = tasks.find(task => task.id === Number(id));

  if (!task) {
    console.log("Task not found");
    return;
  }

  task.status = status;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);

  console.log(`Task marked as ${status}`);
}

switch (command) {
  case "add":
    addTask(args.join(" "));
    break;
  case "list":
    listTasks(args[0]);
    break;
  case "update":
    updateTaskDescription(args[0], args.slice(1).join(" "));
    break;
  case "mark":
    markStatus(args[0], args.slice(1).join(" "));
    break;
  default:
    console.log("Unknown command");
}