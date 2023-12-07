import { Component } from "react";

export class EventosES6 extends Component {
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
        <h2>Eventos en Componentes de Clase ES6</h2>
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

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0
  }

  //Arrow functions
  sumar = (e) => {
    console.log(this);
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  reset = (e) => {
    this.setState({
      contador: 0
    })
  }

  render () {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
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

// function Boton(props) {
//   return (
//     <button onClick={props.myOnClick}>Boton hecho componente</button>
//   )
// }

// const Boton = (props) => (
//   <button onClick={props.myOnClick}>Boton hecho componente</button>
// )

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton hecho componente</button>
)

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e.target);
    console.log(mensaje);
  }

  render () {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}>Saludar</button>
        {/* Boton Personalizado */}
        <Boton myOnClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}/>
      </div>
    )
  }
}