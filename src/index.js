import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'First message', like: 10, dislike: 15},
    {id: 2, message: 'Second message', like: 1, dislike: 1},
    {id: 3, message: 'Third message', like: 32, dislike: 333},
    {id: 4, message: 'Other message', like: 101, dislike: 2},
    {id: 5, message: 'Some once message', like: 1110, dislike: 0},
    {id: 6, message: 'ooooops)', like: 0, dislike: 123}
];

let dialogs = [
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
    {id: 3, name: 'Name 3'},
    {id: 4, name: 'Name 4'},
    {id: 5, name: 'Name 5'},
    {id: 6, name: 'Name 6'}
];

let messages = [
    {id: 1, message: 'Message. Some text.... More text', type: 'From'},
    {id: 2, message: 'Message. Some text.... More text', type: 'From'},
    {id: 3, message: 'Message. Some text.... More text', type: 'From'},
    {id: 4, message: 'Message. Some text.... More text', type: 'To'},
    {id: 5, message: 'Message. Some text.... More text', type: 'From'},
    {id: 6, message: 'Message. Some text.... More text', type: 'To'},
    {id: 7, message: 'Message. Some text.... More text', type: 'To'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
