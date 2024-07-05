import { Component } from "react";

export class About extends Component
{
    render()
    {
        return <>
        <div className="sec-main-color text-white py-5">
        
        <div className="text-center">
            <h1 className="fw-bold">ABOUT COMPONENT</h1>
            <div className="d-flex justify-content-center">
                <div className="underline align-self-center"></div>
                <i class="fa-solid fa-star text-white px-2"></i>
                <div className="underline align-self-center"></div>
            </div>
        </div>
        <div className="d-flex p-5 mx-5  ">
            <div className="col-md-6 col-sm-12">

                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>
            <div className="col-md-6 mx-5 col-sm-12" >
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>
        </div>

        </div>
        </>
    }
}