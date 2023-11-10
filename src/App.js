import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './component/Component.js';

import Practice from './path/Practice.js'
import { TestPage } from './pages/TestPage.js'

import { Error404 } from './error/Error.js'


const loginYn = true;
const user = {
  "name": "React",
  "company": "Meta Platform",
  "logo": "./logo.svg"
};
const devices = [
  { "pid": "1", "title": "Apple MacBook Pro 14-inch", "price": "240000000" },
  { "pid": "2", "title": "Apple MacBook Pro 16-inch", "price": "320000000" },
  { "pid": "3", "title": "Apple Mac Studio", "price": "300000000" }
]

// clickButton with steps
function ClickButton({ steps }) {

  const [count, addCount] = useState(0);
  function click() {
    addCount(count + parseInt(steps));
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

class Cclock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date : new Date()};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <p>현재 시각은 {this.state.date.toLocaleTimeString()}입니다.</p>
    );
  }
}

function Root() {
  const items = devices.map(el =>
    <li key={el.pid}>{el.title} / Price: {el.price}</li>
  );

  return (
    <div className="App">
      <header>
        <h2>{user.name} {loginYn && '어드민'}</h2>
        <Cclock/>
      </header>
      <div>
        <img src={user.logo} alt="replace"></img>
        <Button></Button>
        <ul>
          {items}
        </ul>
        <ClickButton steps="1"></ClickButton>
        <ClickButton steps="2"></ClickButton>
      </div>
    </div>
  );
}

function Root2() {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

// main ACTIVITY
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root2 />}></Route>
          <Route path="/testpage" element={<TestPage />}></Route>
          <Route path="/practice" element={<Practice />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;