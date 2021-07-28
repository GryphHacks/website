import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
import "firebase/auth";

const Dashboard = () => {
  const name = useSelector(state => state.user.name);
  const history = useHistory();

  const signOutWithFireBase = (e) => {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      console.log('Log out successful.')
      history.push('/')
    }).catch((error) => {
      console.log(error)
    });

    // extra check to confirm logout status
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) console.log('There is no logged in user.');
    });
  }

  return(
    <div>
      <h1 style={{textAlign:'center'}}>
        {name}
      </h1>
      <div className="row box">
        <form onSubmit={(e) => signOutWithFireBase(e)} className="col">
          <button type="submit" className="btn btn-primary">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard
