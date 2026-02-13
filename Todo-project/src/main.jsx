import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './components/TodoCard.jsx'

createRoot(document.getElementById('root')).render(
  <>
  {/* Calling the components here */}
    <Card value= {'To-do'} />
    <Card value = {'Doing'} />
    <Card value = {'Done'} />
  </>
)
