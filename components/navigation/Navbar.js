import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    
    const navClick = (e) => {
        document.querySelector('#navlinks').classList.add('hidden')
    }

    const hamburgerClick = (e) => {
        let hamburger = document.querySelector('#hamburger')
        let navlinks = document.querySelector('#navlinks')
        let line1 = hamburger.querySelector('#line1')
        let line2 = hamburger.querySelector('#line2')
        let line3 = hamburger.querySelector('#line3')
        if (navlinks.classList.contains('hidden')){
                navlinks.classList.remove('hidden')
                line1.classList.add('rotate-45', 'absolute')
                line2.classList.add('-rotate-45', 'absolute')
                line2.classList.remove('mt-1.5')
                line3.classList.add('hidden')
            } else{
                navlinks.classList.add('hidden')
                line1.classList.remove('rotate-45', 'absolute')
                line2.classList.remove('-rotate-45', 'absolute')
                line2.classList.add('mt-1.5')
                line3.classList.remove('hidden')
            }
    }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
    <header className="absolute w-full h-20 transition lg:h-20 mb-20 bg-gradient-to-b from-gray-900/100 via-gray-900 to-gray-100/0">
        <nav className="container m-auto py-1 lg:px-20 z-10">
            <div className="relative flex flex-wrap items-center justify-between">
                <div className="relative z-10 w-full flex items-center justify-between px-6 lg:w-auto">
                    <button onClick={hamburgerClick} id="hamburger" className="z-15 relative w-10 h-10 lg:hidden rounded-lg bg-gray-900">
                        <div role="hidden" id="line1" className="inset-0 w-6 h-0.5 m-auto rounded-full bg-gray-100 transition duration-300"></div>
                        <div role="hidden" id="line2" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-100 transition duration-300"></div>
                        <div role="hidden" id="line3" className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-gray-100 transition duration-1000"></div>
                    </button>
                </div>
                <div id="navlinks" onClick={navClick} className="hidden w-full bg-gray-800 px-6 transition duration-300 lg:block lg:px-0 lg:bg-transparent lg:w-auto z-50">
                    <ul className="py-4 text-gray-100 font-roboto font-light text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                        <li>
                            <Link href="/"><a 
                                href="" 
                                className="block w-full py-3 transition hover:text-cyan-600 hover:cursor-pointer px-3 mx-1 border-2 border-transparent hover:rounded hover:bg-cyan-600/50 hover:text-gray-100 uppercase">
                                <span>Home</span>
                            </a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a href="" className="block w-full py-3 transition hover:text-cyan-600 hover:cursor-pointer px-3 mx-1 border-2 border-transparent hover:rounded hover:bg-cyan-600/50 hover:text-gray-100 uppercase">
                                <span>About</span>
                            </a></Link>
                        </li>
                        <li>
                        <Link href="/gallery"><a href="" className="block w-full py-3 transition hover:text-cyan-600 hover:cursor-pointer px-3 mx-1 border-2 border-transparent hover:rounded hover:bg-cyan-600/50 hover:text-gray-100 uppercase">
                                <span>Galery</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <a href="" className="block w-full py-3 transition hover:text-cyan-600 hover:cursor-pointer px-3 mx-1 border-2 border-transparent hover:rounded hover:bg-cyan-600/50 hover:text-gray-100 uppercase">
                                <span>Shop</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="block w-full py-3 transition hover:text-cyan-600 hover:cursor-pointer px-3 mx-1 border-2 border-transparent hover:rounded hover:bg-cyan-600/50 hover:text-gray-100 uppercase">
                                <span>Events</span>
                            </a>
                        </li>
                        <li className="mt-4 lg:mt-0">
                            <a href="" className="block w-full py-3 px-6 rounded-xl bg-gray-200 transition hover:bg-cyan-600 focus:bg-cyan-700 hover:cursor-pointer active:bg-cyan-800">
                                <span className="block text-center font-roboto font-light  text-gray-800 uppercase  font-semibold lg:text-base">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  </div>
  )
}
export default Navbar