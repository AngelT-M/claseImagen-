import { Routes, Route  } from 'react-router-dom';
/*useState es como memoria que se guarda en ese momento */
import './styles/variables.css';
import './App.css';
import EditorImagenes from './pages/EditorImagenes';
import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';
import Usuario from './pages/Usuario';



function App() {
   
  return (
    <Routes>  
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/editor' element={<EditorImagenes/>}></Route>
      <Route path='/galeria' element={<Galeria/>} ></Route>
      <Route path='/usuario' element={<Usuario/>} ></Route>
    </Routes>
  )
}

export default App
