import { useEffect, useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Singup from './components/Signup';
import Nav from './components/Nav';


function App() {

  axios.defaults.withCredentials = true;

  const [user, setUser] = useState({
    user: '',
    loggedIn: false
  })

  const [err, setErr] = useState(false);
  const [check, setCheck] = useState(false);


  useEffect(()=>{
    axios.get("http://localhost:3000/api/user/login/current")
    .then((result) => {
      if (result.data == 'Unauthorized User!') {
        setErr(true);
      }
      else {
        console.log(result.data);
        setUser({...user, loggedIn: true});
        setCheck(true);
      }
    })
    .catch(err => console.log(err``))
  }, [check])

  useEffect(()=>{
    setErr(false);
  }, [err])


  return (
    <>
      <Nav loggedIn={err} />
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Singup />}/>
          <Route path='/' element={<Home user={err}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
