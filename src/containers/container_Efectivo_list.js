import { connect } from 'react-redux';
import SitePayEfectivo from '../components/SitePayEfectivo';
import { selectAgente } from '../actions';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  console.log(state.banks.bancos);
  console.log(state.banks.agentes);
  return { 
    agentes: state.banks.agentes,
    efectivoSelect: state.active_agentes.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onEfectivoClick: selectAgente }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePayEfectivo)