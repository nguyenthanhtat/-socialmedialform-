import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './ConText/AuthenContext';
import ContextNhomProvider from './ConText/ContextNhom';
import ContextTodoProvider from './ConText/ContextTodo';
import 'react-toastify/dist/ReactToastify.css';
import CommentContextProvider from './ConText/CommentContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider>
      <ContextNhomProvider>
      <ContextTodoProvider>
      <CommentContextProvider>
       <App />
       </CommentContextProvider>
       </ContextTodoProvider>
       </ContextNhomProvider>
    </AuthContextProvider> 
   
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
