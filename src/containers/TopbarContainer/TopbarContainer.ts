import {connect} from 'react-redux';
import {Topbar} from '../../components/Topbar/Topbar';
import {ApplicationState} from '../../state/state';
import {getAllResources} from '../../state/ResourceState';

export const mapStateToProps = (state: ApplicationState, props) => {
  return {
    resources: getAllResources(state.resources)
  };
};

export const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

export const TopbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
