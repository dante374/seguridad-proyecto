import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './componentes/Layout'
import Inicio from './componentes/Inicio'
import Riesgos from './componentes/Riesgos'
import Padres from './componentes/Padres'
import Recursos from './componentes/Recursos'
import Consejos from './componentes/Consejos'
import Contacto from './componentes/Contacto'
import Chat from './componentes/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chat />
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route  index element={<Inicio/>}/>
       <Route path='Riesgos' index element={<Riesgos/>}/>
       <Route path='Padres' index element={<Padres/>}/>
       <Route path='Recursos' index element={<Recursos/>}/>
       <Route path='Consejos' index element={<Consejos/>}/>
       <Route path='Contacto' index element={<Contacto/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
