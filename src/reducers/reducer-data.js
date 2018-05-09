export default function () {
  return {
    online: {
      banks: [
        { name: 'bcp', text: '', img: 'assets/images/logo-bcp.svg', pasos: ['Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'],disclaimer: []},
        { name: 'bbva', text: '', img: 'assets/images/logo-bbva.svg', pasos: ['Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES', 'Ingresa tu código CIP: 9125682 y sigue los pasos.' ], disclaimer: []},
        { name: 'interbank', text: '', img: 'assets/images/logo-interbank.svg', pasos: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.' ], disclaimer: []},
        { name: 'scotiabank', text: '', img: 'assets/images/logo-scotiabank.svg', pasos: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES', 'Ingresa tu código CIP: 9125682 y sigue los pasos.' ], disclaimer: []},
        { name: 'banbif', text: '', img: 'assets/images/logo-banbif.svg', pasos: ['Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.' ], disclaimer: []}
      ],
      link: '#internet',
      buttonText: 'Ir a banca por internet'
    },
    ofline: {
      banks: [
        { name: 'bcp', text: 'Agentes y Bodegas Agencias', img: 'assets/images/logo-bcp.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Agentes BCP: Brinda el código de empresa 02186', 'Agencias BCP: Costo adicional: S/1.00']},
        { name: 'bbva', text: 'Agentes y Bodegas Agencias', img: 'assets/images/logo-bbva.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: []},
        { name: 'interbank', text: 'Agentes y Bodegas Agencias', img: 'assets/images/logo-interbank.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Agentes Interbank: Brinda el código de empresa 2735001', 'gencias Market de Interbank: Costo adicional: S/2.00']},
        { name: 'banbif',text: 'Agentes y Bodegas Agencias', img: 'assets/images/logo-banbif.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: []},
        { name: 'Full Carga', text: 'Agencias', img: 'assets/images/logo-fullcarga.png',pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Encuentra a Full Carga en Bodegas, Farmacia, cabinas de Internet y Locutorios', '']},
        { name: 'Scotiabank', text: 'Agentes y Bodegas Agencias', img: 'assets/images/logo-scotiabank.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: ['Encuentra a Full Carga en Bodegas, Farmacia, cabinas de Internet y Locutorios', '']},
        { name: 'Wester Union', text: 'Agentes y Bodegas', img: 'assets/images/logo-wester.svg', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: []},
        { name: 'Kasnet', text: 'Agentes y Bodegas', img: 'assets/images/logo-kasnet.png', pasos: ['Indica que vas a realizar un pago a la empresa PAGOEFECTIVO. Indica el Código CIP: 9125682 y el importe a pagar en Soles.'], disclaimer: []},
      ],
      link: 'https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true',
      buttonText: 'Encuentra tu punto de pago'
    }
  }
}