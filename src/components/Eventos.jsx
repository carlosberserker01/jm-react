import { Component } from "react";

export default class Eventos extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0
    }

    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
    this.reset = this.reset.bind(this)
  }

  sumar (e) {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar (e) {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  reset (e) {
    this.setState({
      contador: 0
    })
  }

  render () {
    return (
      <div>
        <h2>Eventos en Componentes de Clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}