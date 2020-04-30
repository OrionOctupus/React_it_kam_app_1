import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messagesPost = [
  { id: 1, message: "Hello, My Friend!", like: 3 },
  { id: 2, message: "It's first post", like: 4 },
  { id: 3, message: "It's a good weather today", like: 7 },
  { id: 4, message: "Good luck!", like: 10 },
]

let dialogsData = [
  { name: "Andrew", id: "1" },
  { name: "Anatoly", id: "2" },
  { name: "Ivan", id: "3" },
  { name: "Marina", id: "4" },
  { name: "Pavel", id: "5" },
  { name: "Lena", id: "6" },
]

let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Let's meet at the bar?" },
  { id: 4, message: "Tomorrow at 8 pm" },
]

ReactDOM.render(
  <React.StrictMode>
    <App messagesPost={messagesPost} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
