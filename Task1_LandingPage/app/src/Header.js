import { GiAbstract013 } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const onMenuBtnClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center space-x-24 justify-between md:justify-start">
                
                {/* Logo */}
                <div className="flex text-2xl font-bold">
                    <GiAbstract013 className="me-2" size="32" />
                    Logo
                </div>

                {/* Menu Items*/}
                <div className="hidden space-x-16 md:flex">
                    <MenuItem text="Home" />
                    <MenuItem text="Info" />
                    <MenuItem text="Offer" />
                    <MenuItem text="Contact" />
                </div>

                {/* Search Bar */}
                <div className="hidden relative lg:block">
                    <input type="text" className="p-2 pl-8 rounded-full border shadow-lg border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent" placeholder="Search" />
                    <AiOutlineSearch className="w-4 h-4 absolute left-2.5 top-3.5" />
                </div>

                {/* Hamburger Icon */}
                <button onClick={onMenuBtnClick} className={`block hamburger md:hidden ${isOpen && 'open'}`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div className={`absolute flex-col items-center self-end 
                py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'flex' : 'hidden'}`}>
                    <MenuItem text="Home" />
                    <MenuItem text="Info" />
                    <MenuItem text="Offer" />
                    <MenuItem text="Contact" />
                </div>
            </div>
        </nav>
    );
};

const MenuItem = ({ text, href = "#" }) => (
    <a className="menu-item" href={href}>{text}</a>
);

export default Header;