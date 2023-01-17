import React from 'react'
import {Img} from '../Types'
import { FadeIn } from '../emotion/fade'



type Props = {
    hideInfo: () => void,
    info: Img
}
export const FilmInfo:React.FC<Props> = ({info, hideInfo}: Props) => {
    const handleClick=()=>{
        hideInfo();
    }
  return (
    <FadeIn className='flex justify-center items-center fixed w-full top-0 bg-slate-900 bg-opacity-75 h-full font-serif' onClick={handleClick}>
        <div className='w-1/2 overflow-y-auto max-h-[90vh] bg-slate-700 top-24  p-7 flex flex-row gap-3 rounded-lg shadow-2xl shadow-black'>
            <div className='flex flex-col gap-3 items-center text-2xl w-full'>
                <img alt={info.title} src={"https://www.themoviedb.org/t/p/w220_and_h330_face/"+info.url} className='w-80'/>
                <div>{info.title}</div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div>{info.overview}</div>
                <div>Release date: {info.release_date}</div>
                {/* <div>Genres:</div>
                <ul>
                    {props.info.genres?.map((genre: Genre)=><li>1</li>)}
                </ul> */}
                
            </div>
        </div>
    </FadeIn>
    
  )
}
