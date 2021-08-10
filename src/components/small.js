import styled from 'styled-components'

const SmallDiv = styled.small`
    color: #858585;
`

const Small = ({children})=>{
    return <SmallDiv>{children}</SmallDiv>
}

export default Small