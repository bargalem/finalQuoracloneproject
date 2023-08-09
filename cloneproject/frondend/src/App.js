import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Qura from './component/Qura';
import { login,selectUser } from './feature/Userslice';
import Login from './component/auth/Login';
//  import {onAuthStateChanged} from "./Firebase/auth"
  import {auth} from "./Firebase"



function App() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );

        console.log("AuthUser", authUser);
      }
    });
  },[dispatch]);

  return <div className="App">{User ? <Qura /> : <Login />}</div>;
}

export default App;
