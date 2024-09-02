import hljs from 'highlight.js';


export class CodeCompProps {
    language: string;
    code: string;
    hljsTheme: string;

    constructor(language: string, code: string, hljsTheme: string) {
        this.language = language;
        this.code = code;
        this.hljsTheme = hljsTheme;
    }
}

export async function CodeComp(props: CodeCompProps) {

    const {language, code, hljsTheme} = props

    const html = hljs.highlight(code, {language}).value;

    console.log("importing ", `../../hljs/styles/prefixed-${hljsTheme}.css`)

    await import(`../../hljs/styles/prefixed-${hljsTheme}.css`)
    return (
        <div className={`p-4 inline-block text-left hljs-theme-${hljsTheme}`}>
            <pre>
                <code lang={language} className={"hljs"} dangerouslySetInnerHTML={{__html: html}}/>
            </pre>
        </div>
    )

}