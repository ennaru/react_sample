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

function InputGroup({children}) {
  console.log(children);
  return (
    <form name={children.name}>
      {children}
    </form>
  );
}
 
function Text(props) {
  const type = props.numeric ? "number" : "text";
  return (
    <div className="input-area">
      <label>{props.label}: <input type={type} placeholder={props.placeholder} disabled={props.disabled} maxLength={props.maxLength}></input></label>
    </div>
  );
}

export function InputTags() {

  return (
    <div className="container">
      <div>
        <InputGroup name="skytrax">
          <Text label="이름" disabled numeric/>
          <Text label="코드" placeholder="react" numeric/>
          <Text label="식별번호" placeholder="react" maxLength="4"/>
        </InputGroup>
        <div className="input-area">
          <ul>
            <li><label><input type="checkbox"></input>[필수] 이용약관 1</label></li>
            <li><label><input type="checkbox"></input>[필수] 이용약관 2</label></li>
            <li><label><input type="checkbox"></input>[필수] 개인 신용정보 제공 정보 동의서</label></li>
            <li><label><input type="checkbox"></input>[선택] 마케팅 전용 개인 신용정보 제공 정보 동의서</label></li>
          </ul>
        </div>
        <div className="input-area">
          <ul>
            <li><label><input type="radio" name="rad1"></input>남성</label></li>
            <li><label><input type="radio" name="rad1"></input>여성</label></li>
            <li><label><input type="radio" name="rad1"></input>기타</label></li>
          </ul>
        </div>
      </div>
      <div className="input-area">
        <input type="file"></input>
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

export default Tags;

