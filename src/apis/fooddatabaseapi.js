import React from "react";

export default class FoodDBAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };

        this.apiFetch = this.apiFetch.bind(this);
    }

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

//API
//KEY: bN71BPAJYOC8yovbE1p7zp6IzYu2TiJ9uT8mmsfx
//https://fdc.nal.usda.gov/api-guide.html