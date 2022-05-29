import React from "react";
import "../styles/shopping.css";
import ShoppingComponent from "../shop/shoppingComponent";
import ShoppingNavbar from "./shoppingNavbar";


export default class ShoppingPage extends React.Component{
    render(){
        document.body.style = 'background: rgb(218, 183, 143)';

        return(
            <body className="body">
                <section className="head-curtain curtain-color-2 "></section>
                <section className="break-container">
                    <ShoppingNavbar />

                    <ShoppingComponent />
                </section>
            </body>
        );
    }
}