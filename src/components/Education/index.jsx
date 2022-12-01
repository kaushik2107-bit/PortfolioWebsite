

export default function Education() {
  const data = [
    {
      year: "2020",
      college: "Jay International School",
      grade: "Percentage 95.4%",
      place: "Rajkot, India",
      degree: "Senior Secondary (CBSE Board)"
    },
    {
      year: "2021 - present",
      college: "Sardar Vallbhbhai National Institute of Technology",
      grade: "CGPA - 9.43",
      place: "Surat, India",
      degree: "B.Tech in Computer Science and Engineering"
    },
    
  ]

  return (
    <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]">
      <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">Edu</span><span className="border-b-2 border-[#353535] py-2">cation</span></div>
      <div className="grid grid-cols-2 gap-16 my-[30px] max-md:grid-cols-1">
        {
          data.map((item, index) => {
            return (
              <div className="border-b-[1px] border-l-[1px] border-b-[#333] border-l-[#333] p-2" key={index}>
                <div className="flex items-center justify-between">
                  <div className="bg-cyan-700 text-[#eee] font-semibold w-fit m-1 p-1 px-4 rounded-2xl -ml-6">{item.year}</div>
                  <p className="flex-1 text-[#999] text-[14px] font-normal truncate text-ellipsis overflow-hidden">{item.college}</p>
                  <div className="text-[#777] text-[12px]">{item.place}</div>
                </div>
                <div className="px-2 mt-1">
                  <div className="font-bold text-[#bbb]">{item.degree}</div>
                  <div className="text-[#888] text-[12px]">{item.grade}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
