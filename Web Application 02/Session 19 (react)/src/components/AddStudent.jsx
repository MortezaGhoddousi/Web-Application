import { useState } from "react"
import uuid from 'react-uuid';

const AddStudent = (props)=>{

    const [info, setInfo] = useState({
        name: '',
        age: '',
        role: '',
        id: ''
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo({...info, id: uuid()});

        props.changeInfo(info);

        setInfo({
            name: '',
            age: '',
            role: '',
            id: ''
        });
    }


    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>
                        <label htmlFor="student">Name</label>
                    </td>
                    <td>
                        <input type="text" placeholder="John Smith" name="name" id="name" value={info.name} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="age">Age</label>
                    </td>
                    <td>
                        <input type="text" placeholder="your age" name="age" id="age" value={info.age} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="role">Role</label>
                    </td>
                    <td>
                        <input type="text" placeholder="your role" name="role" id="role" value={info.role} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="send" name="submit" id="submit"/>
                    </td>
                </tr>
            </table>
        </form>
    )

}

export default AddStudent