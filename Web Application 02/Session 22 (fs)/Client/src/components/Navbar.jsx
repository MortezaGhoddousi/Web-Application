import axios from "axios";

function Navbar(props) {

    axios.defaults.withCredentials = true;

    const handleClick = () => {
        axios.delete("http://localhost:8000/api/login/current")
        .then((result) => {
            console.log(result.data.STATUS);
        })
        .catch(err => console.log(err));
    }

    return ( 
        <nav>
            <a href="">TODO</a>
            <ul>
                {props.user.isLoggedIn ? (
                    <>
                        <li><a href="">Profile</a></li>
                        <li><a href="" onClick={handleClick}>Logout</a></li>
                    </>
                ) : (
                    <li><a href="">Login</a></li>
                )}
                
            </ul>
        </nav>
     );
}

export default Navbar;