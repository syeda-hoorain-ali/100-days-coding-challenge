'use client'
import { useState } from "react";

export default function Todo() {
    
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([
        'Install dependencies', 
        'Delete index.html file', 
        'Create a file "app/page.js"', 
        'Add a "next dev" script to package.json file',
        'Start your app by running "npm run dev"',
        'Go to "localhost:3000"'
    ])

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = () => {
        setTodo(...todo, task);
        setTask('');
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="input" value={task} onChange={handleChange} required placeholder="Write a task" />
                <button type="submit">Add Task</button>
            </form>

            <div className="container">

                {todo.map((task, index) => {
                    return (
                        <div className="task" key={index}>
                            <input type="checkbox" className="checkbox" />
                            <label>{task}</label>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}
