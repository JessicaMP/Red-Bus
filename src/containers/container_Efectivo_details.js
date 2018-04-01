import { connect } from 'react-redux';
import EfectivoDetails from '../components/detailsEfectivo';

function mapStateToProps(state) {
    return { 
        opcionDetailEfectivo: state.active_agentes    
    }
}

export default connect(mapStateToProps)(EfectivoDetails);