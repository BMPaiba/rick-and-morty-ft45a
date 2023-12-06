import React from "react";
import styles from "./About.module.css";
import image from "../../assets/myCharacter.png";
import { FaLinkedin } from "react-icons/fa";

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
          <h3>Status: Alive</h3>
          <h3>Specie: Human</h3>
          <h3>Gender: Male</h3>
          <h3>Origin: Earth</h3>
          <h3>Location: Argentina</h3>
        </div>
      </div>
      <div className={styles.container__footer}>
        <h1 className={styles.container__footer_text}> Follow Me </h1>
        <div>
          <FaLinkedin className={styles.icon__falinkedin} />
        </div>
      </div>
    </div>
  );
}

{/* <footer className={style.footer}>
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
      </footer> */}