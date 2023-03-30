import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";

const NavLinks = ({toggleSidebar}) => {
    console.log('links', links);
  return (
    <div className="nav-links">
              {links && links.map((link) => {  
                const {text,path,icon, id} = link;
                return <NavLink to={path} key={id} onClick={toggleSidebar} end
                className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  <span className="icon">{icon}</span>
                  <div className="nav-links-text">{text}</div>
                </NavLink>
              })}
            </div>
  )
}
export default NavLinks