import React from "react";
import LanguageNavbar from "./languageNavbar";

export default class LangaugeMain extends React.Component {
    render() {
        document.body.style = 'background: rgb(65, 65, 65);';
        return (
            <body className="body">
                <section className="break-container">

                    <LanguageNavbar />

                    <div className="rightbreak language-color-1">
                        Language Main
                    </div>

                </section>
            </body>
        );
    }
}