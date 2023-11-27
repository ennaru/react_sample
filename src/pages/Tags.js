// main ACTIVITY
export function Tags() {

  return (
    <div className="container">
      <div>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>
        <h5>Heading5</h5>
        <h6>Heading6</h6>
      </div>
      <div>
        <p>This is P TAG</p>
      </div>
      <div>
        <a href="/">This is A Tag</a>
        <a href="/">This is A Tag</a>
        <a href="/">This is A Tag</a>
        <a href="/">This is A Tag</a>
      </div>
      <div>

      </div>
    </div>
  );
}

function Title(props) {
  return (
    <h3>{props.children}</h3>
  );
}

function InputGroup(props) {
  return (
    <div className="input-group">
      <h3>{props.title}</h3>
      <form name={props.name}>
        {props.children}
      </form>
    </div>

  );
}

function CheckboxGroup(props) {
  return (
    <div className="input-group">
      <h3>{props.title}</h3>
      <form name={props.name}>
        {props.children}
      </form>
      <input type="text" name="queryString" disabled></input>
    </div>

  );
}

function Text(props) {
  const type = props.numeric ? "number" : "text";
  return (
    <div className="input-area">
      <label>{props.label}</label>
      <input type={type} placeholder={props.placeholder} disabled={props.disabled} maxLength={props.maxLength}></input>
    </div>
  );
}

function Check(props) {
  return (
    <div className="input-area">
      <label><input type="checkbox" name={props.name} value={props.value} disabled={props.disabled}></input>{props.label}</label>
    </div>
  );
}

export function InputTags() {

  return (
    <div className="container">
      <InputGroup name="textGroup" title="input[type=text]">
        <Text label="이름" disabled numeric />
        <Text label="코드" placeholder="react" numeric />
        <Text label="식별번호" placeholder="react" maxLength="4" />
      </InputGroup>
      <CheckboxGroup name="checkboxGroup" title="input[type=checkbox]">
        <Check label="전화" name="tel" value="trms1"/>
        <Check label="문자" name="sms" value="trms2"/>
        <Check label="이메일" name="email" value="trms3"/>
      </CheckboxGroup>
      <InputGroup name="buttonGroup">
        <Title>[type="radio"]</Title>
        <ul>
          <li><label><input type="radio" name="rad1"></input>남성</label></li>
          <li><label><input type="radio" name="rad1"></input>여성</label></li>
          <li><label><input type="radio" name="rad1"></input>기타</label></li>
        </ul>
        <p>type="radio"인 태그는 name을 설정하여 중복 선택을 막습니다.</p>
      </InputGroup>
    </div>
  );
}

export default Tags;

