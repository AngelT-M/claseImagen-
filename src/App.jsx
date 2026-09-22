

import './App.css'
import Header from './assets/components/Header'
import CargarFotografia from './assets/components/CargarFotografia'
import VistaPrevia from './assets/components/VistaPrevia'
import HerramientasEdicion from './assets/components/HerramientasEdicion'

function App() {

  return (
    <div className='app '>
        <Header/>
        <div className='editor-layout'>
        <CargarFotografia/>
         <VistaPrevia/>
        <HerramientasEdicion/>
       
        </div>
    </div>
  )
}

export default App
