import React from "react";
import Leftnavbar from "../components/leftnavbar";
import "../styles/mainStyle.css";
import PictureGalleryComponent from "../components/pictureGallery";

export default class PictureGalleryPage extends React.Component {
    render() {
        document.body.style = 'background: rgb(65, 65, 65);';
        return (
            <body class="body">
                <section className="testingHead"></section>
                <section class="break-container">
                    <Leftnavbar />
                    <PictureGalleryComponent />
                </section>
            </body>
        );
    }
}