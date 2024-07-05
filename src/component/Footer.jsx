import React, { Component } from 'react'

export class Footer extends Component {
    
    render() {
        return (
            <>
            <div className="main-color d-flex justify-content-between text-center py-5 text-white ">
                <div className="col-md-4 col-sm-12 ">
                    <h3>Location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <h3>AROUND THE WEB</h3>
                    <div className="d-flex justify-content-center gap-3">
                    <i className="border rounded-5 p-2 fa-brands fa-facebook"></i>
                    <i className="border rounded-5 p-2 fa-brands fa-twitter"></i>
                    <i className="border rounded-5 p-2 fa-brands fa-linkedin"></i>
                    <i className="border rounded-5 p-2 fa-solid fa-globe"></i>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 ">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>

            </div>
            <div className="footer-color py-3 text-white text-center">

                <p>Copyright © Your Website 2021</p>

            </div>
            </>
        )
    }
}
