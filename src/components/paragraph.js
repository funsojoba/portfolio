import styled from 'styled-components'

const ParagraphDiv = styled.p`
    color:#858585;
    font-size: 1.5em;
    margin-bottom: 15px;

    @media only screen and (max-width:770px){
        font-size:1em;
    }
`

const Paragraph = ({children})=>{
    return <ParagraphDiv>
        {children}
    </ParagraphDiv>
}

export default Paragraph