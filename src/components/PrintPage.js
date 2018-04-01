import React, { Component } from 'react';

const printPage = () => {
  const notPrint = ['printArea', 'printArea1'];
  // document.getElementById('printArea1').style.display='none';
  document.getElementsByClassName('printArea').style.display='none';
  window.print();
  document.getElementsByClassName('printArea').style.display='block';
  // document.getElementById('printArea1').style.display='block';
  // notPrint.map(np =>{
  // document.getElementById(np).style.display='none';
  // {{window.print()}}
  // document.getElementById(np).style.display='block';
  // })
    
}

class PrintPage extends Component {
  
  render() {
    return (
        <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
                <p className="d-inline-block m-3 align-middle text-secondary">Instrucciones vía</p>
                <button onClick={() => window.print()} type="button" className="btn btn-outline-warning">
                <img src="assets/images/icon_print.svg" alt="print" style={{width: '25.4px'}}/></button>
            </div>
    )
  }
}

export default PrintPage;