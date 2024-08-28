
import { createContext, useState } from "react";

export const userContext = createContext();

function UserContextProvider(props) {

    const [user, setUser] = useState({
        user: '',
        loggedIn: false
    })

    const changeUser = function(user){
        setUser(user);
    }


    return (
        <userContext.Provider value={{user, changeUser}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider
