import { Component } from "react";
import img2 from '../image/poert1.png';
import img3 from '../image/port2.png';
import img4 from '../image/port3.png';


export class Portfolio extends Component
{
    render()
    {
        return <>
        
        <div className="text-center main-text my-5">
            <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>
            <div className="d-flex justify-content-center">
                <div className="underline-2 align-self-center"></div>
                <i class="fa-solid fa-star px-2"></i>
                <div className="underline-2 align-self-center"></div>
            </div>
        </div>

        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4  pb-5">
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img2} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img3} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img4} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img2} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img3} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card h-100 ">
                       <img src={img4} class=" card-img-top" />
                       <div className="overlay">
                        <div className="icon d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus text-white  fs-lg"></i>
                        </div>
                        
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
        
        
        </>
    }
}