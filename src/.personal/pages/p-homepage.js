import React from "react";

//components
import PersonalHomeComponent from "../components/p-home-component";
import PersonalNavbar from "../components/p-homenavbar";

//style
import "../style/p_color.css";
import "../style/p_structure.css";

export default class PersonalHomePage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(

            <body >
                {/*Main Container*/}
                <section >

                    {/*Navigation*/}
                    <section >
                        <PersonalNavbar />
                    </section>

                    {/*Content*/}
                    <section>
                        <PersonalHomeComponent />
                    </section>

                </section>
            </body>

            
        );
    }
}