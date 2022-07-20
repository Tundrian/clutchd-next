import Image from 'next/image'

const index = () => {
    return (
      <div className="py-11 bg-gradient-to-b from-gray-800/10 to-gray-100/100 min-h-[100vh]">
        <h1 className="mt-20 text-center text-4xl md:text-6xl font-roboto text-gray-800 mb-10">Events</h1>
        <ul className="flex items-center justify-around border-t-2 border-gray-600 mx-10 pt-10 border-b-2 pb-10">
          <li className="w-full">
            <div className="flex justify-around items-center mb-10 flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-3/5">
                <div className='relative w-full lg:w-4/5 h-96 bg-gradient-to-r from-slate-800/90 to-slate-50/0 '>
                  <Image
                      src='/images/gallery/@dave (25).jpg'
                      alt='event image'
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                      className="-z-10" // just an example
                  />
                  <div className="absolute left-5 top-5 w-2/3">
                    <h2 className=' text-5xl pb-10 font-roboto font-light text-gray-300'>Event Title</h2>
                    <p className="text-gray-300 font-roboto font-light text-xl pl-5 mb-5">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem repellat assumenda ipsa sint, unde provident laboriosam! Exercitationem, nostrum nihil.</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 font-roboto font-light text-left text-lg mt-10">
                <h2 className="text-3xl mb-5 font-normal text-slate-700">Details</h2>
                <p className="py-2 rounded-lg border-slate-500 w-fit px-5 bg-slate-300 my-3 font-light ml-5"><span className="font-normal">Date/Time: </span>12:00pm, 2022/08/10</p>
                <p className="py-2 rounded-lg border-slate-500 w-fit px-5 bg-slate-300 my-3 font-light ml-5"><span className="font-normal">Category: </span>All Cars</p>
                <p className="py-2 rounded-lg border-slate-500 w-fit px-5 bg-slate-300 my-3 font-light ml-5"><span className="font-normal">Fee: </span> $0.00</p>
                <p className="py-2 rounded-lg border-slate-500 w-fit px-5 bg-slate-300 my-3 font-light ml-5"><span className="font-normal">Car Meet Type </span>Meetup</p>

                <div>
                  <h3 className="text-4xl mb-5 font-normal text-slate-700 mt-10">Vendors</h3>
                  <ul className="flex justify-around items-center flex-wrap text-xl">
                    <li className=" flex justify-between items-center w-fit py-2 mx-2 my-3 font-light">
                        <div className='relative w-20 h-20 mx-2'>
                          <Image
                              src='/images/vendors/windsorhonda.jpg'
                              alt='event image'
                              layout="fill" // required
                              objectFit="contain" // change to suit your needs
                              className="" // just an example
                          />  
                        </div>
                      <h4 className="">Windsor Honda</h4>
                    </li>
                    <li className=" flex justify-between items-center w-fit py-2 mx-2 my-3 font-light text-2xl">
                        <div className='relative w-20 h-20 mx-2'>
                          <Image
                              src='/images/vendors/windsormazda.jpg'
                              alt='event image'
                              layout="fill" // required
                              objectFit="contain" // change to suit your needs
                              className="" // just an example
                          />  
                        </div>
                      <h4 className="">Windsor Mazda</h4>
                    </li>
                    <li className=" flex justify-between items-center w-fit py-2 mx-2 my-3 font-light text-2xl">
                        <div className='relative w-20 h-20 mx-2'>
                          <Image
                              src='/images/vendors/mrlube.jpg'
                              alt='event image'
                              layout="fill" // required
                              objectFit="contain" // change to suit your needs
                              className="" // just an example
                          />  
                        </div>
                      <h4 className="">Mr. Lube</h4>
                    </li>
                    <li className=" flex justify-between items-center w-fit py-2 mx-2 my-3 font-light text-2xl">
                        <div className='relative w-20 h-20 mx-2'>
                          <Image
                              src='/images/vendors/customtees.jpg'
                              alt='event image'
                              layout="fill" // required
                              objectFit="contain" // change to suit your needs
                              className="" // just an example
                          />  
                        </div>
                      <h4 className="">Custom Tees</h4>
                    </li>
                    <li className=" flex justify-between items-center w-fit py-2 mx-2 my-3 font-light text-2xl">
                        <div className='relative w-20 h-20 mx-2'>
                          <Image
                              src='/images/vendors/gatorade.png'
                              alt='event image'
                              layout="fill" // required
                              objectFit="contain" // change to suit your needs
                              className="" // just an example
                          />  
                        </div>
                      <h4 className="">Gatorade</h4>
                    </li>
                  
                   
                  </ul>
                </div>
              </div>
            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11810.017975879353!2d-82.98244446534423!3d42.26775310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d1a3bc82b9b%3A0xddec5be97762f678!2sStief%20%26%20Sam%20Painting!5e0!3m2!1sen!2sca!4v1658354080445!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
          </li>
        </ul>
      </div>
    )
  }
  export default index