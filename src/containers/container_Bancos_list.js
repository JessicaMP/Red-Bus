import { connect } from 'react-redux';
import { selectBank } from '../actions';
import { bindActionCreators } from 'redux';
import SitePayBancos from '../components/SitePayBancos';

function mapStateToProps(state) {
  // console.log(state.banks.bancos);
  // console.log(state.banks.agentes);
  return { 
    bancos: state.banks.bancos,
    bancoSelect: state.active_bank.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    onBancoClick: selectBank 
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SitePayBancos)