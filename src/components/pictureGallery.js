import React from "react";
import "../styles/picturegallery.css";

//const pic_01 = require('../images/lakeside_01.JPG');

const pictures = [
  require("../images/lakeside_01.JPG"),
  require("../images/lakeside_02.JPG"),
  require("../images/lakeside_03.JPG"),
  require("../images/fishing_01.JPG"),
  require("../images/moon_01.JPG"),
  require("../images/moose_01.JPG"),
  require("../images/moose_02.JPG"),
  require("../images/sofiamoose_01.JPG"),
  require("../images/sofiamoose_02.JPG"),
  require("../images/sofiamoose_03.JPG"),
  require("../images/sofiamoose_04.JPG"),
];

let slideIndex = 1;

export default class PictureGalleryComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.showSlides = this.showSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
  }

  componentDidMount(){
    this.showSlides(slideIndex);
  }
  // Next/previous controls
  plusSlides(n) {
    this.showSlides(slideIndex += n);
  }
  
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  render() {
    return (
      <section className="rightbreak">
        <div className="picture-gallery-title">
          <p>Picture Gallery</p>
        </div>

        <div class="slideshow-container">

          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img className="gallery-photo"
              src={pictures[0]}
              alt="lakeside_01"></img>
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img
              className="gallery-photo"
              src={pictures[1]}
              alt="lakeside_02"
            ></img>
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img
              className="gallery-photo"
              src={pictures[2]}
              alt="lakeside_03"
            ></img>
            <div class="text">Caption Three</div>
          </div>

          <a class="prev" onclick={this.plusSlides(-1)}>&#10094;</a>
          <a class="next" onclick={this.plusSlides(1)}>&#10095;</a>

        </div>

      </section>
    );
  }
}




// #region 
{/* <div className="slideshow-container">
          <div className="mySlides fade">
            <img
              className="gallery-photo"
              src={pictures[0]}
              alt="lakeside_01"
            ></img>
          </div>

          <div className="mySlides fade">
            <img
              className="gallery-photo"
              src={pictures[1]}
              alt="lakeside_01"
            ></img>
          </div>

          <div className="mySlides fade">
            <img
              className="gallery-photo"
              src={pictures[2]}
              alt="lakeside_01"
            ></img>
          </div>

          <button class="prev" onclick={this.plusSlides(-1)}>
            &#10094;
          </button>
          <button class="next" onclick={this.plusSlides(1)}>
            &#10095;
          </button>
        </div> */}

{/*
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
        */}
//#endregion