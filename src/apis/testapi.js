import { render } from "@testing-library/react";
import React from "react";
import "../styles/boldStyle.css";

var refreshNumber = 0;

export default class TestAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };

        this.apiFetch = this.apiFetch.bind(this);
    }

    refresh(){
        this.refreshNumber += 1;
        document.getElementById("refreshHTML").innerHTML = this.refreshNumber;
    }

    //https://api.quotable.io/random
    //https://randomuser.me/api/

    async apiFetch(){
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    async componentDidMount() {
        this.apiFetch();
    }

    
    

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div className="testapi">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="testapi">Loading... ugh</div>;
        } else {
            
            return (
                <ul className="testapi">
                    Random Quote Generator
                    <pre >
                        Author: {items.author}
                        <br />
                        <li className="contentRestrictor-api"><q>{items.content}</q></li>
                        <br />
                        (Quote ID: {items._id})
                    </pre>

                    <button onClick={this.apiFetch}>Refresh</button>
                    
                    <li className="contentRestrictor-api">Credit: https://github.com/kritika27/quotes-generator-react</li>
                </ul>
            );
        }
    }
}