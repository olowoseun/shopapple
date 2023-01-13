import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className='block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text'>Powered</span>
                <span className='block'>By Intellect</span>
                <span className='block'>Driven By Values</span>
            </h1>

            <div className='space-x-8'>
                <Button title='Buy Now' />
                <a href="#" className="link">Learn More</a>
            </div>
        </div>

        <div className='relative hidden w-[450px] h-[450px] transition-all duration-500 md:inline lg:w-[600px] lg:h-[650px]'>
            <Image src='/iphone.png' layout='fill' objectFit='contain' />
        </div>
    </section>
  )
}

export default Hero