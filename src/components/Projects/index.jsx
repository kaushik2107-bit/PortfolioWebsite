import Navbar from "../Navbar/index"
import { motion } from "framer-motion"
import Footer from "../Footer/index"

export default function Projects() {
  const data = [
    {
      title: "Chat Application",
      websiteLink: "https://chat-room-mern.herokuapp.com",
      githubLink: "https://github.com/kaushik2107-bit/live-chat-app",
      description: "A chat application build in MERN stack which can be used to send messages to each other. In this project I learned to use websockets and nitty-gritty stuffs about other frameworks I used.",
      techUsed: "ReactJS, NodeJS, MongoDB, Socket.io",
      status: "Completed"
    },
    {
      title: "Hospital Management Application",
      websiteLink: "N/A",
      githubLink: "https://github.com/kaushik2107-bit/mern-hospital-app",
      description: "This web application can be used for managing appointments with the doctors of the hospital. In addition to that, the patient can connect with the doctor directly using the chat feature and also seek advice fast and efficiently.",
      techUsed: "ReactJS, NodeJS, MongoDB, Socket.io",
      status: "Working"
    }
  ]
  return (
    <div>
      <Navbar option={3} />
      <motion.div className="w-screen bg-[#333] h-[200px] flex items-center justify-center font-extrabold text-[60px] text-[#eee] mt-[100px] opacity-0" animate={{opacity: 1, marginTop: 0}}>
        PROJECTS
      </motion.div>
      {data.map((item, index) => {
        return (
          <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]" key={index}>
            <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">{item.title.slice(0, 6)}</span><span className="border-b-2 border-[#353535] py-2">{item.title.slice(6)}</span></div>
            <div className="">
              <div className="text-[#aaa] m-2">{item.description}</div>
              <div className="text-[#999] m-2 text-[14px]"><span className="text-[#ddd] font-semibold">Check it out:</span> <a href={item.websiteLink === "N/A" ? "#" : item.websiteLink}>{item.websiteLink}</a></div>
              <div className="text-[#999] m-2 text-[14px]"><span className="text-[#ddd] font-semibold">Tech Used: </span>{item.techUsed}</div>
              <div className="text-[#999] m-2 text-[14px]"><span className="text-[#ddd] font-semibold">Github: </span> <a href={item.githubLink === "N/A" ? "#" : item.githubLink}>{item.githubLink}</a></div>
              <p className="p-2 bg-cyan-700 w-fit text-[#eee] rounded-3xl px-4" style={item.status === "Working" ? {backgroundColor: "#F29339"} : {}}>{item.status}</p>
            </div>
          </div>
        )
      })
      }
      <Footer />
    </div>
  )
}
