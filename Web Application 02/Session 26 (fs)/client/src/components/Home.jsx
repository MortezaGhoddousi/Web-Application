import { useEffect } from "react";

function Home (props) {
    
    useEffect(()=> {        
        console.log(props.user);
    }, [props.user]);

    return (
        <>
            {props.user ? (
                <h1>Welcome to your page</h1>
            ):(
                <p className="error">Unathorized User!</p>
            )}
            
        </>
    )

}

export default Home