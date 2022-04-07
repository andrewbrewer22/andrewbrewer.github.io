import React from "react";
import Resume from "../components/resume";
import Leftnavbar from "../components/leftnavbar";
import "../styles/boldStyle.css";

export default class ResumePage extends React.Component {

    render() {
        document.body.style = 'background: rgb(65, 65, 65);';
        return (
                <body class="body">
                    <section className="testingHead"></section>
                    <section class="break-container">
                        <Leftnavbar />
                        <Resume />
                    </section>
                </body>
        );
    }

}