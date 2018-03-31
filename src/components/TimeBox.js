import React from 'react';
import moment from 'moment';

const time = new Date();
time.setHours(time.getHours() + 12);

const TimeBox = date => (
    <div className="row m-4 ">
        <div className="col-xl-3 col-4 d-flex flex-column align-items-center p-3 bg-warning border-left">
            <p className="text-light mb-0">Código de pago</p>
            <div>
                <h2 className="mb-0 text-center text-light font-weight-bold">9125682</h2>
            </div>
        </div>
        <div className="col-xl-5 col-3 d-flex flex-column align-items-center p-3 bg-light">
            <h6 className="align-middle">TOTAL</h6>
            <div>
                <h4>S/. 140.00</h4>
            </div>
        </div>
        <div className="col-xl-4 col-5 d-flex justify-content-center align-items-center p-3 color-time-box border-right">
            <img className="mr-3 alarm-img" src="assets/images/icon_time.svg" alt="Generic placeholder image" />
            <div className="media-body col-xl-7">
                <p className="text-center mb-0">Tu orden expirará</p>
                <h6 className="text-center">{moment(time).format('lll')}</h6>
            </div>
        </div>
    </div>
)

export default TimeBox;