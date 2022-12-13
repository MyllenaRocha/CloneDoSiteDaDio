import React from "react"
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture, 
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
        
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4" />
                    ) : (
                        <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }