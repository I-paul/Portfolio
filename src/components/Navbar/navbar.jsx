import './navbar.css';
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    // const [hamburger,setHamburger] = useState(false);

    return (
        <motion.nav className='sticky top-0 z-50 bg-background/75 backdrop-blur-sm px-6 py-8' initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.7 }}>
            <div className="nav-links flex max-w-full items-center text-[#625b5b] justify-around">
                <motion.ul className='flex justify-center items-center gap-8 text-lg font-semibold' >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Blog">Blog</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </motion.ul>
            </div>
        </motion.nav>
    )
}

export default Navbar;