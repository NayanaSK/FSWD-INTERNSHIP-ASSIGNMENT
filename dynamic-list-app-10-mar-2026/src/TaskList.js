import React, { useState } from "react";

function TaskList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if(task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((t, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{
            minHeight:"100vh",
            background:"linear-gradient(to right, #667eea, #764ba2)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontFamily:"Arial"
        }}>
            <div style={{
                background:"white",
                padding:"40px",
                borderRadius:"12px",
                width:"400px",
                boxShadow:"0 8px 20px rgba(0,0,0,0.2)"
            }}>
                <h1 style={{textAlign:"center"}}>Task Manager</h1>
                <div style={{display:"flex", marginBottom:"20px"}}>
                    <input type="text" placeholder="Enter a task..." value={task}
                        onChange={(e)=>setTask(e.target.value)}
                        onKeyDown={(e)=> e.key==="Enter" && addTask()}
                        style={{flex:1, padding:"10px", borderRadius:"6px", border:"1px solid #ccc", fontSize:"16px"}}
                    />
                    <button onClick={addTask}
                        style={{marginLeft:"10px", padding:"10px 15px", background:"#667eea", color:"white", border:"none", borderRadius:"6px", cursor:"pointer"}}
                    >Add</button>
                </div>
                <ul style={{listStyle:"none", padding:"0"}}>
                    {tasks.map((t,index)=>(
                        <li key={index} style={{
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                            background:"#f4f4f4",
                            padding:"10px",
                            borderRadius:"6px",
                            marginBottom:"10px"
                        }}>
                            {t}
                            <button onClick={()=>deleteTask(index)}
                                style={{background:"#ff4d4d", color:"white", border:"none", padding:"5px 10px", borderRadius:"5px", cursor:"pointer"}}
                            >Delete</button>
                        </li>
                    ))}
                </ul>
                <p>Total Tasks: {tasks.length}</p>
                {tasks.length === 0 && <p style={{textAlign:"center"}}>No tasks added yet.</p>}
            </div>
        </div>
    );
}

export default TaskList;