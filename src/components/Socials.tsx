import Link from 'next/link'
import React from 'react'
import {RiGithubLine, RiLinkedinLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/JMHerreraT'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/jorgemht/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
    </div>
  )
}

export default Socials