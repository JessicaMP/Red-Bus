import React from 'react';
import PrintPage from './PrintPage';

const Footer = () => (
    <footer className="footer">
        <div className="row d-flex ">
            <PrintPage />
            <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                <p><span className="text-secondary">Ayuda: </span><a className="text-warning font-weight-bold" href="cont">contacto@redbus.pe</a></p>              
            </div> 
            <div className="col-md-4 col-6">
                <figure className="d-flex justify-content-center align-items-center">
                    <p className="d-inline-block text-secondary">Pago vía</p>
                    <img className="pagoEfectivo-img" src="assets/images/logo-pagoefectivo.svg" alt="Logo Pago Efectivo" />
                </figure>
            </div>
        </div>
    </footer>
);

export default Footer;