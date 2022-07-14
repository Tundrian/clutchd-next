import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const heroImageSrc = '/images/hero.jpg'
  return (
    <>
    <div className="bg-gradient-to-b from-gray-800/50 to-gray-100/0 z-0">
    <div className="h-screen w-screen relative -z-10 ">
      <Image
        src={heroImageSrc}
        alt="Picture of the author"
        layout="fill" // required
        objectFit="cover" // change to suit your needs
        className="-z-20 " // just an example
      />
    </div>
    <cite className="absolute bottom-0 right-0">Photo by <a href="https://unsplash.com/@visualsbyroyalz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anastase Maragos</a> on <a href="https://unsplash.com/s/photos/car-meet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></cite>
    <div className="absolute left-0 top-1/4 right-0 bottom-1/2 flex flex-col justify-center items-center">
      <div className="">
        
        <h1 className="text-8xl font-roboto c-text-shadow-lg"><Image src="/images/logo.jpg" width="70" height="70" alt="logo"></Image>CLUTCHD</h1>
        <p className="font-roboto font-light text-4xl text-gray-900 c-text-shadow-md text-center">Real Lifestyle. True Passion</p>
        <div className="call-to-action flex flex-row justify-around items-center mt-5">
          <button className="block rounded py-3 mx-5 bg-gray-900 text-xl font-roboto text-gray-100 uppercase tracking-wider font-light hover:bg-cyan-600 w-full">Contact</button>
          <button className="block rounded py-3 mx-5 bg-gray-900 text-xl font-roboto text-gray-100 uppercase tracking-wider font-light hover:bg-cyan-600 w-full">Shop</button>
        </div>
      </div>
      
    </div>
    </div>
    
    </>
    
  )
}
