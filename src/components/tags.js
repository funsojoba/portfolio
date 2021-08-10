import styled, { css } from "styled-components";

const TagDiv = styled.small`
    padding: 5px 10px;
    margin:2.5px;
    font-size: .5em;
    
    ${({ purple }) => purple && css`
        background: #EDDFFF;
        color: #4F00B5;
    `}
    ${({ blue }) => blue && css`
        background: #DFE6FF;
        color: #0007B5;
    `}
    ${({ green }) => green && css`
        background: #DFFFE6;
        color: #027400;
    `}
    ${({ yellow }) => yellow && css`
        background: #FFF2DF;
        color: #745300;
    `}
    ${({ pink }) => pink && css`
        background: #FFDFFC;
        color: #74006F;
    `}
`

const Tag = ({children, purple, blue, green, yellow, pink}) => {
    return <TagDiv
            purple={purple}
            blue={blue}
            green={green}
            yellow={yellow}
            pink={pink}
        >
        {children}
    </TagDiv>
}

export default Tag