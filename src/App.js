import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Go to School",
        day: "March 3rd at 8:00am",
        reminder: true,
    },
    {
        id: 2,
        text: "Car wash",
        day: "March 24rd at 10:00am",
        reminder: false,
    },
    {
        id: 3,
        text: "Leave from School",
        day: "June 3rd at 3:00pm",
        reminder: true,
    },
    {
        id: 4,
        text: "Vacay to Cancun",
        day: "July 30rd at 8:00am",
        reminder: false,
    },
])

//Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])

}

// Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: ('No Tasks to Show')}
    </div>
  );
}

export default App;
