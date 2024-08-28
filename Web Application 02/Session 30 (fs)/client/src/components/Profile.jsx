import axios from "axios";
import { userContext } from "../Context/userContext"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Profile () {

    const navigate = useNavigate();

    const {user} = useContext(userContext);

    const [data, setData] = useState({
        title: '',
        weight: '',
        reps: ''
    });

    useEffect(() => {
        if (!user.loggedIn) {
            navigate('/login');
        }
    }, [])


    const handleChange = function(e) {
        setData({...data, [e.target.id]: e.target.value});
    }

    const handleSubmit = function(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/api/workout', {username: user.user, workout: data})
        .then((result) => {
            setData({
                title: '',
                weight: '',
                reps: ''
            })
        })
        .catch(err => console.log(err))
    }


    return (
    <>
        <h1>Add work ut</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="addWorkout">
                <input type="text" placeholder="Add title" id="title" value={data.title} onChange={handleChange}/>
            </label>

            <label htmlFor="addWorkout">
                <input type="text" placeholder="Weight" id="weight" value={data.weight} onChange={handleChange}/>
            </label>

            <label htmlFor="addWorkout">
                <input type="text" placeholder="Rep" id="reps" value={data.reps} onChange={handleChange}/>
            </label>

            <label htmlFor="submit">
                <input type="submit" value="Add" />
            </label>
        </form>
    </>
    )
}

export default Profile