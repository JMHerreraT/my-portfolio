import TestimonialSlider from '@/src/components/TestimonialSlider'
import React from 'react'
import { motion } from 'framer-motion'
import { DirectionType, fadeIn } from '@/variants'

const Testimonials = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* Title */}
        <motion.h2 
          variants={fadeIn(DirectionType.UP, 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 xl:mb-0'>
          What clients <span className='text-accent'>say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div 
          variants={fadeIn(DirectionType.UP, 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials