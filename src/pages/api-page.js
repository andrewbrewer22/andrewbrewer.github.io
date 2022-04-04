import React from "react";
import "../styles/boldStyle.css";
import Leftnavbar from "../components/leftnavbar";
import APIDEMOcomponent from "../apis/apidemo";
import TestAPI from "../apis/testapi";

export default class APIDEMO extends React.Component {
    render() {
        document.body.style = "background: rgb(65, 65, 65);";
        return (
            <body class="body">
                <section class="break-container">
                    <Leftnavbar />

                    <section className="rightbreak">
                        <APIDEMOcomponent />

                        <TestAPI />
                    </section>
                </section>
            </body>
        );
    }
}
