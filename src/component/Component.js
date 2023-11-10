import React from 'react'
export default function Component() {
    return (
        <p>컴포넌트입니다.</p>
    );
}

export class Header extends React.Component {
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
        <header>
            <h1>React App.js</h1>
            <p>현재 시각은 {this.state.date.toLocaleTimeString()}입니다.</p>
        </header>
        
      );
    }
  }
  export function Footer() {
    return (
        <footer>
            <div>
                2023 / ennaru / react-app
            </div>
        </footer>
    )
}