import React, { useEffect } from 'react';
import 'animate.css';
import Aos from 'aos';
import { technologies } from '../constants';

export default function Tech() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='about'>
      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          .icon-heartbeat-animation {
            animation: heartbeat 1.2s infinite;
          }
        `}
      </style>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 flex flex-col justify-center items-center rounded-full overflow-visible'
            data-aos='flip-left'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt='icon'
              className='h-20 w-20 animate-pulse icon-heartbeat-animation'
            />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
