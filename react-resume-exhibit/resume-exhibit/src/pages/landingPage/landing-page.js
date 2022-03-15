import React from 'react';
import '../../styles/landing-page-style.css';
import Leftnavbar from '../../components/leftnavbar/leftnavbar.js';
import Resume from '../../components/resume/resume';
import BMICalculator from '../bmiPage/bmi-page';

var tf = true;

var rightBreak = <div></div>;
const resume = <Resume></Resume>;
const bmiCalc = <BMICalculator></BMICalculator>;

//identify the proper right-break html component
if(tf)
{
    rightBreak = resume;
}
else
{
    rightBreak = bmiCalc;
}

export default class LandingPage extends React.Component {

    render() {
        document.body.style = 'background: rgb(65, 65, 65);';
        return (


            <body class="body">

                <section class="break-container">

                <Leftnavbar></Leftnavbar>

                {rightBreak}
                    
                </section>
            </body>
        );

    }

};