
export function CodeTemplate(props) {
    return(
        <pre className="code"><code>{props.children}</code></pre>
    );
}

export function Class(props) {
    const extendsString = props.extends !== undefined ? 'extends ' + props.extends : '';
    const line = props.content.split("\n");
    return(
        <CodeTemplate>
            <span data-line="0">class {props.name} {extendsString} {'{'}</span>
            {line.map((element, idx) => {
                return(
                    <span data-line={idx + 1}> {element}</span>
                );
            })}
            <span data-line={line.length + 1}>{'}'}</span>
        </CodeTemplate>
    );
}

export function Function(props) {

    const prefix = props.prefix !== 'undefined' ? props.prefix : 'function';    
    const line = props.content.split("\n");

    return(
        <CodeTemplate>
            <span data-line="0">{prefix} {props.name} ({props.parameter}) {'{'}</span>
            {line.map((element, idx) => {
                return(
                    <span data-line={idx + 1}> {element}</span>
                );
            })}
            <span data-line={line.length + 1}>{'}'}</span>
        </CodeTemplate>
    );
}

export function Code(props) {
    return(
        <span>{props.children}</span>
    );
}


export default Code;