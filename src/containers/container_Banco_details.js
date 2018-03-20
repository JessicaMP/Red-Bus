import { connect } from 'react-redux';
import BancosDetails from '../components/detailsBancos';

function mapStateToProps(state) {
    return { opcionDetailBanco: state.active_bank }
}

export default connect(mapStateToProps)(BancosDetails);