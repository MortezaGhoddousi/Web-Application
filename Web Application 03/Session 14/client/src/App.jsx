import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/main';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
