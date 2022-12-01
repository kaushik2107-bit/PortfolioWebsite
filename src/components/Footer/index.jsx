import { FaTwitter, FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="w-[100vw] h-[70px] bg-[#323232] flex text-[14px] max-md:flex-col max-md:h-auto">
      <ul className="flex justify-center items-center gap-8 text-[#bbb] px-8 max-md:py-4">
        <a href="https://twitter.com/Kaushik21072002" target="_blank"><li className="flex items-center gap-2 cursor-pointer hover:text-white"><FaTwitter />Twitter</li></a>
        <a href="https://github.com/kaushik2107-bit" target="_blank"><li className="flex items-center gap-2 cursor-pointer hover:text-white"><FaGithub />GitHub</li></a>
        <a href="https://www.linkedin.com/in/kaushik-bhowmick-3064a4155/" target="_blank"><li className="flex items-center gap-2 cursor-pointer hover:text-white"><FaLinkedin />LinkedIn</li></a>
      </ul>
      <div className="flex flex-1 justify-end items-center gap-8 text-[#bbb] px-8 max-md:items-center max-md:justify-center max-md:pb-2">
        <p className="flex items-center gap-2 text-[12px] text-[#ccc]"><FaCopyright />2022 All rights reserved</p>
      </div>
    </div>
  )
}
