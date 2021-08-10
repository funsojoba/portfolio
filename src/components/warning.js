import styled from 'styled-components'

const WarningDiv = styled.div`
    position:absolute;
    bottom:0;
    right:0;
    padding: 5px 10px;
    background: ${props => props.background ? props.background : "FF5EA1"};
    color:#fff
`

const Warning = ({children, background})=>{
    return <WarningDiv background={background}>
        {children}
    </WarningDiv>
}

export default Warning