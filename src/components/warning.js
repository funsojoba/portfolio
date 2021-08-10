import styled from 'styled-components'

const WarningDiv = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    padding:5px 15px;
    background: ${props => props.background ? props.background : "#E5F0FF"};
    color:#fff
`

const SmallDiv = styled.small`
    font-size: large.75em;
`

const Warning = ({children, background})=>{
    return <WarningDiv background={background}>
        <SmallDiv>{children}</SmallDiv>
    </WarningDiv>
}

export default Warning