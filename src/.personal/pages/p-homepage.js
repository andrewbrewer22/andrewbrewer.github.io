import React from "react";
import PersonalHomeComponent from "../components/p-home-component";

export default class PersonalHomePage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(

            <body>
                <section>

                <PersonalHomeComponent />

                </section>
            </body>

            
        );
    }
}