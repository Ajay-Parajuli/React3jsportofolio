
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; 
import { profphoto } from "../assets";


const About = () => {
  return (
    <>
        <div className="flex w-full">    
      <motion.div variants={textVariant()} className="w-[50%]">
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}
      >Overview</h2>
        <p 
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I specialize as a Fullstack Developer. My skill set spans a diverse range of technologies, including Remix, Node.js, Express, PHP, MongoDB, and MySQL. I am always learning and trying new things to make sure I can build the best websites and apps possible.
 </p>

 <div className="mt-5">
    <div>
        <h2 className=" font-bold">Contact</h2>
        <div className="flex items-center justify-between mt-2">
        <p className="text-secondary">Email :</p>
        <p className="text-white">parajuli.ajay@hotmail.com</p>
        </div>

        <div className="flex items-center justify-between mt-2">
        <p className="text-secondary">Phone :</p>
        <p className="">+4571630205</p>
        </div>

    </div>
    <h2 className=" font-bold mt-5">Hobbies</h2>
    <ul className="flex justify-between">
        <li className="text-secondary mt-2  bg-blue-900 p-1 rounded ">#Pure Gym</li>
        <li className="text-secondary mt-2  bg-blue-900 p-1 rounded">#Guitar</li>
        <li className="text-secondary mt-2  bg-blue-900 p-1 rounded">#Coding for fun</li>
        <li className="text-secondary mt-2  bg-blue-900 p-1 rounded">#Gaming</li>
    </ul>
 </div>

 <div className="mt-10">
    <button className=" bg-orange-700 p-2 rounded cursor-pointer">Download CV</button>
 </div>

    </motion.div>
    <motion.div variants={textVariant()} className="w-[50%] items-center flex justify-center">
    <img src={profphoto} alt="profileimg" className="w-[60%] object-cover" />
    </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")