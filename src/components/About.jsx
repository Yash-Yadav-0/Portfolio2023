import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import cv from "../assets/cv.png";
import cv_pdf from '../assets/cv.pdf';
import Button from "@mui/material/Button";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain rounded-full'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// for downloadable file pop-up
const DownloadPopup = ({ onClose, onDownloadImage, onDownloadPDF }) => {
  return (
    <div className="popup  w-[25%] bg-tertiary rounded-[20px] py-2 px-2 flex flex-col overflow:hidden ">
      <div className="popup-header">
      <div className="close-icon-container w-5 h-5 bg-red-500 flex items-center justify-center rounded-full">
        <span
          className="close-icon cursor-pointer flex items-center justify-center text-black"
          onClick={onClose}
        >
            &times;
          </span>
        </div>
        <p className="ml-2 text-secondary">As :</p>
      </div>
      <div className="popup-content mt-2">
      <button onClick={onDownloadImage} class="transition text-secondary ease-in-out ml-10 delay-150 hover:scale-110 duration-250 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>IMAGE</span>
      </button>
      <button onClick={onDownloadPDF} class="ml-10 text-secondary mt-2 transition ease-in-out delay-150 hover:scale-110 duration-250 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>PDF</span>
      </button>
      </div>
    </div>
  );
};

const About = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const downloadImage = () => {
    // Logic to trigger image download
    const imageSrc = cv;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'cv.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPDF = () => {
    // Logic to trigger PDF download
    const pdfSrc = cv_pdf;
    const link = document.createElement('a');
    link.href = pdfSrc;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] items-center leading-[30px]'
      >
        Welcome to my portfolio website! I'm a recent computer engineering
        graduate with a passion for technology and innovation. My expertise lies
        in MERN stack web development, Unity game development, and IPv4/IPv6
        implementation. Throughout my academic journey, I've cultivated strong
        communication skills and adaptability, enabling me to excel in
        collaborative environments. I'm dedicated to staying at the forefront
        of industry trends, and I'm excited to showcase my technical prowess
        and contributions to innovation. Explore my projects and experiences to
        get a glimpse of my journey in the world of technology.
      </motion.p>
      <div className="mt-5 ">
        <Button onClick={openPopup} 
          className="transition ease-in-out delay-150 hover:scale-110 duration-300">Download CV</Button>
        {popupVisible && (
          <DownloadPopup
            onClose={closePopup}
            onDownloadImage={downloadImage}
            onDownloadPDF={downloadPDF}
          />
        )}
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
