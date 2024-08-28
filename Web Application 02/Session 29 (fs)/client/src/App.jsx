import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Singup from './components/Signup';
import Nav from './components/Nav';
import UserContextProvider from './Context/userContext';


function App() {  
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Nav />
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Singup />}/>
              <Route path='/' element={<Home />}/>
            </Routes>
        </UserContextProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
