import React from "react";


//DB
//import { getDatabase } from "firebase/database";
//reference DB
//const database = getDatabase();

export default class LoginFields extends React.Component{
    
    render(){
        return(
            //Main Login Field body
                <section className="reg-input-field-container">
                    {/*Input fields*/}
                    <section className="reg-fields color-black-3">
                        <br></br>
                        <div>
                            <input className="reg-input-field" placeholder="Username"></input>
                        </div>
                        <br></br>
                        <div>
                            <input type={"password"} id="pass1" className="reg-input-field" placeholder="Password"></input>
                        </div>
                        <br></br>
                        <div>
                            <form className="reg-input-submit">Submit</form>
                        </div>
                        <br></br>
                    </section>
                    {/**/}
                </section>
        );
    }
}