
export default function AddSkills() {
  const data = [
    {
      title: "C++",
      progress: "80%"
    },
    {
      title: "ReactJS",
      progress: "75%"
    },
    {
      title: "UI Design",
      progress: "70%"
    },
    {
      title: "HTML/CSS",
      progress: "99%"
    },
    {
      title: "MySQL",
      progress: "50%"
    },
    {
      title: "NodeJS",
      progress: "80%"
    },
    {
      title: "MongoDB",
      progress: "65%"
    },
    {
      title: "PHP",
      progress: "60%"
    },
  ]
  return (
    <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]">
      <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">Sk</span><span className="border-b-2 border-[#353535] py-2">ills</span></div>
      <div className="grid grid-cols-2 gap-8 my-[30px] max-md:grid-cols-1">
        {
          data.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="flex justify-between items-center">
                  <p className="text-[15px] text-[#bbb] font-extrabold">{item.title}</p>
                  <p className="text-[12px] text-[#888] font-semibold">{item.progress}</p>
                </div>
                <div className="p-[2px] border-2 border-[#777] rounded-2xl">
                  <div className="h-2 rounded-2xl" style={{background: `linear-gradient(to right, #0e7490 ${item.progress}, transparent 0%)`}} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
