import { connect } from 'react-redux';
import Component from '../components/Auth';
import Action from '../modules/AuthAction';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authStart: () => dispatch(Action.authStart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
