import React from 'react';
import TimeBox from './TimeBox';
import SelectPayBanca from './SelectPayBanca';
import SelectPayEfectivo from './SelectPayEfectivo';
import BancosDetails from '../containers/container_Banco_details';

const Main = () => (
    <main >
       <div>
        <nav>
            <ul className="nav nav-tabs border-warning eyelashes" id="myTab" role="tablist">
                <li className="nav-item ml-4">
                    <a  className="nav-link active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="true">Banca por internet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">Pagar en efectivo</a>
                </li>
            </ul>
            <TimeBox />
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                    <SelectPayBanca/>
                    <BancosDetails/>
                    
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <SelectPayEfectivo/>
                </div>
            </div>
        </nav>
        
    </div>   
    </main>
);

export default Main;
