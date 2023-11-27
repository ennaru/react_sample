import React, { Component } from 'react';

// class형
class Activation extends Component {
  state = {
    agreeStatus : false
  }
  change = (event) => {
    this.setState({
      agreeStatus : event.target.checked
    });
  }
  render() {
    return (
      <div>
        <p>[필수] 이벤트 참여 약관 동의 안내</p>
        <p>이 약관은 리액트가 제공하는 서비스의 이용과 관련하여 규정함을 목적으로 합니다.</p>
        <label><input onChange={this.change} type="checkbox" />위 약관을 읽고 이해하였음을 확인합니다.</label>
        <p><button disabled={!this.state.agreeStatus}>확인</button></p>
      </div>
    );
  }
}


export default function TestPage() {
  return (
    <div className="container">
      <Activation />
    </div>
  );
}