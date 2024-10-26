function Nav(props){

    const prlists = function(){
        if (props.showNav) {
            return (
                <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Skills</a></li>
                </>
            )
        }
        else {
            return (
                <>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">SignUp</a></li>
                </>
            )
        }
    }

    const lists = prlists()


    return(
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
    )
}

export default Nav