import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        aymenboujjar12@gmail.com <br />
        +212641321792
      </p>
    
      <p>
        &copy; 2024 Ayman Boujjar. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
