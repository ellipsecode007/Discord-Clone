import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged((authUser) =>{
        console.log(authUser);
        if(authUser)
        {
          // console.log(authUser);
            dispatch(login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName,

            }))
        }
        else
        {
          console.log("user got null");
            dispatch(logout());
        }
      })
  },[dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar></Sidebar>
          <Chat></Chat>
          </>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;
