import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="row d-flex ">
            <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
                <p className="d-inline-block m-3 align-middle text-secondary">Instrucciones vía</p>
                <button type="button" className="btn btn-outline-warning">
                <img src="assets/images/icon_print.svg" alt="Print" style={{width: '25.4px'}}/></button>
            </div>
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