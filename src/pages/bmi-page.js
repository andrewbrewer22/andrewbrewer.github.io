import React from 'react';
import "../styles/mainStyle.css";
import "../styles/bmi.css";
import Leftnavbar from '../components/leftnavbar';
import BMICalculator from '../components/bmiCalculator';

export default class BMICalcPage extends React.Component{

    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        //document.body.style 
        return(
            <body className="body">

                <section className="break-container">

                <Leftnavbar />

                <BMICalculator />
                    
                </section>
            </body>
        );
    }
}