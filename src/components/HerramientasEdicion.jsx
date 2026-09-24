
const FILSTROS = ['Original', 'Gris', 'Sepia', 'Blanco y Negro', 'Desenfoque']





export default function HerramientasEdicion({
    imagenCargada, 
    filtroActivo,
    onRotarIzquierda,
    onRotarDerecha,
    onRotar180,
    onRegresarRotacion,
    onVoltearHorizontal,
    onVoltearVertical,
    onSelecionarFiltro,
    onRestablecer
}){
    return(
        <section className="panel ">
            <div className="herramientas">
            <h3>Herramientas de Edición</h3>
            </div>
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

            <div className="grupo">
                <p className="grupo-titulo">Ajustes</p>

                <label htmlFor="">Brillo</label>
                <input type="range" disabled />

                <label htmlFor="">Contraste</label>
                <input type="range" disabled />

                <label htmlFor="">Saturacion</label>
                <input type="range" disabled />
                
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

            <div className="acciones-finales">
                
                <button className="btn-secundario" disabled={!imagenCargada} onClick={onRestablecer}>Restablecer</button>
                <button className="btn-accion">Agregar a galeria</button>

            </div>
            
        </section>


    );


}