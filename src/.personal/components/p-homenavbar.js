import React from "react";

export default class PersonalNavbar extends React.Component{
    render(){
        return(
            <section>
                <div className="bg-01">
                    <div className="nav-title">
                        Brewer Trove
                    </div>

                    <div className="nav-container">
                        <button className="nav-button bg-03">
                            Health
                        </button>
                        <button className="nav-button bg-02">
                            Language
                        </button>
                    </div>
                    <br></br>
                </div>
            </section>
        );
    }
}