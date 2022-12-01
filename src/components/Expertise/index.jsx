import { FaMobileAlt, FaDesktop, FaCode, FaServer } from "react-icons/fa"

export default function Expertise() {
  const data = [
    {
      logo: <FaMobileAlt />,
      title: "Frontend Web Development",
      description: "I am a passionate frontend web developer, because the first thing that users see while visiting a website is not the functionality it is the user interface. In any project, the UI plays an important role of bringing attention and my job is to incorporate that."
    },
    {
      logo: <FaServer />,
      title: "Backend Web Development",
      description: "In a website, the data is everything. While developing various projects, the flow of data ensures the functionality of the website running smoothly. And I am very passionate about the logical and critical thinking of it and making it faster and more secure."
    },
    {
      logo: <FaDesktop />,
      title: "UI/UX",
      description: "Figma along with some creative thinking can make your website look elegant. And also help the frontend developer to follow a certain path and build a structure of site easily. "
    },
    {
      logo: <FaCode />,
      title: "Competitive Programming",
      description: "I am passionate about competitive programming. I participate in the CodeForces and CodeChef contests regularly. Along with that, I also participate in Google Kickstart."
    },

  ]

  return (
    <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]">
      <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">Wh</span><span className="border-b-2 border-[#353535] py-2">at I Do</span></div>
      <div className="grid grid-cols-2 gap-16 my-[30px] max-md:grid-cols-1">
        {
          data.map((item, index) => {
            return (
              <div className="flex" key={index}>
                <div className="text-[40px] text-cyan-700 px-4 max-md:pl-[0]">{item.logo}</div>
                <div className="">
                  <p className="text-[16px] text-white font-semibold">{item.title}</p>
                  <p className="my-2 text-[#ccc] text-[13px]">{item.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
