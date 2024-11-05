import { useState, useEffect } from "react";
import uuid from 'react-uuid';

function AddStudent(props) {

    const [data, setData] = useState({
        id: '',
        fname: '',
        lname: '',
        age: '',
        role: ''
    })

    const [sendData, setSendData] = useState(false);

    useEffect(function(){
        console.log(data);
        props.getData(data);
        setData({
            id: '',
            fname: '',
            lname: '',
            age: '',
            role: ''
        })
    }, [sendData])

    function handleSubmit(e){
        e.preventDefault();
        let id = uuid(); 
        setData({...data, id: id});
        setSendData(true);    
    } 

    function handleChange(e) {
        setData({...data, [e.target.id]: e.target.value})
    }

    return ( 
        <form className="addStudent" onSubmit={handleSubmit}>
            <h1>Add new Student</h1>
            <label>
                <input type='text' id="fname" value={data.fname} onChange={handleChange} placeholder="Enter your first name"/>
            </label>
            <label>
                <input type='text' id="lname" value={data.lname} onChange={handleChange} placeholder="Enter your last name"/>
            </label>
            <label>
                <input type='text' id="age" value={data.age} onChange={handleChange} placeholder="Enter your age"/>
            </label>
            <label>
                <input type='text' id="role" value={data.role} onChange={handleChange} placeholder="Enter your role"/>
            </label>
            <label>
                <input type='submit' value="ADD"/>
            </label>
        </form>
     );
}

export default AddStudent;