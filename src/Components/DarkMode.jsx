import { useEffect, useState } from 'react'
import styles from './DarkMode.module.css'

const DarkMode = () => {

  const toggleTheme = () => {
    // alert("Dark Mode activated")
    if (theme === 'lightMode') {
      setTheme('darkMode')
    }
    else {
      setTheme('lightMode')
    }
  }

  const [theme, setTheme] = useState('lightMode');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <>
    {/* <button className={styles.darkButton} onClick={() => toggleTheme()} >Dark Mode</button> */}
    <div className={styles.darkButton} onClick={() => toggleTheme()}> <i className="bi bi-moon"></i>
    </div >
  </>
}
export default DarkMode;
