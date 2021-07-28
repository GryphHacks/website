import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logOut } from '../actions/user';
import firebase from '../firebase';

const Navigation = () => {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated );
  const dispatch = useDispatch();

  const logOutWithFirebase = () => {
      firebase.auth().signOut().then(function() {
        dispatch(logOut());
      }).catch(function(error) {
        console.log(error)
      }); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top float-right">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">GryphHacks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className="nav-link">Register</Link>
            </li>
            { isAuthenticated &&
              <li className="nav-item">
                <Link to='/dashboard' className="nav-link">Dashboard</Link>
              </li>
            }
            { isAuthenticated &&
              <li className="nav-item">
                <button className='nav-link' onClick={() => logOutWithFirebase() } >Log Out</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
