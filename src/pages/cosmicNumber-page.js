import React from "react";
import Leftnavbar from '../components/leftnavbar';
import CosmicComponent from "../components/cosmic-component";

import "../styles/mainStyle.css";

export default class CosmicNumber extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        //document.body.style 
        return(
            <body className="body">

                <section className="break-container">

                <Leftnavbar />

                <CosmicComponent />
                    
                </section>
            </body>
        );
    }
}