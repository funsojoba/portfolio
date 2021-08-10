import styled, {keyframes} from 'styled-components';



export const SectionOne = styled.div`
    display:flex;
    padding: 50px;
    position:relative;
    overflow: hidden;
    @media only screen and (max-width:750px){
        flex-direction: column-reverse;
        padding:20px;

    }
`

const slideIn = keyframes`
    0% {opacity:0; transform:translateX(10px)}
    100% {opacity:1; transform:translateX(0)}
`

export const SecOneText = styled.div`
    padding:20px;
    flex:1;
    display:flex;
    justify-content: center;
    align-items:center;
    /* animation-name: ${slideIn}; */
    animation: ${slideIn} 2s;
    @media only screen and (max-width:750px){
        padding:0;
    }
    
`
export const TextWrapper = styled.div`
    padding: 10px;
`

export const SecOneImg = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    animation: ${slideIn} 2s delay iteration-count direction fill-mode;

`
export const Image = styled.div`
    width: 70%;
    margin:10px;
`

export const SectionTwo = styled.div`
    padding:25px;
    `

export const SecTwoText = styled.div`
    text-align:center;
    padding:25px;
`

export const SecTwoImg = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`

export const SecImg = styled.div`
    width:150px;
    margin:10px
`

export const SectionThree = styled.div`
    background: #FCFCFC;
`

export const CardContainer = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:50px;
    @media only screen and (max-width:770px){
        padding:20px
    }
`
export const TagWrapper = styled.div`
    padding:15px 0;
    display:flex;
    flex-wrap: wrap;
`

export const SectionFour = styled.div`
    padding: 30px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
`

export const SecFourText = styled.div`
    display:flex;
`

export const SecFourLinks = styled.div`
    display:flex;
    flex-wrap: wrap;
     @media only screen and (max-width:780px){
         margin-top:20px;
     }
`

export const Footer = styled.div`
    background: #C8C8C8;
    padding:5px;
    display: flex;
    justify-content: center;
    align-items: center;
`