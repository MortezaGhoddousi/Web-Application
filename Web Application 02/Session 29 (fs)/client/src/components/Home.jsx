import { useContext } from "react";
import { userContext } from "../Context/userContext";

function Home () {

    const {user} = useContext(userContext);
    
    return (
        <>
            {user.loggedIn ? (
                <h1>Welcome to your page</h1>
            ):(
                <p className="error">Unathorized User!</p>
            )}
            
        </>
    )

}

export default Home