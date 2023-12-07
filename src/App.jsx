import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const seasons = ['spring', 'summer', 'autumn', 'winter']

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" rel='noreferrer'/>
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <ul>
          {seasons.map((estacion, index) => (
            <li key={index}>{estacion}</li>
          ))
          }
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Componente 
        msg='hola soy un componente en props desde una prop'
      />
      <hr />
      <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={12}
        booleano={false}
        arreglo={[1, 2, 3]}
        objeto={{nombre: 'Carlos', edad: '1'}}
        funcion={num => num * num}
        elementoReact={<li>Esto es un elemento React</li>}
        componenteReact={<Componente msg='soy un componente pasado como prop'/>}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <hr />
      <Estado />
      <hr />
      <RenderizadoCondicional />
    </>
  )
}

export default App
