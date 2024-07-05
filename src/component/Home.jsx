import { Component } from "react";
import img1 from '../image/avataaars.svg';

export class Home extends Component
{
    render(){
        return <>
        
        <div className="sec-main-color text-white d-flex justify-content-center align-items-center flex-column gap-4">
              
            <img className="w-25" src={img1} />
            <h1>Start Framework</h1>
            <div className="d-flex">
                <div className="underline align-self-center"></div>
                <i class="fa-solid fa-star text-white px-2"></i>
                <div className="underline align-self-center"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>


        </>
    }
}
