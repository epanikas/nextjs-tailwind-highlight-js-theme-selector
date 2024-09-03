import {JSX} from "react";
import {CodeComp} from "@/app/components/code-comp";
import fs from "fs";

const codeSample: string =
    "public class Person {\n" +
    "    private String name;\n" +
    "    private int age;\n" +
    "}\n"


export default function Home(): JSX.Element {


    return (
        <div>

            <h1 className={"text-5xl font-bold leading-tight text-center text-red-500 pt-8 pb-4"}>
                highlight.js theme selector
            </h1>

            <div className={"max-w-[1324px] mx-auto text-xl p-4 text-center"}>
                <div className={"mb-4"}>
                    This project demonstrates a method to make different themes of highlight.js to coexist on the same
                    page by scoping each theme to a particular component by prefixing CSS files with the name of the
                    theme.
                </div>
                <div className={"mb-4"}>
                    The page is split up to two parts: dark and light, and each theme is displayed on both sides.
                </div>
                <div className={"mb-4"}>
                    This presentation allows choosing a theme best matching required background, whether it be for a
                    light-themed or dark-themed site
                </div>
                <div className={"mb-0"}>
                    The full article is available here:
                </div>
                <div className={"mb-4"}>
                    <a href={"https://epanikas.hashnode.dev/highlight-your-code-scope-highlightjs-theme-to-a-single-component"}
                       className={"underline"}>
                        Highlight your code: scope highlight.js theme to a single component
                    </a>
                </div>
                <div className={"mb-0"}>
                    The code of the project is available here:
                </div>
                <div className={"mb-4"}>
                    <a href={"https://github.com/epanikas/nextjs-tailwind-highlight-js-theme-selector"}
                       className={"underline"}>
                        https://github.com/epanikas/nextjs-tailwind-highlight-js-theme-selector
                    </a>
                </div>
            </div>

            <div className={"grid lg:grid-cols-2 sm:grid-cols-1 gap-2 mx-2"}>
                <div className={"col-auto w-full h-full bg-white text-black border-4 border-gray-500 py-12 m-0"}>
                    <h2 className={"text-3xl text-center"}>Light background</h2>
                    <div className={"grid lg:grid-cols-2 sm:grid-cols-1"}>
                        {styledCodeSnippets(true)}
                    </div>
                </div>
                <div className={"col-auto w-full h-full bg-black text-white border-4 border-gray-500 py-12 m-0"}>
                <h2 className={"text-3xl text-center"}>Dark background</h2>
                    <div className={"grid lg:grid-cols-2 sm:grid-cols-1"}>
                        {styledCodeSnippets(false)}
                    </div>
                </div>
            </div>
        </div>

    );
}

function styledCodeSnippets(light: boolean): JSX.Element[] {

    const borderColor = light ? "border-gray-200" : "border-gray-700";

    return fs.readdirSync("./node_modules/highlight.js/styles")
        .filter(f => f.endsWith(".css") && !f.endsWith(".min.css"))
        .map(f => {
            const theme = f.substring(0, f.length - 4);
            return (
                <div key={`${theme}-${light ? "light" : "dark"}`} className={`justify-center text-center border ${borderColor} m-2`}>
                    <h4 className={"text-xl my-2"}>{theme}</h4>
                    <CodeComp language={"java"} code={codeSample} hljsTheme={theme}/>
                </div>
            )
        })
}

