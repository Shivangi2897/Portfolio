import {useRef, useState} from 'react';
import {m, motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {SectionWrapper} from '../hoc';
import {githubLink, linkedin, medium} from '../assets';
import {Container, Row} from "react-bootstrap";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
        .send(
            'serviceID', // paste your ServiceID here (you'll get one when your service is created).
            'templateID', // paste your TemplateID here (you'll find it under email templates).
            {
              from_name: form.name,
              to_name: 'Shivangi Pandey', // put your name here.
              from_email: form.email,
              to_email: 'shivangipandey285@gmail.com ', //put your email here.
              message: form.message,
            },
            'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
        )
        .then(
            () => {
              setLoading(false);
              alert('Thank you. I will get back to you as soon as possible.');

              setForm({
                name: '',
                email: '',
                message: '',
              });
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert('Something went wrong. Please try again.');
            }
        );
  };

  return (
      <>
      <div
          className="-mt-[8rem] xl:flex-row
        flex gap-10 overflow-hidden justify-center"
          style={{flexDirection:"row", justifyContent: "center"}}
      >
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
        >
            <p>
                Feel free to <span className="purple">connect </span>with me on
            </p>
            <div className="flex flex-row gap-14 mt-2">
          <div className="bg-jetLight rounded-[25px] py-5 px-5 min-h-[70px] flex justify-evenly items-center flex-row">
            <a href="https://www.linkedin.com/in/shivangipandey285/">
              <img
                  src={linkedin}
                  alt={'title'}
                  className="w-16 h-16 object-contain"
              />
            </a>
          </div>
            <div className="bg-jetLight rounded-[25px] py-5 px-5 min-h-[70px] flex justify-evenly items-center flex-row">
                <a href="https://medium.com/@shivangi.pandey285">
                    <img
                        src={medium}
                        alt={'title'}
                        className="w-16 h-16 object-contain"
                    />
                </a>
            </div>
            <div className="bg-jetLight rounded-[25px] py-5 px-5 min-h-[70px] flex justify-evenly items-center flex-row">
                <a href="https://github.com/Shivangip285">
                    <img
                        src={githubLink}
                        alt={'title'}
                        className="w-16 h-16 object-contain"
                    />
                </a>
            </div>
            </div>
        </motion.div>
      </div>
     </>
  );
};

export default SectionWrapper(Contact, 'contact');