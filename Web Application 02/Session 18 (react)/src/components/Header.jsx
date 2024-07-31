function Header (props){
    return (
        <>
            <h1>{props.fname}</h1>
            <p>developer</p>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Summary</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Experiences</a></li>
            </ul>
        </>
    )
}

export default Header