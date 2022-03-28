import React from 'react';
import "../styles/boldStyle.css";
import Leftnavbar from '../components/leftnavbar';
import APIAJAXcomponent from '../components/apiajax';

export default class APIAJAX extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body class="body">

                <section class="break-container">

                <Leftnavbar />

                <APIAJAXcomponent />
                    
                </section>
            </body>
        );
    }
}