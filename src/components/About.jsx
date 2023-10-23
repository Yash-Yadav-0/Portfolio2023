import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant} from '../utils/motion'

const ServiceCard =({index,title,icon})=>{
  return(
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Welcome to my portfolio website! I'm a recent computer engineering graduate with 
    a passion for technology and innovation. My expertise lies in MERN stack web 
    development, Unity game development, and IPv4/IPv6 implementation. 
    Throughout my academic journey, I've cultivated strong communication skills and 
    adaptability, enabling me to excel in collaborative environments. I'm dedicated 
    to staying at the forefront of industry trends, and I'm excited to showcase my 
    technical prowess and contributions to innovation. Explore my projects and 
    experiences to get a glimpse of my journey in the world of technology.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default About