

function Students(props) {

    var myArray = props.data.filter(element => {
            return element.age>=15     
    })
    
    function handleClick(e){
        props.getId(e.target.id);
    }
    
    return ( 
        <>

            {
                
                myArray.map(element => {
                    return (
                        <div className="section" key={element.id}>
                            <h2>Your first name: {element.fname}</h2>
                            <h2>Your last name: {element.lname}</h2>
                            <p>Your age: {element.age}</p>
                            <p>Your role: {element.role}</p>
                            <span id={element.id} onClick={handleClick}>x</span>
                        </div>
                    )       
                })
                
            }
        </>
    );
}

export default Students;