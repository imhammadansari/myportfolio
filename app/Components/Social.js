import React from 'react'

const Social = () => {
  return (
    <>
    <div className='flex gap-1 md:gap-4 mr-4 sm:mr-10 md:mr-9 lg:mr-10'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./fb.png' alt='Facebook' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./insta.png' alt='Instagram' />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./linkedin.png' alt='LinkedIn' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./twitter.png' alt='Twitter' />
          </a>
          <a href='https://www.whatsapp.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./whatsapp.png' alt='WhatsApp' />
          </a>
        </div>
    </>
  )
}

export default Social