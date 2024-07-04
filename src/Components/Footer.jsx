import styles from './Footer.module.css'

const Footer = () => {
  return <>
    <div className={styles.Footer}>

      <div className={styles.leftFooter}>Whatsapp</div>
      <div className={styles.middleFooter}>Email</div>
      <div className={styles.rightFooter}>Follow me</div>

    </div>
  </>
}

export default Footer;