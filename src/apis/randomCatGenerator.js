import React from "react";
import "../styles/api.css";

export default class RandomCatGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catText: "Put some text here!",
        }
        this.refreshImg = this.refreshImg.bind(this);
    }

    
    updateInput = (e) => {
        if (e.key === 'Enter') {
            this.refreshImg();
        }
    }
    async refreshImg() {
        this.setState({
            catText: document.getElementById("cat-input").value
        });
    }
    async componentDidMount() {
        this.refreshImg();
    }
    render() {
        const { catText } = this.state;
        return (
            <div className="catgen-container portfolio-color-2">
                {/*Robot for some reason?????? Maybe cat appending is broken on there end,
                I tested in a seperate browser and confirmed this */}
                <span id="bold-this">Procedural Robot Generator</span>
                <pre className="catContainer">
                    <div className="cat-input-container">
                        <input className="catInput" placeholder="Put Some Words Here!" 
                        type="text" id="cat-input" ></input>
                        <br></br>
                        <button className="cat-button" type="button" onClick={this.refreshImg}>Generate</button>
                        
                    </div>
                    <br />
                    <img  className="catImg" alt="img" src={"https://robohash.org/" + catText + "/?set=set4"}></img>
                </pre>
            </div>
        );
    }

}
//Courtesy of: https://robohash.org/