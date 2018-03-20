import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="row">
            <div className="col-xl-4 d-flex justify-content-center align-items-center">
                <p className="d-inline-block m-3 align-middle">Instrucciones vía</p>
                <button type="button" className="btn btn-outline-warning"><i className="fas fa-print fa-lg"></i></button>
            </div>
            <div className="col-xl-4 d-flex justify-content-center align-items-center">
                <p><span>Ayuda: </span><a href="cont">contacto@redbus.pe</a></p>              
            </div>
            <div className="col-xl-4">
                <figure className=" d-flex justify-content-center align-items-center">
                    <p className="d-inline-block">Pago vía</p>
                    <img className="pagoEfectivo-img" src="pagoefectivo.png" alt="Logo Pago Efectivo" />
                </figure>
            </div>
        </div>
    </footer>
);

export default Footer;