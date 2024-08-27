import axios from "axios";
import { useEffect, useState } from "react";
import Todos from "./Todos";

function Home() {


    const [data, setData] = useState({
        data: null
    });
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then((res)=>{
            setData({data: res.data})
        })
        .catch(err => console.log(err))
    }, [])


    const handleClick = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/"+e.target.id)
        .then((res)=>{
            setData({data: data.data.filter((el) => {
                return el.id != e.target.id 
            })})
        })
        .catch(err => console.log(err))
    }

    const updateData = (task) => {
        setData({data: [...data.data, task.data.DATA]});
    }

    return ( 
        <main>
            <h1>Welcome to TODO App</h1>
            <ul>
                {data.data ? data.data.map((el)=>{
                    return (
                        <div key={el.id}>
                            <li key={el.id} id={el.id}>{el.task}</li>
                            <button id={el.id} onClick={handleClick}>x</button>
                        </div>
                    )
                }) : (<p>hello1</p>)}
            </ul>
        <Todos updateData={updateData} />
        </main>
    );
}

export default Home;