import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header className="app-header">
            <div className="logo">
                
                <p>Editor de fotos 📸</p>
            </div>
            <div>
                
                
            </div>
            <div className="header-actions">
                <Link className="btn-ghost" to="/">Inicio</Link>
                <Link className="btn-ghost" to="/editor">Editor</Link>
                <Link className="btn-ghost" to="/galeria">Galeria</Link>
                <Link className="usuario" to="/usuario">Usuario</Link>
            </div>
        </header>
    );
}