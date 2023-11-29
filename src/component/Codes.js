
export function CodeTemplate(props) {
    return(
        <pre className="code"><code>{props.children}</code></pre>
    );
}

export function Class(props) {
    const extendsString = props.extends !== undefined ? 'extends ' + props.extends : '';
    return(
        <CodeTemplate>
            <span>class {props.name} {extendsString} {'{'}</span>
            <span>{props.content}</span>
            <span>{'}'}</span>
        </CodeTemplate>
    );
}

export function Function(props) {

    let prefix = '';

    // 자바스크립트형 함수인지, 다른 함수인지
    if(!props.inner) {
        prefix = props.prefix !== 'undefined' ? props.prefix : 'function';    
    }

    return(
        <CodeTemplate>
            <span>{props.prefix} {props.name} ({props.parameter}) {'{'}</span>
            <span>{props.content}</span>
            <span>{'}'}</span>
        </CodeTemplate>
    );
}

export function Code(props) {
    return(
        <span>{props.children}</span>
    );
}


export default Code;