import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <img src="https://s1.logaster.com/static/v3/img/products/logo.png" />
      </header>
      <nav>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" />
        </div>
        <div>
          avatar + info
        </div>
        <div>
          My post
          <div>
            New Post
          </div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
