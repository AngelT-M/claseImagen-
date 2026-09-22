import { useState } from 'react'
import './assets/styles/variables.css'
import './App.css'
import Header from './assets/components/Header'
import CargarFotografia from './assets/components/CargarFotografia'
import VistaPrevia from './assets/components/VistaPrevia'
import HerramientasEdicion from './assets/components/HerramientasEdicion'

function App() {
  const[imagenOriginal, setImagenOriginal] = useState(null);

  return (
    <div className='app '>
        <Header/>
        <main className='editor-layout'> 
        <CargarFotografia onImagenCargada={setImagenOriginal} />
         <VistaPrevia imagenOriginal={imagenOriginal} />
        <HerramientasEdicion/>
        </main>
    </div>
  )
}

export default App
