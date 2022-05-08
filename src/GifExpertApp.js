import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const  GifExpertApp = (props) => {
// const categories = ['One Puch Man', 'Samurai X', 'Dragon Ball']

const [categories, setCategories] = useState([])

// const handleAdd = () =>{
//     setCategories( [...categories, 'Mirai Niki'])

// }

  return (
  <>
        <h2>GifExpertApp</h2> 
        <AddCategory setCategories={setCategories}/>
        <hr/>
        

        <ol>
            {
                categories.map( cat =>
                    (<GifGrid  
                        key= {cat} 
                        category = {cat}
                    />)
                )
            }
        </ol>
    </>
    )
}

GifExpertApp.propTypes = {}

export default GifExpertApp
