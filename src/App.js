import React from "react";
import {useState} from "react";

import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';


function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks,setTasks] = useState([
        {
            id:1,
            text: "Make a exercise",
            day: 'Aug 31 at 8:00pm',
            reminder:true
        },
        {
            id:2,
            text: "Make a yoga",
            day: 'Aug 31 at 8:00pm',
            reminder:true
        },
        {
            id:3,
            text: "Read book",
            day: 'Aug 31 at 8:00pm',
            reminder:false
        }
    ]);

    //Add task
    const addTask = (task) =>{
        const id=Math.floor(Math.random()*10000)+1;
        const newTask = {id, ...task};
        setTasks([...tasks,newTask])
    }
    //delete task
    const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=>task.id !== id))
    }
    //toggle Reminder
    const toggleReminder = (id)=>{
        setTasks(tasks.map(task=> task.id ===id ? {...task, reminder:!task.reminder}:task))
    }
  return (
    <div className="App">
        <Header title= "TODO app" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <Form onAdd={addTask}/>}
        {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
