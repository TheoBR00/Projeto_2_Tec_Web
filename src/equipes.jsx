import axios from 'axios'
import { Redirect } from 'react-router-dom'

constructor(props) {
    super(props)

    var equipes = this.state.lista

    // Inicializando o State com alguns valores para testarmos
    this.state = {lista: [
        {equipe: 'Rocket', pokémon: 'Meowth'},
        {equipe: 'Magma', pokémon: 'Camerupt'}
    ]}

    this.handleChange = this.handleChange.bind(this)
    this.cadastrar = this.cadastrar.bind(this)

    axios.get('http://localhost:3000/equipelist')
    .then(resp => {
        if(Math.floor(resp.status/100) === 2) {

            this.state({lista: resp.data})
            return
        }
        console.log(resp)
    })
    .catch(erro => console.log(erro))
}

cadastrar() {
    axios.post('http://localhost:3000/equipes', this.state.equipe)
    .then(resp => {
        if(Math.floor(resp.status/100) === 2) {
            this.setState((state) => {
                return{
                    lista: [...state.lista, state.equipe],
                    equipe: {pokémon: ''},
                    refirectToReferrer: true
                }
            })
            return;
        }
        console.log(resp)
    })
    .catch(erro => console.log(erro))
}

handleChange(event) {
    var handleState = (state, event) => {
        state.usuario[event.target.name] = event.target.value
        return state

    }
    this.setState(handleState(this.state, event))

}



