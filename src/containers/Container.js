import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  console.log(state.tabs[state.idioma.activeLanguage[state.info.activeTab]]);
  return ({
  language: state.tabs[state.idioma.activeLanguage],
  activeLanguage: state.idioma.activeLanguage
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSelectedBank: selectBank
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)