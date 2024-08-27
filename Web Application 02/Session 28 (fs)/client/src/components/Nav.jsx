import { UserContext } from "../App"
import { useContext, useEffect } from "react"

function Nav () {

    const loggedIn = useContext(UserContext);
    
   

    return (
        <nav>
            <ul>
                {loggedIn ? (
                    <>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Logout</a></li>
                    </> 
                ):(
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Register</a></li>
                    </> 
                )}
            </ul>
        
        </nav>
    )
}

export default Nav