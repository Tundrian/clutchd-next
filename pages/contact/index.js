import { useState } from 'react'

const index = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleClick =() => {
    // if(!(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ig.test(number))){
    //   console.log('number in incorrect format')
    // }
  }
    return (
      <div className="py-11 bg-gradient-to-b from-gray-800/10 to-gray-100/100 min-h-[100vh]">
        <h1 className="mt-20 text-center text-4xl md:text-6xl font-roboto text-gray-800">Contact</h1>

        <form className="flex justify-center items-around flex-col font-light text-2xl font-roboto px-10">
          <label className="mt-5 text-cyan-600">Name</label>
          <input className="border rounded-xl py-2 mb-5 mt-1 px-5" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

          <label className="mt-5 text-cyan-600">Number</label>
          <input className="border rounded-xl py-2 mb-5 mt-1 px-5" type="tel" value={number} onChange={(e) => setNumber(e.target.value)} />

          <label className="mt-5 text-cyan-600">Email</label>
          <input className="border rounded-xl py-2 mb-5 mt-1 px-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label className="mt-5 text-cyan-600">Message</label>
          <textarea className="border rounded-xl py-2 mb-5 mt-1 h-48 overflow-auto px-5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button type="submit" onSubmit={() => handleClick}className="block w-full py-3 px-6 rounded-xl bg-cyan-600 transition hover:bg-cyan-500 focus:bg-cyan-700 hover:cursor-pointer active:bg-cyan-800 text-gray-100">Submit</button>
        </form>
      </div>
    )
  }
  export default index