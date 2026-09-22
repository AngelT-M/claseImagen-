import { useEffect, useRef } from "react";

export default function VistaPrevia({imagenOriginal}){
    const canvasRef = useRef(null);

    useEffect(() => {
        if(!imagenOriginal)return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
    
        img.onload = ()=>{
            canvas.witdth = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0,0);
        }
        img.src = imagenOriginal;
    }), [imagenOriginal];


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