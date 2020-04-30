import React, {useRef} from 'react';
import { Frame } from 'framer';

const About = () => {
    const constraintsRef = useRef(null)
    return (
        <div className="about">

            <Frame ref={constraintsRef} width={400} height={400}>
                <Frame 
                    drag 
                    dragConstraints={constraintsRef} 
                    dragElastic = {0}
                    dragMomentum = {false}
                    top = {0}
                    left = {0}
                    background = {"black"}
                />
                <Frame 
                    drag 
                    dragConstraints={constraintsRef} 
                    dragElastic = {0}
                    dragMomentum = {false}
                    top = {0}
                    right = {0}
                    background = {"red"}
                />
                <Frame 
                    drag 
                    dragConstraints={constraintsRef} 
                    dragElastic = {0}
                    dragMomentum = {false}
                    bottom = {0}
                    left = {0}
                    background = {"green"}
                />
            </Frame>
        </div>
    )
}
export default About;