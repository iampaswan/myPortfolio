import styles from './Header.module.css'
import logo from './profilepic.jpg'

import DarkMode from './DarkMode'
import Offcanvas from './Offcanvas'



const Header = () => {
  return <>
    <div className={styles.Header}>

      <div className={styles.leftHeader}>
        {/* <div className={styles.profilepic}><i class="bi bi-person-circle "></i></div> */}
        {/* <img src={logo} alt="logo image" className={styles.logoImage} /> */}
        <Offcanvas ></Offcanvas>
        <div className={styles.name}>Krishna Kumar Paswan</div>
      </div>

      <div className={styles.rightHeader}>
        <div className={styles.rightHeaderElements}>Contact</div>
        <div className={styles.rightHeaderElements}>About</div>
        <DarkMode></DarkMode>
        <div className={styles.rightHeaderElements}>Services</div>
        <div className={styles.rightHeaderElements}>Blog</div>

        {/* <div className={styles.rightHeaderElements}><i className="bi bi-brightness-high"></i></div> */}
        {/* <div className={styles.rightHeaderElements}><i className="bi bi-moon"></i></div> */}

      </div>

    </div>
  </>
}

export default Header;