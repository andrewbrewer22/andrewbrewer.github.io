
import React from "react";
import "../styles/boldStyle.css";

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
                <ul className="api-container">
                    Random Quote Generator
                    <pre >
                        Author: {items.author}
                        <br />
                        <li className="contentRestrictor-api"><q>{items.content}</q></li>
                        <br />
                        (Quote ID: {items._id})
                    </pre>

                    <button className="quoteButton" onClick={this.apiFetch}>Refresh</button>
                </ul>
            );
        }
    }
}
// Credit: https://github.com/kritika27/quotes-generator-react