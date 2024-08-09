import "./galeria.css"


function Galeria(){
    return(
        <section className="gallerySection">
    <h2 className="galleryTitle">Galería</h2>
    <div className="galleryGrid">
        <img src="/img/mini-hamburguesas.jpg" alt="Mini Hamburguesas" className="galleryImage"/>
        <img src="/img/mesa-dulces.jpg" alt="Mesa de dulces" className="galleryImage"/>
        <img src="/img/mesa-entradas-2.jpg" alt="Mesa de entradas y aperitivos" className="galleryImage"/>
        <img src="/img/e-carnes-frias2.jpg" alt="Imagen 4" className="galleryImage"/>
    </div>
</section>

    )
}

export default Galeria;