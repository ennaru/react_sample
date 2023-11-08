import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cclock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
