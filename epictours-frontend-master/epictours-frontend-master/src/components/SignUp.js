
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {AuthContext} from './AuthContext'


function SignUp() {

  const {register} = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    register(name, email, password )
  }


  return (
    <div className=""style={{backgroundImage: `url('./bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
     <div className='text-center'>
            <span className=" text-white font-bold  text-2xl flex-shrink-0">
              <FontAwesomeIcon icon={faPlaneDeparture}  />
              <span className="ml-4">EPIC TOURS</span>
              </span>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center">
  <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md p-8 bg-white border-2 border-gray-400 rounded-lg">
    <h1 className="text-3xl font-bold text-left mb-6">Sign Up</h1>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
      <input 
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        placeholder="Enter your name"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
      <input 
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="email"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password</label>
      <input 
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <button
      className="px-4 py-2 mx-auto font-bold text-white bg-purple-900 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      type="submit"
    >
      Sign Up
    </button>
  </form>
</div>

  </div>
  );
}

export default SignUp;
