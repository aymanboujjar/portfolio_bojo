import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/social.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/fashion.png';
import fitLift from '../../assets/resto.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://unique-beignet-cef941.netlify.app/"
          h3="Friend wave"
          p="Social media"
        />
        <ProjectCard
          src={hipsster}
          link="https://react-final-projet-ayman-boujjar.vercel.app/"
          h3="Fashe"
          p="Fashion store"
        />
        <ProjectCard
          src={fitLift}
          link="https://vermillion-raindrop-eb431b.netlify.app/"
          h3="Yummy"
          p="Restaurants web"
        />
      
      </div>
    </section>
  );
}

export default Projects;
