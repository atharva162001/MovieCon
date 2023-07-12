import React from 'react'
import "./CSS Files/NavBar.css"
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LaptopIcon from '@mui/icons-material/Laptop';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ListIcon from '@mui/icons-material/List';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navBar">
                <div className="container">
                    <a href="https://movieconvjti.netlify.app/" className="navbar-brand" id="navBarBrand" > <MovieCreationIcon fontSize="large" /> Movie Con</a>
    
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar
