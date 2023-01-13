import axios from 'axios'
import {useEffect, useState, useCallback} from 'react'
import  Film  from '../components/Film';
import { Img } from '../Types';
import { FilmInfo } from '../components/FilmInfo';

export const Home = () => {
    const [infoVisible, setInfoVisible] = useState<boolean>(false);
    const [current, setCurrent] = useState<Img>({url:"",title:""});
    const showInfo = useCallback((info: Img) =>{
       setCurrent(info);
       setInfoVisible(true);
    },[])
    const hideInfo = () =>{
        setInfoVisible(false);
    }
    const [imgs, setImgs] = useState<Array<Img>>([]);
    const addImg = useCallback((img:Img)=>{
        setImgs((previus)=>[...previus,img]);
        return img;
    },[])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+'discover/movie/?&api_key='+process.env.REACT_APP_API_KEY)
        .then((res=>{
            res.data.results.map((film:any)=>{
                let newImg: Img = {
                    url: film.poster_path, 
                    title: film.original_title,
                    genres: film.genres,
                    overview: film.overview,
                    popularity: film.popularity,
                    release_date: film.release_date,
                }
                return addImg(newImg);  
            });
        }))
        
    }, [addImg])
    
    
  return (
    <>
        <div className='flex flex-row flex-wrap gap-4 justify-center p-4'>
            {imgs.map((film:Img,index:number)=><Film key={index} info={film} handleSubmit={showInfo}/>)}
        </div>
        {infoVisible && <FilmInfo hideInfo={hideInfo} info={current}/>}
        
        
    </>
  )
}
