import styled from "styled-components";

const P = styled.p`
    font-size:24px;
    color: blue;
`

const Content = styled.div`
    background-color: #27FAD4;
`

const Button = styled.button`
    background-color: ${props => props.primary ? 'red' : 'white'};
    color: ${props => props.primary ? 'white' : 'red'};
    padding: 10px 15px;
    border: solid 2px red;
    border-radius: 4px;
    cursor: pointer;
`

const BlockButton=styled(Button)`
    width:100%;
    font-size:24px;
`

const Link = ({ className, ...props}) => {
    return <a className={className} {...props}></a>
}

const StyledLink=styled(Link)`
    color:blue;
`

const Styled = () => {
 return(
    <Content>
        <h1>
            Styled Components
        </h1>
        <P>Hola soy un parrafo</P>
        <Button>Enviar</Button>
        <Button primary>Enviar</Button>
        <BlockButton>Enviar</BlockButton>
        <BlockButton primary as='a' href='#'>Enviar</BlockButton>
        <Link>LINK</Link>
        <StyledLink>LINK STYLED</StyledLink>

    </Content>

 )
}

export default Styled