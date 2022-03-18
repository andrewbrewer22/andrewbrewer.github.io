import React from 'react';
import "../styles/boldStyle.css";
import Leftnavbar from '../components/leftnavbar';
import BMICalculator from '../components/bmiCalculator';

export default class BMICalcPage extends React.Component{

    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(
            <body class="body">

                <section class="break-container">

                <Leftnavbar />

                <BMICalculator />
                    
                </section>
            </body>
        );
    }
}