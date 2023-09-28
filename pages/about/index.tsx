import Avatar from '@/src/components/Avatar';
import Circles from '@/src/components/Circles';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,

} from 'react-icons/fa';

import {
  SiFramer,
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiStrapi,
  SiGraphql,
  SiServerless,
  SiNodedotjs,
  SiNestjs,
  SiAmazonaws,
  SiAwsamplify,
  SiTailwindcss,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';
import { DirectionType, fadeIn } from '@/variants';
import CountUp from 'react-countup';
import Link from 'next/link';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <Link key={`html5`} href={`https://es.wikipedia.org/wiki/HTML5`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`HTML5`}</div>
              </div>
            </div>
            <FaHtml5 /> </Link>,
          <Link key={`css3`} href={`https://es.wikipedia.org/wiki/CSS`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`CSS3`}</div>
              </div>
            </div>
            <FaCss3 />
          </Link>,
          <Link key={`tailwind`} href={`https://tailwindcss.com/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Tailwind CSS`}</div>
              </div>
            </div>
            <SiTailwindcss />
          </Link>,
          <Link key={`javascript`} href={`https://developer.mozilla.org/es/docs/Web/JavaScript`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`JavaScript`}</div>
              </div>
            </div>
            <SiJavascript />
          </Link>,
          <Link key={`typescript`} href={`https://www.typescriptlang.org/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`TypeScript`}</div>
              </div>
            </div>
            <SiTypescript />
          </Link>,
          <Link key={`react`} href={`https://react.dev/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`React.js`}</div>
              </div>
            </div>
            <FaReact />
          </Link>,
          <Link key={`next`} href={`https://nextjs.org/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Next.js`}</div>
              </div>
            </div>
            <SiNextdotjs />
          </Link>,
          <Link key={`strapi`} href={`https://strapi.io/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Strapi`}</div>
              </div>
            </div>
            <SiStrapi />
          </Link>,
          <Link key={`AWS Amplify`} href={`https://aws.amazon.com/es/amplify/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`AWS Amplify`}</div>
              </div>
            </div>
            <SiAwsamplify />
          </Link>,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <Link key={`aws`} href={`https://aws.amazon.com/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Amazon Web Services`}</div>
              </div>
            </div>
            <SiAmazonaws /> </Link>,
          <Link key={`node`} href={`https://nodejs.org/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Node.js`}</div>
              </div>
            </div>
            <SiNodedotjs />
          </Link>,
          <Link key={`nestjs`} href={`https://nestjs.com/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Nest.js`}</div>
              </div>
            </div>
            <SiNestjs />
          </Link>,
          <Link key={`graphql`} href={`https://graphql.org/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Graphql`}</div>
              </div>
            </div>
            <SiGraphql />
          </Link>,
          <Link key={`serverless`} href={`https://www.serverless.com/`} target='_blank' className='hover:text-accent relative flex items-center group transition-all duration-300'>
            {/* Tooltip */}
            <div className='absolute pb-14 right-0 hidden xl:group-hover:flex'>
              <div className='bg-white relative flex text-primary items-center p-[6px] rouded-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{`Serverless Framework`}</div>
              </div>
            </div>
            <SiServerless />
          </Link>,
        ]
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar */}
      <motion.div variants={fadeIn(DirectionType.RIGHT, 0.2)} initial={'hidden'} animate={'show'} exit={'hidden'} className='hidden xl:flex absolute -bottom-[300px] -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn(DirectionType.RIGHT, 0.2)} initial={'hidden'} animate={'show'} exit={'hidden'} className='h2'>About <span className='text-accent'>me</span> 💻 </motion.h2>
          <motion.p variants={fadeIn(DirectionType.RIGHT, 0.4)} initial={'hidden'} animate={'show'} exit={'hidden'} className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>{`I'm a Senior Fullstack Engineer with more than 7 years of experience in development of scalable applications (web, mobile) and microservices, applying modern methodologies and patterns. In addition to leadership in projects for potentially recognized clients.`}
          </motion.p>
          {/* Counters */}
          <motion.div variants={fadeIn(DirectionType.RIGHT, 0.6)} initial={'hidden'} animate={'show'} exit={'hidden'} className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-10 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-10 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
              </div>
              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-10 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn(DirectionType.LEFT, 0.4)} initial={'hidden'} animate={'show'} exit={'hidden'} className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {
              aboutData.map((item, itemIndex) => (
                <div key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))
            }
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item: {
              title: string;
              stage?: string;
              icons?: React.JSX.Element[];
            }, itemIndex) => (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 item-center text-white/60'>
                {/* Title */}
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>);
};

export default About;
