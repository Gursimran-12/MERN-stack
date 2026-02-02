// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <p>
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function World()
// {
//   return (
//     <>
//     <p> Hello World </p>
//     </>
//   )
// }

// export default App
// export {World}

import img from './images/reactApp.jfif' // Importing the Image

// Component for displaying the Heading and the Image
export default function Intro() { 
  return (<>
    <h2> REACT </h2>
    <img id="reactPic" src= {img} alt= "React Image"/>
  </>)
}

// Component for displaying the Description
export function Desc()
{
  return(
    <>
    <p> Basically, the React is used to create Single Page Applicaton and provide flexible and efficient UI to Users</p>
    <button id="btn"> Read More...</button>
    </>
  )
}
