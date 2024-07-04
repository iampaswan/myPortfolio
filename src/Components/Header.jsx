import styles from './Header.module.css'
import logo from './profilepic.jpg'

import { useState } from 'react'

import DarkMode from './DarkMode'
import Offcanvas from './Offcanvas'


const Header = ({ selectedTab, setSelectedTab }) => {

  return <>
    <div className={styles.Header}>

      <div className={styles.leftHeader}>
        {/* <div className={styles.profilepic}><i class="bi bi-person-circle "></i></div> */}
        {/* <img src={logo} alt="logo image" className={styles.logoImage} /> */}
        <Offcanvas selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></Offcanvas>

        <div className={styles.name}>Krishna Kumar Paswan</div>
      </div>

      <div className={styles.rightHeader}>
        <DarkMode></DarkMode>
        {/* <div className={styles.rightHeaderElements}>Services</div> */}

        {/* <div className={styles.rightHeaderElements}><i className="bi bi-brightness-high"></i></div> */}
        {/* <div className={styles.rightHeaderElements}><i className="bi bi-moon"></i></div> */}

      </div>
    </div>
  </>
}

export default Header;
