import { Component } from 'react';
import { Function, Class, Code } from 'component/Codes.js';

// Class
class TypeA extends Component {

  // render
  render() {
    return (
      <div>
        <h3>function - Component</h3>
        <p>함수로 작성한 Component입니다. 랜더링할 태그를 return() 함수 안에 입력합니다.</p>
        <Function name="TypeA" prefix="function"
        content={`
          return(
            // 이곳에 랜더링 태그를 입력합니다.
          );
        `}>
        </Function>
      </div>
    )
  }
}

// Function
function TypeB() {

  return (
    <div>
      <h3>class - Component</h3>
      <p>클래스 변수로 작성한 Component입니다. 랜더링할 태그를 render() 함수 내 return() 함수 안에 입력합니다.</p>
      <p>상속은 React.Component 를 받으며, 'react'에서 Component import를 선언했다면 'React.' 는 생략할 수 있습니다.</p>
      <Class name="TypeB" extends="Component"
      content={`
        render() {
          return(
            // 이곳에 랜더링 태그를 입력합니다.
          );
        }
      `}>
      </Class>
      <div>
        <span>{'function TypeB() { return(); }'}</span>
      </div>
    </div>
  );

}

// Constatnt
const TypeC = () => {

  const content = `
    list.forEach((el) => {
      console.log(el);
    });
  `;

  return (
    <div>
      <p>function으로 만든 Component</p>
      <pre>
        {content}
      </pre>
    </div>
  );

}

export function ComponentFace() {
  return (
    <div className="container">
      <TypeA />
      <TypeB />
      <TypeC />
    </div>
  );
}

export default ComponentFace;