import React from 'react';
import {Link} from 'react-router-dom'
import {AnimateSharedLayout, motion} from 'framer-motion'
import { useState } from 'react';


const screens = [
  {
    title: "Home",
    path : "/",
    color: "#ff0055"
  },
  {
    title: "About",
    path : "/about",
    color: "#0099ff"
  },
  {
    title: "Contact",
    path : "/contact",
    color: "#22cc88"
  }
];

const Navbar = () => {
  const [selected, setSelected] = useState(0);
    return(
        <nav>
            <AnimateSharedLayout>
                <ul>
                  {
                    screens.map(({title,path,color},i) => {
                      return(
                        <li key={color}>
                          <Link 
                            to={path} 
                            style={{color : i === selected ? color : "#333"}}
                            onClick = {() => setSelected(i)}
                          >
                            {title}
                            {
                              i === selected && (
                                <motion.div 
                                  layoutId = "underline"
                                  className="underline" 
                                  style={{background : color}}

                                />
                              )
                            }
                            
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </AnimateSharedLayout>
            
        </nav>
    )
}

export default Navbar;