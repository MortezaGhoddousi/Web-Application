import { Component, createContext } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Singup from './components/Signup';
import Nav from './components/Nav';

export const UserContext = createContext();

class App1 extends Component {

    constructor() {
        super();
        axios.defaults.withCredentials = true;
        this.state = {user: '', loggedIn: false};
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/user/login/current")
        .then((result) => {
        if (result.data == 'Unauthorized User!') {
            this.setState({ 
            user: '',
            loggedIn: false
            });
        }
        else {
            this.setState({user: result.data.username, loggedIn: true,});
        }
        })
        .catch(err => console.log(err))
        console.log(this.state.user);
    }

    componentDidUpdate(){
        console.log(this.state.user);
    }

    render() {
        return (
            <>
              <UserContext.Provider value={this.state.user.loggedIn}>
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
}

export default App1
