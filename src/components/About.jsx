
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; 
import { profphoto } from "../assets";


const About = () => {
  return (
    <>
        <div className="flex w-full ">    
      <motion.div variants={textVariant()} className="w-[50%]">
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}
      >Overview</h2>
        <p 
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I specialize as a Fullstack Developer. My skill set spans a diverse range of technologies, including Remix, Node.js, Express, PHP, MongoDB, and MySQL. I am always learning and trying new things to make sure I can build the best websites and apps possible.
 </p>
 
    </motion.div>
    <motion.div variants={textVariant()} className="w-[50%]">
    <img src={profphoto} alt="profileimg" className="w-[60%] object-cover float-right" />
    </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")