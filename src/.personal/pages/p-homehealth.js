import React from "react";

//components
import PersonalHomeComponent from "../components/p-home-component";
import PersonalNavbar from "../components/p-homenavbar";

//style
import "../style/p_color.css";
import "../style/p_structure.css";

export default class PersonalHomeHealthPage extends React.Component{
    render(){
        document.body.style = 'background: rgb(65, 65, 65);';
        return(

            <body >
                {/*Main Container*/}
                <section >

                    {/*Navigation*/}
                    <section >
                        Health
                    </section>

                    {/*Content*/}
                    <section>
                        Health
                    </section>

                </section>
            </body>

            
        );
    }
}