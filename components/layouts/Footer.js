import {BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-gray-200 p-10 font-roboto font-light">
        <h3 className="text-4xl mb-5 font-normal text-slate-200 text-center">Clutchd</h3>
        
        <div className="flex justify-around items-center flex-wrap">
            <div>
                <h4 className="text-2xl mb-5 font-normal text-slate-200 ">Contact</h4>
                <ul>
                    <li className="my-2"><span className="font-normal">Phone: </span>555-555-5555</li>
                    <li className="my-2"><span className="font-normal">Email: </span>clutchd@email.com</li>
                    <li className="my-2"><span className="font-normal">PO Box: </span>123 Street Street, Windsor, ON N9N 9N9</li>
                </ul>
            </div>
            <div>
                <h4 className="text-2xl mb-5 font-normal text-slate-200 ">Socials</h4>
                <ul>
                    <li className="my-2"><span className="font-normal"><BsTwitter className="inline-block text-blue-400"/> Twitter: </span>@clutchd</li>
                    <li className="my-2"><span className="font-normal"><BsFacebook className="inline-block text-blue-700"/> Facebook: </span>Clutchd</li>
                    <li className="my-2"><span className="font-normal"><BsInstagram className="inline-block text-fuchsia-500"/> Instagram: </span>@clutchd</li>
                </ul>
            </div>
        </div>
        <p className="text-right font-roboto font-thin -mb-10">Copyright © 2022 Clutchd</p>
    </div>
  )
}
export default Footer