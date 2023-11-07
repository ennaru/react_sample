import logo from './logo.svg';
import './App.css';

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

function Button() {
  
  function clickEvent() {
    alert('눌럿슴.');
  }

  return (
    <button onClick={clickEvent}>버튼을 눌러보세요</button>
  );
}

function App() {

  const items = devices.map(el =>
    <li key={el.pid}>{el.title}</li>
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
        <h2>{user.name} {loginYn && ' 어드민'}</h2>
        <img src={user.logo}></img>
        <Button></Button>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
}

export default App;

