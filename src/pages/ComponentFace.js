import { Component } from 'react';
import { Function, Class, Code } from 'component/Codes.js';

// Class
class TypeA extends Component {

  // render
  render() {
    return (
      <div>
        <p>class로 만든 Component</p>
        <Function name="TypeA" returnType="function">
          <Code>  return(</Code>
          <Code>  // 이곳에는 단 하나의 태그만 가능</Code>
          <Code>  );</Code>
        </Function>
      </div>
    )
  }
}

// Function
function TypeB() {

  return (
    <div>
      <p>function으로 만든 Component</p>
      <Class name="TypeB" extends="Component">
          <Code>  render() {'{'}</Code>
          <Code>    return(</Code>
          <Code>    // 이곳에는 단 하나의 태그만 가능</Code>
          <Code>    );</Code>
          <Code>  {'}'}</Code>
      </Class>
      <div>
        <span>{'function TypeB() { return(); }'}</span>
      </div>
    </div>
  );

}

// Constatnt
const TypeC = () => {

  return (
    <div>
      <p>function으로 만든 Component</p>
      <pre>
          const TypeC = () =>
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