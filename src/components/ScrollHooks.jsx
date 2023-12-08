import { useState, useEffect } from "react";

export default function ScrollHooks() {

  const [scrollY, setScrollY] = useState(0);

  //Cada vez que cambie scrollY haz esto
  useEffect(() => {
    //Cada vez que se necesite renderizar este componente, useEffect va a ejecutar todo lo que este en esta funcion
    console.log("Moviendo el scroll"); //El componente ya esta en el navegador

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll)

    return () => window.removeEventListener("scroll", detectarScroll)

  }, [scrollY])

  //Cuando cargue por primera vez el componente
  useEffect(() => {
    console.log("Fase de montaje");
  }, [])

  //Component did update, cada vez que se renderice por cualquier cosase va a ejecutar esto
  useEffect(() => {
    console.log("Fase de actualizacion");
  })

  //Desmontaje
  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    }
  })
  
  
  
  
  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del navegador {scrollY} px</p>
    </>
  )
}