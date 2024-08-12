import React from 'react'

const LatestArticlesProps = (props) => {
  return (
    <section className='rounded-xl  bg-white h-auto w-72 border '>
        <article className='h-auto w-68  '>
          <div className='w-full h-52 bg-cover bg-center rounded-t-xl'
            style={{backgroundImage: `url(${props.backgroundImage})`}} ></div>
          <div className='flex flex-col gap-4 p-6 '>
            <h1 className='capitalize text-slate-300 text-lg '>{props.name}</h1>
            <p className='text-base font-publicSans '>{props.heading}</p>
            <p className='text-sm text-slate-500'>{props.p}</p>
          </div>

        </article>
    </section>
  )
}

export default LatestArticlesProps
