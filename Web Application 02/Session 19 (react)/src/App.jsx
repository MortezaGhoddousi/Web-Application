import { useEffect, useState } from "react"
import Students from "./components/Students"
import AddStudent from "./components/AddStudent";

function App() {

  const [info, setInfo] = useState([
      {
        name: 'Morteza',
        age: 30,
        role: 'Teacher',
        id: 1
      },  
      {
        name: 'AmirHossein',
        age: 25,
        role: 'Student',
        id: 2
      },
      {
        name: 'Mohammad',
        age: 23,
        role: 'Student',
        id: 3
      },
      {
        name: 'AmirAli',
        age: 12,
        role: 'Student',
        id: 4
      },
    ]);

    const changeInfo = (i) => {
      setInfo([...info, i])
    }

    const deleteInfo = (id) => {
      const filteredInfo = info.filter((element) => {
        return element.id != id
      })

      setInfo(filteredInfo);
    }

  return (
    <>
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Students info={info} deleteInfo={deleteInfo}/>
      <hr />
      <AddStudent changeInfo={changeInfo}/>
    </>
  )
}

export default App
