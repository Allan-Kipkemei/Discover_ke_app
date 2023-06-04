import React, {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {AuthContext} from "./AuthContext";
import {Link} from "react-router-dom";

function SignUp() {
    const {register} = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        register(name, email, password);
    };

    return (
        <div className=""
            style={
                {
                    backgroundImage: `url('subg.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "flex-end"
                }
        }>
            <div className="w-1/2">
                <div className="text-center">
                    <span className="text-white font-bold text-2xl flex-shrink-0">

                        <span className="ml-4">Fine TOURS</span>
                    </span>
                </div>
                <div className="flex flex-col min-h-screen items-center justify-center">
                    <form onSubmit={handleSubmit}
                        className="flex flex-col w-full max-w-md p-8 bg-white border-2 border-gray-400 rounded-lg">
                        <h1 className="text-3xl font-bold text-left mb-6">Sign Up</h1>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
                                Name
                            </label>
                            <input id="name"
                                value={name}
                                onChange={
                                    (e) => setName(e.target.value)
                                }
                                className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                placeholder="Enter your name"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
                                Email
                            </label>
                            <input id="email"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="email"
                                placeholder="Enter your email"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
                                Password
                            </label>
                            <input id="password"
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="password"
                                placeholder="Enter your password"/>
                        </div>
                        <button className="px-4 py-2 mx-auto font-bold text-white bg-purple-900 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" type="submit">
                            Sign Up
                        </button>
                        <div className="mt-4 text-center">
                            <span>Or sign up with:</span>
                            <div className="flex justify-center mt-2">
                                <span className="mr-4">
                                    <FontAwesomeIcon icon={faFacebook}
                                        className="text-2xl text-blue-600 hover:text-blue-800 cursor-pointer"
                                        onClick={
                                            () => { // Implement Facebook sign-in functionality
                                            }
                                        }/>
                                </span>
                            <span className="mr-4">
                                <FontAwesomeIcon icon={faTwitter}
                                    className="text-2xl text-blue-400 hover:text-blue-600 cursor-pointer"
                                    onClick={
                                        () => { // Implement Twitter sign-in functionality
                                        }
                                    }/>
                            </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram}
                                className="text-2xl text-pink-500 hover:text-pink-700 cursor-pointer"
                                onClick={
                                    () => { // Implement Instagram sign-in functionality
                                    }
                                }/>
                        </span>
                </div>
            </div>
            <div className="text-center mt-4">
                <span className="text-gray-700">
                    If you are a user,
                    <Link to="/login">login</Link>.
                </span>
            </div>
        </form>
    </div>
</div></div>
    );
}

export default SignUp;

