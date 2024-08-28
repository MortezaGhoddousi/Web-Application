import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { userContext } from "../Context/userContext";

function Login () {

    axios.defaults.withCredentials = true;
    const navigate = useNavigate ();

    const {User, changeUser} = useContext(userContext);

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [err, setErr] = useState(false);


    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/user/login", {user: user})
        .then((result) => {
            setUser({
                username: '',
                password: '' 
                })
            if (result.data) {
                changeUser({user: result.data.username, loggedIn: true})
                navigate('/');
            }
            else {
                setErr(true);
            }
            })
        .catch(err => console.log(err));
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {err ? (
                <p className="error">There are some error on your login</p>
            ):(null)}
            <label htmlFor="username">
                <input type="text" placeholder="username" id="username" value={user.username} onChange={handleChange} />
            </label>
            <label htmlFor="password">
                <input type="password" placeholder="password" id="password" value={user.password} onChange={handleChange} />
            </label>
            <label htmlFor="submit">
                <input type="submit" value="Login" id="submit" />
            </label>
        </form>
    );
}

export default Login;