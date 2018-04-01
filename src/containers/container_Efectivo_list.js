import { connect } from 'react-redux';
import { selectEfectivo } from '../actions/index';
import { bindActionCreators } from 'redux';
import SitePayEfectivo from '../components/SitePayEfectivo';

function mapStateToProps(state) {
  // console.log(state.banks.bancos);
  // console.log(state.banks.agentes);
  return { 
    agentes: state.agents,
    
   
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    onEfectivoClick: selectEfectivo 
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePayEfectivo)