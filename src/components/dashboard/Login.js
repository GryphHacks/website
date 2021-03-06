import React, { useState } from 'react';
import Logo from '../../assets/BasicGryphonLogo.png';
import firebaseApp from '../../firebase';
import firebase from 'firebase/app';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AiFillExclamationCircle, AiFillGoogleCircle } from 'react-icons/ai';
import { addUser } from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();


  const signInWithFirebase = (event, email, password) => {
    event.preventDefault();
    handleErrors(); // empty fields
    if (hasError) return;

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // log in successful
        const user = userCredential.user;
        dispatch(addUser(user));
        console.log("User signed in: ", user);
        history.push('/dashboard')
      }).catch(error => {
        console.log(error);
      });
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const userCredential = res.credential;
        // Google token
        const token = userCredential.accessToken;
        // Signed-in user info
        const user = res.user;
        console.log(user);
        dispatch(addUser(user));
        history.push('/dashboard');
      }).catch(error => {
        // Handle Errors here.
        // NOTE: Do not remove these unused variables. They should pop out on the screen. A ticket will be created to render these errors.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  }

  const handleErrors = () => {
    if (email.length === 0) {
      setHasError(true);
      setError("Error: Enter your email address.");
    } else if (password.length === 0) {
      setHasError(true);
      setError("Error: Enter your password.");
    } else {
      setHasError(false);
    }
  }

  return (
    <div className="row box">
      <div className="col">
        <AiFillGoogleCircle onClick={(e) => signInWithGoogle()} style={{ color: 'red', height: '40px',  width: '40px', cursor: 'pointer' }} />
        <hr />
        <form onSubmit={(e) => signInWithFirebase(e, email, password)} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password1" className="form-label">Password</label>
            <input
              required
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Link to='/forgotpassword'>Forgot your password?</Link>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        {/* prevent users from logging in with empty fields even if they remove 'required' field in local browser */}
        { hasError && 
          <div>
            <br/>
            <p style={{ color:'red' }}>{error}</p>
          </div> 
        }
        <hr/>
        <p>Don't have an account? <a href="/register">Click here to register!</a></p>
      </div>
      <div className="col">
        <div>
          <img src={Logo} className="img-responsive" width="500px" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
