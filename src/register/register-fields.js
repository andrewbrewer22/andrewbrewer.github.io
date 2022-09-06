import React from "react";
import { getDatabase, ref, set, child, get } from "firebase/database";

export default class RegisterFields extends React.Component {

    render() {
        return (
            //Main Register Field body
            <section className="reg-input-field-container">
                {/*Input fields*/}
                <section className="reg-fields color-black-3">
                    <div>
                        <div className="usernameSpan" id="usernameSpan"></div>
                        <input id="username" className="reg-input-field" placeholder="Username"></input>
                    </div>
                    <br></br>

                    <div>
                        <div className="passwordSpan" id="passwordSpan"></div>
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

function SubmitInformation() {
    var user = verifyUsername();
    var pass = verifyPassword();


    const db = getDatabase();
    const reference = ref(db, "db_001/users/" + user);

    if (usernameValid && passwordsMatch) {
        set(reference, {
            
            password: pass
        })
    };
}

var passwordsMatch = false;
function verifyPassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1 === "") {
        document.getElementById("passwordSpan").innerHTML = "Fill In Password";
        passwordsMatch = false;
    }
    else if (pass1.length < 8) {
        document.getElementById("passwordSpan").innerHTML = "Password must be at least 8 character long";
        passwordsMatch = false;
    }
    else if (pass1.length > 40) {
        document.getElementById("passwordSpan").innerHTML = "Password must be under 41 characters long";
        passwordsMatch = false;
    }
    else if (pass1 === pass2) {
        document.getElementById("passwordSpan").innerHTML = ""
        passwordsMatch = true;

        return pass1;
    }
    else {
        document.getElementById("passwordSpan").innerHTML = "Passwords do not match";
        passwordsMatch = false;
    }
    
}

var usernameValid = false;
function verifyUsername() {
    var username = document.getElementById("username").value;
    var nameAlreadyExists = false;
    //check if username is blank, too short, too long, and does not already exist

    const dbRef = ref(getDatabase());

    get(child(dbRef, 'db_001/users/' + username)).then((snapshot) => {
        if (snapshot.exists()) {
            document.getElementById("usernameSpan").innerHTML = "Name already in use";
            nameAlreadyExists = true;
        }
        else {
            nameAlreadyExists = false;
        }
    });

    if (!nameAlreadyExists) {

        if (username === "") {
            document.getElementById("usernameSpan").innerHTML = "Fill In Username";
            usernameValid = false
        }
        else if (username.length < 4) {
            document.getElementById("usernameSpan").innerHTML = "Username must be at least 4 characters long";
            usernameValid = false
        }
        else if (username.length > 40) {
            document.getElementById("usernameSpan").innerHTML = "Username must be under 41 characters long";
            usernameValid = false
        }
        else {
            document.getElementById("usernameSpan").innerHTML = "";
            usernameValid = true;

            return username;
        }
    }
}

var emailValid = false;
function verifyEmail() {
    var email = document.getElementById("email").value;


    if (email === "") {
        alert("fill in email");
        emailValid = false;
    }
    else {
        emailValid = true;
    }
}

var nameValid = false;
function verifyName() {
    var name = document.getElementById("name").value;

    if (name === "") {
        alert("fill in name");
        nameValid = false;
    }
    else if (name.length > 40) {
        alert("name must be under 41 characters long");
        nameValid = false;
    }
    else {
        nameValid = true;
    }

}