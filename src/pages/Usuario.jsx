import Header from "../components/Header";

export default function Usuario(){

    return(
        <div>
            <Header/>
                    <div className="inicio">
                        <main className="editor-layout-galeria">
                            
                            <section className="panel">
                                <div className="inicio-titulo">
                                    <h3>Usuario</h3>
                                </div>
                                <div className="imagen">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQ3V29WLjT5GB2D7afLWVSshBhLM_FjlHMoLyTmIAHQ&s=10" alt="" />

                                </div>
                                <div className="nom-usuario">
                                    <p>@Usuario125</p>
                                </div>
                                <div>
                                    <div className="usuarios">
                                        <div>
                                            <p>Nombre:</p>
                                            <p className="">Miguel Angel Tomas</p>
                                        </div>
                                        <div>
                                            <p>Direccion:</p>
                                            <p className="">Casa Edificio central calle 0</p>
                                        </div>
                                        <div>
                                            <p>Tel:</p>
                                            <p className="">+502 1245-7896</p>
                                        </div>
                                        <div>
                                            <p>Email:</p>
                                            <p className="">martin@gmail.com</p>
                                        </div>
                                        
                                        

                                    </div>
                                    
                                </div>
                            </section>
                            <section></section>
                            <section></section>
        
                        </main>
        
                    </div>
                </div>
        
    );

}