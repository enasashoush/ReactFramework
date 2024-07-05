import { Component } from "react";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Portfolio } from "./component/Portfolio";
import { Contact } from "./component/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./component/Layout";

const router = createBrowserRouter([

  {path:'', element: <Layout /> , children: [

  {path:'/',element:<Home />},
  {path:'home',element:<Home />},
  {path:'about',element:<About />},
  {path:'portfolio',element:<Portfolio />},
  {path:'contact',element:<Contact />},
  {path:'*',element:<h1 className="d-flex vh-100 justify-content-center align-items-center">Not Found<br/> Error 404</h1>},

  
  ]}

  
  


])
export class App extends Component
{

  render()
  {

    return <>

    <RouterProvider router={router} />

    </>
  }

}

