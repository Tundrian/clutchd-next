import Image from 'next/image'

const index = () => {
   
  return (
    <>
        <div className="bg-gradient-to-t from-gray-800/75 to-gray-800/25 z-0">
            <div className="h-screen w-full relative -z-10 ">
                <Image
                    src='/images/team.jpg'
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="-z-20 " // just an example
                />
            </div>
            <div className="absolute left-0 bottom-10 right-0 content-section">
                <h2 className="text-center text-9xl pb-2xl text-gray-100">Clutchd Team</h2>
                
            </div>
        </div>
        <section className="h-96">
            

        </section>
    </>
  )
}
export default index