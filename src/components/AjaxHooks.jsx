import { useState, useEffect } from 'react';

function Pokemon({ name, avatar }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      {/* <figcaption><b>{`${name[0].toUpperCase()}${name.slice(1, name.length)}`}</b></figcaption> */}
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default function AjaxHooks() {

  const [pokemons, setPokemons] = useState([]);

  //si dejo vacio el array se renderiza solo en la primera carga, si no le pongo ni el array vacio entonces se ejecuta este codigo cada que haya un renderizado de lo que sea
  // useEffect(() => {
  //   let url = "https://pokeapi.co/api/v2/pokemon";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       json.results.forEach(el => {
  //         fetch(el.url)
  //           .then(res => res.json())
  //           .then(json => {
  //             let pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default
  //             }
  //             setPokemons(pokemons => [...pokemons, pokemon])
  //           })
  //       })
  //     })
  // }, [])

  useEffect(() => {
    const getPokemons = async(url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json()

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        }
        
        setPokemons(pokemons => [...pokemons, pokemon])
      })
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, [])

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       json.results.forEach(el => {
  //         // fetch(pokemon.url)
  //         //   .then(res => res.json())
  //         //   .then(json => {
  //         //     console.log("poke", json);
  //         //     let pokemon = {
  //         //       id: json.id,
  //         //       name: json.name,
  //         //       avatar: json.sprites.front_default
  //         //     }
  //         //     setPokemons(pokemons => [...pokemons, pokemon])
  //         //   })
  //         // console.log(pokemon)

  //         //AQUI VA HACIENDO FETCH CONFORME MAS RAPIDO LLEGUEN LAS SOLICITUDES NO EN ORDEN DEL ELEMENTO QUE ESTA ITERANDO EL FOREACH
  //         fetch(el.url)
  //           .then(res => {
  //             res.json();
  //             console.log(res)
  //           })
  //           // .then(json => console.log(json.id))
  //           let pokemon = {
  //             id: 5
  //           }
  //           // console.log(pokemon);
  //       })
  //     })
    
  // }, [])

  //HACER FETCH EN ORDEN...
  // useEffect(() => {
  //   let url = "https://pokeapi.co/api/v2/pokemon";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       // Utiliza Promise.all para esperar todas las promesas antes de actualizar el estado
  //       return Promise.all(json.results.map((el, index) => {
  //         return fetch(el.url)
  //           .then(res => res.json())
  //           .then(json => {
  //             let pokemon = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default
  //             };
  //             // Usa el índice para mantener el orden
  //             setPokemons(pokemons => {
  //               const updatedPokemons = [...pokemons];
  //               updatedPokemons[index] = pokemon;
  //               return updatedPokemons;
  //             });
  //           });
  //       }));
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return(
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map(pokemon => (
          <Pokemon 
            key={pokemon.id}
            name={pokemon.name}
            avatar={pokemon.avatar}
          />
        ))
      )}
      
    </>
  )
}