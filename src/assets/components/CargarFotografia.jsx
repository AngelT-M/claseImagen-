export default function CargarFotografia(){

    return(
        <section className="panel">
            <h3>Cargar Fotografia</h3>
            <div className="dropzone">
                <p className="">Subir</p>
                <p>Arrastrar una imagen aca</p>
                <p>o</p>
                <button className="btn-primario">Seleccionar Archivo</button>
                <p className="hint">Formatos permitifos JPG * PNG * WEBP</p>
            </div>
            <p className="hint-small">
                El tamaño maximo de imagne permitido es de 10MB
                la imagne se procesa en mi navegador
            </p>

        </section>


    );


}