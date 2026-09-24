import Header from "../components/Header";

export default function Inicio(){


    return(
        <div>
            <Header/>
            <div className="inicio">
                <main className="editor-layout-galeria">
                    <section></section>
                    <section className="panel">
                        <div className="inicio-titulo">
                            <h3>Iniciar Sesion</h3>
                        </div>
                        <div>
                            <form action="" className="formulario">
                                
                                <label htmlFor="">Nombre</label>
                                <input type="text" placeholder="Ingresar Nombre" />

                                <label htmlFor="">Apellido</label>
                                <input type="text" placeholder="Ingresar Apellido" />

                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="Ingresar Correo" />
                                
                                <label htmlFor="">Telefono</label>
                                <input type="tel" placeholder="Ingresar numero" />
                                
                                <div>
                                <button className="btn-accion">Enviar</button>
                                <button className="btn-secundario">Borrar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section></section>

                </main>

            </div>
        </div>

    );


}