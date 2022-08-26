import React from "react";
import "../styles/mainStyle.css";
import DefaultComponent from "../components/default-dir-component";

export default class DefaultDirectory extends React.Component {
    render() {
        document.body.style = "background: rgb(65, 65, 65);";
        return (
                <body class="body">
                    <section class="break-container">
                        <DefaultComponent />
                    </section>
                </body>
        );
    }
}
