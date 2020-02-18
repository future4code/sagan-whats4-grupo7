import React from 'react';
import './App.css';
import TelaDoUsuario from './Components/TelaDoUsuario/TelaDoUsuario'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid gray;
display: flex;
margin: auto;
height: 100vh;
width: 350px;
flex-direction: column;
`

const AreaDaMensagem = styled.div`
height:90%;
`
const Usuario = styled.span`
font-weight: bold;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testeDaMensagem: []
    }

  }

  AdicionarMensagem = (mensagem) => {
    const copiaArrayDeMensagens = [... this.state.testeDaMensagem]
    copiaArrayDeMensagens.push(mensagem)
    this.setState({
      testeDaMensagem: copiaArrayDeMensagens
    })
    console.log(this.state.testeDaMensagem)
  }

  render() {
    return (
      <Container>

        <AreaDaMensagem>
          {
            this.state.testeDaMensagem.map((element, index) => {
              return (
                <p key={index}>
                  <Usuario> {element.usuario + ' :'} </Usuario>
                  {element.mensagem}</p>)
            })
          }
        </AreaDaMensagem>

        <TelaDoUsuario AdicionarMensagem={this.AdicionarMensagem} />


      </Container>

    )
  }
}


export default App;
