import React from "react";
import { motion } from "framer-motion";
import  AppWrap  from "../../wrapper/AppWrap";
import { images } from "../../constants";
import "./Header.scss";
// import { easeInOut } from "popmotion";
const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div  className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="app__flex badge-cmp">
            <span>👋</span>
            <div>
              <p className="p-text">Hello,I am</p>
              <h1 className="head-text">Prashant!!</h1>
            </div>
          </div>
          <div className="app__flex tag-cmp">
            <p className="p-text">Web Developer</p>
            
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile1} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        ></motion.img>
      </motion.div>
      <motion.div
      variants={scaleVariant}
      whileInView={scaleVariant.whileInView}
      className='app__header-circles'>
        {[images.react1 , images.node , images.sass].map((circle , index) =>(
          <div className="circle-cmp app__flex" key={`links-${index}`}>
            <img src={circle} alt='profie_bg' />
          </div>
        ))}
      
      
      </motion.div>
    </div>
  );
};

export default AppWrap(Header , 'home');
