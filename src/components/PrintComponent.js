import React, { Component } from 'react';

class PrintComponent extends Component {

  render() {
    return (
      <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
        <p className="d-inline-block m-3 align-middle text-secondary">Instrucciones vía</p>
        <button onClick={() => window.print()} type="button" className="btn btn-outline-warning">
          <img src="assets/images/icon_print.svg" alt="print" style={{ width: '25.4px' }} /></button>
      </div>
    )
  }
}

export default PrintComponent;