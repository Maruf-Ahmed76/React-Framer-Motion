import React from 'react';
import {motion} from 'framer-motion'
const SingleGallryItem = ({color, setIndex}) => {
    return (
        <div className="single-gellary-container" onClick = {() => setIndex(false)}>
            <motion.div 
                layoutId = {color}
                style={{background : color}}
                className="single-gallery-item"
            />
        </div>
    )
}

export default SingleGallryItem;