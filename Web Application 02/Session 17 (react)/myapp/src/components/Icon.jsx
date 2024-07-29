import { useState } from "react";

function Icon() {
    
    const [good, setGood] = useState({
        nameGood: 'Iphone',
        price: '1600$'
    });

    return ( 
        <>
            <h4>{good.nameGood}</h4>
            <p>{good.price}</p>
        </>
    );
}

export default Icon;