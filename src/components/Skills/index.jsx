import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiMongodb, SiMysql } from "react-icons/si"

export default function Skills() {

  const data = [
    {
      title: "ReactJS",
      logo: <FaReact />
    },
    {
      title: "NodeJS",
      logo: <FaNodeJs />
    },
    {
      title: "HTML",
      logo: <FaHtml5 />
    },
    {
      title: "CSS",
      logo: <FaCss3 />
    },
    {
      title: "MongoDB",
      logo: <SiMongodb />
    },
    {
      title: "MySQL",
      logo: <SiMysql />
    },
  ]

  return (
    <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]">
      <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">Sk</span><span className="border-b-2 border-[#353535] py-2">ills</span></div>
      <div className="flex flex-wrap justify-center">
        {
          data.map((item, index) => {
            return (
              <div className="m-2 w-[180px] h-32 flex flex-col items-center justify-center text-[#757575] hover:text-[#fff]" key={index}>
                <div className="text-[70px]">{item.logo}</div>
                <p className="text-[18px]">{item.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
