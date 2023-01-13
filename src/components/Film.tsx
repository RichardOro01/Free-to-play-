import React, {useEffect, useRef} from 'react'
import {Img} from '../Types'
import loading from '../icons/movie_loading.png'

type Props = {
    info: Img;
    handleSubmit: (info: Img) => void;
  };
export const Film:React.FC<Props> = (props) => {
    const showInfo = () => props.handleSubmit(props.info);
    const image = useRef<HTMLImageElement>(null);
    const url = "https://www.themoviedb.org/t/p/w220_and_h330_face/"+props.info.url;
    useEffect(() => {
        console.log("render "+ props.info.title)
        const temp: any=new Image();
        temp.src=url;
        temp.onload=(()=>{
            (image.current as any).src=url;
        })
    }, [])
    
  return (
    <div className='flex flex-col w-56 text-center cursor-pointer' onClick={showInfo}>
        <img src={loading} ref={image} alt={props.info.title} />
        <div className='text-xl'>{props.info.title}</div>
    </div>
    
  )
}
