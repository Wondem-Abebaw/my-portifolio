import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className=" p-8 md:p-16">
      <h2 className="text-3xl font-bold text-indigo-500 mb-4 text-center">
        FIND ME ON
      </h2>
      <p className="text-lg mb-8 text-center">
        Feel free to <span className="text-primary">connect</span> with me
      </p>
      <div className="flex justify-center space-x-8">
        <a
          href="https://gitlab.com/Wondem-Abebaw"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper group"
        >
          <AiFillGitlab className="social-icon" />
        </a>
        <a
          href="https://github.com/Wondem-Abebaw"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper group"
        >
          <AiFillGithub className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/wondem-abebaw-185612209/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper group"
        >
          <AiFillLinkedin className="social-icon" />
        </a>
        <a href="mailto:wondem5060@gmail.com" className="icon-wrapper group">
          <MdEmail className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
