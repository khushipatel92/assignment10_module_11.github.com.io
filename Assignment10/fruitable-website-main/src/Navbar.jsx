import React from "react";
import { MDBNavbar,MDBContainer,MDBRow } from "mdb-react-ui-kit";
import { FaSearchengin , FaBagShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";

function Navbar()
{
    return(
        <>
           <MDBNavbar>
            <MDBContainer>
             <MDBRow>
                  <div className="col-md-3">
                    <a href="#" className="logo">Fruitables</a>
                  </div>

                  
                  <div className="col-md-9 ">
                    <ul className="nav">
                        <li><a href="/" style={{color:"rgb(129, 196, 8)"}}>Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/shop-details">Shop Detail</a></li>
                        <li><a href="/pages">Pages</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><FaSearchengin className="search"/></li>
                    <li><FaBagShopping className="fs-2 icon"/></li>
                    <li><IoPerson className=" fs-2 icon"/></li>
                    </ul>
                    </div>

                
                   </MDBRow>
            </MDBContainer>
           </MDBNavbar>
        </>
    )
}
export default Navbar