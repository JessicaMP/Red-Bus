import { connect } from 'react-redux';
import EfectivoDetails from '../components/detailsEfectivo';

function mapStateToProps(state) {
    return { opcionDetailefectivo: state.active_efect }
}

export default connect(mapStateToProps)(EfectivoDetails);