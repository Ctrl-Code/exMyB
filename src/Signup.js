import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import createUser from "./APIs/createUser";

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const navigate = useNavigate();

    // checks whether user is allowed to be created
    function allowed() {

        if (username.length > 0 && password.length > 0 && phone.length > 0
            && firstName.length > 0 && lastName.length > 0)
            return true;

        else
            return false;
    }



    const handleSubmit = (event) => {

        if (allowed()) {
            createUser(username, password, firstName,
                lastName, phone, city, state, country)
                .then(res => {
                    const { msg, Token } = res;

                    console.log('the res is', res);

                    if (msg === "User has been successfully created") {
                        localStorage.setItem('token', Token);
                    }
                    else if (msg === "Username already exists at our end") {
                        alert("user already exits")
                    }
                    else {
                        alert('error occured,see logs');
                        console.log('error occured', res);
                    }
                }
                )
        }
        else {
            alert("fields not complete");
        }

        event.preventDefault();
    }


    return <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <br />

        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <br />

        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" />
        <br />

        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First Name" />
        <br />

        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last Name" />
        <br />

        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
        <br />

        <input type="text" value={state} onChange={(event) => setState(event.target.value)} placeholder="State" />
        <br />

        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} placeholder="Country" />
        <br />

        <input type="submit" value="Sign Up" />

        <button onClick={() => navigate("/")}>Log In</button>
    </form>
}

export default Signup;