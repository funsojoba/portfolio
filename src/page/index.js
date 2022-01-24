import NavBar from "../components/navbar"
import H1 from "../components/h1"
import Paragraph from "../components/paragraph"
import Img from "../components/img"
import Link from "../components/link"
import Circle from '../components/circles'
import Card from "../components/card"
import Tag from "../components/tags"
import Small from "../components/small"
import Warning from "../components/warning"

import {
    TagWrapper,
    SectionOne,
    SecOneText,
    TextWrapper,
    SecOneImg,
    Image,
    SectionTwo,
    SecTwoText, SecTwoImg, SecImg,
    SectionThree, CardContainer,
    SectionFour, SecFourText, SecFourLinks,
    Footer
} from './styles'

const HomePage = ()=>{
    let date = new Date()
    return <div>
    <NavBar />
    <SectionOne>
        <Circle top yellow />
        <Circle bottom blue />
        <SecOneText>
            <TextWrapper>
                <H1>
                    <span className="light">I'm</span><br></br>
                    FunsoJoba
                </H1>
                <Paragraph>and I'm a software engineer</Paragraph>
                <div>
                    <Link href="#contact" gradient>Contact Me</Link> &nbsp;
                        <Link target="_blank" href="https://www.dropbox.com/s/piw0pomxmjxeh3e/Elujoba%20Folorunso.pdf?dl=0"><i className="fas fa-cloud-download-alt"></i></Link>
                </div>
            </TextWrapper>
        </SecOneText>
        <SecOneImg>
            <Image>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611528/portfolio/IMG_7449_nwovel.png" alt="Funso Job"/>
            </Image>
        </SecOneImg>
    </SectionOne>

    <SectionTwo>
        <SecTwoText>
                <H1 color="#C8C8C8" spacing="5px" size="1.5em" smallSize="1.5em" >I WRITE</H1>
        </SecTwoText>
        <SecTwoImg>
            <SecImg>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628614333/portfolio/5python_ffgj8p.png" />
            </SecImg>
            <SecImg>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628614333/portfolio/4django_bvaqva.png" />
            </SecImg>
            <SecImg>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628614333/portfolio/2JS_hqgg9p.png" />
            </SecImg>
            <SecImg>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628614333/portfolio/1react_pgtyv1.png" />
            </SecImg>
            <SecImg>
                <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628614333/portfolio/2redux_ljlfxp.png" />
            </SecImg>
            
        </SecTwoImg>
    </SectionTwo>

    <SectionThree id="projects">
            <SecTwoText>
                <H1 color="#C8C8C8" spacing="5px" size="1.5em" smallSize="1.5em" >RECENT PROJECTS</H1>
            </SecTwoText>

            <CardContainer>
                <Card>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611643/portfolio/projects/Screenshot_2021-07-27_at_2.38.35_PM_ogwqk0.png" />
                    <div>
                        <Small>
                            Kontat is a web app that allows you add a list of your contacts in one place, send email to an individual on your contact list, edit a contact and delete.
                        </Small>
                    </div>
                    <TagWrapper>
                        <Tag blue>Django</Tag>
                        <Tag purple>React</Tag>
                        <Tag green>Redux</Tag>
                        <Tag pink>Netlify</Tag>
                        <Tag yellow>Heroku</Tag>
                    </TagWrapper>
                    <Link 
                        background="none" 
                        targe="_blank" 
                        href="https://kontat.netlify.app/" 
                        color="#4F00B5" >VISIT HERE</Link>
                </Card>
                <Card>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1630270361/portfolio/projects/Dashboard_hmr8wq.png" />
                    <div>
                        <Small>
                            Fintrak is an income-expense tracker that helps you monitor how you spend your money and gives report on transactions.
                        </Small>
                    </div>
                    <TagWrapper>
                        <Tag blue>Django</Tag>
                        <Tag purple>React</Tag>
                        <Tag green>Redux</Tag>
                        <Tag pink>Netlify</Tag>
                        <Tag yellow>AWS</Tag>
                        <Tag blue>Docker</Tag>
                    </TagWrapper>
                    <Link 
                        background="none" 
                        href="https://fintrak.netlify.app"
                        color="#4F00B5" 
                        target="_blank">VISIT HERE</Link>
                    <Warning>In progress ...</Warning>
                </Card>
                <Card>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611644/portfolio/projects/Screenshot_2021-08-10_at_4.29.20_PM_c43sof.png" />
                    <div>
                        <Small>
                            Regium is an Hotel Management System, that allows for managing hotel activities for both users and hotel receptionist
                        </Small>
                    </div>
                    <TagWrapper>
                        <Tag blue>Django</Tag>
                        <Tag purple>React</Tag>
                        <Tag green>Redux</Tag>
                        <Tag pink>Netlify</Tag>
                        <Tag yellow>Heroku</Tag>
                    </TagWrapper>
                    <Link 
                        background="none" 
                        href="https://regium-hotels.netlify.app/" 
                        color="#4F00B5" 
                        target="_blank">VISIT HERE</Link>
                    <Warning>In progress ...</Warning>
                </Card>
                <Card>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611643/portfolio/projects/Screenshot_2021-08-10_at_4.45.49_PM_fnt3ya.png" />
                    <div>
                        <Small>
                            Devsprime is an online learning platform that allows usage for both teachers and students
                        </Small>
                    </div>
                    <TagWrapper>
                        <Tag blue>Django</Tag>
                        <Tag purple>React</Tag>
                        <Tag green>Redux</Tag>
                        <Tag pink>Netlify</Tag>
                        <Tag yellow>Heroku</Tag>
                    </TagWrapper>
                    <Link 
                        background="none" 
                        href="https://devsprime.netlify.app/" 
                        color="#4F00B5"
                        target="_blank" >VISIT HERE</Link>
                </Card>
                <Card>
                    <Img src="https://res.cloudinary.com/ddl2pf4qh/image/upload/v1628611642/portfolio/projects/Screenshot_2021-08-10_at_4.47.55_PM_t6uyxr.png" />
                    <div>
                        <Small>
                            My portfolio page
                        </Small>
                    </div>
                    <TagWrapper>
                        <Tag purple>React</Tag>
                        <Tag blue>HTML</Tag>
                        <Tag pink>Netlify</Tag>
                        <Tag yellow>CSS</Tag>
                    </TagWrapper>
                   </Card>
            </CardContainer>
    </SectionThree>
    
    <SectionFour id="contact">
        <SecFourText>
            <H1 smallSize="1.5em">Let's get in touch</H1>
        </SecFourText>
        <SecFourLinks>
            <Link background="#D0075B" href="mailto:hrfunsojoba@gmail.com" target="_blank" ><i className="far fa-envelope fa-2x"></i></Link> &nbsp;
            <Link href="https://github.com/funsojoba" target="_blank" ><i class="fab fa-github fa-2x"></i></Link> &nbsp;
            <Link href="https://www.linkedin.com/in/funso-joba-784b2914b/" target="_blank" ><i class="fab fa-linkedin-in fa-2x"></i></Link> &nbsp;
            <Link href="twitter.com/funsoJoba" target="_blank" ><i class="fab fa-twitter fa-2x"></i></Link> &nbsp;
        </SecFourLinks>
    </SectionFour>
    <Footer> 
        <small>with ❤️ #funsojoba &copy; {date.getFullYear()} </small>
    </Footer>
    </div>
}

export default HomePage