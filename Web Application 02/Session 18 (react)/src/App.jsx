import { useEffect, useState } from "react"
import Students from "./components/Students"

function App() {

  // const [info, setInfo] = useState({
  //   name: '',
  //   age: ''
  // });

  // const handleChange = function(e) {
  //   setInfo({...info, [e.target.id]: e.target.value})
  // }

  // const handleClick = function(e){
  //   e.preventDefault();
  //   console.log(info);
  //   setInfo({
  //     name: '',
  //     age: ''
  //   });
  // }

  // return (  
  //   <>
  //     <h1>Hey Guys</h1>
  //     <p>My name is: {info.name} and I am {info.age}</p>
  //     <form>
  //       <label htmlFor="username">
  //         <input type="text" id='name' placeholder='username' onChange={handleChange} value={info.name}/>
  //       </label>
  //       <label htmlFor="age">
  //         <input type="text" id='age' placeholder='age' onChange={handleChange} value={info.age}/>
  //       </label>
  //       <button type='submit' onClick={handleClick}>Click me</button>
  //     </form>
  //   </>
  // )

  const [info, setInfo] = useState([
      {
        name: 'AmirHossein',
        age: 25,
        role: 'Student'
      },
      {
        name: 'Mohammad',
        age: 23,
        role: 'Student'
      },
      {
        name: 'AmirAli',
        age: 12,
        role: 'Student'
      },
    ]);

    useEffect(()=>{console.log(info)})

  return (
    <>
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Students info={info}/>
      <hr />
    </>
  )
}

export default App
