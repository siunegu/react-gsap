import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/Action';
import Links from '../../components/Links/Links';

export class Nav extends PureComponent {
  render() {
    const { links, opened, openNav } = this.props;
    return (<div>
      <button onClick={() => openNav()}>OPEN ME</button>
      {opened && <Links links={links} />}
    </div>);
  }
}

Nav.defaultProps = {
  links: [{}],
  opened: false,
  openNav: () => { console.log('default') }
};

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  opened: PropTypes.bool,
  openNav: PropTypes.func
};

const mapStateToProps = state => ({
  links: state.links,
  opened: state.nav.opened
});

function mapDispatchToProps(dispatch) {
  return {
    openNav: () => dispatch(actions.openNav())
  };
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
