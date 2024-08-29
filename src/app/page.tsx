import Image from "next/image";
import {JSX} from "react";


export default function Home(): JSX.Element {
    return (
        <div>

            <h1 className={"text-5xl font-bold leading-tight text-center text-red-500 pt-8 pb-4"}>
                highlight.js theme selector
            </h1>

            <div className={"w-[70em] mx-auto text-2xl p-12 text-center"}>
                <p>
                    this project demonstrates a method to make different themes of highlight.js to coexist on the same page
                </p>
                <p>
                    the page is split up to two parts: dark and light, where each theme is displayed
                </p>
                <p>
                    using this presentation one can easily choose a theme best matching their needs, whether it be for a light-themed or dark-themed site
                </p>
            </div>

            <div className={"grid grid-cols-2 gap-4"}>
                <div className={"col-auto w-full h-full bg-white text-black border-8 border-gray-500 pt-12 pb-12"}>
                    <h2 className={"text-3xl text-center"}>Light side</h2>
                </div>
                <div className={"col-auto w-full h-full bg-black text-white border-8 border-gray-500 pt-12 pb-21"}>
                    <h2 className={"text-3xl text-center"}>Dark side</h2>
                </div>
            </div>
        </div>

    );
}
