import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem  from "../components/GifGridItem";

import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0)
    // //cuando el componente es renderizado por primera vez
    // useEffect (() => {
    //   getGifs(category)
    //   .then(setImages)
    // }, [category])

    const {data:images, loading}= useFetchGifs(category);

    // const [images, setImages] = useState([]);
    

  

    // const addOne = ()=>{
    //   setCount(count+1)
    // }
    

    

    

  return (
    <>
    <h2>{category}</h2>
    {loading && 'Cargando...' }
    <div className='card-grid'>
        
            {
               images.map( img => <GifGridItem key={img.id} {...img} />
              // console.log(img[0].id)
              )
              
            }
        
        
    </div>
            </>
  )
}

GifGrid.propTypes = {}

export default GifGrid