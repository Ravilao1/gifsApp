import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({url, title}) => {
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}


GifGridItem.propTypes = {}

export default GifGridItem