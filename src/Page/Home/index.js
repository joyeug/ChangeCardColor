import { useState } from 'react'

const Home = () => {

  const [show, setShow ] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleShow} >{show ? 'Ocultar' : 'Mostrar'}</button>
      <br />
      {
        show && (
          <img src="https://i.ytimg.com/vi/D9avX-jtIPM/maxresdefault.jpg" alt="" />
        )
      }
    </div>
  )
}

export default Home


// import { useState } from 'react'

// const Home = () => {

//   const [show, setShow ] = useState(0)

//   const handleShow = (cod) => {
//     setShow(!show)
//   }

//   return (
//     <div>
//       <h1>Home</h1>
//       <button onClick={() => handleShow(1)} >{show ? 'Ocultar' : 'Mostrar'}</button>
//       <button onClick={handleShow(2)} >{show ? 'Ocultar' : 'Mostrar'}</button>
//       <button onClick={handleShow(3)} >{show ? 'Ocultar' : 'Mostrar'}</button>
//       <br />
//       {
//         show === 1 && (
//           <img src="https://i.ytimg.com/vi/D9avX-jtIPM/maxresdefault.jpg" alt="" />
//         )
//       }
//       {
//         show === 2 && (
//           <img src="https://i.ytimg.com/vi/D9avX-jtIPM/maxresdefault.jpg" alt="" />
//         )
//       }
//     </div>
//   )
// }

// export default Home
