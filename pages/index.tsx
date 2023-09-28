import React from 'react'
import { motion } from 'framer-motion'
import ProjectsBtn from '@/src/components/ProjectsBtn'
import { fadeIn } from '@/variants'
import Avatar from '@/src/components/Avatar'
import ParticlesContainer from '@/src/components/ParticlesContainer'
import { TypeAnimation } from 'react-type-animation'
enum DirectionType {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/*  Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* Title */}
          <motion.h1 variants={fadeIn(DirectionType.DOWN, 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>Hi there ✋! <br /> {`I'm Jorge Herrera `} <span className='text-accent'>.
          </span></motion.h1>
          <motion.div variants={fadeIn(DirectionType.DOWN, 0.2)} initial='hidden' animate='show' exit='hidden'>
          <TypeAnimation
            className='text-accent h1'
            sequence={[
              // Same substring at the start will only be typed once, initially
              'Frontend Developer',
              500,
              'Backend Developer',
              500,
              'Solutions Architect',
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
          </motion.div>
          {/* SubTitle */}
          <motion.p variants={fadeIn(DirectionType.DOWN, 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Fullstack Engineer Senior, with extensive experience for over 7 years. High level experience in frontend, backend and mobile development and many others... </motion.p>
          {/* Button */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn(DirectionType.DOWN, 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* BD IMG */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* Avatar Img */}
        <motion.div variants={fadeIn(DirectionType.UP, 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }} className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
