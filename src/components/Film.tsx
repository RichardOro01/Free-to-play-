import React, {useEffect, useRef} from 'react'
import {Img} from '../Types'
import loading from '../icons/movie_loading.png'

export const Film = (img: Img) => {
    const image = useRef<HTMLImageElement>(null);
    const url = "https://www.themoviedb.org/t/p/w220_and_h330_face/"+img.url;
    useEffect(() => {
        const temp: any=new Image();
        temp.src=url;
        temp.onload=(()=>{
            (image.current as any).src=url;
        })
    }, [])
    
  return (
    <div className='flex flex-col w-56 text-center'>
        <img src={loading} ref={image} alt={img.title} />
        <div className='text-xl'>{img.title}</div>
    </div>
    
  )
}
