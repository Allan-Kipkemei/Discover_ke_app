import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const navigate = useNavigate();

    const [user, setUser] = useState();

    const [change, setOnChange] = useState(false);

    // login
    const login = (email, password) => {
        fetch("https://epic-hcpr.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {email, password}
            )
        }).then((res) => res.json()).then((response) => { // console.log(email);
            console.log(response);

            setOnChange(!change);

            if (response.error) { // console.log(response.error)
                Swal.fire({icon: "error", title: "Oops...", text: response.error, footer: '<a href="">Why do I have this issue?</a>'});
            } else if (response.user) {
                setUser(response);
                sessionStorage.setItem("jwtToken", response.jwt);
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
        });
    };

    // Register
    const register = (name, email, password) => {
        fetch("https://epic-hcpr.onrender.com/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {name, email, password}
            )
        }).then((res) => res.json()).then((response) => {
            setOnChange(!change);
            if (response.error) { // console.log(response.error)
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
        });
    };

    // Logout
    // const logout = () => {
    // fetch("https://epic-hcpr.onrender.com/logout", {
    //     method: "DELETE",
    // })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       //
    //       console.log(response);
    //       setOnChange(!change);

    //       setUser();

    //       navigate("/login");
    //     });
    // };
    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    };

    // check if user is logged in
    useEffect(() => {
        fetch("https://epic-hcpr.onrender.com/loggedin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then((response) => {
            console.log(response)
            setUser(response);
        });
    }, [change]);

    const contextData = {
        user,
        login,
        register,
        logout
    };

    return (
        <>
            <AuthContext.Provider value={contextData}>
                {children} </AuthContext.Provider>
        </>
    );
}
