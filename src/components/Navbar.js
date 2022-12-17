import logo from "../shared/logo.svg"
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const { showmodal, setShowModal } = useGlobalContext();

    return ( 
        <>
            <main className="navbar">
                    <aside>
                        <img src={logo} alt="logo" />
                    </aside>
                    <aside>
                    
                                    <ul className="links">
                                        <Link to="/" style={{ textDecoration: 'none',color: 'inherit' }}> <li>00 HOME</li> </Link>
                                        <Link to="/destination"  style={{ textDecoration: 'none',color: 'inherit' }}> <li>01 DESTINATION</li> </Link>
                                        <Link to="/crew"  style={{ textDecoration: 'none',color: 'inherit' }}> <li>03 CREW</li> </Link>
                                        <Link to="/technology"  style={{ textDecoration: 'none',color: 'inherit' }}> <li>04 TECHNOLOGY</li> </Link>
                                    </ul>
                    
                    </aside>
            </main>
            <section className="sidebar">
                {showmodal ?  <AiOutlineClose className="hamburgar" onClick={()=>setShowModal(!showmodal)}  style={{color: "#262421"}}/> :
                <GiHamburgerMenu className="hamburgar" onClick={()=>setShowModal(!showmodal)}/>
                }
                
                {showmodal && 
                <div className="sidebar-container">
                     <ul className="sidebar-links">
                        <Link to="/"  style={{ textDecoration: 'none',color: 'inherit' }}> <li onClick={()=>setShowModal(!showmodal)}> HOME</li> </Link>
                        <Link to="/destination"  style={{ textDecoration: 'none',color: 'inherit' }}> <li onClick={()=>setShowModal(!showmodal)}> DESTINATION</li> </Link>
                        <Link to="/crew"  style={{ textDecoration: 'none',color: 'inherit' }}> <li onClick={()=>setShowModal(!showmodal)}> CREW</li> </Link>
                        <Link to="/technology"  style={{ textDecoration: 'none',color: 'inherit' }}> <li onClick={()=>setShowModal(!showmodal)}> TECHNOLOGY</li> </Link>
                    </ul>
                </div>
                }
            </section>
        </>
     );
}
 
export default Navbar;