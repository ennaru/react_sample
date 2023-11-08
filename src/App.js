import logo from './logo.svg';
import './App.css';
import Component from './component/Component.js';
import { useState } from 'react';

const loginYn  = true;
const user = {
  "name" : "React",
  "company" : "Meta Platform",
  "logo" : "./logo.svg"
};
const devices = [
  { "pid": "1", "title" : "Apple MacBook Pro 14-inch", "price" : "240000000"},
  { "pid": "2", "title" : "Apple MacBook Pro 16-inch", "price" : "320000000"},
  { "pid": "3", "title" : "Apple Mac Studio", "price" : "300000000"}
]

// clickButton with steps
function ClickButton({steps}) {

  const [count, addCount] = useState(0);
  function click() {
    addCount(count+parseInt(steps));
  }

  return (
    <button onClick={click}>COUNT!! {count} (step: {steps})</button>
  );

}

// general buttons
function Button() {
  
  function clickEvent() {
    alert('눌럿슴.');
  }

  return (
    <button onClick={clickEvent}>버튼을 눌러보세요</button>
  );
}

// main ACTIVITY
function App() {

  const items = devices.map(el =>
    <li key={el.pid}>{el.title} / Price: {el.price}</li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>{user.name} {loginYn && '어드민'}</h2>
        <img src={user.logo} alt="replace"></img>
        <Button></Button>
        <ul>
          {items}
        </ul>
        <ClickButton steps="1"></ClickButton>
        <ClickButton steps="2"></ClickButton>
        <Component></Component>
      </div>
    </div>
  );
}

export default App;

