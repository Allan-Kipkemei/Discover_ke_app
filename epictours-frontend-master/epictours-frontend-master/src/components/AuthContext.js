import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const navigate = useNavigate();

    const [user, setUser] = useState();

    const [change, setOnChange] = useState(false);


    // contact us
    const contactUs = (username, email, password) => {
        fetch('https://localhost:4000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {email, password}
            )
        }).then((res) => res.json()).then((response) => {
            console.log(response);
            setOnChange(!change);
            if (response.error) {
                Swal.fire({icon: "error", title: "Oops...", text: response.error, footer: '<a href="">Why do I have this issue?</a>'});
            } else if (response.message === "message sent succesfully") { // Check for the "message" property
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "LoggedIn successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            } else {
                console.log("Message not sent");
            }
        }).catch((error) => {
            console.error(error);
            console.log("Not")
        })
    };


})}// loginconst login = (email, password) => {
fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        {email, password}
    )
}).then((res) => res.json()).then((response) => {
    console.log(response);

    setOnChange(!change);

    if (response.error) {
        Swal.fire({icon: "error", title: "Oops...", text: response.error, footer: '<a href="">Why do I have this issue?</a>'});
    } else if (response.message === "Login successful") { // Check for the "message" property
        Swal.fire({
            position: "center",
            icon: "success",
            title: "LoggedIn successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/");
    } else {
        console.log("Not logged in, something went wrong");
    }
}).catch((error) => {
    console.error(error);
    console.log("not logged in")
})};// Registerconst register = (name, email, password) => {
fetch("http://localhost:4000/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        {name, email, password}
    )
}).then((res) => res.json()).then((response) => {
    setOnChange(!change);
    if (response.error) {
        console.log(response.error)
        Swal.fire({icon: "error", title: "Oops...", text: response.error, footer: '<a href="">Why do I have this issue?</a>'});
    } else { // setUser(response)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Registered successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/login");
    }
});};const logout = () => {
sessionStorage.clear();
navigate("/login");};// check if user is logged inuseEffect(() => {
fetch("http://localhost:4000/login", {

    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then((res) => res.json()).then((response) => {
    console.log(response);
    setUser(response);
});}, [change]);const contextData = {
user,
login,
register,
logout};return (<>
    <AuthContext.Provider value={contextData}> {" "}
        {children}
        {" "} </AuthContext.Provider>
</>);}
