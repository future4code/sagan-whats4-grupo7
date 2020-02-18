import React from 'react';
import styled from 'styled-components'


const InputUsuario = styled.input`
width: 30%;
`
const CampoDosInputs = styled.div`
width: 100%;
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
        this.setState({ NomeImpressoNoContainer: nomeDoUsario })
        console.log(this.state.NomeImpressoNoContainer)
    }

    MostrarMensagem = (event) => {
        let mensagemUsuario = event.target.value
        this.setState({ MensagemImpressaNoContainer: mensagemUsuario })
        console.log(this.state.MensagemImpressaNoContainer)
    }

    EnviarMensagem = () => {
        const mensagens = {
            usuario: this.state.NomeImpressoNoContainer,
            mensagem: this.state.MensagemImpressaNoContainer
        }
        console.log(mensagens)
        this.props.AdicionarMensagem(mensagens)

        this.state.MensagemImpressaNoContainer = ""

    }


    render() {
        return (

            <CampoDosInputs>
                <InputUsuario placeholder="Usuário" onChange={this.MostrarUsuario} />
                <InputMensagem value={this.state.MensagemImpressaNoContainer} placeholder="Mensagem" onChange={this.MostrarMensagem} />
                <BotaoEnviar onClick={this.EnviarMensagem}>Enviar</BotaoEnviar>
            </CampoDosInputs>


        )
    }
}

export default TelaDoUsuario 