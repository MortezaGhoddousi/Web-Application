import Nav from './Nav';
import ShowName from './ShowName';

function Header(){
    return(
       <header>
            <ShowName fname={'Morteza'}/>
            <ShowName fname={'kiamehr'}/>
            <p>Developer</p>
            <Nav showNav={false}/>
            <Nav showNav={true}/>
       </header> 
    )
}

export default Header