import styled, {keyframes} from "styled-components";

const P = styled.p`
    font-size:24px;
    color: blue;
`

const Content = styled.div`
    background-color: #27FAD4;
`

const Button = styled.button`
    transition: box-shadow 0.2s ease;
    background-color: ${props => props.primary ? 'red' : 'white'};
    color: ${props => props.primary ? 'white' : 'red'};
    padding: 10px 15px;
    margin: 5px;
    border: solid 2px red;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        box-shadow: 5px 2px 5px rgb(50,0,50,0.3);
        border: solid 2px #fff;
    }

    &.secundary{
        background-color: blue;
        border: solid 2px #fff;
    }

    .info{
        font-size: 28px;
    }
`

const BlockButton=styled(Button)`
    margin: 10px 0;
    width:100%;
    font-size:24px;
`

const Link = ({ className, ...props}) => {
    return <a className={className} {...props}></a>
}

const StyledLink=styled(Link)`
    margin: 10px;
    color:blue;
`

// const Input = () => {
//     return(
//         <input type="text" className={className}/>
//     )
// }

const Input = styled.input.attrs(props => ({
    type: 'text',
    color: props.color || 'red'
}))`
    font-size: 20px;
    border: 1px solid red;
    //puedo interseptar las propiedades
    color: ${props => props.color}
`

const Password = styled(Input).attrs({
    type: 'password'
})``


const girar = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Rotar = styled.div`
    animation: ${girar} 2s linear infinite;
    display: inline-block;
`
const Styled = () => {
    return(
        <Content>
            <h1>
                Styled Components
            </h1>
            <P>Hola soy un parrafo</P>
            <Button>Enviar</Button>
            <Button>Enviar<p className="info">info</p></Button>
            <Button primary>Enviar</Button>
            <Button primary className="secundary">Enviar</Button>
            <BlockButton>Enviar</BlockButton>
            <BlockButton primary as='a' href='#'>Enviar</BlockButton>
            <Link>LINK</Link>
            <StyledLink>LINK STYLED</StyledLink>
            <Input color='blue'/>
            <Password/>
            <br/>
            <Rotar>Estoy Girando</Rotar>
        </Content>

    )
}

export default Styled