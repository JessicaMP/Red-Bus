import { connect } from 'react-redux';
import SitePayBancos from '../components/SitePayBancos';
import { selectBank } from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  console.log(state.banks.bancos);
  console.log(state.banks.agentes);
  return { 
    bancos: state.banks.bancos,
    bancoSelect: state.active_bank.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onBancoClick: selectBank }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePayBancos)