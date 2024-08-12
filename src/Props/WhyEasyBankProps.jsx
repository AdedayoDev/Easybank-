import React from 'react'

const WhyEasyBankProps = (props) => {
  return (

    <section>
        <div className='flex flex-col gap-8 w-72 items-center mx-auto lg:w-60'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 bg-cover bg-center' 
             style={{backgroundImage: `url(${props.backgroundImage})`}} 
            ></div>
            <h1 className='text-2xl text-slate-700 font-publicSans text-center md:text-start'>{props.h1}</h1>
            <p className='text-slate-400 text-lg font-normal font-publicSans text-center md:text-start'>{props.p}</p>
        </div>
    </section>
  )
}

export default WhyEasyBankProps
