import styled from "styled-components";

const H1 = styled.h1`
    font-weight: bolder;
    font-size: 4rem;
    color: ${props => props.color ? props.color : "#4F00B5"};

    .light{
        font-weight: lighter;
    }
`

const H1 = ({children})=>{
    return <H1>{children}</H1>
}

export default H1