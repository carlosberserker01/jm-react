import { useFetch } from "../hooks/useFetch"

export default function HooksPersonalizados() {
  
  // let url = "https://pokeapi.co/api/v2/pokemons";
  let url = "https://jsonplaceholder.typicode.com/users";
  // console.log(useFetch());

  let { data, isPending, error } = useFetch(url);
  console.log(data);
  return (
    <>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>{JSON.stringify(error)}</h3>
      <h3>{JSON.stringify(data)}</h3>
      {data?.map(user => (
        <div key={user.id} style={{ width: '300px', margin: '0 auto', border: '2px solid #646cff', borderRadius: '20px', marginBottom: '16px' }}>
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          {/* <ul>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
          </ul> */}
        </div>
      ))}
    </>
  )
}