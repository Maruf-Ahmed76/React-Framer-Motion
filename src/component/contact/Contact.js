import React, {useRef} from 'react';
import {motion} from 'framer-motion'
const Contact = () => {
    const dragControl = useRef();
    return (
        <div className="contact" ref = {dragControl}>
            <motion.div
                className="circle"
                drag
                dragConstraints = {dragControl}
                dragElastic={0}
                dragTransition={{ bounceStiffness: 600 }}
            >
                Drag
            </motion.div>
        </div>
        
    )
}
export default Contact;