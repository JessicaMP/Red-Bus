import React from 'react';
import PrintComponent from './PrintComponent';

const Footer = () => (
	<footer className="footer container">
		<div className="row justify-content-between align-items-center">
			<PrintComponent />
			<div className="p-2 col-md-4 col-7 d-flex justify-content-center align-items-center contact-letter">
				<p>
					<span className="text-secondary">Ayuda: </span>
					<a className="text-warning font-weight-bold" href="mailto:contacto@redbus.pe" target="_black">contacto@redbus.pe</a>
				</p>
			</div>
			<div className="p-2 col-md-4 col-5 text-secondary d-flex justify-content-center align-items-center">
				<p className="d-inline-block p-0 m-0">Pago vía</p>
				<img className="d-inline-block pago-efectivo-footer" src="assets/images/logo-pagoefectivo.svg" alt="Logo Pago Efectivo" />
			</div>
		</div>
	</footer>
);

export default Footer;