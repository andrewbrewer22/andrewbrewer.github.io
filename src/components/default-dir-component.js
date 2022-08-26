import React from "react";
import { useNavigate } from "react-router";

function DefaultComponent(){
    let navigate = useNavigate();

    return (
        <div>
            <section class="default-comp portfolio-color-2">
        Hello are you here for my Portfolio or Personal Site?
      </section>
      <br></br>
      <br></br>
      <br></br>
      <section class="default-button portfolio-color-2">
      <button
            id="link-button"
            onClick={() => {
                navigate("/p-welcome");
            }}
            >Personal</button>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <section class="default-button portfolio-color-2">
      <button
            id="link-button"
            onClick={() => {
                navigate("/r-welcome");
            }}
            
            >Portfolio</button>
      </section>
      </div>
    );
}


    export default DefaultComponent;