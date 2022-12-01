import image from "../../assets/name_logo.png"
import HamburgerMenu from "react-hamburger-menu"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Navbar({ option }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  const Hamburger = () => {
    return (
      <motion.div className="absolute w-[100vw] h-[100vh] bg-[#223] left-0 top-0 flex items-center justify-center md:hidden" animate={open ? {opacity: 1} : {opacity: 0, display: "none"}}>
        <ul className="text-[#6b6b6b]">
          <Link to="/" ><li className="hover:text-[#eee] cursor-pointer w-[70vw] h-[50px] flex items-center justify-center border-b-2 border-[#333] text-[#6b6b6b]" style={option == 1 ? {color: "#eee"} : {} }>About</li></Link>
          <Link to="/resume" ><li className="hover:text-[#eee] cursor-pointer w-[70vw] h-[50px] flex items-center justify-center border-b-2 border-[#333] text-[#6b6b6b]" style={option == 2 ? {color: "#eee"} : {} }>Resume</li></Link>
          <Link to="/projects" ><li className="hover:text-[#eee] cursor-pointer w-[70vw] h-[50px] flex items-center justify-center border-b-2 border-[#333] text-[#6b6b6b]" style={option == 3 ? {color: "#eee"} : {} }>Projects</li></Link>
          <Link to="/contact" ><li className="hover:text-[#eee] cursor-pointer w-[70vw] h-[50px] flex items-center justify-center border-b-2 border-[#333] text-[#6b6b6b]" style={option == 4 ? {color: "#eee"} : {} }>Contact</li></Link>
        </ul>
      </motion.div>
    )
  }

  return (
    <div className="w-[100vw] h-[100px] flex justify-between px-4">
      <div className="w-[350px] text-[#f5f5f5] justify-center items-center flex text-[22px] font-bold max-md:w-auto max-md:px-4">
        <div className="w-[50px] h-[50px] bg-center bg-cover" style={{backgroundImage: `url(${image})`}} />
        <p className="max-md:hidden">&nbsp;&nbsp;Kaushik&nbsp;<span className="font-normal">Bhowmick</span></p>
      </div>
      <ul className="flex-1 flex items-center justify-end gap-[40px] text-[#6b6b6b] pr-[30px] max-md:hidden">
        <Link to="/" ><li className="hover:text-[#eee] cursor-pointer" style={option == 1 ? {color: "#eee"} : {} }>About</li></Link>
        <Link to="/resume" ><li className="hover:text-[#eee] cursor-pointer" style={option == 2 ? {color: "#eee"} : {} }>Resume</li></Link>
        <Link to="/projects" ><li className="hover:text-[#eee] cursor-pointer" style={option == 3 ? {color: "#eee"} : {} }>Projects</li></Link>
        <Link to="/contact" ><li className="hover:text-[#eee] cursor-pointer" style={option == 4 ? {color: "#eee"} : {} }>Contact</li></Link>
      </ul>
      <div className="flex items-center justify-center hidden max-md:block cursor-pointer">
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
          className="mt-[90%] z-10"
        />
      </div>
      <Hamburger />
    </div>
  )
}
