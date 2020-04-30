import React from 'react';
import {motion} from 'framer-motion'
const Gallery = ({items, setIndex}) => {
    return (
        <div className="gellary-container">
            {items.map((color,i) => {
                return (
                    <motion.div 
                        key={i} 
                        style={{background : color}}
                        onClick = {() => setIndex(i)}
                        layoutId = {color}
                    />
                )
            })}
        </div>
    )
}

export default Gallery;