import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AuthModal } from './index';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar light expand="sm">
        <NavbarBrand href="/">
          <img
            className="img-responsive"
            height="78rem"
            width="auto"
            src="https://i.imgur.com/CeYliRd.png"
          />
        </NavbarBrand>
        <Collapse isOpen={true} navbar>
          {this.props.isLoggedIn ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/create">Create Lesson</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lessons">View Lessons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/feed">Subscriptions</NavLink>
              </NavItem>
              <NavItem>
                <div onClick={this.props.handleClick}>
                  <NavLink href="/">Logout</NavLink>
                </div>
              </NavItem>
            </Nav>
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/lessons">View Lessons</NavLink>
              </NavItem>
              <NavItem>
                <AuthModal display="Login" />
              </NavItem>
              <NavItem>
                <AuthModal display="Signup" />
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    );
  }
}

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>RepliCode</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavigationBar);

/**
 * PROP TYPES
 */
NavigationBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
