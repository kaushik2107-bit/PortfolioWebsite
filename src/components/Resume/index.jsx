import Navbar from "../Navbar/index"
import Footer from "../Footer/index"
import Education from "../Education/index"
import AddSkills from "../AddSkills/index"
import Achievements from "../Achievements/index"
import { motion } from "framer-motion"

export default function Resume() {
  return (
    <div>
      <Navbar option={2} />
      <motion.div className="w-screen bg-[#333] h-[200px] flex items-center justify-center font-extrabold text-[60px] text-[#eee] mt-[100px] opacity-0" animate={{opacity: 1, marginTop: 0}}>
        RESUME
      </motion.div>
      <Education />
      <AddSkills />
      <Achievements />
      <Footer />
    </div>
  )
}
