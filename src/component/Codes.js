
export function CodeTemplate(props) {
    return(
        <pre className="code"><code>{props.children}</code></pre>
    );
}

export function Class(props) {
    console.log(props);
    const extendsString = props.extends !== undefined ? 'extends ' + props.extends : '';
    return(
        <CodeTemplate>
            <span>class {props.name} {extendsString} {'{'}</span>
            <span>{props.children}</span>
            <span>{'}'}</span>
        </CodeTemplate>
    );
}

export function Function(props) {

    let returnType = '';
    
    // 익명 함수
    if(!props.inner) {
        returnType = props.returnType !== 'undefined' ? props.returnType : 'function';    
    }

    return(
        <CodeTemplate>
            <span>{props.returnType} {props.name} ({props.parameter}) {'{'}</span>
            <span>{props.children}</span>
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