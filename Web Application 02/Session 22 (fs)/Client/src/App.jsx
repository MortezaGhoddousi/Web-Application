import {useEffect, useState} from 'react';
import axios from 'axios';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  const [userInfo, setUserInfo] = useState({
    user: '',
    isLoggedIn: false
  });

  useEffect(()=>{
    const getUser = async () => {
      axios.get("http://localhost:8000/api/login/current")
      .then((result) => {
        if(result.data.Error){
          setUserInfo({
            user: '',
            isLoggedIn: false
          });
        }
        else {
          setUserInfo({
            user: result.data.username,
            isLoggedIn: true
          })
        }
      })
      .catch(err => console.log(err))
    }
    getUser();
  })

  return (
    <>
      <Navbar user={ userInfo }/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ userInfo.isLoggedIn ? <Home />:<Login /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/signup' element={ <Signup /> }/>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
