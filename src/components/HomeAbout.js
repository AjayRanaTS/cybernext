import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../src/assets/img-about.png'

const HomeAbout = () => {
  return (
    <>
      <div className='relative bg-white w-full py-[100px]'>
        <div className='container'>
            <div className='flex flex-wrap items-center justify-center'>
                <div className='w-[50%]'>
                    <img className='block mx-auto' src={img} alt="about" />
                </div>
                <div className='w-[50%] flex flex-col gap-[25px] items-start'>
                    <h2 className='text-black text-[48px] font-hind font-bold leading-[1.2]'>Lorem lipsum dummy text</h2>
                    <p className='text-black text-[16px] font-sans font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida dignissim dolor vel lacinia. Sed mollis dolor ac risus tempor dictum. Morbi laoreet, diam et feugiat posuere, ex dui euismod enim, non vehicula lorem nisi ac lectus.</p>
                    <Link className='primary-button' to="/">Read more</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomeAbout
