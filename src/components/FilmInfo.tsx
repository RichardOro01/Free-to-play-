import React from 'react'
import {Img, Genre} from '../Types'
import { type } from 'os'

type Props = {
    hideInfo: () => void,
    info: Img
}
export const FilmInfo:React.FC<Props> = (props) => {
    console.log(props)
    const handleClick=(e:any)=>{
        props.hideInfo();
    }
  return (
    <div className='flex justify-center fixed w-full top-0 bg-slate-900 bg-opacity-75 h-full font-serif' onClick={handleClick}>
        <div className='absolute w-1/2 h-[600px] bg-slate-700 top-24  p-7 flex flex-row gap-3 rounded-lg'>
            <div className='flex flex-col gap-3 items-center text-2xl w-full'>
                <img alt={props.info.title} src={"https://www.themoviedb.org/t/p/w220_and_h330_face/"+props.info.url} className='w-80'/>
                <div>{props.info.title}</div>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <div>{props.info.overview}</div>
                <div>Release date: {props.info.release_date}</div>
                {/* <div>Genres:</div>
                <ul>
                    {props.info.genres?.map((genre: Genre)=><li>1</li>)}
                </ul> */}
                
            </div>
        </div>
    </div>
    
  )
}