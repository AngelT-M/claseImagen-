import { useEffect, useRef } from "react";

const FILTROS_CSS={
    Original: '',
    Gris: 'grayscale(100%)',
    Sepia: 'sepia(100%)',
    'Blanco y Negro': 'grayscale(100%) contrast(120%)',
    Desenfoque: 'blur(4px)'
}



export default function VistaPrevia({imagenOriginal,rotacion, volteoH, volteoV, filtroActivo,brillo,contraste,saturacion,onImagenProcesada}){
    const canvasRef = useRef(null);

    useEffect(() => {
        if(!imagenOriginal)return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
    
        img.onload = ()=>{
            const deCostado = rotacion === 90 || rotacion === 270;
            /*Rotaciones de imagen */
            canvas.width = deCostado ? img.height : img.width;
            canvas.height = deCostado ? img.width : img.height;
            ctx.save();
            ctx.clearRect(0,0, canvas.width, canvas.height);

            //mover el "origen" al centro del canva que es la imagen a editar 
            //para que así al rotal, la rotacion sea en el centro
            ctx.translate(canvas.width /2, canvas.height /2);

            //NO haceptamos grados sino radiales, por eso uasmos PI
            ctx.rotate((rotacion * Math.PI)/180);

            //Inveritr los ejes 
            ctx.scale(volteoH ? -1 : 1, volteoV ? -1: 1);

            

            const filtroBase = FILTROS_CSS[filtroActivo] || '';
            //filtro base
            ctx.filter = `${filtroBase} brightness(${brillo}%) contrast(${contraste}%) saturate(${saturacion}%)`.trim();

            ctx.drawImage(img, -img.width/2, -img.height/2);
            ctx.restore();
        }
        img.src = imagenOriginal;

    }, [imagenOriginal, rotacion, volteoH, volteoV, filtroActivo, brillo, contraste, saturacion, onImagenProcesada]);


    return(
        <section className="panel">
            <h3>vista previa</h3>
            <div className="vista-previa-area">
                {imagenOriginal ? (
                    <canvas ref={canvasRef} className="canvas-editor"></canvas>
                ):(
                    <p className="placeholder">Aqui aparece tu imagen</p>
                )}
            </div>

        </section>
    );



}