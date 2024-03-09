import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; 
import {link} from "../assets";


const About = () => {
  return (
    <>


        <div className="w-full flex flex-col lg:flex-row lg:justify-between">    
      <motion.div variants={textVariant()} className="">
      <p className={styles.sectionSubText}
      >About</p>
      <h2 className={styles.sectionHeadText}
      >Overview</h2>
        <p 
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I specialize as a Fullstack Developer. My skill set spans a diverse range of technologies, including Remix, Node.js, Express, PHP, MongoDB, and MySQL. I am always learning and trying new things to make sure I can build the best websites and apps possible.
 </p>

 <div className="mt-5">
    <div>
        <h2 className=" font-bold">Contact</h2>
        <div className="flex items-center justify-between lg:w-1/2 mt-2">
        <p className="text-secondary">Email :</p>
        <p className="text-white">parajuli.ajay@hotmail.com</p>
        </div>

        <div className="flex items-center justify-between lg:w-1/2 mt-2">
        <p className="text-secondary">Phone :</p>
        <p className="">+4571630205</p>
        </div>

        <h2 className=" font-bold mt-2">Connect on linkedin</h2>
        <div className="flex items-center justify-between lg:w-1/2 mt-2">
        <p className="text-secondary">linkedin :</p>
        <a href="https://www.linkedin.com/in/prawal-parajuli-437528205/" target="_blank" rel="noreferrer"><img className="w-10" src={link}></img></a>
        </div>

     

    </div>
    <h2 className=" font-bold mt-5">Hobbies</h2>
    <ul className="flex w-36 flex-col md:flex-row md:w-full md:items-center ">
        <li className="text-secondary mt-2 md:mr-4  bg-blue-900 p-1 rounded ">#Pure Gym</li>
        <li className="text-secondary mt-2  md:mr-4  bg-blue-900 p-1 rounded">#Guitar</li>
        <li className="text-secondary mt-2  md:mr-4 bg-blue-900 p-1 rounded">#Coding for fun</li>
        <li className="text-secondary mt-2  md:mr-4 bg-blue-900 p-1 rounded">#Gaming</li>
    </ul>
 </div>

 <div className="mt-10">
    <button className=" bg-orange-700 p-2 rounded cursor-pointer">Download CV</button>
 </div>

    </motion.div>

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")