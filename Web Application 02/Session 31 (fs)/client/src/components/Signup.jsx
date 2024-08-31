import { useState } from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

function Singup () {

    const navigate = useNavigate ();

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
    })

    const [err, setErr] = useState(false);


    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/user", {user: user})
        .then((result) => {
            setUser({
                username: '',
                password: '' ,
                email: ''
                })
            if (result.data) {
                navigate('/login');
            }
            else {
                setErr(true);
            }
            })
        .catch(err => console.log(err));
    }

    return ( 
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Signup</h2>
            {err ? (
                <p className="error">There are some error on your Singup</p>
            ):(null)}
            <label htmlFor="username">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="username" id="username" value={user.username} onChange={handleChange} />
            </label>
            <label htmlFor="password">
                <i className='bx bxs-key' ></i>
                <input type="password" placeholder="password" id="password" value={user.password} onChange={handleChange} />
            </label>
            <label htmlFor="email">
                <i class='bx bxs-envelope' ></i>
                <input type="email" placeholder="email" id="email" value={user.email} onChange={handleChange} />
            </label>
            <label htmlFor="submit">
                <input type="submit" value="Signup" id="submit" />
            </label>
        </form>
    );
}

export default Singup;