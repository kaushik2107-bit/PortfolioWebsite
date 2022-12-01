import { FaTrophy } from "react-icons/fa"

export default function Achievements() {
  const data = [
    {
      rank: 2,
      contest: "ACM Inception 7.0",
      organization: "ACM, NIT SURAT"
    },
    {
      rank: 5,
      contest: "ACM Summer Challenge",
      organization: "ACM, NIT Surat"
    },
    {
      rank: 15,
      contest: "ACM Epiphany 12.0",
      organization: "ACM, NIT Surat"
    }
  ]
  return (
    <div className="w-[100vw] p-[20px] px-[40px] max-md:px-[20px]">
      <div className="text-[23px] font-[500] text-white w-fit pb-2"><span className="border-b-2 border-cyan-500 py-2">Achi</span><span className="border-b-2 border-[#353535] py-2">evements</span></div>
      <div className="grid grid-cols-3 gap-8 my-[30px] max-md:grid-cols-1">
        {
          data.map((item, index) => {
            return (
              <div className="p-4 bg-[#333] rounded-3xl" key={index}>
                <p className="text-[#ddd] text-[16px] font-semibold">{item.contest}</p>
                <p className="flex items-center text-[#999] text-[14px] font-semibold">Rank: {item.rank} &nbsp; <FaTrophy color="#FFD700" /></p>
                <p className="text-[#ddd] text-[14px]">{item.organization}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
