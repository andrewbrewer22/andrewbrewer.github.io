import React from "react";
import "../styles/mainStyle.css";
import Leftnavbar from "../components/leftnavbar";
import RandomCatGenerator from "../apis/randomCatGenerator";
import RandomQuoteAPI from "../apis/randomQuoteAPI";

export default class APIDEMO extends React.Component {
    render() {
        document.body.style = "background: rgb(65, 65, 65);";
        return (
                <body class="body">
                    <section class="break-container">
                        <Leftnavbar />

                        <section className="rightbreak">
                            <RandomQuoteAPI />

                            <RandomCatGenerator />
                        </section>
                    </section>
                </body>
        );
    }
}
