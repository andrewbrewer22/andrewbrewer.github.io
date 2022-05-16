import React from "react";
import "../styles/mainStyle.css";
import "../styles/picturegallery.css";

export default class PictureGalleryComponent extends React.Component {
  render() {
    return (
      <section className="rightbreak">
        <div className="picture-gallery-title">
          <p>Picture Gallery</p>
        </div>
        <section className="gallery-content">
          <img
            className="gallery-photo"
            src={require("../images/lakeside_01.JPG")}
            alt="lakeside_01"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/lakeside_02.JPG")}
            alt="lakeside_02"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/lakeside_03.JPG")}
            alt="lakeside_03"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/fishing_01.JPG")}
            alt="fishing_01"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/moon_01.JPG")}
            alt="moon_01"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/moose_01.JPG")}
            alt="moose_01"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/moose_02.JPG")}
            alt="moose_02"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/sofiamoose_01.JPG")}
            alt="sofiamoose_01"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/sofiamoose_02.JPG")}
            alt="sofiamoose_02"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/sofiamoose_03.JPG")}
            alt="sofiamoose_03"
          ></img>

          <img
            className="gallery-photo"
            src={require("../images/sofiamoose_04.JPG")}
            alt="sofiamoose_04"
          ></img>
        </section>
      </section>
    );
  }
}
