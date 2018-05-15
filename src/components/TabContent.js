import React from 'react';
import TimeBox from './TimeBox';
import SelectPayBanca from './SelectPayBanca';

const TabContent = ({ content, selectedBank, setSelectedBank, activeTab }) => (
  <div className="tab-pane show active px-3-pe">
    <TimeBox />
    {/* {console.log(content)} */}
    <p className="mt-3 px-2" style={{ color: "rgb(111,110,109" }}>Selecciona dónde quieres pagar:</p>
    <div className="">    
    <SelectPayBanca
      banks={content.banks} setSelectedBank={setSelectedBank}
      selectedBank={selectedBank} />
    </div>    
    <div className="instructions mt-3 px-2">
      <p>Puedes pagar desde la Web o App móvil del Banco</p>
      <h6 className="subtitle mb-2 printMe">Instrucciones de Pago</h6>
      {selectedBank.pasos.map((p, i) =>
        <p key={i}>{activeTab === 'online' ? <span className="instruction-num">{i + 1}</span> : null} {p}</p>
      )}
      {selectedBank.disclaimer !== [] ? selectedBank.disclaimer.map(text => <p className="pago-efectivo-details" key={text}><span className="disclaimer">(*)</span>{text} </p>) : null}
    </div>
    <a id="btn-payment" className="btn w-100 text-white mt-4" href={content.link} target="_blank">
      <img src="assets/images/icon_arrow.svg" style={{ width: "24px", marginRight: "5px" }} alt="Button click" />
      {content.buttonText}
    </a>
  </div>
);

export default TabContent;