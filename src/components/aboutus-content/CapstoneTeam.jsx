import React from 'react'
import Image from 'next/image';

export const CapstoneTeam = ({capstoneData}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-8'>
        {capstoneData.map(({id, srcImage, name, university}) => {
            return (
                <article key={id} className='card bg-base-100 shadow-xl'>
                    <figure className='min-h-80 max-h-80 shadow-md'><Image
                        width={320}
                        height={320}
                        src={srcImage}
                        alt={name}
                        className='object-cover'
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
