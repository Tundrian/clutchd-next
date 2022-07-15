import CarouselAbout from '../../components/CarouselAbout'
import Image from 'next/image'

const index = () => {

  // Get gallery data (local)
  let images = []
  for(let i = 1; i <= 40; i++){
    images.push({
      src: `/images/gallery/@dave (${i}).jpg`,
      alt: `gallery image ${i}`,
      text: ''
    })
  }
  // console.log(images)
  //xxxxxxxxxxxxxxxxxxxxxxxx


  return (
    <div className="py-11">
        <h1 className="mt-20 text-center text-4xl md:text-8xl font-roboto text-gray-800">Gallery</h1>
        <CarouselAbout images={images} cStyle='gallery'/>
        <ul className="flex justify-around items-center flex-wrap">
          {images && images.map((image,i) => (
            <li key={i} className="my-5">
              <div className='relative w-96 h-60'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill" // required
                                objectFit="contain" // change to suit your needs
                                className="" // just an example
                            />
                    </div>
            </li>
          ))}
        </ul>
    </div>
  )
}
export default index