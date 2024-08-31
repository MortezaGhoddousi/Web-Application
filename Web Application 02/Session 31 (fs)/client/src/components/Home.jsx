import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/userContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

function Home () {

    const {user} = useContext(userContext);

    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [check, setCheck] = useState(false)

    const handleClick = function(e) {
        axios.delete('http://localhost:3000/api/workout/'+e.target.id)
        .then((result) => {
            console.log(result);
            axios.get('http://localhost:3000/api/workout/'+user.user)
            .then((result) => {

                const newData = result.data.map((el) => {
                    return (
                        <>
                            <div key={el.id}>
                                <p>Title: {el.title}</p>
                                <p>Weight: {el.weight} kg</p>
                                <p>Reps: {el.reps}</p>
                                <span id={el.id} onClick={handleClick}>x</span>
                            </div>
                        </>
                    )
                });

                setData(newData);
                setCheck(true)
            })
            .catch(err => console.log(err))
        })
        .catch (err => console.log(err))
    
    }
    
    useEffect(() => {
        if (!user.loggedIn) {
            navigate('/login');
        }
        else {
            axios.get('http://localhost:3000/api/workout/'+user.user)
            .then((result) => {

                const newData = result.data.map((el) => {
                    return (
                        
                        <div key={el.id}>
                            <aside>
                                <p>{el.title}</p>
                                <p>Load (kg): {el.weight}</p>
                                <p>Reps: {el.reps}</p>
                            </aside>
                            <span id={el.id} onClick={handleClick}>delete</span>
                        </div>
                    
                    )
                });

                setData(newData);
                setCheck(true)
            })
            .catch(err => console.log(err))

        }
    }, [check])


    return (
        <section>
            {user.loggedIn ? (
                <>
                    <div>
                        <h1>Welcome to your page</h1>
                        {data}
                    </div>
                    <Profile />
                </>
            ):(
                <p className="error">Unathorized User!</p>
            )}
            
        </section>
    )

}

export default Home