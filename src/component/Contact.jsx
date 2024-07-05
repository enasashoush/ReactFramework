import { Component } from "react";

export class Contact extends Component
{
    render()
    {
        return <>
        <div className="text-center main-text mt-5">
            <h1 className="fw-bold">CONATCT SECTION</h1>
            <div className="d-flex justify-content-center">
                <div className="underline-2 align-self-center"></div>
                <i class="fa-solid fa-star px-2"></i>
                <div className="underline-2 align-self-center"></div>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center flex-column gap-1 mt-5">
            <input class="form-control border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded w-50" type="text" placeholder="User Name"/>
            <input class="form-control border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded w-50" type="text" placeholder="User Age"/>
            <input class="form-control border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded w-50" type="email" placeholder="User Email"/>
            <input class="form-control border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded w-50" type="password"  placeholder="User Password"/>

            <button className="btn sec-main-color text-white mb-5">Send Message</button>
        </div>
        
        </>
    }
}