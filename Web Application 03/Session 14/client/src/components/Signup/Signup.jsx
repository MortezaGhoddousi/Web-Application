import { useState } from "react";
import axios from 'axios';
import uuid from 'react-uuid';


function Signup() {

    const [data, setData] = useState({
        id: null,
        username: "",
        password: ""
    })

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData({...data, id: uuid()});
        axios.post('http://localhost:8000/api/adduser', data)
        .then(result => {
            console.log(result);
        })
        .catch(
            err => console.log(err)
        )
    }



    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" id="username" value={data.username} onChange={handleChange} placeholder="username"/> 
                </label>

                <label>
                    <input type="password" id="password" value={data.password} onChange={handleChange} placeholder="password"/> 
                </label>

                <label>
                    <input type="submit" id="submit" value="register" /> 
                </label>
            </form>
        </>
     );
}

export default Signup;