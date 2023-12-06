import React from "react";
import styles from "./About.module.css";
import image from "../../assets/myCharacter.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__img}>
          <img className={styles.container__img_img} src={image} alt="image" />
        </div>
        <div className={styles.container__text}>
          {/* <h1>Details:</h1> */}
          <h2>Brian Paiba</h2>
          <h3>Education:</h3>
          <h4>Henry Student</h4>
          <h3>Skills: </h3>
          <h4>
            {" "}
            HMTL - CSS - JavaScript - React - Redux - Node JS - Express JS{" "}
          </h4>
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
              <FaLinkedin  className={styles.containerforicon__icon_fa} />
            </a>
            <a
              href="https://github.com/BMPaiba"
              target="_blank"
              className={styles.containerforicon__icon}
            >
              <FaGithub className={styles.containerforicon__icon_fa}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <footer className={style.footer}>
        <div className={style.footerContainer}>
          <p className={style.pabout}>Creado por Nicolas Mancera Barrera</p>
          <div className={style.redes}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nicolas-mancera-barrera-706764295/"
            >
              <BsLinkedin className={style.icon} />
            </a>
            <a target="_blank" href="https://github.com/NmanceraBarrera">
              <BsGithub className={style.icon} />
            </a>
          </div>
        </div>
      </footer> */
}
