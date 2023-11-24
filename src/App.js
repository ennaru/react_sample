import Component from './component/Component.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

// css import
import './common/Default.css';

// page import
import ReactDefaultPage from './pages/react/ReactDefaultPage.js';
import {Tags, InputTags} from './pages/Tags.js';

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

function Test() {

  const items = devices.map(el =>
    <li key={el.pid}>{el.title} / Price: {el.price}</li>
  );

  return(
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
  );
}

// main ACTIVITY
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/input" element={<InputTags />} />
          <Route path="/react_default" element={<ReactDefaultPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

