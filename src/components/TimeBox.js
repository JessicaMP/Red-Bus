import React from 'react';

const TimeBox = () => (
    <div className="row m-4 ">
        <div className="col-xl-3 col-4 d-flex flex-column align-items-center p-3 bg-warning border-left">
            <p className="text-light mb-0">Código de pago</p>
            <div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>
        </div>
        <div className="col-xl-5 col-3 d-flex flex-column align-items-center p-3 bg-light">
            <h6 className="align-middle">TOTAL</h6>
            <div>
                <input type="text" className="form-control" aria-describedby="inputGroup-sizing-sm" />
            </div>
        </div>
        <div className="col-xl-4 col-5 d-flex justify-content-center align-items-center p-3 color-time-box border-right">
            <img className="mr-3 alarm-img " src="../assets/images/alarm.png" alt="Generic placeholder image" />
            <div className="media-body col-xl-7">
                <p className="text-center mb-0">Tu orden expirará</p>
                <h6 className="text-center">23 Feb - 01:12 p.m.</h6>
            </div>
        </div>
    </div>
)

export default TimeBox;