import styled from "styled-components";
import Img from "./img";
import Link from "./link";

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavImg = styled.div`
    width:120px;
`
const NavLinks = styled.div`
    padding:15px;
    display:flex;
`


const NavBar = ()=>{
    return <NavDiv>
        <NavImg>
            <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611575/portfolio/New_Project_xu1urg.png" alt="Funso Joba" />
        </NavImg>

        <NavLinks>
            <Link background="none" href="#projects" color="#4F00B5">PROJECTS</Link>
            <Link href="#contact" color="#4F00B5" background="none">CONTACT</Link>
        </NavLinks>
    </NavDiv>
}

export default NavBar