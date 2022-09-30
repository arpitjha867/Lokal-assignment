import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    const {handleSearchButton} = props
    const [str , setStr] =useState("")
    function handleChange(event){
        setStr(event.target.value)   
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/about">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                
            </ul>
            <form className="d-flex">
                <input id='strInput'  className="form-control me-2 " type="text" placeholder="Search" aria-label="Search" onChange={handleChange} />
                <button value={str} className="btn btn-outline-success" type="button" onClick={handleSearchButton}>Search</button>
            </form>
            </div>
        </div>
        </nav>
      
    </div>
  )
}