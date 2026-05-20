import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import cv_pdf from "../assets/cv.pdf";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
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

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const DownloadIcon = () => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className='w-1/2 h-1/2'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='7 10 12 15 17 10' />
    <line x1='12' y1='15' x2='12' y2='3' />
  </svg>
);

const CVCard = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = cv_pdf;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-tertiary rounded-2xl py-4 px-6 inline-flex items-center gap-4 shadow-md shadow-primary'>
      <h3 className='text-white font-bold text-[18px]'>My CV</h3>
      <button
        type='button'
        onClick={downloadPDF}
        aria-label='Download CV as PDF'
        title='Download CV (PDF)'
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-white hover:scale-110 transition-transform duration-300'
      >
        <DownloadIcon />
      </button>
    </div>
  );
};

const About = () => {
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
        I’m a software developer with experience in backend engineering using C# and .NET,
        alongside full-stack web development and cloud-based application architecture.
        I have worked on scalable systems, modern web applications, and technical projects
        involving MERN stack development, Unity, and networking technologies.
        I’m passionate about building reliable, maintainable software and continuously improving my technical expertise
        through real-world projects and hands-on development. This portfolio highlights my projects,
        experience, and ongoing journey in software engineering.
      </motion.p>

      <div className='mt-10 flex'>
        <CVCard />
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
