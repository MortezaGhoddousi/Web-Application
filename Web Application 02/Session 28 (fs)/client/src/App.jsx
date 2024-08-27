import { useEffect, useState, createContext } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Singup from './components/Signup';
import Nav from './components/Nav';

export const UserContext = createContext();

function App() {

  axios.defaults.withCredentials = true;

  const [user, setUser] = useState({
    user: '',
    loggedIn: false
  })

  const [check, setCheck] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/user/login/current")
    .then((result) => {
      if (result.data == 'Unauthorized User!') {
        setUser({
          user: '',
          loggedIn: false
        });
        setCheck1(false);
      }
      else {
        setUser({user: result.data.username, loggedIn: true,});
        setCheck1(true);
      }
    })
    .catch(err => console.log(err))
    console.log(user);
  }, [check])

  useEffect(()=>{
    setCheck(true);
  }, [user.loggedIn])

  return (
    <>
      <UserContext.Provider value={user.loggedIn}>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Singup />}/>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
