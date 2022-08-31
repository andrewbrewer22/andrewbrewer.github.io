import React from "react";
import { getDatabase, ref, set, child, get} from "firebase/database";

var currentNumber = 1;
var newData = 0;

export default class TestDB extends React.Component {
    render() {
        document.body.style = "background: rgba(100, 150, 100);";
        return (
            <section className="body">
                <section>
                    <section>
                        <h1>TEST DB</h1>
                        <br></br>
                        <button onClick={addNumberData}>Add Number</button>
                        <br></br>
                        <br></br>
                        <span id="newData"></span>
                    </section>
                </section>
            </section>
        );
    }
}

function addNumberData() {
    const db = getDatabase();
    const reference = ref(db, "db_001/test/number");

    //increment our test number
    currentNumber += 1;

    set(reference, {
        currentNumber,
    });

    retrieveNewData();
    updateNewData();
}

function retrieveNewData() {
    const dbRef = ref(getDatabase());
    //const reference = ref(db, "test/number/currentNumber");

    get(child(dbRef, 'db_001/test/number/currentNumber')).then((snapshot) => {
                    if (snapshot.exists()) {
                        newData = snapshot.val();
                        //console.log(snapshot.val());
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
}

function updateNewData() {
    document.getElementById("newData").innerHTML = "Current Data: " + newData;
}
