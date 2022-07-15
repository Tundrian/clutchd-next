import Image from 'next/image'
// import useEmblaCarousel from 'embla-carousel-react'
// import {useEffect} from 'react'
// import Autoplay from 'embla-carousel-autoplay'
// import styles from '../styles/About.module.css'
import CarouselAbout from '../../components/CarouselAbout'
const index = () => {
    // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
    // useEffect(() => {
    //     if(emblaApi){

    //     }
    // },[emblaApi])
  return (  
    <>
        <div className="relative -z-10">
            <div className="c-bottom-box-shadow bg-gradient-to-t from-gray-800/75 to-gray-800/25 -z-10">
                <div className="relative w-full h-full -z-10">
                    <div className="h-[75vh] w-full relative -z-10 min-h-1/2">
                        <Image
                            src='/images/team.jpg'
                            alt="Picture of the author"
                            layout="fill" // required
                            objectFit="cover" // change to suit your needs
                            className="-z-20 " // just an example
                        />
                        
                    </div>
                
                </div>
            </div>
            <div className="absolute left-0 bottom-10 right-0 content-section">
                    <h2 className="text-center text-9xl pb-2xl text-gray-100 font-extrabold z-50">Clutchd Team</h2>
               </div>
        </div>
        
        <section className="h-fit w-full py-11 px-10">
            <p className="text-center text-2xl font-roboto font-light max-w-6xl mx-auto my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim a incidunt minus dolorem mollitia similique consequatur laborum, sapiente pariatur ipsum nisi aliquid corrupti! Quasi libero odio ducimus eum cumque praesentium laboriosam placeat delectus repellendus vitae iste facilis eveniet dolorum, impedit corrupti sed! Nostrum provident itaque quo, fuga dolore numquam.</p>
            <p className="text-center text-2xl font-roboto font-light max-w-6xl mx-auto mt-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla obcaecati eius voluptate voluptatem optio, ipsa, sint odit adipisci perferendis alias ea atque laboriosam recusandae aliquam architecto quaerat distinctio repellat est.</p>
            <p className="text-center text-2xl font-roboto font-light max-w-6xl mx-auto mt-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aut! Quae libero odio dolor nisi aliquam harum dolore officia, nemo a minima incidunt in soluta obcaecati qui quod eos, doloribus, sequi eligendi! Quidem id distinctio autem, esse perferendis, magnam incidunt veritatis nesciunt dignissimos, animi maiores minus harum ullam error quae?</p>
            <CarouselAbout />
            {/* <div className="embla my-20" ref={emblaRef}>
                <div className="embla__container h-96 max-h-96 max-w-72">
                    <div className="embla__slide">
                            <Image
                                src='/images/team.jpg'
                                alt="Picture of the author"
                                layout="fill" // required
                                objectFit="contain" // change to suit your needs
                                className="" // just an example
                            />
                    </div>
                    <div className="embla__slide">
                            <Image
                                src='/images/about1.jpg'
                                alt="Picture of the author"
                                layout="fill" // required
                                objectFit="contain" // change to suit your needs
                                className="" // just an example
                            />
                    </div>
                    <div className="embla__slide">
                            <Image
                                src='/images/about2.jpg'
                                alt="Picture of the author"
                                layout="fill" // required
                                objectFit="contain" // change to suit your needs
                                className="" // just an example
                            />
                    </div>
                </div>
            </div> */}
        </section>
    </>
  )
}
export default index