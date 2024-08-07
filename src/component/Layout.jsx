import React, { Component } from 'react'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export class Layout extends Component {
    
    render() {
        return (
            <>
               <Navbar /> 

               <Outlet />
               
               <Footer />
            </>
        )
    }
}
