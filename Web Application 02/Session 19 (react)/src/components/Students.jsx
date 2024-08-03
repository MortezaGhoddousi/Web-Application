import { useEffect, useState } from "react";

function Students(props) {

    const filteredStudents = props.info.filter((element)=>{
        return element.age >= 25
    })

    const handleClick = (e) => {
        props.deleteInfo(e.target.id);
    }

    const mappedStudents = filteredStudents.map((element)=>{
        return (
            <div key={element.id}>
                <h4>{element.name}</h4>
                <p>Your age is: {element.age}</p>
                <p>Your role in the class is: {element.role}</p>
                <button id={element.id} onClick={handleClick}>Delete</button>
            </div>
        )
    })

    return ( 

        <>
            {mappedStudents}
        </>
        
        // <>     
        //     {props.info.map((element)=>{
        //         return (
        //             <div key={element.id}>
        //                 <h4>{element.name}</h4>
        //                 <p>Your age is: {element.age}</p>
        //                 <p>Your role in the class is: {element.role}</p>
        //             </div>
        //         )
        //     })} 
        // </>
    );
}

export default Students;