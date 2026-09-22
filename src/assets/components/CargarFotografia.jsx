import { useState } from "react";

const FORMATOS_PERMITIDOS = ['image/jpeg','image/jpg', 'image/pgn','image/webp'];
const TAMANO_MAXIMO_MB = 10;

function validadArchivo(Archivo){
    if (FORMATOS_PERMITIDOS.includes(Archivo.type)) {
        return 'Formato no permitido, Debe ser JPG, PNG o WEBP';
    }
    const tamanoMB = Archivo.size / (1024^1014);

    if (tamanoMB> TAMANO_MAXIMO_MB) {
        return `El Archivo pesa ${tamanoMB} el peso maximo de ser ${TAMANO_MAXIMO_MB}`;
    }
    return null;
}


export default function CargarFotografia({onImagenCargada}){

    const [error,setError] = useState('');
    const [arrastrando, setArrastrando] = useState(false);

    function procesarArchivo(Archivo){
        const mensajeError = validadArchivo(Archivo)
        if (mensajeError) {
            setError(mensajeError)
            return;
        }
        setError('');

    
        const lector = new FileReader();
        lector.onload = ()=>{
            onImagenCargada(lector.result);
        };
        lector.readAsDataURL(Archivo);
    }

    /* Funciones para manejar el Archivo de imagen */
    function manejarSeleccion(evento){
        const Archivo = evento.target.files[0];
        if(Archivo) procesarArchivo(Archivo);
    }

    function manerDrop(evento){
        evento.preventDefault();
        setArrastrando(false);
        const Archivo = evento.dataTrasfer.file[0];
        if(Archivo) procesarArchivo(Archivo);
    }

    function manejarDragOver(evento){
        evento.preventDefault();
        setArrastrando(true);
    }
    
    function manejarDragLeave(){
        setArrastrando(false);
    }

    return(
        <section className="panel">
            <h3>Cargar Fotografia</h3>
            <div 
            className={`dropzone ${arrastrando ? 'dropzone-activo':""}`}
            onDrop={manerDrop}
            onDragOver={manejarDragOver}
            onDragLeave={manejarDragLeave}
            >
                <p className="">Subir</p>
                <p>Arrastrar una imagen aca</p>
                <p>o</p>
                <label  className="btn-primario">
                    Selecionar un Archivo
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={manejarSeleccion}
                        style={{display: 'none'}}
                    /> 
                </label>
                <p className="hint">Formatos permitifos JPG * PNG * WEBP</p>
            </div>
            {error && <p className="error-msg">{error}</p>}

            <p className="hint-small">
                El tamaño maximo de imagen permitido es de 10MB
                la imagne se procesa en mi navegador
            </p>
        </section>


    );


}