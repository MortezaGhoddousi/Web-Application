import { useContext } from "react";
import {UserContext} from '../App';

function Home () {

    const loggedIn = useContext(UserContext);
    // console.log(loggedIn);
    

    return (
        <>
            {loggedIn ? (
                <h1>Welcome to your page</h1>
            ):(
                <p className="error">Unathorized User!</p>
            )}
            
        </>
    )

}

export default Home