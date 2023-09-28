import Bulb from '@/src/components/Bulb'
import Circles from '@/src/components/Circles'
import ServiceSlider from '@/src/components/ServiceSlider'
import React from 'react'
import { motion } from 'framer-motion'
import { DirectionType, fadeIn } from '@/variants'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn(DirectionType.UP, 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My services <span className='text-accent'>.</span></motion.h2>
          </div>
          <motion.div variants={fadeIn(DirectionType.DOWN, 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
            {/* Slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services