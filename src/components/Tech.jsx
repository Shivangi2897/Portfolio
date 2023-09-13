import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import {downloadHover} from "../assets/index.js";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} onClick={console.log(technology.name)}>
            <BallCanvas icon={technology.icon} text={technology.icon1} onClick={() => {
                document
                    .querySelector('.download-btn')
                    .setAttribute('src', downloadHover);
            }}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
