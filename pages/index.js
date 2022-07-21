import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const heroImageSrc = '/images/hero.jpg'
  return (
    <>
    <div className="bg-transparent">
    <div className="h-screen w-full relative -z-10 bg-transparent">
      <Image
        src={heroImageSrc}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="cover" // change to suit your needs
        className="-z-20 max-w-full" // just an example
      />
    </div>
    <cite className="absolute bottom-0 right-0 text-gray-100 lg:text-gray-800">Photo by <a href="https://unsplash.com/@visualsbyroyalz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anastase Maragos</a> on <a href="https://unsplash.com/s/photos/car-meet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></cite>
    <div className="absolute left-0 top-1/4 right-0 bottom-1/2 flex flex-col justify-center items-center">
      <div className="">
        
        {/* <Image src="/images/logo.jpg" width="70" height="70" alt="logo" className="hidden" ></Image> */}
        <h1 className="text-7xl text-center font-spaceRanger c-text-shadow-lg  text-gray-900 md:text-9xl">CLUTCHD</h1>
        <p className="
        font-roboto 
        font-light
        text-2xl
        md:text-4xl 
        text-gray-800 
        c-text-shadow-sm

        text-center 
        md:text-gray-800
        ">Real Lifestyle. True Passion</p>
        <div className="call-to-action flex flex-row justify-around items-center mt-5">
          <button className="block rounded py-3 mx-5 bg-gray-900 text-lg md:text-xl font-roboto text-gray-100 uppercase tracking-wider font-light hover:bg-cyan-600 w-full">Contact</button>
          <button className="block rounded py-3 mx-5 bg-gray-900 text-lg md:text-xl font-roboto text-gray-100 uppercase tracking-wider font-light hover:bg-cyan-600 w-full">Shop</button>
        </div>
      </div>
      
    </div>
    </div>
    
    </>
    
  )
}
