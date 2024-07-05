import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export  class Navbar extends Component {

    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg main-color py-4">
                <div class="container-fluid ">
                    <Link class="navbar-brand text-white fw-bold fs-1 col-md-7 " to="/home">Start Framework</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col-md-4 " id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                            <Link class="nav-link text-white fs-5 fw-bold active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white fs-5 fw-bold " to="/portfolio">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link text-white fs-5 fw-bold" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                
            </>
        )
    }
}
