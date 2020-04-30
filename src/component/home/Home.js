import React, {useState} from 'react';
import Gallery from '../Layout/Gallery';
import SingleGallryItem from '../Layout/SingleGalleryItem';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const Home = () => {
    const [index, setIndex] = useState(false);
    return (
        <div className="home">
            <AnimateSharedLayout>
                <Gallery items={colors} setIndex={setIndex} />
                <AnimatePresence>
                    {
                        index !== false && (
                            <motion.div 
                                initial = {{opacity : 0}}
                                animate = {{opacity : 0.6}}
                                exit = {{opacity : 0}}
                                className = "overlay"
                                key = "overlay"
                                onClick = {() => setIndex(false)}
                            />
                        )
                    }

                    {
                        index !== false && (
                            <SingleGallryItem
                                key = "image" 
                                color = {colors[index]}
                                setIndex = {setIndex}
                            />
                        )
                    }
                </AnimatePresence>
            </AnimateSharedLayout>
            
           
        </div>
    )
}

const colors = ["#77BEA9","#9E27C4","#301F03","#71E916","#4D7B0D","#1C9673","#1214F3","#862C18","#089F40","#1B4829","#F2524C","#B30610","#DA0444","#570172","#4F0E96","#A3E0BF"]

export default Home;