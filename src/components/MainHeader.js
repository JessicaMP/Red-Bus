import React from 'react';

const MainHeader = () => (
    <div>
        <nav>
        <div className="nav nav-tabs border-warning eyelashes" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active ml-4" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Banca por internet</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Pagar en efectivo</a>
            </div>
        </nav>
    </div>
);

export default MainHeader;