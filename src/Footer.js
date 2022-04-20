function Footer(){
    return (
        <footer id= "main__footer">
            <p id= "contacto__redes">SEGUINOS!</p>
            <p id= "contacto__w">Hace tu pedido por Whatsapp</p>
            <div id="redes">
                <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=541133044420">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer