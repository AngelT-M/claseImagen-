export default function HerramientasEdicion(){

    return(
        <section className="panel">
            <h3>Herramientas de Edición</h3>
            <div className="grupo">
                <p className="grupo-titulo">Filtros</p>
                <div className="filtro-grid">
                    <div className="filtro-item">Original</div>
                    <div className="filtro-item">Gris</div>
                    <div className="filtro-item">Sepia</div>
                    <div className="filtro-item">B/N</div>
                    <div className="filtro-item">Desenfoque</div>
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
                    <button disabled>90 ° Izquierda</button>
                    <button disabled>180 °</button>
                    <button disabled>90 ° Derecha</button>
                    <button disabled> Original</button>
                </div>
                <div className="botones-trasformacion">
                    <button disabled>Horizontal</button>
                    <button disabled>Vertizal</button>
                </div>

            </div>

            <div className="acciones-finales">
                
                <button className="btn-secundario">Restablecer</button>
                <button className="btn-accion">Agregar a galeria</button>

            </div>
            
        </section>


    );


}