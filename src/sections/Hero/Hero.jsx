import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Ayman Boujjar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ayman
          <br />
          Boujjar
        </h1>
        <h2>Full Stack Web  Developer</h2>
        <span>
          <a href="https://github.com/aymanboujjar" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        As a passionate Full Stack Web Developer, I specialize in building dynamic, responsive, and user-friendly web applications. With expertise in both front-end and back-end technologies, I thrive on creating seamless digital experiences from concept to deployment. My skills include JavaScript, React and more, allowing me to craft scalable solutions that meet diverse client needs. Whether it’s developing intuitive user interfaces or designing robust server-side logic, I am committed to delivering high-quality code that drives innovation and success in every project I undertake.
        </p>
        <a href={CV} download >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
