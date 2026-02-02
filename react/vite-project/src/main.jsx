import { createRoot } from 'react-dom/client'
import Intro from './App.jsx' // Importing Introduction from App.jsx
import { Desc } from './App.jsx' // Importing Description from App.jsx
import './App.css' // Used for importing CSS

createRoot(document.getElementById('box')).render(
  <>
    {/* Calling here using the Angular Brackets */}
    <Intro />
    <Desc />
  </>
)
