import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLanguage } from '../actions';
import TabLanguage from '../components/TabLanguage';

const mapStateToProps = (state) => {
  // console.log(state.language.activeLanguage);
    return({
    activeLanguage:state.idioma.activeLanguage
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveTabLanguage: changeLanguage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabLanguage)