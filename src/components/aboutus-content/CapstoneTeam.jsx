import React from 'react'
import Image from 'next/image';

export const CapstoneTeam = ({capstoneData}) => {
  return (
    <div className='grid grid-cols-2 max-[600px]:grid-cols-1 xl:grid-cols-4 gap-x-10 gap-y-8'>
        {capstoneData.map(({id, srcImage, name, university}) => {
            return (
                <article key={id} className='card bg-base-100 shadow-xl'>
                    <figure><Image
                        width={320}
                        height={320}
                        src={srcImage}
                        alt={name}
                        className='h-80'
                    ></Image></figure>
                    <div className='card-body'>
                        <h1 className='card-title'>{name}</h1>
                        <p>{university}</p>
                    </div>
                </article>
            );
        })}
    </div>
  )
}
