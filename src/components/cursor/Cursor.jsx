import React, { useEffect, useState } from 'react'
import "./cursor.scss"
import {motion} from "framer-motion"

const Cursor = () => {
    const [possition, setpossition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = (e) => {
            setpossition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, []);

  return <motion.div className="courser" animate={{x:possition.x+10,y:possition.y+10}}></motion.div>;
}

export default Cursor
