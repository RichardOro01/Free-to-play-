import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Film } from '../components/Film';
import { Img } from '../Types';

export const Home = () => {

    const [imgs, setImgs] = useState<Array<Img>>([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'discover/movie/?sort_by=popularity.des&api_key='+process.env.REACT_APP_API_KEY)
        .then((res=>{
            res.data.results.map((film:any)=>{
                console.log(film)
                setImgs((previus)=>[...previus,{url: film.poster_path, title: film.original_title}])
            });
        }))
        
    }, [])
    
    
  return (
    <>
        <div className='flex flex-row flex-wrap gap-4 justify-center'>
            {imgs.map((film,index)=><Film key={index}{...film}/>
            )}
        </div>
        
        
    </>
  )
}
