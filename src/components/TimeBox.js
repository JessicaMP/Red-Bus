import React from 'react';
import moment from 'moment';

const time = new Date();
time.setHours(time.getHours() + 12);

const TimeBox = date => (
	<div className="row mx-2 printMe timeBox">
		<div className="p-1 rounded-left col-md-3 col-4 d-flex flex-column align-items-center bg-yellow-hsl border-left justify-content-center">
			<p className="text-light mb-0">Código de pago</p>
			<p className="code mb-0 text-center text-light font-weight-bold">9125682</p>
		</div>
		<div className="p-0 col-md-5 col-3 d-flex flex-column align-items-center justify-content-center bg-light">
			<p className="align-middle m-0 font-weight-bold">TOTAL</p>
			<div>
				<p className="m-0 price">S/. 140.00</p>
			</div>
		</div>
		<div className="p-2 rounded-right col-md-4 col-5 d-flex justify-content-center align-items-center color-time-box border-right">
			<img className="mr-0 alarm-img" src="assets/images/icon_time.svg" alt="Generic placeholder" />
			<div className="media-body col-md-8 px-1">
				<p className="text-center m-0 time">Tu orden expirará</p>
				<p className="text-center m-0 time">{moment(time).format('lll')}</p>
			</div>
		</div>
	</div>
)

export default TimeBox;