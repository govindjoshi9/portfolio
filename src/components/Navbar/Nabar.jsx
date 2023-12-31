import "./navbar.scss"
import { motion } from "framer-motion";
import SideBar from "../sidebar/SiderBar";
const Nabar = () => {
  return (
    <div className="navbar">
      <SideBar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h1>Govind Prasad</h1> */}
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
           >
          <a href="https://www.linkedin.com/in/govind-prasad-439051207/">
            <img src="./linedin.png" alt="LinkedInd" />
          </a>
          <a href="https://github.com/govindjoshi9">
            <img src="./github2.png" alt="github " />
          </a>
          <a href="#">
            <img src="./insta.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Nabar
