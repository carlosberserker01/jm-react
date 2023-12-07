import { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.framework.web} target="_blank" rel="noreferrer">{props.framework.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor(props){
    super(props)
    this.state = {
      seasons: ['spring', 'summer', 'autumn', 'winter']
    }
  }
  render () {
    return (
      <div>
        <h2>Renderizado Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((season, i) => (
            <li key={i}>{season}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map(framework => (
            <ElementoLista 
              key={framework.id}
              framework={framework}
            />
          ))}
        </ul>
      </div>
    )
  }
}
