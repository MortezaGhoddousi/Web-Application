
import { useState, useEffect } from 'react';
import Students from './components/Students';
// import Signup from './components/Signup';
import './style.css';
import AddStudent from './components/AddStudent';
import axios from 'axios';

function App() {

  const [names, setNames] = useState([])

  useEffect(function(){
    axios.get('http://localhost:8000/api/student')
    .then(function(result){
      console.log(result.data)
      setNames(result.data);
    })
    .catch(function(err){
      console.log(err)
    })
  }, [])



  // const [names, setNames] = useState([
  //   {
  //     id: 1,
  //     fname: 'Morteza',
  //     lname: 'Ghoddousi',
  //     age: 30,
  //     role: 'Teacher'
  //   },
  //   {
  //     id: 2,
  //     fname: 'Arash',
  //     lname: 'HasanPour',
  //     age: 15,
  //     role: 'Student'
  //   },
  //   {
  //     id: 3,
  //     fname: 'Maedeh',
  //     lname: 'Goharshahi',
  //     age: 21,
  //     role: 'Student'
  //   },
  //   {
  //     id: 4,
  //     fname: 'Ermia',
  //     lname: 'Malekian',
  //     age: 15,
  //     role: 'Student'
  //   },
  //   {
  //     id: 5,
  //     fname: 'Kiamehr',
  //     lname: 'Keramati',
  //     age: 13,
  //     role: 'Student'
  //   },
  //   {
  //     id: 6,
  //     fname: 'Iman',
  //     lname: 'Moradi',
  //     age: 27,
  //     role: 'Assistance'
  //   },
  //   {
  //     id: 7,
  //     fname: 'Saeed',
  //     lname: 'Salar',
  //     age: 28,
  //     role: 'Assistance'
  //   },
  //   {
  //     id: 8,
  //     fname: 'Borhan',
  //     lname: 'Rad',
  //     age: 30,
  //     role: 'Assistance'
  //   },
  // ])

  function getData(newData){
    setNames([...names, newData])
  }

  function getId(id) {
    console.log(id);
    var newNames = names.filter(function(el){
      return el.id!=id;
    })

    setNames(newNames)
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
