import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"

const Header = () => {
    return (
        <div className="z-10">
            <div className="">
                <nav className="flex items-center md:justify-between justify-center">
                    <div>
                        <img className="md:block hidden w-48" src={Logo} alt="" />
                    </div>
                    <ul className="flex text-xl gap-5 font-medium">
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/donation'}><li>Donation</li></NavLink>
                        <NavLink><li>Statistics</li></NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;