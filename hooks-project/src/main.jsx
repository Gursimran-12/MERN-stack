import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import UseRef from './useRef.jsx'
import Memo from './memo.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <App />
  // <UseRef />
  <Memo />

)
