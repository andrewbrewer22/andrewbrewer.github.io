import React from "react";

import LoginFields from "./login-fields";

export default class LoginPage extends React.Component{

    render(){
        document.body.style = 'background: rgba(255, 255, 255);';
        return(
            <body className="body">
                <section className="break-container registration-home ">
                    <div className="reg-title color-black-3">
                        Login
                    </div>
                    <LoginFields />
                </section>
            </body>
        );
    }

}