import { useState } from "react";

function Signup() {


    const [data, setData] = useState({
        username: '',
        password: '',
        email: ''
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(data);
        setData({
            username: '',
            password: '',
            email: ''
        })
    } 

    function handleChange(e) {
        setData({...data, [e.target.id]: e.target.value})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>SignUp Form</h1>
            <label>
                <input type='text' id="username" value={data.username} onChange={handleChange}/>
            </label>
            <label>
                <input type='password' id="password" value={data.password} onChange={handleChange}/>
            </label>
            <label>
                <input type='email' id="email" value={data.email} onChange={handleChange}/>
            </label>
            <label>
                <input type='submit' />
            </label>
        </form>
     );
}

export default Signup;