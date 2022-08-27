import React from "react";

import RegisterFields from "./register-fields";

export default class RegistrationPage extends React.Component{

    render(){
        document.body.style = 'background: rgba(255, 255, 255);';
        return(
            <body className="body">
                <section className="break-container registration-home ">
                    <div className="reg-title color-black-3">
                        Registration
                    </div>
                    <RegisterFields />
                </section>
            </body>
        );
    }

}