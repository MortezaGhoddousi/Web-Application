import { useState } from "react";
import axios from 'axios';

function Login() {

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const [err, setErr] = useState(null);

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', data)
        .then(result => {
            console.log(result);
        })
        .catch(
            error => {
                setErr('THERE ARE SOME ISSUES ON LOGGING IN');
            }
        )
    }

    return ( 
        <>
            <div>
                <p>{err}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" id="username" value={data.username} onChange={handleChange} placeholder="username"/> 
                </label>

                <label>
                    <input type="password" id="password" value={data.password} onChange={handleChange} placeholder="password"/> 
                </label>

                <label>
                    <input type="submit" id="submit" value="login" /> 
                </label>
            </form>
        </>
     );
}

export default Login;