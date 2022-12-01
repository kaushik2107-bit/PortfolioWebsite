import Navbar from "../Navbar/index"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import emailjs from "emailjs-com"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [success, setSuccess] = useState(false)

  const isValidEmail = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return email.match(regex)
  }

  useEffect(() => {
    setError(false)
    setSuccess(false)
  }, [name, email, subject, message])

  const handleSubmit = () => {
    setError(false)
    setSuccess(false)

    if (name.length && email.length && subject.length && message.length) {

      if (!isValidEmail()) {
        setError(true)
        setErrorMsg("Invalid Email Address")
        return
      }

      const serviceId = import.meta.env.VITE_SERVICE_ID
      const templateId = import.meta.env.VITE_TEMPLATE_ID
      const userId = import.meta.env.VITE_USER_ID

      // console.log(serviceId, templateId, userId)

      const templateParams = {
        name, email, message
      }

      emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

      handleClear()
      setError(false)
      setErrorMsg("")
      setSuccess(true)
      return
    } else {
      setError(true)
      setErrorMsg("Fill all the fields")
      return
    }


  }

  const handleClear = () => {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <div>
      <Navbar option={4} />
      <motion.div className="w-[550px] m-auto max-md:w-[95vw] mt-[100px] opacity-0" animate={{opacity: 1, marginTop: 0}}>
        <div className="w-full h-[100px] text-[#ddd] text-[35px] flex justify-center items-center bg-[#333]">
          Contact Me
        </div>
        <div className="p-2 px-8 pt-8 bg-[#111]">
          <label htmlFor="name" className="text-white text-[18px]">Name</label><br />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full my-[2px] bg-[transparent] border-b-2 border-[#aaa] placeholder:text-[#777] h-[30px] outline-none text-[#bbb] mb-[15px]"
          /><br />

          <label htmlFor="email" className="text-white text-[18px]">Email</label><br />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mt-[2px] bg-[transparent] border-b-2 border-[#aaa] placeholder:text-[#777] h-[30px] outline-none text-[#bbb] mb-[15px]"
          /><br />

          <label htmlFor="subject" className="text-white text-[18px]">Subject</label><br />
          <input
            type="text"
            placeholder="What's the matter"
            name="subject"
            id="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full mt-[2px] bg-[transparent] border-b-2 border-[#aaa] placeholder:text-[#777] h-[30px] outline-none text-[#bbb] mb-[15px]"
          /><br />

          <label htmlFor="content" className="text-white text-[18px]">Message</label><br />
          <textarea
            placeholder="Enter your Message"
            name="content"
            id="content"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full mt-[2px] bg-[transparent] border-b-2 border-[#aaa] placeholder:text-[#777] outline-none text-[#bbb] mb-[15px] resize-none placeholder:text-bottom"
          /><br />

          <div className="flex justify-around max-md:flex-col">
            <input
              type="submit"
              value="Contact Me"
              onClick={handleSubmit}
              className="px-16 py-2 rounded-xl mt-2 mb-6 bg-cyan-700 text-[#bbb] text-[17px] font-semibold cursor-pointer hover:bg-[#eee] hover:text-[#333] max-md:mb-2"
            />
            <input
              type="submit"
              value="Clear Form"
              onClick={handleClear}
              className="px-16 py-2 rounded-xl mt-2 mb-6 bg-[#aaa] text-[#222] text-[17px] font-semibold cursor-pointer hover:bg-[#eee] hover:text-[#333] max-md:mt-0"
            />
          </div>
        </div>
      </motion.div>
      { error && <motion.div className="w-fit min-w-[200px] bg-[#ff4242] text-[#ddd] font-extrabold text-center my-2 rounded-md px-4 p-2 border-2 border-red-500 shadow-2xl shadow-[#000] left-[50%] translate-x-[-50%] absolute opacity-0" animate={{opacity: 1, bottom: "10px"}} exit={{opacity: 0}}>{errorMsg}</motion.div>}
      { success && <motion.div className="w-fit min-w-[200px] bg-green-500 text-[#ddd] font-extrabold text-center my-2 rounded-md px-4 p-2 border-2 border-green-500 shadow-2xl shadow-[#000] left-[50%] translate-x-[-50%] absolute opacity-0" animate={{opacity: 1, bottom: "10px"}}>Message Sent Successfully</motion.div>}
    </div>
  )
}
