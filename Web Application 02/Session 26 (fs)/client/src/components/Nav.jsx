function Nav (props) {
    return (
        <nav>
            <ul>
                {props.loggedIn ? (
                    <>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Logout</a></li>
                    </> 
                ):(
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Register</a></li>
                    </> 
                )}
            </ul>
        
        </nav>
    )
}

export default Nav