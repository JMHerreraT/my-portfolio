import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { BsArrowRight, BsClock } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'chatgpt',
          path: '/chat-gpt-remake.png',
          link: `https://chatgpt-remake.vercel.app/`
        },
        {
          title: 'airbnb',
          path: '/airbnb-remake.png',
          link: `https://airbnb-remake.vercel.app/`
        },
        {
          title: 'dashboard',
          path: '/admin-dashboard.png',
        },
        {
          title: 'nearby-discos',
          path: '/nearby-discos.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div>
      <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
      > 
        {
          workSlides.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => (
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <Link href={image.link ? image.link as string : `#`} target='_blank'>
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        {/* Image */}
                        <Image src={image.path} alt='slideImage' width={500} height={300}/>
                        {/* Overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#E838CC] to-[#4A22BD] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}

                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          
                            {
                              image.link ? (
                                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>LIVE</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                              {/* Icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                            </div>
                              ) : (
                                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>COMING</div>
                              {/* title part 2 */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>SOON</div>
                              {/* Icon */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsClock /></div>
                            </div>
                              )
                            }
                          
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};

export default WorkSlider;
