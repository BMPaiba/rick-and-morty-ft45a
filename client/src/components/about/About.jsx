import React from "react";
import styles from "./About.module.css";
import image from "../../assets/myCharacter.png";
import { FaGithub } from "react-icons/fa6";
import { TbArrowBackUp, TbBrandRedux } from "react-icons/tb";
import {FaLinkedin, 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
export default function About() {
  const imgHenry = 'https://avatars.githubusercontent.com/u/57154655?s=280&v=4'
  const navigate = useNavigate();
  const comeback = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__img}>
          <img className={styles.container__img_img} src={image} alt="image" />
        </div>
        <div className={styles.container__text}>
          {/* <h1>Details:</h1> */}
          <h2>Brian Paiba</h2>
          <div className={styles.container__education}>

          <h3>Education:</h3>
          <h4><img className={styles.container__img_henry} src={imgHenry} alt="image" /> Student</h4>
          </div>
          <h3>Skills: </h3>
          <div className={styles.container__icons}>
            <FaHtml5 className={styles.container__icons_hmtl} />
            <FaCss3Alt className={styles.container__icons_css} />
            <IoLogoJavascript className={styles.container__icons_javascript} />
            <FaReact className={styles.container__icons_react} />
            <TbBrandRedux className={styles.container__icons_redux} />
            <FaNodeJs className={styles.container__icons_node} />
          </div>
          <h3>Experience:</h3>
          <h4>Undefined</h4>
          <h3>Origin:</h3>
          <h4>Buenos Aires, Argentina</h4>
          <h3>Follow Me: </h3>
          <div className={styles.containerforicon}>
            <a
              href="https://www.linkedin.com/in/brian-m-paiba/"
              target="_blank"
              className={styles.containerforicon__icon}
            >
              <FaLinkedin className={styles.containerforicon__icon_linkdin} />
            </a>
            <a
              href="https://github.com/BMPaiba"
              target="_blank"
              className={styles.containerforicon__icon}
            >
              <FaGithub className={styles.containerforicon__icon_github} />
            </a>
          </div>
        </div>
      </div>
      <TbArrowBackUp
        className={styles.container__icon}
        id={styles.comeback}
        onClick={comeback}
      />
    </div>
  );
}
