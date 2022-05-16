import React from "react";
import "../styles/cosmic.css";

export default class CosmicComponent extends React.Component{
    render(){
        return(
            <section className="rightbreak">
            <div className="cosmic-number">
                Cosmic Number
                <div>
                    <input name="cosmic" placeholder="Input word" id="cosmic-number"></input>
                    <button onClick={CalculateCosmicNumber}>Calculate</button>
                </div>
                <div id="output">

                </div>
            </div>
            </section>
        );

        function CalculateCosmicNumber(){

            

            var cosmicInput = document.getElementById("cosmic-number").value;
            var cosmicLength = cosmicInput.length;

            for (let index = 0; index !== 4; index = 0) {

                if(cosmicLength > 100)
                {
                    
                }
                else if(cosmicLength === 4)
                {
                    index = 4;
                    document.getElementById("output").innerHTML += " [Your Cosmic number is 4] ";
                }
                else{
                    document.getElementById("output").innerHTML += " [Your letter length is: " + cosmicLength + "] ";
                    

                }

                switch(cosmicInput.length)
                {
                    
                }

                break;
            }
        }
    }
}