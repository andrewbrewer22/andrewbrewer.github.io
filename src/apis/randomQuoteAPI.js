import React from "react";
import "../styles/api.css";

export default class RandomQuoteAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };

        this.apiFetch = this.apiFetch.bind(this);
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
            return <div className="api-container">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="api-container">Loading... ugh</div>;
        } else {
            
            return (
                <div className="quote-container portfolio-color-2">
                    <span id="bold-this">Random Quote Generator</span>
                    <pre >
                        Author: <span id="bold-this">{items.author}</span>
                        <br />
                        <div className="quote-content"><q>{items.content}</q></div>
                        <br />
                        (Quote ID: <span id="bold-this">{items._id}</span>)
                    </pre>
                    <button className="quoteButton" onClick={this.apiFetch}>New Quote</button>
                </div>
            );
        }
    }
}
// Credit: https://github.com/kritika27/quotes-generator-react