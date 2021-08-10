import styled, {css} from 'styled-components'

const CircleDiv = styled.div`
    width:350px;
    height:350px;
    border-radius: 50%;
    position:absolute;
    z-index:-1;
    ${({ top }) => top && css`
        top:-175px;
        left:-175px;
    `}
    ${({ bottom }) => bottom && css`
        bottom:-175px;
        right:-175px;
    `}
    ${({ blue }) => blue && css`
        background: rgba(177, 255, 255, .3)
        `}
    ${({ yellow }) => yellow && css`
        background: rgba(246, 226, 71, .3)
        `}
`

const Circle = ({top, bottom, yellow, blue})=>{
    return <CircleDiv
        top={top}
        bottom={bottom}
        yellow={yellow}
        blue={blue}
    ></CircleDiv>
}

export default Circle