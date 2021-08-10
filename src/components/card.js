import styled from "styled-components";


const CardDiv = styled.div`
    padding:20px;
    box-shadow: -16px 16px 40px rgba(0,0,0,.04);
    width: 300px;
    position: relative;

    @media only screen and (max-width:750px){
        width:250px;
        padding:10px;
    }
`

const Card = ({childrend})=>{
    return <CardDiv>
        {childrend}
    </CardDiv>
}

export default Card