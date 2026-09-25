
const FILSTROS = ['Original', 'Gris', 'Sepia', 'Blanco y Negro', 'Desenfoque']

export default function HerramientasEdicion({
    imagenCargada, 
    filtroActivo,

    brillo,
    contraste,
    saturacion,
    onCambiarBrillo,
    onCambiarContraste,
    onCambiarSaturacion,
   

    onRotarIzquierda,
    onRotarDerecha,
    onRotar180,
    onRegresarRotacion,
    onVoltearHorizontal,
    onVoltearVertical,
    onSelecionarFiltro,
    onRestablecer,

    onAgregarGaleria
}){
    return(
        <section className="panel ">
            <div className="herramientas">
            <h3>Herramientas de Edición</h3>
            </div>
            <div className="formato"> 
                
                <div className="grupo">
                    <p className="grupo-titulo">Filtros</p>
                    <div className="filtro-grid">
                        {FILSTROS.map(filtro =>(
                            <button
                                key={filtro}
                                className={`filtro-item ${filtroActivo ===filtro ? `filtro-activo`: ''} `}
                                disabled={!imagenCargada}
                                onClick={()=>onSelecionarFiltro(filtro)}
                            >{filtro}
                            </button>
                        ))   
                        }
                        
                    </div>
                </div>

                <div className="grupo ">
                    <p className="grupo-titulo">Ajustes</p>

                    <div className="ajustes">
                        <div className="ajustes-op grupo">
                            <label htmlFor="">Brillo: {brillo}%</label>
                            <input 
                                type="range" 
                                min="0"
                                max="200" 
                                value={brillo} 
                                disabled={!imagenCargada} 
                                onChange={(e)=> onCambiarBrillo(Number(e.target.value))}
                            />
                        </div>
                        
                        <div className="ajustes-op grupo">
                            <label htmlFor="">Contraste</label>
                            <input 
                                type="range" 
                                min="0"
                                max="200"
                                value={contraste}
                                disabled={!imagenCargada}
                                onChange={(e)=> onCambiarContraste(Number(e.target.value))}
                            />
                        </div>

                        <div className="ajustes-op grupo">
                            <label htmlFor="">Saturacion</label>
                            <input 
                                type="range" 
                                min="0"
                                max="200"
                                value={saturacion}
                                disabled={!imagenCargada}
                                onChange={(e)=> onCambiarSaturacion(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>

                <div className="grupo">
                    <p className="grupo-titulo">Trasformar</p>

                    <div className="botones-trasformar">
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onRotarIzquierda}>90 ° Izquierda</button>
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onRotar180}>180 °</button>
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onRotarDerecha}>90 ° Derecha</button>
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onRegresarRotacion}> Original</button>
                    </div>
                    <div className="botones-trasformar">
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onVoltearHorizontal}>Horizontal</button>
                        <button className="filtro-item" disabled={!imagenCargada} onClick={onVoltearVertical}>Vertizal</button>
                    </div>

                </div>
            </div>

            <div className="acciones-finales">
                
                <button className="btn-secundario" disabled={!imagenCargada} onClick={onRestablecer}>Restablecer</button>
                <button className="btn-accion" onClick={onAgregarGaleria}>Agregar a galeria</button>

            </div>
             
        </section>


    );


}