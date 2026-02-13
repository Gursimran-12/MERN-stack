import '../App.css'
import TodoIcon from '../assets/icon.png'
import { useState, useRef, useEffect } from 'react';
import CardManager from './card';

export const Card = ({ value }) => {

    // Using UseState for displaying the Cards
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem(value);
        return saved ? JSON.parse(saved) : [];
    });

    let inputRef = useRef(null);

    // Using useEffect to save the data on the Local storage
    useEffect(() => {
        localStorage.setItem(value, JSON.stringify(tasks));
    }, [tasks, value]);

    // For the addition of the Tasks
    function addTask() {
        console.log('Adding the Task');
        const text = inputRef.current.value.trim();
        if (text === "")
        {
            console.log('Nothing is written in the input Box')
            alert('Please write something');
        }

        setTasks([...tasks, { text, checked: false }]);
        inputRef.current.value = "";
    }

    // For Toggling: If the task is done,then strikethrough the task and when click then we again
    // get the text without the line

    function toggleTask(index) {
        console.log('Marking the Tasks which are done and vica-versa');
        const newTasks = [...tasks];
        newTasks[index].checked = !newTasks[index].checked;
        setTasks(newTasks);
    }

    // For Deleting the task

    function deleteTask(index) {
        console.log('Deleting the Task');
        const newTasks = tasks.filter((_, i) => i !== index); // _ we are ignoring this value
        setTasks(newTasks);
    }


    return (
        <div className="todo-app">
            <h2> {value} <img src={TodoIcon} /> </h2>
            <div className="row">
                <input ref={inputRef} type="text" placeholder="Add your Task here" />
                <button onClick={addTask}>Add</button>
            </div>

            <ul>

                {/* Using Map() to display all the tasks */}
                {tasks.map((task, index) => (

                    // Here onClick(), function will be called, which will toggle thw effect and helps to mark the task which is completed.
                    <li key={index} className={task.checked ? "checked" : ""} onClick={() => toggleTask(index)}>
                        {task.text}

                        {/* // For the deletion of the Tasks */}
                        <span onClick={(e) => { 
                            e.stopPropagation();
                            deleteTask(index);
                        }}>
                            ×
                        </span>
                    </li>

                ))}
            </ul>
            <CardManager/>
        </div>
    );
};

