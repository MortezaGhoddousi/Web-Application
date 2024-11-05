
import { useState, useEffect } from 'react';
import Students from './components/Students';
// import Signup from './components/Signup';
import './style.css';
import AddStudent from './components/AddStudent';
import axios from 'axios';

function App() {

  const [names, setNames] = useState([])
  const [change, setChange] = useState(true)

  useEffect(function(){
    axios.get('http://localhost:8000/api/student')
    .then(function(result){
      console.log(result.data)
      setNames(result.data);
    })
    .catch(function(err){
      console.log(err)
    })
  }, [change])

  function getData(newData){
    axios.post('http://localhost:8000/api/addstudent', newData)
    .then(result => {
      console.log(result);
      setChange(!change)
    })
    .catch(err => console.log(err))
  }

  function getId(id) {
    axios.delete('http://localhost:8000/api/student/'+id)
    .then(result => {
      console.log(result);
      setChange(!change)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <article>
        <Students data={names} getId={getId}/>
      </article>
      <AddStudent getData={getData}/>
    </>
  );
}

export default App;
