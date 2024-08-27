import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', data)
        .then((result) => {
            console.log(result.data.DATA);
            setData({
                username: '',
                password: '',
                email: ''
            })
            navigate('/login');
        })
        .catch(err => console.log(err));
    } 

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label htmlFor="username">
                <input type="text" id="username" placeholder="username" value={data.username} required onChange={handleChange}/>
            </label>
            <label htmlFor="password">
                <input type="password" id="password" placeholder="password" value={data.password} required onChange={handleChange}/>
            </label>
            <label htmlFor="email">
                <input type="email" id="email" placeholder="email" value={data.email} required onChange={handleChange}/>
            </label>
            <label htmlFor="submit">
                <input type="submit" value="register"/>
            </label>
        </form>
     );
}

export default Signup;