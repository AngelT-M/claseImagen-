export default function Header(){

    return(
        <header className="app-header">
            <div className="logo">
                <p>📷Editor de fotos</p>
            </div>

            <div className="header-actions">
                <button className="btn-ghost">Ver galeria</button>
                <span className="usuario">Usuario</span>
            </div>
        </header>
    );
}