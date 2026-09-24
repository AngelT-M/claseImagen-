import { use, useState } from "react";
import '../styles/variables.css'
import '../App.css'
import Header from "../components/Header";
import CargarFotografia from "../components/CargarFotografia";
import VistaPrevia from "../components/VistaPrevia";
import HerramientasEdicion from "../components/HerramientasEdicion";



export default function EditorImagenes(){
     /* Se modofocara en app.jsx ya que es el papa de todos los carchivso y es el qie gestion los estados */
  const[imagenOriginal, setImagenOriginal] = useState(null);

  /*Constantes para que funciones las funciones de edicion */
  const[imagenProcesada,setImgaenProcesada] = useState(null);
  const[rotacion,setRotacion] = useState(0);
  const[volteoH, setVolteoH] = useState(false);
  const[volteoV, setVolteoV] = useState(false);
  const[filtroActivo,setFiltroActivo] = useState('Original');

  const[brillo,setBrillo] = useState(100);
  const[contraste,setContraste] = useState(100);
  const[saturacion,setSaturacion] = useState(100);
  const[galeria, setGaleria] = useState([]);

  /*Funciones que se utilizan par editar la imagen  */
  function rotar(grados){
    setRotacion(prev => (prev+grados+360)%360);
  }
  function voltearHorizontal() {
    /*Funcoion flecha*/
    setVolteoH(prev => !prev);
  }
  function voltearVertical() {
    setVolteoV(prev => !prev);
  }
  function restablecer(){
    setRotacion(0);
    setVolteoH(false);
    setVolteoV(false);
    setFiltroActivo('Original');

    setBrillo(100);
    setContraste(100);
    setSaturacion(100);
  }

  function agregarGaleria(){
    if(!imagenProcesada) return;

    setGaleria(prev => [...prev, imagenProcesada]);
    console.log(`Galeria Actualizada, total de imagenes:`, galeria.length);

    setImagenOriginal(null);
    setImgaenProcesada(null);
    restablecer();
  }

    return(
        <div className='app '>
        <Header/>
        <main className='editor-layout'> 
        <CargarFotografia onImagenCargada={setImagenOriginal} />
         <VistaPrevia 
          imagenOriginal={imagenOriginal} 
          rotacion={rotacion}
          volteoH={volteoH}
          volteoV={volteoV}
          filtroActivo={filtroActivo}

          brillo={brillo}
          contraste={contraste}
          saturacion={saturacion}
          onImagenProcesada={setImgaenProcesada}
          />
        <HerramientasEdicion
          /*Parametros que se utilizaran  */
          imagenCargada={!!imagenOriginal}
          filtroActivo={filtroActivo}

          brillo={brillo}
          contraste={contraste}
          saturacion={saturacion}
          onImagenProcesada={setImgaenProcesada}

          onRotarIzquierda={()=>rotar(-90)}
          onRotarDerecha={()=>rotar(90)}
          onRotar180={()=>rotar(180)}
          onRegresarRotacion={()=>setRotacion(0)}
          onVoltearHorizontal={voltearHorizontal}
          onVoltearVertical={voltearVertical}
          onSelecionarFiltro={setFiltroActivo}
          onRestablecer={restablecer}
          
          onAgregarGaleria={agregarGaleria}
        />
        </main>
    </div>



    );
}