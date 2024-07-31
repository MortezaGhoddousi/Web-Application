import { useEffect, useState } from "react";

function Students(props) {

    const[element, setElement] = useState([]);

    useEffect(()=>{
        setElement(props.info.map((el)=>{
            return (
                <>
                    <div>Name: {el.name}</div>
                    <div>Age: {el.age}</div>
                    <div>Role: {el.role}</div>
                </>
            )
        }))
    }, [])

    return ( 
        <>     
            {element}
        </>
    );
}

export default Students;