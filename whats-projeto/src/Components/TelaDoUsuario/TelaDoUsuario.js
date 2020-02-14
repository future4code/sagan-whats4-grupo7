import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid red;
display: flex;
height: 100vh;
width: 350px;
flex-direction: column;
`

const CampoDosInputs = styled.div`
width: 100%;
`

const AreaDaMensagem = styled.div`
height:90%;
`
const InputUsuario = styled.input`
width: 30%;
border:  solid red;
`

const InputMensagem = styled.input`
`

const BotaoEnviar = styled.button`
`

class TelaDoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NomeImpressoNoContainer: "",
            MensagemImpressaNoContainer: "",
        }
    }

    MostrarUsuario = (event) => {
        let nomeDoUsario = event.target.value
        this.setState ({NomeImpressoNoContainer: nomeDoUsario})
        console.log(this.state.NomeImpressoNoContainer)
    }

    MostrarMensagem = (event) => {
        let mensagemUsuario = event.target.value
        this.setState ({MensagemImpressaNoContainer: mensagemUsuario})
        console.log(this.state.MensagemImpressaNoContainer)
    }

    EnviarMensagem= () => {

    }

    render() {
        return (
            <Container> conteúdo
    <AreaDaMensagem> area da mensagem</AreaDaMensagem>
                <CampoDosInputs>
                    <InputUsuario onChange={this.MostrarUsuario} />
                    <InputMensagem onChange={this.MostrarMensagem} />
                    <BotaoEnviar onClick={this.EnviarMensagem}>Enviar</BotaoEnviar>
                </CampoDosInputs>
            </Container>

        )
    }
}

export default TelaDoUsuario 