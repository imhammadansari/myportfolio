import React from 'react'

const Social = () => {
  return (
    <>
    <div className='flex gap-1 sm:gap-4 mr-4 sm:mr-10 md:mr-9 lg:mr-10'>
          <a href='https://www.linkedin.com/in/hammad-ansari-mern-stack-developer' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./linkedin.png' alt='LinkedIn' />
          </a>
          <a href='mailto:ansarihamad084@gmail.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./icons8-email-50 (1).png' alt='Email' />
          </a>
          <a href='https://github.com/imhammadansari' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./icons8-github-50.png' alt='Github' />
          </a>
          {/* <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img className='w-5 lg:w-6 xl:w-6' src='./twitter.png' alt='Twitter' />
          </a> */}
        </div>
    </>
  )
}

export default Social