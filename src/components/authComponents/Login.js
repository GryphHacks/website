import React, { useState } from 'react';
import Logo from '../stylesheet/logo.png';
import firebase from '../../firebase';
import {useDispatch} from 'react-redux';
import { addUser } from "../../actions/user";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const sighInWithFirebase = (event, email, password) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser(user));
          console.log("User signed in: ", user);
      }).catch(error => {
        console.log(error);
      });
      
  }

  return (
    <div className="row box">
      <form onSubmit={(e) => sighInWithFirebase(e, email, password)} className="col">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="password1" className="form-label">Password</label>
          <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="col">
        <div>
          <img src={Logo} className="img-responsive" alt="logo" style={{ marginTop: '-50px' }} />
        </div>
      </div>
    </div>
  );
}



export default Login;