

function Students(props) {

    var myArray = props.data.filter(element => {
            return element.age>=15     
    })
    
    
    return ( 
        <>
            {/* {
                props.data.map(element => {
                    return (
                        <>
                            <h2>Your first name: {element.fname}</h2>
                            <h2>Your last name: {element.lname}</h2>
                            <p>Your age: {element.age}</p>
                            <p style={{borderBottom: '2px solid'}}>Your role: {element.role}</p>
                        </>
                    )       
                })
            } */}

            {
                
                myArray.map(element => {
                    return (
                        <div className="section" key={element.id}>
                            <h2>Your first name: {element.fname}</h2>
                            <h2>Your last name: {element.lname}</h2>
                            <p>Your age: {element.age}</p>
                            <p>Your role: {element.role}</p>
                        </div>
                    )       
                })
                
            }
        </>
    );
}

export default Students;