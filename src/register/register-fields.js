import React from "react";

export default class RegisterFields extends React.Component{
    
    render(){
        return(
            //Main Register Field body
                <section className="reg-input-field-container">
                    {/*Input fields*/}
                    <section className="reg-fields color-black-3">
                        <div>
                            <input id="name" className="reg-input-field" placeholder="Name"></input>
                        </div>
                        <div>
                            <input id="email" className="reg-input-field" placeholder="Email"></input>
                        </div>
                        <div>
                            <input id="username" className="reg-input-field" placeholder="Username"></input>
                        </div>
                        <br></br>

                        <div>
                            <input type={"password"} id="pass1" className="reg-input-field" placeholder="Password"></input>
                        </div>
                        <div>
                            <input type={"password"} id="pass2" className="reg-input-field" placeholder="Confirm Password"></input>
                        </div>
                        <br></br>

                        <div>
                            <form className="reg-input-submit" onClick={SubmitInformation}>Submit</form>
                        </div>
                        <br></br>
                    </section>
                    {/**/}
                </section>
        );
    }
}

function SubmitInformation(){
    verifyPassword();
    verifyUsername();
    verifyEmail();
    verifyName();

    if(passwordsMatch && emailValid && nameValid && usernameValid){
        alert("Information valid");
    }
}

var passwordsMatch = false;
function verifyPassword(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if(pass1 === ""){
        alert("fill in password")
        passwordsMatch = false;
    }
    else if(pass1.length < 8){
        alert("Password must be at least 8 character long");
        passwordsMatch = false;
    }
    else if(pass1.length > 40){
        alert("Password must be under 41 characters long");
        passwordsMatch = false;
    }
    else if(pass1 === pass2){
        
        passwordsMatch = true;
    }
    else{
        alert("Passwords do not match :( ");
        passwordsMatch = false;
    }
}

var usernameValid = false;
function verifyUsername(){
    var username = document.getElementById("username").value;

    if(username === ""){
        alert("fill in username");
        usernameValid = false
    }
    else if(username.length < 6){
        alert("username must be at least 6 characters long");
        usernameValid = false
    }
    else if(username.length > 40){
        alert("username must be under 41 characters long");
        usernameValid = false
    }
    else{
        usernameValid = true;
    }
    
}

var emailValid = false;
function verifyEmail(){
    var email = document.getElementById("email").value;


    if(email=== ""){
        alert("fill in email");
        emailValid = false;
    }
    else{
        emailValid = true;
    }
}

var nameValid = false;
function verifyName(){
    var name = document.getElementById("name").value;

    if(name === ""){
        alert("fill in name");
        nameValid = false;
    }
    else if(name.length > 40){
        alert("name must be under 41 characters long");
        nameValid = false;
    }
    else{
        nameValid = true;
    }
    
}