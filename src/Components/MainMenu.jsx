import styles from './MainMenu.module.css'

import About from './About';

const MainMenu = () => {
  return <>
    <div className={styles.MainMenu}>
      <div className={styles.MainMenuItems}>Home</div>
      <div className={styles.MainMenuItems}>About
        {/* <About></About> */}
      </div>
      <div className={styles.MainMenuItems}>Blog</div>
      <div className={styles.MainMenuItems}>Services</div>
      <div className={styles.MainMenuItems}>Contact</div>
      <div className={styles.MainMenuItems}>Achievements</div>
    </div>
  </>
}

export default MainMenu;