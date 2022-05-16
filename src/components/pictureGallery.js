import React from "react";
import "../styles/mainStyle.css";

export default class PictureGalleryComponent extends React.Component {
    render() {
        return (
            <section class="rightbreak">
                <div className="picture-gallery-title">
                    <p>
                        Picture Gallery
                    </p>
                </div>
                <img
                    class="lakeside_01"
                    src={require("../images/lakeside_01.JPG")}
                    alt="lakeside_01"
                ></img>
                <img
                    class="lakeside_01"
                    src={require("../images/lakeside_01.JPG")}
                    alt="lakeside_01"
                ></img>
            </section>
        );
    }
}