import profile from "../../assets/profile.jpg"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"

export default function Main() {
  return (
    <motion.div className="flex justify-center items-center w-[100vw] h-[calc(100vh-100px)] gap-[80px] mt-[100px] max-md:flex-col max-md:h-auto" animate={{marginTop: 0, opacity: 1}}>
      <div className="w-[300px] h-[300px] bg-contain bg-center rounded-[50%] border-[20px] border-[#333] max-md:mt-[20px]" style={{backgroundImage: `url(${profile})`, boxShadow: "0 0 20px 10px #111", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} />
      <div className="content w-[450px] h-auto max-md:w-[90vw]">
        <p className="text-[#7d7d7d]">
          <Typewriter
            words={["Web Developer", "UI Designer", "Competitve Programmer"]}
            loop={0}
            cursor
            cursorStyle="_"
          />&nbsp;
        </p>
        <p className="text-[#fefefe] font-extrabold text-[40px]">
          <Typewriter
            words={["Kaushik Bhowmick"]}
            cursor
            cursorStyle="|"
          />
        </p>
        <p className="text-[#d0d0d0] font-normal text-[14px]">
          Hello, I am a creative designer and developer that's passionate about building digital experiences that nurture community, inclusivity and knowledge.
        </p>
        <div className="py-[30px] flex gap-[20px]">
          <a href="https://drive.google.com/file/d/1-vS7v0QUk1XjT6svnQyczhHuQqicxJ7e/view?usp=sharing" target="_blank"><div className="border-2 border-cyan-700 hover:bg-cyan-700 transition-colors delay-75 cursor-pointer p-2 rounded-[30px] px-[20px] text-[15px] text-white bg-[#333]">Download Resume</div></a>
          <Link to="/contact"><div className="border-2 border-white-700 hover:bg-white hover:text-[#333] transition-colors delay-75 cursor-pointer p-2 rounded-[30px] px-[20px] text-[15px] text-white bg-[#333]">Contact Me</div></Link>
        </div>
      </div>
    </motion.div>
  )
}
