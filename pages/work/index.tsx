import Bulb from '@/src/components/Bulb'
import Circles from '@/src/components/Circles'
import ServiceSlider from '@/src/components/ServiceSlider'
import React from 'react'
import { motion } from 'framer-motion'
import { DirectionType, fadeIn } from '@/variants'
import WorkSlider from '@/src/components/WorkSlider'

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn(DirectionType.UP, 0.2)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My Work <span className='text-accent'>.</span></motion.h2>
            <motion.p variants={fadeIn(DirectionType.UP, 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, id repudiandae! Nemo, explicabo minus molestias sint pariatur voluptatum natus modi, accusamus numquam, hic delectus esse totam fugit! Quos, minus earum?</motion.p>
          </div>
          <motion.div variants={fadeIn(DirectionType.DOWN, 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
            {/* Slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work;
