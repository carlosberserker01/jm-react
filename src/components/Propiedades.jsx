import PropTypes from 'prop-types'

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades {props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{`${props.objeto.nombre} ${props.objeto.edad}`}</li>
        <li>{props.arreglo.map(num => props.funcion(num)).join(", ")}</li>
        {props.elementoReact}
        {props.componenteReact}
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: "Las props"
}

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired
}