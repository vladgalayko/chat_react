import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from 'react';

firebase.initializeApp ({
  apiKey: "AIzaSyDBB9HTgyXVzEXKQZGE9DPrR6I-V8bSGTc",
  authDomain: "chat-29e5c.firebaseapp.com",
  projectId: "chat-29e5c",
  storageBucket: "chat-29e5c.appspot.com",
  messagingSenderId: "87480727144",
  appId: "1:87480727144:web:b2f369a339c79eaab62ddd",
  measurementId: "G-L9JYGJ21CC"
});

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Context.Provider value={{
      firebase,
      auth,
      firestore
   }}>
      <App />
   </Context.Provider>
  </React.StrictMode>
);
