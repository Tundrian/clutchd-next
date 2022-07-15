import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const CarouselAbout = ({images, cStyle}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    
    return (
        <div className="embla md:py-20 overflow-hidden max-h-[900px]" ref={emblaRef}>
                <div className="embla__container flex h-96 max-h-96 max-w-72">
                    {images && images.map((image, i) => (
                        <div className={`embla__slide_${cStyle} relative flex max-w-full mx-5 flex-grow-0 flex-shrink-0 basis-[50%]`} key={i}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill" // required
                                objectFit="contain" // change to suit your needs
                                className="" // just an example
                            />
                    </div>
                    ))}
                </div>
            </div>
    )
}

export default CarouselAbout