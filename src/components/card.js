import styled from "styled-components";


const CardDiv = styled.div`
    padding:20px;
    box-shadow: -16px 16px 40px rgba(0,0,0,.04);
    width: 350px;
    height:auto;
    position: relative;
    transition: all ease 200ms;
    margin:10px;

    @media only screen and (max-width:750px){
        width:250px;
        padding:10px;
    }

    &:hover{
        transform: translate(5px, -5px);
        box-shadow: -16px 16px 40px rgba(0,0,0,.14);
    }
`

const Card = ({children})=>{
    return <CardDiv>
        {children}
    </CardDiv>
}

export default Card