import { Component } from 'react';

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default class AjaxApis extends Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        json.results.forEach(el => {
          fetch(el.url)
            .then(res => res.json())
            .then(json => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              }

              //OLD VERSION
              // let pokemons = [...this.state.pokemons, pokemon];
              // this.setState({ pokemons })

              //NEW VERSION
              this.setState(state => ({
                pokemons: [...state.pokemons, pokemon]
              }))
            })
        })
      })
  }


  render() {
    return(
      <>
        <h2>Peticiones Asincronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el, i) => (
            <Pokemon 
              key={i}
              name={el.name}
              avatar={el.avatar}
            />
          ))
        )}
        
      </>
    )
  }
}