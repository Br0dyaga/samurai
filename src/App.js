import logo from './logo.png';
import pict from './pict.png'
import './App.css';

let App = () => {
  return (
        <div className="app-wrapper">
          <header className="header">
            <img src={logo} alt='logo'/>
            </header>
          <nav className="nav">
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </nav>
          <div className="content">
            <div>
              <img src={pict} alt='pict'/>
              
            </div>
            <div>ava + desc</div>
            <div>my post
              <div>new post</div>
              <div>
                <div>post2</div>
                <div>post2</div>
              </div>
            </div>
          </div>
          <footer className="footer">Footer</footer>
        </div>
  );
}

export default App;
