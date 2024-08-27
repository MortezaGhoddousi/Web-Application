import axios from "axios";
import { useState } from "react";
import uuid from 'react-uuid';


function Todos(props) {

    const [tasks, setTasks] = useState({
        task: "",
        id: ''
    })

    const handleChange = (e) => {
        setTasks({...tasks, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api", {tasks})
        .then((res) => {
            props.updateData(res)
        })
        .catch(err => console.log(err));

        setTasks({
            task: "",
            id: ''
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">
                <input type="text" name="task" id="task" placeholder="Write your note ..." value={tasks.task} onChange={handleChange}/>
            </label>
            <label htmlFor="submit">
                <input type="submit" name="submit" id="submit" value="Add Note" />
            </label>
        </form>
    );
}

export default Todos;