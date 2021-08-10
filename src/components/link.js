import styled, { css } from "styled-components";

const LinkDiv = styled.div`
    a{
        padding: 10px 15px;
        display: inline-block;
        color: ${props => props.color ? props.color : '#fff'};
        background: ${props => props.background ? props.background : "#4F00B5"};
        ${({ gradient }) => gradient && css`
           background-image: linear-gradient(135deg, #01FFFF 0%, #4F00B5 100%);
        `}
    }
`

const Link = ({ children, href, gradient }) => {
    return <LinkDiv gradient={gradient} href={href}>{children}</LinkDiv>
}

export default Link

