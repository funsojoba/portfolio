import styled from "styled-components";

const H1div = styled.h1`
    font-weight: 900;
    font-size: ${props => props.size ? props.size : "3em"};
    color: ${props => props.color ? props.color : "#4F00B5"};
    letter-spacing: ${props => props.spacing ? props.spacing : '0'};
    .light{
        font-weight: 200;
    }

    @media only screen and (max-width:770px){
        font-size:2.5em;
        font-size: ${props => props.smallSize ? props.smallSize : '3em'};
    }
`

const H1 = ({children, color, spacing, size, smallSize})=>{
    return <H1div 
            color={color} 
            spacing={spacing} 
            size={size}
            smallSize={smallSize}
            >{children}</H1div>
}

export default H1