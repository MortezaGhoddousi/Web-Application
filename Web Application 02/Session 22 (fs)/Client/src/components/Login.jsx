import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', data)
        .then((result) => {
            console.log(result.data);
            setData({
                username: '',
                password: '',
            })
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            setData({
                username: '',
                password: '',
            })
        });
    } 

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="username">
                <input type="text" id="username" value={data.username} placeholder="username" required onChange={handleChange}/>
            </label>
            <label htmlFor="password">
                <input type="password" id="password" value={data.password} placeholder="password" required onChange={handleChange}/>
            </label>
            <label htmlFor="submit">
                <input type="submit" value="login"/>
            </label>
        </form>
     );
}

export default Login;