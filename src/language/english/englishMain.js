import React from "react";
import LanguageNavbar from "../languageNavbar";

export default class EnglishMain extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return (
            <body className="body">
                <section className="break-container">

                    <LanguageNavbar />

                    <div>
                        English Main
                    </div>

                </section>
            </body>
        );
    }
}