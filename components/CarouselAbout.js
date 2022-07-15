import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import {useEffect} from 'react'
import Autoplay from 'embla-carousel-autoplay'

const CarouselAbout = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla my-20" ref={emblaRef}>
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
            </div>
    )
}

export default CarouselAbout