import React, { ReactNode } from 'react'
// Fonts 
import { Sora, Poppins } from 'next/font/google';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import Header from './Header';

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`page text-white bg-site bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      { children }
    </div>
  )
}

export default Layout