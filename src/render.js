import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

// export let reRenderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

