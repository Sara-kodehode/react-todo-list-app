import { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskObject, setTaskObject] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedtasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedtasks);
  }

  function doneTask(index) {
    const updatedtasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedtasks);
  }

  //   function moveUp(index) {}
  //   function moveDown(index) {}

  return (
    <div className="todolistcontainer">
      <h1>To do List</h1>
      <input
        value={newTask}
        type="text"
        placeholder="Enter a task..."
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={addTask}>Add task</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <button title="Done" onClick={() => doneTask(index)}>
              ☑️
            </button>
            {task}
            <button title="Delete task" onClick={() => deleteTask(index)}>
              ❌
            </button>
            <button title="Move up" onClick={() => moveUp(index)}>
              ⬆️
            </button>
            <button title="Move down" onClick={() => moveDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
