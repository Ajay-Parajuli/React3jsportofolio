
import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"; 


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}
      >Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 0.1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I specialize as a Fullstack Developer. My skill set spans a diverse range of technologies, including Remix, Node.js, Express, PHP, MongoDB, and MySQL. I am always learning and trying new things to make sure I can build the best websites and apps possible </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")