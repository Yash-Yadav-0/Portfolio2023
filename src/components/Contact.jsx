import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const LinkedInIcon = () => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className='w-8 h-8 shrink-0'
    fill='#0A66C2'
  >
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const GmailIcon = () => (
  <svg
    viewBox='0 0 24 24'
    aria-hidden='true'
    className='w-8 h-8 shrink-0'
  >
    <path
      fill='#4285F4'
      d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'
    />
    <path fill='#34A853' d='M5.455 20.999v-9.273L12 16.64v4.358H5.455z' />
    <path fill='#FBBC04' d='M18.545 20.999V11.73L12 16.64v4.358h6.545z' />
    <path fill='#EA4335' d='M5.455 4.64 12 9.548l6.545-4.91L12 0z' />
  </svg>
);

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6'>
          <a
            href='https://www.linkedin.com/in/yashyadav0'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn profile'
            className='flex items-center gap-4 bg-tertiary py-4 px-6 rounded-lg text-white hover:scale-[1.02] transition-transform duration-300 shadow-md shadow-primary'
          >
            <LinkedInIcon />
            <div className='flex flex-col'>
              <span className='font-bold text-[16px]'>LinkedIn</span>
              <span className='text-secondary text-[13px] break-all'>
                linkedin.com/in/yashyadav0
              </span>
            </div>
          </a>

          <a
            href='mailto:yashsnab0@gmail.com'
            aria-label='Send email'
            className='flex items-center gap-4 bg-tertiary py-4 px-6 rounded-lg text-white hover:scale-[1.02] transition-transform duration-300 shadow-md shadow-primary'
          >
            <GmailIcon />
            <div className='flex flex-col'>
              <span className='font-bold text-[16px]'>Email</span>
              <span className='text-secondary text-[13px] break-all'>
                yashsnab0@gmail.com
              </span>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
