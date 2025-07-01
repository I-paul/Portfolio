import './socials.css';
import profile from '../../assets/profile.jpg';
import { motion } from "framer-motion";

const Socials = () => {
    return (
        <motion.div className='socials grid grid-cols-2 mx-15 my-8 py-6 px-8 justify-center ' >
            <motion.div className=" p-12 gap-4">
                <motion.h1 className="text-white text-5xl font-bold m-3" >K ISRAEL PAUL</motion.h1>
                <motion.h1 className="text-white text-3xl font-bold m-3 font-serif " >Full-Stack Developer</motion.h1>
            </motion.div>
            <motion.div className="profile p-20 m-10 flex justify-end items-start">
                <motion.img src={profile} alt="Profile" className='overflow-hidden w-60 h-full' />
            </motion.div>   
        </motion.div>
    )
}

export default Socials;