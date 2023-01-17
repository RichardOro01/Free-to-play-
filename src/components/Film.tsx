import React, {RefObject, memo, useEffect, useRef} from 'react'
import {Img} from '../Types'
import loading from '../icons/movie_loading.png'

type Props = {
    info: Img;
    handleSubmit: (info: Img) => void;
  };
const Film:React.FC<Props> = ({info, handleSubmit}:Props) => {

    const showInfo:()=>void = () => handleSubmit(info);
    const image:RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
    const url:string  = `https://www.themoviedb.org/t/p/w220_and_h330_face/${info.url}`;
    const {title} = info;
    useEffect(() => {
        const tempImg: HTMLImageElement=new Image();
        tempImg.src=url;
        tempImg.onload=(()=>{
            if (image.current){//investigar abreviacion
              image.current.src=url;
            }
            
        })
    }, [url])
    
    
  return (
    <div className='flex flex-col w-56 text-center cursor-pointer' onClick={showInfo}>
        <img src={loading} ref={image} alt={title} />
        <div className='text-xl'>{title}</div>
    </div>
    
  )
}

export default memo(Film)