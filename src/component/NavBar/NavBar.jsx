import { useState } from "react";
import Link from "../Limk/Link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open,setOpen]=useState()

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Our Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/profile", name: "User Profile" }
      ];
      
      
      
    return (
        <nav>
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <IoMdClose></IoMdClose> : <IoMenu className="text-xl "></IoMenu>
                }
            
            </div>
           <ul className="md:flex">
           {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;