import { useContext, useEffect } from "react"
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { userContext } from "../Context/userContext"
import axios from "axios";

function Nav () {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const {user, changeUser} = useContext(userContext);

    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:3000/api/user/login/current")
        .then((result) => {
          if (result.data == 'Unauthorized User!') {
              changeUser ({
                  user: '',
                  loggedIn: false
              })   
          }
          else {
              changeUser({user: result.data.username, loggedIn: true,});
              navigate(location.pathname);
          }
        })
        .catch(err => console.log(err))
      }, [user.loggedIn])

    const handleClick = function(e){
        e.preventDefault();
        axios.delete('http://localhost:3000/api/user/login/current')
        .then((res) => {
            changeUser({user: '', loggedIn: false})
            navigate('/login');
        })
        .catch(err => console.log(err))
    }
     
    return (
        <nav>
            <Link to="/">Workout</Link>
            <ul>
                {user.loggedIn ? (
                    <>
                        <li><a href="" onClick={handleClick}>Logout</a></li>
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