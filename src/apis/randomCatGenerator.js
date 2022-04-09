import React from "react";
import "../styles/boldStyle.css";

export default class RandomCatGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catText: "",
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
            <ul className="api-container">
                Random Cat Generator
                <pre className="catContainer">
                    <div className="catInputContainer">
                        <input className="catInput" placeholder="Put Some Words Here!" 
                        type="text" id="cat-input" onKeyDown={this.updateInput}></input>
                        <button type="button" onClick={this.refreshImg}>Generate</button>
                    </div>
                    <br />
                    <img className="catImg" alt="img" src={"https://robohash.org/" + catText + "/?set=set4"}></img>
                </pre>
            </ul>
        );
    }

}
//Courtesy of: https://robohash.org/