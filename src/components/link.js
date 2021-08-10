import styled, { css } from "styled-components";

const LinkDiv = styled.a`
    padding: 10px 15px;
    display: inline-block;
    color: ${props => props.color ? props.color : '#fff'};
    background: ${props => props.background ? props.background : "#4F00B5"};
    text-decoration:none;
    transition:all ease-in 200ms;
    ${({ gradient }) => gradient && css`
        background-image: linear-gradient(135deg, #01FFFF 0%, #4F00B5 100%);
    `}
    &:hover{
        transform:translateY(-5px);
        box-shadow: 5px 5px 30px rgba(0,0,0,.2);
    }
    
`

const Link = ({ children, href, gradient, background, color, target }) => {
    return <LinkDiv 
        gradient={gradient} 
        href={href} 
        background={background}
        color={color}
        target={target}>{children}</LinkDiv>
}

export default Link

