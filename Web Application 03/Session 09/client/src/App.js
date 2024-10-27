
import { useState } from 'react';
import Students from './components/Students';
// import Signup from './components/Signup';
import './style.css';

function App() {

  // var counter = 0;
  // const [counter, setCounter] = useState(0);

  // function handleClick(){
  //   setCounter(counter+1);
  // }

  const [names, setNames] = useState([
    {
      id: 1,
      fname: 'Morteza',
      lname: 'Ghoddousi',
      age: 30,
      role: 'Teacher'
    },
    {
      id: 2,
      fname: 'Arash',
      lname: 'HasanPour',
      age: 15,
      role: 'Student'
    },
    {
      id: 3,
      fname: 'Maedeh',
      lname: 'Goharshahi',
      age: 21,
      role: 'Student'
    },
    {
      id: 4,
      fname: 'Ermia',
      lname: 'Malekian',
      age: 15,
      role: 'Student'
    },
    {
      id: 5,
      fname: 'Kiamehr',
      lname: 'Keramati',
      age: 13,
      role: 'Student'
    },
    {
      id: 6,
      fname: 'Iman',
      lname: 'Moradi',
      age: 27,
      role: 'Assistance'
    },
    {
      id: 7,
      fname: 'Saeed',
      lname: 'Salar',
      age: 28,
      role: 'Assistance'
    },
    {
      id: 8,
      fname: 'Borhan',
      lname: 'Rad',
      age: 30,
      role: 'Assistance'
    },
  ])

  return (
    <>
      {/* <h1>{counter}</h1>
      <button onClick={handleClick}>Add</button> */}
      {/* <Signup /> */}
      <Students data={names}/>
    </>
  );
}

export default App;
